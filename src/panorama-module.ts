import panoramaModuleCss from './panorama-module.css?inline';
import {
  PanoramaViewer,
  type PanoramaControlMode,
} from './panorama-viewer';
import type {
  PanoramaHotspot,
  PanoramaInfoHotspot,
  PanoramaScene,
} from './panorama-types';
import { getPanoramaSceneMedia } from './panorama-types';

export interface PanoramaModuleTextSection {
  id: string;
  title: string;
  body: string;
  items?: string[];
}

export interface PanoramaModuleTextAlternative {
  title: string;
  intro?: string;
  sections?: PanoramaModuleTextSection[];
}

export type PanoramaModuleDegradationStepId = 'motion' | 'drag' | 'text';

export interface PanoramaModuleDegradationStep {
  id: PanoramaModuleDegradationStepId;
  label: string;
  description: string;
}

export interface PanoramaModuleLabels {
  moduleLabel: string;
  canvasLabel: string;
  hotspotsLabel: string;
  close: string;
  scenes: string;
  closeScenes: string;
  closeInfo: string;
  infoPanelTitle: string;
  zoomIn: string;
  zoomOut: string;
  resetView: string;
  loading: (sceneTitle: string) => string;
  renderError: string;
  degradationTitle: string;
  textAlternativeTitle: string;
}

export interface PanoramaModuleOptions {
  container: HTMLElement;
  scenes: PanoramaScene[];
  labels: PanoramaModuleLabels;
  degradation: readonly PanoramaModuleDegradationStep[];
  textAlternative: PanoramaModuleTextAlternative;
  initialSceneId?: string;
  onExit?: (controller: PanoramaModuleController) => void;
}

export interface PanoramaModuleController {
  readonly ready: Promise<void>;
  destroy(): void;
  openScene(sceneId: string): Promise<void>;
}

const styleElementId = 'app-museo-panorama-module-style';

function ensurePanoramaModuleStyles(): void {
  if (document.getElementById(styleElementId)) return;
  const style = document.createElement('style');
  style.id = styleElementId;
  style.textContent = panoramaModuleCss;
  document.head.append(style);
}

function isInfoHotspot(hotspot: PanoramaHotspot): hotspot is PanoramaInfoHotspot {
  return hotspot.kind === 'info';
}

function resolveScene(scenes: PanoramaScene[], sceneId: string | undefined): PanoramaScene {
  if (sceneId) {
    const matching = scenes.find((scene) => scene.id === sceneId);
    if (matching) return matching;
  }

  const [firstScene] = scenes;
  if (!firstScene) throw new Error('Panorama module requires at least one scene.');
  return firstScene;
}

function buildAutomaticTextSections(scenes: PanoramaScene[]): PanoramaModuleTextSection[] {
  return scenes.map((scene) => {
    const items = scene.hotspots.map((hotspot) => {
      if (isInfoHotspot(hotspot)) return `${hotspot.title}: ${hotspot.description}`;
      return hotspot.label;
    });

    return {
      id: scene.id,
      title: scene.title,
      body: scene.location,
      items,
    };
  });
}

class PanoramaModuleControllerImpl implements PanoramaModuleController {
  readonly ready: Promise<void>;

  private readonly options: PanoramaModuleOptions;
  private readonly root: HTMLElement;
  private readonly viewerRoot: HTMLElement;
  private readonly stage: HTMLElement;
  private readonly loader: HTMLElement;
  private readonly loaderLabel: HTMLElement;
  private readonly notice: HTMLElement;
  private readonly title: HTMLElement;
  private readonly location: HTMLElement;
  private readonly credit: HTMLAnchorElement;
  private readonly scenePanel: HTMLElement;
  private readonly infoPanel: HTMLElement;
  private readonly infoEyebrow: HTMLElement;
  private readonly infoTitle: HTMLElement;
  private readonly infoDescription: HTMLElement;
  private readonly sceneList: HTMLElement;
  private readonly sceneToggle: HTMLButtonElement;
  private readonly closeButton: HTMLButtonElement;
  private readonly degradationStates = new Map<PanoramaModuleDegradationStepId, HTMLElement>();
  private readonly sceneButtons = new Map<string, HTMLButtonElement>();
  private readonly viewer: PanoramaViewer;

  private activeScene: PanoramaScene;
  private destroyed = false;

  constructor(options: PanoramaModuleOptions) {
    ensurePanoramaModuleStyles();
    this.options = options;
    this.activeScene = resolveScene(options.scenes, options.initialSceneId);

    this.root = document.createElement('section');
    this.root.className = 'am-panorama';
    this.root.setAttribute('aria-label', options.labels.moduleLabel);

    const surface = document.createElement('div');
    surface.className = 'am-panorama__surface';
    this.root.append(surface);

    this.viewerRoot = document.createElement('div');
    this.viewerRoot.className = 'am-panorama__viewer';
    surface.append(this.viewerRoot);

    this.stage = document.createElement('div');
    this.stage.className = 'am-panorama__stage';
    this.viewerRoot.append(this.stage);

    const shade = document.createElement('div');
    shade.className = 'am-panorama__shade';
    this.viewerRoot.append(shade);

    const topbar = document.createElement('div');
    topbar.className = 'am-panorama__topbar';
    this.viewerRoot.append(topbar);

    const heading = document.createElement('div');
    heading.className = 'am-panorama__heading';
    this.location = document.createElement('span');
    this.location.className = 'am-panorama__location';
    this.title = document.createElement('strong');
    this.title.className = 'am-panorama__title';
    heading.append(this.location, this.title);
    topbar.append(heading);

    this.closeButton = document.createElement('button');
    this.closeButton.type = 'button';
    this.closeButton.className = 'am-panorama__button';
    this.closeButton.textContent = options.labels.close;
    this.closeButton.addEventListener('click', () => {
      if (this.options.onExit) {
        this.options.onExit(this);
        return;
      }
      this.destroy();
    });
    topbar.append(this.closeButton);

    this.loader = document.createElement('div');
    this.loader.className = 'am-panorama__loader';
    const spinner = document.createElement('span');
    spinner.className = 'am-panorama__spinner';
    spinner.setAttribute('aria-hidden', 'true');
    this.loaderLabel = document.createElement('span');
    this.loader.append(spinner, this.loaderLabel);
    this.viewerRoot.append(this.loader);

    this.notice = document.createElement('div');
    this.notice.className = 'am-panorama__notice';
    this.notice.hidden = true;
    this.viewerRoot.append(this.notice);

    this.credit = document.createElement('a');
    this.credit.className = 'am-panorama__credit';
    this.credit.rel = 'noopener noreferrer';
    this.credit.target = '_blank';
    this.viewerRoot.append(this.credit);

    const tools = document.createElement('div');
    tools.className = 'am-panorama__tools';
    this.viewerRoot.append(tools);

    this.sceneToggle = this.createToolButton(options.labels.scenes, 'am-panorama__tool am-panorama__tool--scenes');
    this.sceneToggle.setAttribute('aria-expanded', 'false');
    this.sceneToggle.addEventListener('click', () => {
      const nextHidden = !this.scenePanel.hidden;
      this.scenePanel.hidden = nextHidden;
      this.sceneToggle.setAttribute('aria-expanded', String(!nextHidden));
      this.sceneToggle.textContent = nextHidden ? options.labels.scenes : options.labels.closeScenes;
    });
    tools.append(this.sceneToggle);

    const zoomOut = this.createToolButton('−', 'am-panorama__tool');
    zoomOut.setAttribute('aria-label', options.labels.zoomOut);
    zoomOut.addEventListener('click', () => this.viewer.zoomBy(8));
    tools.append(zoomOut);

    const reset = this.createToolButton('◎', 'am-panorama__tool');
    reset.setAttribute('aria-label', options.labels.resetView);
    reset.addEventListener('click', () => this.viewer.resetView(this.activeScene.initialView));
    tools.append(reset);

    const zoomIn = this.createToolButton('+', 'am-panorama__tool');
    zoomIn.setAttribute('aria-label', options.labels.zoomIn);
    zoomIn.addEventListener('click', () => this.viewer.zoomBy(-8));
    tools.append(zoomIn);

    this.scenePanel = this.createPanel(options.labels.scenes);
    const closeScenes = this.scenePanel.querySelector<HTMLButtonElement>('.am-panorama__panel-close');
    closeScenes?.addEventListener('click', () => {
      this.scenePanel.hidden = true;
      this.sceneToggle.setAttribute('aria-expanded', 'false');
      this.sceneToggle.textContent = options.labels.scenes;
      this.sceneToggle.focus();
    });
    this.sceneList = document.createElement('div');
    this.sceneList.className = 'am-panorama__scene-list';
    this.scenePanel.append(this.sceneList);
    this.viewerRoot.append(this.scenePanel);

    this.infoPanel = this.createPanel(options.labels.infoPanelTitle, options.labels.closeInfo);
    this.infoPanel.hidden = true;
    const closeInfo = this.infoPanel.querySelector<HTMLButtonElement>('.am-panorama__panel-close');
    closeInfo?.addEventListener('click', () => this.closeInfoPanel());
    this.infoEyebrow = document.createElement('span');
    this.infoEyebrow.className = 'am-panorama__info-eyebrow';
    this.infoTitle = document.createElement('h2');
    this.infoTitle.className = 'am-panorama__info-title';
    this.infoDescription = document.createElement('p');
    this.infoDescription.className = 'am-panorama__info-description';
    this.infoPanel.append(this.infoEyebrow, this.infoTitle, this.infoDescription);
    this.viewerRoot.append(this.infoPanel);

    const meta = document.createElement('div');
    meta.className = 'am-panorama__meta';
    surface.append(meta);

    meta.append(this.renderDegradationDetails());
    meta.append(this.renderTextAlternativeDetails());

    options.container.replaceChildren(this.root);

    this.viewer = new PanoramaViewer({
      container: this.stage,
      media: getPanoramaSceneMedia(this.activeScene),
      initialView: this.activeScene.initialView,
      canvasAriaLabel: options.labels.canvasLabel,
      hotspotsAriaLabel: options.labels.hotspotsLabel,
      onLoadingChange: (loading) => this.setLoading(loading),
      onControlModeChange: (mode) => this.updateDegradation(mode, true),
    });

    this.renderSceneButtons();
    this.applySceneMetadata();
    this.viewer.setHotspots(this.activeScene.hotspots, (hotspot) => this.handleHotspot(hotspot));
    this.updateDegradation('drag', true);
    this.ready = this.viewer.open()
      .then(() => {
        this.notice.hidden = true;
        this.updateDegradation(this.viewer.getControlMode(), true);
      })
      .catch((error) => {
        this.viewerRoot.dataset.renderState = 'text-only';
        this.showNotice(this.options.labels.renderError);
        this.updateDegradation('drag', false);
        throw error;
      });
  }

  destroy(): void {
    if (this.destroyed) return;
    this.destroyed = true;
    this.viewer.dispose();
    this.root.remove();
  }

  async openScene(sceneId: string): Promise<void> {
    if (this.destroyed) return;
    const nextScene = resolveScene(this.options.scenes, sceneId);
    if (nextScene.id === this.activeScene.id) return;
    this.activeScene = nextScene;
    this.applySceneMetadata();
    this.closeInfoPanel();
    this.viewer.setHotspots(nextScene.hotspots, (hotspot) => this.handleHotspot(hotspot));
    await this.viewer.changePanorama(getPanoramaSceneMedia(nextScene), nextScene.initialView);
  }

  private createToolButton(text: string, className: string): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.textContent = text;
    return button;
  }

  private createPanel(title: string, closeLabel = this.options.labels.close): HTMLElement {
    const panel = document.createElement('aside');
    panel.className = 'am-panorama__panel';
    panel.hidden = true;
    const header = document.createElement('div');
    header.className = 'am-panorama__panel-header';
    const heading = document.createElement('h2');
    heading.className = 'am-panorama__panel-title';
    heading.textContent = title;
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'am-panorama__button am-panorama__panel-close';
    close.textContent = '×';
    close.setAttribute('aria-label', closeLabel);
    header.append(heading, close);
    panel.append(header);
    return panel;
  }

  private renderSceneButtons(): void {
    this.sceneList.replaceChildren();
    this.sceneButtons.clear();
    this.options.scenes.forEach((scene) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'am-panorama__scene-button';
      const copy = document.createElement('span');
      copy.className = 'am-panorama__scene-copy';
      const title = document.createElement('strong');
      title.textContent = scene.title;
      const location = document.createElement('span');
      location.textContent = scene.location;
      copy.append(title, location);
      button.append(copy);
      button.addEventListener('click', () => {
        void this.openScene(scene.id).catch(() => {
          this.showNotice(this.options.labels.renderError);
        });
      });
      this.sceneButtons.set(scene.id, button);
      this.sceneList.append(button);
    });
    this.syncSceneButtons();
  }

  private renderDegradationDetails(): HTMLElement {
    const details = document.createElement('details');
    details.className = 'am-panorama__details';
    details.open = true;

    const summary = document.createElement('summary');
    summary.className = 'am-panorama__summary';
    summary.textContent = this.options.labels.degradationTitle;
    details.append(summary);

    const body = document.createElement('div');
    body.className = 'am-panorama__details-body';
    const list = document.createElement('div');
    list.className = 'am-panorama__degradation-list';

    this.options.degradation.forEach((step) => {
      const item = document.createElement('article');
      item.className = 'am-panorama__degradation-step';
      item.dataset.state = 'inactive';
      const title = document.createElement('strong');
      title.textContent = step.label;
      const description = document.createElement('p');
      description.textContent = step.description;
      item.append(title, description);
      list.append(item);
      this.degradationStates.set(step.id, item);
    });

    body.append(list);
    details.append(body);
    return details;
  }

  private renderTextAlternativeDetails(): HTMLElement {
    const details = document.createElement('details');
    details.className = 'am-panorama__details';
    details.open = true;

    const summary = document.createElement('summary');
    summary.className = 'am-panorama__summary';
    summary.textContent = this.options.textAlternative.title || this.options.labels.textAlternativeTitle;
    details.append(summary);

    const body = document.createElement('div');
    body.className = 'am-panorama__details-body';
    if (this.options.textAlternative.intro) {
      const intro = document.createElement('p');
      intro.textContent = this.options.textAlternative.intro;
      body.append(intro);
    }

    const list = document.createElement('div');
    list.className = 'am-panorama__text-list';
    const sections = this.options.textAlternative.sections ?? buildAutomaticTextSections(this.options.scenes);
    sections.forEach((section) => {
      const item = document.createElement('article');
      item.className = 'am-panorama__text-item';
      const title = document.createElement('strong');
      title.textContent = section.title;
      const bodyCopy = document.createElement('p');
      bodyCopy.textContent = section.body;
      item.append(title, bodyCopy);
      if (section.items?.length) {
        const items = document.createElement('ul');
        section.items.forEach((entry) => {
          const row = document.createElement('li');
          row.textContent = entry;
          items.append(row);
        });
        item.append(items);
      }
      list.append(item);
    });

    body.append(list);
    details.append(body);
    return details;
  }

  private applySceneMetadata(): void {
    this.title.textContent = this.activeScene.title;
    this.location.textContent = this.activeScene.location;
    this.credit.textContent = this.activeScene.creditLabel;
    this.credit.href = this.activeScene.creditUrl;
    this.syncSceneButtons();
    this.loaderLabel.textContent = this.options.labels.loading(this.activeScene.title);
  }

  private syncSceneButtons(): void {
    this.sceneButtons.forEach((button, sceneId) => {
      button.setAttribute('aria-current', String(sceneId === this.activeScene.id));
    });
  }

  private setLoading(loading: boolean): void {
    this.loader.hidden = !loading;
    if (loading) this.loaderLabel.textContent = this.options.labels.loading(this.activeScene.title);
  }

  private handleHotspot(hotspot: PanoramaHotspot): void {
    if (hotspot.kind === 'navigation') {
      void this.openScene(hotspot.targetSceneId).catch(() => {
        this.showNotice(this.options.labels.renderError);
      });
      return;
    }

    this.infoEyebrow.textContent = hotspot.eyebrow;
    this.infoTitle.textContent = hotspot.title;
    this.infoDescription.textContent = hotspot.description;
    this.infoPanel.hidden = false;
  }

  private closeInfoPanel(): void {
    this.infoPanel.hidden = true;
  }

  private showNotice(message: string): void {
    this.notice.textContent = message;
    this.notice.hidden = false;
  }

  private updateDegradation(controlMode: PanoramaControlMode, interactiveAvailable: boolean): void {
    const nextStates = new Map<PanoramaModuleDegradationStepId, 'active' | 'available' | 'inactive'>();
    if (!interactiveAvailable) {
      nextStates.set('motion', 'inactive');
      nextStates.set('drag', 'inactive');
      nextStates.set('text', 'active');
    } else if (controlMode === 'motion') {
      nextStates.set('motion', 'active');
      nextStates.set('drag', 'available');
      nextStates.set('text', 'available');
    } else {
      nextStates.set('motion', 'inactive');
      nextStates.set('drag', 'active');
      nextStates.set('text', 'available');
    }

    this.degradationStates.forEach((element, id) => {
      element.dataset.state = nextStates.get(id) ?? 'inactive';
    });
  }
}

export function mountPanoramaModule(options: PanoramaModuleOptions): PanoramaModuleController {
  return new PanoramaModuleControllerImpl(options);
}
