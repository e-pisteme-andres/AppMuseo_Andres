const za = ".am-panorama{--am-panorama-bg: #06110e;--am-panorama-surface: rgba(8, 22, 18, .88);--am-panorama-surface-strong: rgba(6, 17, 14, .96);--am-panorama-border: rgba(193, 255, 228, .18);--am-panorama-text: #f5fffb;--am-panorama-muted: #bad0c7;--am-panorama-accent: #9ef6d1;--am-panorama-accent-strong: #cffff0;--am-panorama-warning: #ffd47a;--am-panorama-shadow: 0 28px 70px rgba(0, 0, 0, .34);color:var(--am-panorama-text);font:500 16px/1.5 system-ui,sans-serif}.am-panorama,.am-panorama *{box-sizing:border-box}.am-panorama__surface{display:grid;gap:18px}.am-panorama__viewer{position:relative;min-height:min(72dvh,560px);overflow:hidden;border:1px solid var(--am-panorama-border);border-radius:24px;background:radial-gradient(circle at top,rgba(158,246,209,.12),transparent 34%),linear-gradient(180deg,#071612,#040b09);box-shadow:var(--am-panorama-shadow)}.am-panorama__stage,.am-panorama .panorama-canvas,.am-panorama .panorama-hotspots{position:absolute;inset:0;width:100%;height:100%}.am-panorama .panorama-canvas{cursor:grab;touch-action:none}.am-panorama .panorama-canvas.is-dragging{cursor:grabbing}.am-panorama__shade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(180deg,rgba(3,8,6,.78) 0,transparent 22%,transparent 68%,rgba(3,8,6,.84) 100%),radial-gradient(circle at center,transparent 50%,rgba(0,0,0,.2) 100%)}.am-panorama__topbar,.am-panorama__tools,.am-panorama__panel,.am-panorama__notice,.am-panorama__credit{position:absolute;z-index:2}.am-panorama__topbar{inset:max(16px,env(safe-area-inset-top)) max(16px,calc(env(safe-area-inset-right) + 16px)) auto max(16px,calc(env(safe-area-inset-left) + 16px));display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.am-panorama__heading{max-width:min(74%,34rem);padding:10px 12px;border:1px solid var(--am-panorama-border);border-radius:18px;background:#050e0bb8;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)}.am-panorama__location{display:block;color:var(--am-panorama-accent);font-size:.68rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.am-panorama__title{display:block;margin-top:4px;font-size:clamp(1.1rem,2.3vw,1.45rem);font-weight:760;letter-spacing:-.02em}.am-panorama__button,.am-panorama__tool,.am-panorama__scene-button,.am-panorama .panorama-hotspot{min-height:48px;border:1px solid var(--am-panorama-border);border-radius:16px}.am-panorama__button,.am-panorama__tool,.am-panorama__scene-button{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:0 14px;color:var(--am-panorama-text);background:#050e0bbd;cursor:pointer;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)}.am-panorama__button:hover,.am-panorama__button:focus-visible,.am-panorama__tool:hover,.am-panorama__tool:focus-visible,.am-panorama__scene-button:hover,.am-panorama__scene-button:focus-visible{border-color:#cffff075;background:#081712f0}.am-panorama__button:focus-visible,.am-panorama__tool:focus-visible,.am-panorama__scene-button:focus-visible,.am-panorama .panorama-hotspot:focus-visible{outline:2px solid var(--am-panorama-accent-strong);outline-offset:2px}.am-panorama__tools{right:max(16px,calc(env(safe-area-inset-right) + 16px));bottom:max(16px,calc(env(safe-area-inset-bottom) + 16px));display:flex;gap:8px}.am-panorama__tool{min-width:48px;padding:0;font-size:1rem}.am-panorama__tool--scenes{padding:0 14px;font-size:.9rem;font-weight:700}.am-panorama__panel{left:max(16px,calc(env(safe-area-inset-left) + 16px));bottom:max(16px,calc(env(safe-area-inset-bottom) + 16px));width:min(360px,calc(100% - 32px));max-height:min(56dvh,26rem);padding:16px;overflow:auto;border:1px solid var(--am-panorama-border);border-radius:20px;background:#050e0be6;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 18px 48px #0000003d}.am-panorama__panel[hidden]{display:none}.am-panorama__panel-header{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px}.am-panorama__panel-title{margin:0;font-size:1.02rem;font-weight:740}.am-panorama__panel-close{min-width:48px;padding:0}.am-panorama__scene-list{display:grid;gap:8px}.am-panorama__scene-button{width:100%;justify-content:flex-start;padding:10px 12px;text-align:left}.am-panorama__scene-button[aria-current=true]{border-color:#9ef6d18a;background:#6feeba1f}.am-panorama__scene-copy{display:grid;gap:2px}.am-panorama__scene-copy strong{font-size:.92rem}.am-panorama__scene-copy span{color:var(--am-panorama-muted);font-size:.78rem}.am-panorama__info-eyebrow{display:block;color:var(--am-panorama-accent);font-size:.68rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.am-panorama__info-title{margin:8px 0 10px;font-size:1.14rem}.am-panorama__info-description{margin:0;color:var(--am-panorama-muted);font-size:.92rem;line-height:1.55}.am-panorama__loader,.am-panorama__notice{left:50%;transform:translate(-50%);display:inline-flex;align-items:center;gap:10px;padding:12px 14px;border-radius:999px;border:1px solid var(--am-panorama-border);background:#050e0bd6;backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px)}.am-panorama__loader{top:50%;z-index:3;min-width:180px;justify-content:center;transform:translate(-50%,-50%)}.am-panorama__loader[hidden],.am-panorama__notice[hidden]{display:none}.am-panorama__spinner{width:18px;height:18px;border:2px solid rgba(255,255,255,.2);border-top-color:var(--am-panorama-accent);border-radius:50%;animation:am-panorama-spin .85s linear infinite}.am-panorama__notice{z-index:3;bottom:max(76px,calc(env(safe-area-inset-bottom) + 76px));width:min(28rem,calc(100% - 32px));color:var(--am-panorama-warning);text-align:center}.am-panorama__credit{left:max(16px,calc(env(safe-area-inset-left) + 16px));top:max(90px,calc(env(safe-area-inset-top) + 90px));color:#ffffffc7;font-size:.72rem;text-decoration:none}.am-panorama__credit:hover,.am-panorama__credit:focus-visible{color:var(--am-panorama-accent-strong)}.am-panorama .panorama-hotspots{z-index:1;pointer-events:none;overflow:hidden}.am-panorama .panorama-hotspot{position:absolute;display:inline-flex;align-items:center;gap:8px;min-width:48px;max-width:232px;padding:4px;color:var(--am-panorama-text);background:#071812eb;transform:translate(-24px,-24px);pointer-events:auto}.am-panorama .panorama-hotspot:hover,.am-panorama .panorama-hotspot:focus-visible{border-color:#9ef6d1a6;background:#081c15f5}.am-panorama .panorama-hotspot__icon{display:grid;place-items:center;flex:0 0 38px;width:38px;height:38px;border-radius:999px;font-weight:900;color:#082219;background:var(--am-panorama-accent)}.am-panorama .panorama-hotspot--navigation .panorama-hotspot__icon{background:var(--am-panorama-warning)}.am-panorama .panorama-hotspot__label{font-size:.78rem;font-weight:700;line-height:1.2;text-align:left}.am-panorama__meta{display:grid;gap:12px}.am-panorama__details{border:1px solid rgba(8,28,21,.1);border-radius:18px;background:#0816120f}.am-panorama__summary{padding:14px 16px;cursor:pointer;font-weight:740}.am-panorama__details[open] .am-panorama__summary{border-bottom:1px solid rgba(8,28,21,.1)}.am-panorama__details-body{display:grid;gap:14px;padding:14px 16px 16px}.am-panorama__details-body>p{margin:0;color:#30463f}.am-panorama__degradation-list,.am-panorama__text-list{display:grid;gap:10px}.am-panorama__degradation-step,.am-panorama__text-item{padding:12px 14px;border-radius:14px;background:#ffffffc7}.am-panorama__degradation-step[data-state=active]{border-left:4px solid #1f8d63}.am-panorama__degradation-step[data-state=available]{border-left:4px solid #d4a64b}.am-panorama__degradation-step[data-state=inactive]{border-left:4px solid #9baea7}.am-panorama__degradation-step strong,.am-panorama__text-item strong{display:block;color:#11231c}.am-panorama__degradation-step p,.am-panorama__text-item p{margin:6px 0 0;color:#30463f}.am-panorama__text-item ul{margin:8px 0 0;padding-left:18px;color:#30463f}@media(max-width:720px){.am-panorama__viewer{min-height:min(68dvh,480px);border-radius:20px}.am-panorama__topbar{inset:max(10px,env(safe-area-inset-top)) max(10px,calc(env(safe-area-inset-right) + 10px)) auto max(10px,calc(env(safe-area-inset-left) + 10px))}.am-panorama__heading{max-width:calc(100% - 60px);padding:9px 10px}.am-panorama__credit{top:max(82px,calc(env(safe-area-inset-top) + 82px));left:max(10px,calc(env(safe-area-inset-left) + 10px));max-width:calc(100% - 20px)}.am-panorama__panel{left:max(10px,calc(env(safe-area-inset-left) + 10px));bottom:max(10px,calc(env(safe-area-inset-bottom) + 10px));width:calc(100% - 20px);max-height:min(58dvh,24rem)}.am-panorama__tools{right:max(10px,calc(env(safe-area-inset-right) + 10px));bottom:max(10px,calc(env(safe-area-inset-bottom) + 10px))}.am-panorama .panorama-hotspot{max-width:52px}.am-panorama .panorama-hotspot__label{position:absolute;left:52px;display:none;width:max-content;max-width:170px;padding:8px 10px;border:1px solid var(--am-panorama-border);border-radius:12px;background:#071812f2}.am-panorama .panorama-hotspot:focus-visible .panorama-hotspot__label{display:block}}@media(prefers-reduced-motion:reduce){.am-panorama__spinner{animation:none}}@keyframes am-panorama-spin{to{transform:rotate(360deg)}}";
const St = "srgb", In = "srgb-linear", Ti = "linear", Xe = "srgb";
const Mr = "300 es";
class Nn {
  /**
   * Adds the given event listener to the given event type.
   *
   * @param {string} type - The type of event to listen to.
   * @param {Function} listener - The function that gets called when the event is fired.
   */
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  /**
   * Returns `true` if the given event listener has been added to the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to check.
   * @return {boolean} Whether the given event listener has been added to the given event type.
   */
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  /**
   * Removes the given event listener from the given event type.
   *
   * @param {string} type - The type of event.
   * @param {Function} listener - The listener to remove.
   */
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const a = r.indexOf(t);
      a !== -1 && r.splice(a, 1);
    }
  }
  /**
   * Dispatches an event object.
   *
   * @param {Object} event - The event that gets fired.
   */
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let a = 0, s = r.length; a < s; a++)
        r[a].call(this, e);
      e.target = null;
    }
  }
}
const ft = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Mi = Math.PI / 180, or = 180 / Math.PI;
function Kn() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ft[i & 255] + ft[i >> 8 & 255] + ft[i >> 16 & 255] + ft[i >> 24 & 255] + "-" + ft[e & 255] + ft[e >> 8 & 255] + "-" + ft[e >> 16 & 15 | 64] + ft[e >> 24 & 255] + "-" + ft[t & 63 | 128] + ft[t >> 8 & 255] + "-" + ft[t >> 16 & 255] + ft[t >> 24 & 255] + ft[n & 255] + ft[n >> 8 & 255] + ft[n >> 16 & 255] + ft[n >> 24 & 255]).toLowerCase();
}
function Be(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Ga(i, e) {
  return (i % e + e) % e;
}
function Pi(i, e, t) {
  return (1 - t) * i + t * e;
}
function zn(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function xt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ye {
  /**
   * Constructs a new 2D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   */
  constructor(e = 0, t = 0) {
    Ye.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  /**
   * Alias for {@link Vector2#x}.
   *
   * @type {number}
   */
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  /**
   * Alias for {@link Vector2#y}.
   *
   * @type {number}
   */
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @return {Vector2} A reference to this vector.
   */
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector2} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @param {number} value - The value to set.
   * @return {Vector2} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector2} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector2} v - The vector to copy.
   * @return {Vector2} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector2} v - The vector to add.
   * @return {Vector2} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector2} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector2} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector2} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector2} v - The vector to subtract.
   * @return {Vector2} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector2} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector2} a - The first vector.
   * @param {Vector2} b - The second vector.
   * @return {Vector2} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector2} v - The vector to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector2} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector2} v - The vector to divide.
   * @return {Vector2} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector2} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Multiplies this vector (with an implicit 1 as the 3rd component) by
   * the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {Vector2} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  /**
   * If this vector's x or y value is greater than the given vector's x or y
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is less than the given vector's x or y
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector2} v - The vector.
   * @return {Vector2} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  /**
   * If this vector's x or y value is greater than the max vector's x or y
   * value, it is replaced by the corresponding value.
   * If this vector's x or y value is less than the min vector's x or y value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector2} min - The minimum x and y values.
   * @param {Vector2} max - The maximum x and y values in the desired range.
   * @return {Vector2} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Be(this.x, e.x, t.x), this.y = Be(this.y, e.y, t.y), this;
  }
  /**
   * If this vector's x or y values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x or y values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Be(this.x, e, t), this.y = Be(this.y, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector2} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector2} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector2} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x and y = -y.
   *
   * @return {Vector2} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector2} v - The vector to compute the cross product with.
   * @return {number} The result of the cross product.
   */
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0) to (x, y). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Computes the angle in radians of this vector with respect to the positive x-axis.
   *
   * @return {number} The angle in radians.
   */
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector2} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Be(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector2} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector2} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector2} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector2} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector2} v1 - The first vector.
   * @param {Vector2} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector2} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector2} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]` and y
   * value to be `array[ offset + 1 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector2} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector2} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  /**
   * Rotates this vector around the given center by the given angle.
   *
   * @param {Vector2} center - The point around which to rotate.
   * @param {number} angle - The angle to rotate, in radians.
   * @return {Vector2} A reference to this vector.
   */
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), a = this.x - e.x, s = this.y - e.y;
    return this.x = a * n - s * r + e.x, this.y = a * r + s * n + e.y, this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector2} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class en {
  /**
   * Constructs a new quaternion.
   *
   * @param {number} [x=0] - The x value of this quaternion.
   * @param {number} [y=0] - The y value of this quaternion.
   * @param {number} [z=0] - The z value of this quaternion.
   * @param {number} [w=1] - The w value of this quaternion.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  /**
   * Interpolates between two quaternions via SLERP. This implementation assumes the
   * quaternion data are managed  in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @param {number} t - The interpolation factor in the range `[0,1]`.
   * @see {@link Quaternion#slerp}
   */
  static slerpFlat(e, t, n, r, a, s, o) {
    let c = n[r + 0], l = n[r + 1], u = n[r + 2], h = n[r + 3];
    const f = a[s + 0], p = a[s + 1], v = a[s + 2], S = a[s + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = p, e[t + 2] = v, e[t + 3] = S;
      return;
    }
    if (h !== S || c !== f || l !== p || u !== v) {
      let m = 1 - o;
      const d = c * f + l * p + u * v + h * S, A = d >= 0 ? 1 : -1, y = 1 - d * d;
      if (y > Number.EPSILON) {
        const C = Math.sqrt(y), R = Math.atan2(C, d * A);
        m = Math.sin(m * R) / C, o = Math.sin(o * R) / C;
      }
      const E = o * A;
      if (c = c * m + f * E, l = l * m + p * E, u = u * m + v * E, h = h * m + S * E, m === 1 - o) {
        const C = 1 / Math.sqrt(c * c + l * l + u * u + h * h);
        c *= C, l *= C, u *= C, h *= C;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = h;
  }
  /**
   * Multiplies two quaternions. This implementation assumes the quaternion data are managed
   * in flat arrays.
   *
   * @param {Array<number>} dst - The destination array.
   * @param {number} dstOffset - An offset into the destination array.
   * @param {Array<number>} src0 - The source array of the first quaternion.
   * @param {number} srcOffset0 - An offset into the first source array.
   * @param {Array<number>} src1 -  The source array of the second quaternion.
   * @param {number} srcOffset1 - An offset into the second source array.
   * @return {Array<number>} The destination array.
   * @see {@link Quaternion#multiplyQuaternions}.
   */
  static multiplyQuaternionsFlat(e, t, n, r, a, s) {
    const o = n[r], c = n[r + 1], l = n[r + 2], u = n[r + 3], h = a[s], f = a[s + 1], p = a[s + 2], v = a[s + 3];
    return e[t] = o * v + u * h + c * p - l * f, e[t + 1] = c * v + u * f + l * h - o * p, e[t + 2] = l * v + u * p + o * f - c * h, e[t + 3] = u * v - o * h - c * f - l * p, e;
  }
  /**
   * The x value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The y value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The z value of this quaternion.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * The w value of this quaternion.
   *
   * @type {number}
   * @default 1
   */
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  /**
   * Sets the quaternion components.
   *
   * @param {number} x - The x value of this quaternion.
   * @param {number} y - The y value of this quaternion.
   * @param {number} z - The z value of this quaternion.
   * @param {number} w - The w value of this quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new quaternion with copied values from this instance.
   *
   * @return {Quaternion} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  /**
   * Copies the values of the given quaternion to this instance.
   *
   * @param {Quaternion} quaternion - The quaternion to copy.
   * @return {Quaternion} A reference to this quaternion.
   */
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the rotation specified by the given
   * Euler angles.
   *
   * @param {Euler} euler - The Euler angles.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromEuler(e, t = !0) {
    const n = e._x, r = e._y, a = e._z, s = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), u = o(r / 2), h = o(a / 2), f = c(n / 2), p = c(r / 2), v = c(a / 2);
    switch (s) {
      case "XYZ":
        this._x = f * u * h + l * p * v, this._y = l * p * h - f * u * v, this._z = l * u * v + f * p * h, this._w = l * u * h - f * p * v;
        break;
      case "YXZ":
        this._x = f * u * h + l * p * v, this._y = l * p * h - f * u * v, this._z = l * u * v - f * p * h, this._w = l * u * h + f * p * v;
        break;
      case "ZXY":
        this._x = f * u * h - l * p * v, this._y = l * p * h + f * u * v, this._z = l * u * v + f * p * h, this._w = l * u * h - f * p * v;
        break;
      case "ZYX":
        this._x = f * u * h - l * p * v, this._y = l * p * h + f * u * v, this._z = l * u * v - f * p * h, this._w = l * u * h + f * p * v;
        break;
      case "YZX":
        this._x = f * u * h + l * p * v, this._y = l * p * h + f * u * v, this._z = l * u * v - f * p * h, this._w = l * u * h - f * p * v;
        break;
      case "XZY":
        this._x = f * u * h - l * p * v, this._y = l * p * h - f * u * v, this._z = l * u * v + f * p * h, this._w = l * u * h + f * p * v;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given axis and angle.
   *
   * @param {Vector3} axis - The normalized axis.
   * @param {number} angle - The angle in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion from the given rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], a = t[8], s = t[1], o = t[5], c = t[9], l = t[2], u = t[6], h = t[10], f = n + o + h;
    if (f > 0) {
      const p = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / p, this._x = (u - c) * p, this._y = (a - l) * p, this._z = (s - r) * p;
    } else if (n > o && n > h) {
      const p = 2 * Math.sqrt(1 + n - o - h);
      this._w = (u - c) / p, this._x = 0.25 * p, this._y = (r + s) / p, this._z = (a + l) / p;
    } else if (o > h) {
      const p = 2 * Math.sqrt(1 + o - n - h);
      this._w = (a - l) / p, this._x = (r + s) / p, this._y = 0.25 * p, this._z = (c + u) / p;
    } else {
      const p = 2 * Math.sqrt(1 + h - n - o);
      this._w = (s - r) / p, this._x = (a + l) / p, this._y = (c + u) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  /**
   * Sets this quaternion to the rotation required to rotate the direction vector
   * `vFrom` to the direction vector `vTo`.
   *
   * @param {Vector3} vFrom - The first (normalized) direction vector.
   * @param {Vector3} vTo - The second (normalized) direction vector.
   * @return {Quaternion} A reference to this quaternion.
   */
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  /**
   * Returns the angle between this quaternion and the given one in radians.
   *
   * @param {Quaternion} q - The quaternion to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Be(this.dot(e), -1, 1)));
  }
  /**
   * Rotates this quaternion by a given angular step to the given quaternion.
   * The method ensures that the final quaternion will not overshoot `q`.
   *
   * @param {Quaternion} q - The target quaternion.
   * @param {number} step - The angular step in radians.
   * @return {Quaternion} A reference to this quaternion.
   */
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  /**
   * Sets this quaternion to the identity quaternion; that is, to the
   * quaternion that represents "no rotation".
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  identity() {
    return this.set(0, 0, 0, 1);
  }
  /**
   * Inverts this quaternion via {@link Quaternion#conjugate}. The
   * quaternion is assumed to have unit length.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  invert() {
    return this.conjugate();
  }
  /**
   * Returns the rotational conjugate of this quaternion. The conjugate of a
   * quaternion represents the same rotation in the opposite direction about
   * the rotational axis.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  /**
   * Calculates the dot product of this quaternion and the given one.
   *
   * @param {Quaternion} v - The quaternion to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  /**
   * Computes the squared Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector. This can be useful if you are comparing the
   * lengths of two quaternions, as this is a slightly more efficient calculation than
   * {@link Quaternion#length}.
   *
   * @return {number} The squared Euclidean length.
   */
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  /**
   * Computes the Euclidean length (straight-line length) of this quaternion,
   * considered as a 4 dimensional vector.
   *
   * @return {number} The Euclidean length.
   */
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  /**
   * Normalizes this quaternion - that is, calculated the quaternion that performs
   * the same rotation as this one, but has a length equal to `1`.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  /**
   * Multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  /**
   * Pre-multiplies this quaternion by the given one.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  /**
   * Multiplies the given quaternions and stores the result in this instance.
   *
   * @param {Quaternion} a - The first quaternion.
   * @param {Quaternion} b - The second quaternion.
   * @return {Quaternion} A reference to this quaternion.
   */
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, a = e._z, s = e._w, o = t._x, c = t._y, l = t._z, u = t._w;
    return this._x = n * u + s * o + r * l - a * c, this._y = r * u + s * c + a * o - n * l, this._z = a * u + s * l + n * c - r * o, this._w = s * u - n * o - r * c - a * l, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between quaternions.
   *
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, r = this._y, a = this._z, s = this._w;
    let o = s * e._w + n * e._x + r * e._y + a * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = s, this._x = n, this._y = r, this._z = a, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * s + t * this._w, this._x = p * n + t * this._x, this._y = p * r + t * this._y, this._z = p * a + t * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), u = Math.atan2(l, o), h = Math.sin((1 - t) * u) / l, f = Math.sin(t * u) / l;
    return this._w = s * h + this._w * f, this._x = n * h + this._x * f, this._y = r * h + this._y * f, this._z = a * h + this._z * f, this._onChangeCallback(), this;
  }
  /**
   * Performs a spherical linear interpolation between the given quaternions
   * and stores the result in this quaternion.
   *
   * @param {Quaternion} qa - The source quaternion.
   * @param {Quaternion} qb - The target quaternion.
   * @param {number} t - The interpolation factor in the closed interval `[0, 1]`.
   * @return {Quaternion} A reference to this quaternion.
   */
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  /**
   * Sets this quaternion to a uniformly random, normalized quaternion.
   *
   * @return {Quaternion} A reference to this quaternion.
   */
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), a = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      a * Math.sin(t),
      a * Math.cos(t)
    );
  }
  /**
   * Returns `true` if this quaternion is equal with the given one.
   *
   * @param {Quaternion} quaternion - The quaternion to test for equality.
   * @return {boolean} Whether this quaternion is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  /**
   * Sets this quaternion's components from the given array.
   *
   * @param {Array<number>} array - An array holding the quaternion component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this quaternion to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The quaternion components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  /**
   * Sets the components of this quaternion from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
   * @param {number} index - The index into the attribute.
   * @return {Quaternion} A reference to this quaternion.
   */
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the
   * numerical elements of this quaternion in an array of format `[x, y, z, w]`.
   *
   * @return {Array<number>} The serialized quaternion.
   */
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class F {
  /**
   * Constructs a new 3D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   */
  constructor(e = 0, t = 0, n = 0) {
    F.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @return {Vector3} A reference to this vector.
   */
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector3} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @param {number} value - The value to set.
   * @return {Vector3} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y, `2` equals to z.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector3} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3} v - The vector to copy.
   * @return {Vector3} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector3} v - The vector to add.
   * @return {Vector3} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector3} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector3|Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector3} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector3} v - The vector to subtract.
   * @return {Vector3} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector3} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector3} v - The vector to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector3} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  /**
   * Multiplies the given vectors and stores the result in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  /**
   * Applies the given Euler rotation to this vector.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Vector3} A reference to this vector.
   */
  applyEuler(e) {
    return this.applyQuaternion(Er.setFromEuler(e));
  }
  /**
   * Applies a rotation specified by an axis and an angle to this vector.
   *
   * @param {Vector3} axis - A normalized vector representing the rotation axis.
   * @param {number} angle - The angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Er.setFromAxisAngle(e, t));
  }
  /**
   * Multiplies this vector with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, a = e.elements;
    return this.x = a[0] * t + a[3] * n + a[6] * r, this.y = a[1] * t + a[4] * n + a[7] * r, this.z = a[2] * t + a[5] * n + a[8] * r, this;
  }
  /**
   * Multiplies this vector by the given normal matrix and normalizes
   * the result.
   *
   * @param {Matrix3} m - The normal matrix.
   * @return {Vector3} A reference to this vector.
   */
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
   * divides by perspective.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {Vector3} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, a = e.elements, s = 1 / (a[3] * t + a[7] * n + a[11] * r + a[15]);
    return this.x = (a[0] * t + a[4] * n + a[8] * r + a[12]) * s, this.y = (a[1] * t + a[5] * n + a[9] * r + a[13]) * s, this.z = (a[2] * t + a[6] * n + a[10] * r + a[14]) * s, this;
  }
  /**
   * Applies the given Quaternion to this vector.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Vector3} A reference to this vector.
   */
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, a = e.x, s = e.y, o = e.z, c = e.w, l = 2 * (s * r - o * n), u = 2 * (o * t - a * r), h = 2 * (a * n - s * t);
    return this.x = t + c * l + s * h - o * u, this.y = n + c * u + o * l - a * h, this.z = r + c * h + a * u - s * l, this;
  }
  /**
   * Projects this vector from world space into the camera's normalized
   * device coordinate (NDC) space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  /**
   * Unprojects this vector from the camera's normalized device coordinate (NDC)
   * space into world space.
   *
   * @param {Camera} camera - The camera.
   * @return {Vector3} A reference to this vector.
   */
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  /**
   * Transforms the direction of this vector by a matrix (the upper left 3 x 3
   * subset of the given 4x4 matrix and then normalizes the result.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Vector3} A reference to this vector.
   */
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r, this.y = a[1] * t + a[5] * n + a[9] * r, this.z = a[2] * t + a[6] * n + a[10] * r, this.normalize();
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector3} v - The vector to divide.
   * @return {Vector3} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector3} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * If this vector's x, y or z value is greater than the given vector's x, y or z
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is less than the given vector's x, y or z
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector3} v - The vector.
   * @return {Vector3} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  /**
   * If this vector's x, y or z value is greater than the max vector's x, y or z
   * value, it is replaced by the corresponding value.
   * If this vector's x, y or z value is less than the min vector's x, y or z value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector3} min - The minimum x, y and z values.
   * @param {Vector3} max - The maximum x, y and z values in the desired range.
   * @return {Vector3} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Be(this.x, e.x, t.x), this.y = Be(this.y, e.y, t.y), this.z = Be(this.z, e.z, t.z), this;
  }
  /**
   * If this vector's x, y or z values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y or z values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Be(this.x, e, t), this.y = Be(this.y, e, t), this.z = Be(this.z, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector3} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector3} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector3} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
   *
   * @return {Vector3} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector3} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector3} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector3} v1 - The first vector.
   * @param {Vector3} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector3} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  /**
   * Calculates the cross product of the given vector with this instance.
   *
   * @param {Vector3} v - The vector to compute the cross product with.
   * @return {Vector3} The result of the cross product.
   */
  cross(e) {
    return this.crossVectors(this, e);
  }
  /**
   * Calculates the cross product of the given vectors and stores the result
   * in this instance.
   *
   * @param {Vector3} a - The first vector.
   * @param {Vector3} b - The second vector.
   * @return {Vector3} A reference to this vector.
   */
  crossVectors(e, t) {
    const n = e.x, r = e.y, a = e.z, s = t.x, o = t.y, c = t.z;
    return this.x = r * c - a * o, this.y = a * s - n * c, this.z = n * o - r * s, this;
  }
  /**
   * Projects this vector onto the given one.
   *
   * @param {Vector3} v - The vector to project to.
   * @return {Vector3} A reference to this vector.
   */
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  /**
   * Projects this vector onto a plane by subtracting this
   * vector projected onto the plane's normal from this vector.
   *
   * @param {Vector3} planeNormal - The plane normal.
   * @return {Vector3} A reference to this vector.
   */
  projectOnPlane(e) {
    return Di.copy(this).projectOnVector(e), this.sub(Di);
  }
  /**
   * Reflects this vector off a plane orthogonal to the given normal vector.
   *
   * @param {Vector3} normal - The (normalized) normal vector.
   * @return {Vector3} A reference to this vector.
   */
  reflect(e) {
    return this.sub(Di.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  /**
   * Returns the angle between the given vector and this instance in radians.
   *
   * @param {Vector3} v - The vector to compute the angle with.
   * @return {number} The angle in radians.
   */
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Be(n, -1, 1));
  }
  /**
   * Computes the distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the distance to.
   * @return {number} The distance.
   */
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  /**
   * Computes the squared distance from the given vector to this instance.
   * If you are just comparing the distance with another distance, you should compare
   * the distance squared instead as it is slightly more efficient to calculate.
   *
   * @param {Vector3} v - The vector to compute the squared distance to.
   * @return {number} The squared distance.
   */
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  /**
   * Computes the Manhattan distance from the given vector to this instance.
   *
   * @param {Vector3} v - The vector to compute the Manhattan distance to.
   * @return {number} The Manhattan distance.
   */
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {Spherical} s - The spherical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  /**
   * Sets the vector components from the given spherical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} phi - The phi angle in radians.
   * @param {number} theta - The theta angle in radians.
   * @return {Vector3} A reference to this vector.
   */
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {Cylindrical} c - The cylindrical coordinates.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  /**
   * Sets the vector components from the given cylindrical coordinates.
   *
   * @param {number} radius - The radius.
   * @param {number} theta - The theta angle in radians.
   * @param {number} y - The y value.
   * @return {Vector3} A reference to this vector.
   */
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  /**
   * Sets the vector components to the scale elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  /**
   * Sets the vector components from the specified matrix column.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @param {number} index - The column index.
   * @return {Vector3} A reference to this vector.
   */
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  /**
   * Sets the vector components from the given Euler angles.
   *
   * @param {Euler} e - The Euler angles to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  /**
   * Sets the vector components from the RGB components of the
   * given color.
   *
   * @param {Color} c - The color to set.
   * @return {Vector3} A reference to this vector.
   */
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector3} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
   * and z value to be `array[ offset + 2 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector3} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector3} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector3} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  /**
   * Sets this vector to a uniformly random point on a unit sphere.
   *
   * @return {Vector3} A reference to this vector.
   */
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Di = /* @__PURE__ */ new F(), Er = /* @__PURE__ */ new en();
class Ue {
  /**
   * Constructs a new 3x3 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   */
  constructor(e, t, n, r, a, s, o, c, l) {
    Ue.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, a, s, o, c, l);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @return {Matrix3} A reference to this matrix.
   */
  set(e, t, n, r, a, s, o, c, l) {
    const u = this.elements;
    return u[0] = e, u[1] = r, u[2] = o, u[3] = t, u[4] = a, u[5] = c, u[6] = n, u[7] = s, u[8] = l, this;
  }
  /**
   * Sets this matrix to the 3x3 identity matrix.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix3} m - The matrix to copy.
   * @return {Matrix3} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix3} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  /**
   * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  /**
   * Post-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix to multiply with.
   * @return {Matrix3} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 3x3 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix3} a - The first matrix.
   * @param {Matrix3} b - The second matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, a = this.elements, s = n[0], o = n[3], c = n[6], l = n[1], u = n[4], h = n[7], f = n[2], p = n[5], v = n[8], S = r[0], m = r[3], d = r[6], A = r[1], y = r[4], E = r[7], C = r[2], R = r[5], D = r[8];
    return a[0] = s * S + o * A + c * C, a[3] = s * m + o * y + c * R, a[6] = s * d + o * E + c * D, a[1] = l * S + u * A + h * C, a[4] = l * m + u * y + h * R, a[7] = l * d + u * E + h * D, a[2] = f * S + p * A + v * C, a[5] = f * m + p * y + v * R, a[8] = f * d + p * E + v * D, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix3} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], a = e[3], s = e[4], o = e[5], c = e[6], l = e[7], u = e[8];
    return t * s * u - t * o * l - n * a * u + n * o * c + r * a * l - r * s * c;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], a = e[3], s = e[4], o = e[5], c = e[6], l = e[7], u = e[8], h = u * s - o * l, f = o * c - u * a, p = l * a - s * c, v = t * h + n * f + r * p;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / v;
    return e[0] = h * S, e[1] = (r * l - u * n) * S, e[2] = (o * n - r * s) * S, e[3] = f * S, e[4] = (u * t - r * c) * S, e[5] = (r * a - o * t) * S, e[6] = p * S, e[7] = (n * c - l * t) * S, e[8] = (s * t - n * a) * S, this;
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix3} A reference to this matrix.
   */
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  /**
   * Computes the normal matrix which is the inverse transpose of the upper
   * left 3x3 portion of the given 4x4 matrix.
   *
   * @param {Matrix4} matrix4 - The 4x4 matrix.
   * @return {Matrix3} A reference to this matrix.
   */
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  /**
   * Transposes this matrix into the supplied array, and returns itself unchanged.
   *
   * @param {Array<number>} r - An array to store the transposed matrix elements.
   * @return {Matrix3} A reference to this matrix.
   */
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  /**
   * Sets the UV transform matrix from offset, repeat, rotation, and center.
   *
   * @param {number} tx - Offset x.
   * @param {number} ty - Offset y.
   * @param {number} sx - Repeat x.
   * @param {number} sy - Repeat y.
   * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
   * @param {number} cx - Center x of rotation.
   * @param {number} cy - Center y of rotation
   * @return {Matrix3} A reference to this matrix.
   */
  setUvTransform(e, t, n, r, a, s, o) {
    const c = Math.cos(a), l = Math.sin(a);
    return this.set(
      n * c,
      n * l,
      -n * (c * s + l * o) + s + e,
      -r * l,
      r * c,
      -r * (-l * s + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Scales this matrix with the given scalar values.
   *
   * @param {number} sx - The amount to scale in the X axis.
   * @param {number} sy - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  scale(e, t) {
    return this.premultiply(Li.makeScale(e, t)), this;
  }
  /**
   * Rotates this matrix by the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  rotate(e) {
    return this.premultiply(Li.makeRotation(-e)), this;
  }
  /**
   * Translates this matrix by the given scalar values.
   *
   * @param {number} tx - The amount to translate in the X axis.
   * @param {number} ty - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  translate(e, t) {
    return this.premultiply(Li.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  /**
   * Sets this matrix as a 2D translation transform.
   *
   * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D rotational transformation.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix3} A reference to this matrix.
   */
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a 2D scale transform.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @return {Matrix3} A reference to this matrix.
   */
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix3} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix3} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix3} A clone of this instance.
   */
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Li = /* @__PURE__ */ new Ue();
function _a(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0;
  return !1;
}
function qn(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Va() {
  const i = qn("canvas");
  return i.style.display = "block", i;
}
const Tr = {};
function Yn(i) {
  i in Tr || (Tr[i] = !0, console.warn(i));
}
function Ha(i, e, t) {
  return new Promise(function(n, r) {
    function a() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(a, t);
          break;
        default:
          n();
      }
    }
    setTimeout(a, t);
  });
}
const yr = /* @__PURE__ */ new Ue().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), br = /* @__PURE__ */ new Ue().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
function ka() {
  const i = {
    enabled: !0,
    workingColorSpace: In,
    /**
     * Implementations of supported color spaces.
     *
     * Required:
     *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
     *	- whitePoint: reference white [ x y ]
     *	- transfer: transfer function (pre-defined)
     *	- toXYZ: Matrix3 RGB to XYZ transform
     *	- fromXYZ: Matrix3 XYZ to RGB transform
     *	- luminanceCoefficients: RGB luminance coefficients
     *
     * Optional:
     *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace, toneMappingMode: 'extended' | 'standard' }
     *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
     *
     * Reference:
     * - https://www.russellcottrell.com/photo/matrixCalculator.htm
     */
    spaces: {},
    convert: function(r, a, s) {
      return this.enabled === !1 || a === s || !a || !s || (this.spaces[a].transfer === Xe && (r.r = qt(r.r), r.g = qt(r.g), r.b = qt(r.b)), this.spaces[a].primaries !== this.spaces[s].primaries && (r.applyMatrix3(this.spaces[a].toXYZ), r.applyMatrix3(this.spaces[s].fromXYZ)), this.spaces[s].transfer === Xe && (r.r = Un(r.r), r.g = Un(r.g), r.b = Un(r.b))), r;
    },
    workingToColorSpace: function(r, a) {
      return this.convert(r, this.workingColorSpace, a);
    },
    colorSpaceToWorking: function(r, a) {
      return this.convert(r, a, this.workingColorSpace);
    },
    getPrimaries: function(r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function(r) {
      return r === "" ? Ti : this.spaces[r].transfer;
    },
    getToneMappingMode: function(r) {
      return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(r, a = this.workingColorSpace) {
      return r.fromArray(this.spaces[a].luminanceCoefficients);
    },
    define: function(r) {
      Object.assign(this.spaces, r);
    },
    // Internal APIs
    _getMatrix: function(r, a, s) {
      return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    },
    // Deprecated
    fromWorkingColorSpace: function(r, a) {
      return Yn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), i.workingToColorSpace(r, a);
    },
    toWorkingColorSpace: function(r, a) {
      return Yn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), i.colorSpaceToWorking(r, a);
    }
  }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({
    [In]: {
      primaries: e,
      whitePoint: n,
      transfer: Ti,
      toXYZ: yr,
      fromXYZ: br,
      luminanceCoefficients: t,
      workingColorSpaceConfig: { unpackColorSpace: St },
      outputColorSpaceConfig: { drawingBufferColorSpace: St }
    },
    [St]: {
      primaries: e,
      whitePoint: n,
      transfer: Xe,
      toXYZ: yr,
      fromXYZ: br,
      luminanceCoefficients: t,
      outputColorSpaceConfig: { drawingBufferColorSpace: St }
    }
  }), i;
}
const Ve = /* @__PURE__ */ ka();
function qt(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Un(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let vn;
class Wa {
  /**
   * Returns a data URI containing a representation of the given image.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement)} image - The image object.
   * @param {string} [type='image/png'] - Indicates the image format.
   * @return {string} The data URI.
   */
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let n;
    if (e instanceof HTMLCanvasElement)
      n = e;
    else {
      vn === void 0 && (vn = qn("canvas")), vn.width = e.width, vn.height = e.height;
      const r = vn.getContext("2d");
      e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height), n = vn;
    }
    return n.toDataURL(t);
  }
  /**
   * Converts the given sRGB image data to linear color space.
   *
   * @param {(HTMLImageElement|HTMLCanvasElement|ImageBitmap|Object)} image - The image object.
   * @return {HTMLCanvasElement|Object} The converted image.
   */
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = qn("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), a = r.data;
      for (let s = 0; s < a.length; s++)
        a[s] = qt(a[s] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(qt(t[n] / 255) * 255) : t[n] = qt(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Xa = 0;
class dr {
  /**
   * Constructs a new video texture.
   *
   * @param {any} [data=null] - The data definition of a texture.
   */
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Xa++ }), this.uuid = Kn(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  /**
   * Returns the dimensions of the source into the given target vector.
   *
   * @param {(Vector2|Vector3)} target - The target object the result is written into.
   * @return {(Vector2|Vector3)} The dimensions of the source.
   */
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  /**
   * When the property is set to `true`, the engine allocates the memory
   * for the texture (if necessary) and triggers the actual texture upload
   * to the GPU next time the source is used.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Serializes the source into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized source.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let a;
      if (Array.isArray(r)) {
        a = [];
        for (let s = 0, o = r.length; s < o; s++)
          r[s].isDataTexture ? a.push(Ui(r[s].image)) : a.push(Ui(r[s]));
      } else
        a = Ui(r);
      n.url = a;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ui(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Wa.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let qa = 0;
const Ii = /* @__PURE__ */ new F();
class gt extends Nn {
  /**
   * Constructs a new texture.
   *
   * @param {?Object} [image=Texture.DEFAULT_IMAGE] - The image holding the texture data.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space.
   */
  constructor(e = gt.DEFAULT_IMAGE, t = gt.DEFAULT_MAPPING, n = 1001, r = 1001, a = 1006, s = 1008, o = 1023, c = 1009, l = gt.DEFAULT_ANISOTROPY, u = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: qa++ }), this.uuid = Kn(), this.name = "", this.source = new dr(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = a, this.minFilter = s, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Ye(0, 0), this.repeat = new Ye(1, 1), this.center = new Ye(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ue(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
  }
  /**
   * The width of the texture in pixels.
   */
  get width() {
    return this.source.getSize(Ii).x;
  }
  /**
   * The height of the texture in pixels.
   */
  get height() {
    return this.source.getSize(Ii).y;
  }
  /**
   * The depth of the texture in pixels.
   */
  get depth() {
    return this.source.getSize(Ii).z;
  }
  /**
   * The image object holding the texture data.
   *
   * @type {?Object}
   */
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  /**
   * Updates the texture transformation matrix from the from the properties {@link Texture#offset},
   * {@link Texture#repeat}, {@link Texture#rotation}, and {@link Texture#center}.
   */
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  /**
   * Adds a range of data in the data texture to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Returns a new texture with copied values from this instance.
   *
   * @return {Texture} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given texture to this instance.
   *
   * @param {Texture} source - The texture to copy.
   * @return {Texture} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  /**
   * Sets this texture's properties based on `values`.
   * @param {Object} values - A container with texture parameters.
   */
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
    }
  }
  /**
   * Serializes the texture into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized texture.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Texture#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Transforms the given uv vector with the textures uv transformation matrix.
   *
   * @param {Vector2} uv - The uv vector.
   * @return {Vector2} The transformed uv vector.
   */
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  /**
   * Setting this property to `true` indicates the engine the texture
   * must be updated in the next render. This triggers a texture upload
   * to the GPU and ensures correct texture parameter configuration.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  /**
   * Setting this property to `true` indicates the engine the PMREM
   * must be regenerated.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
gt.DEFAULT_IMAGE = null;
gt.DEFAULT_MAPPING = 300;
gt.DEFAULT_ANISOTROPY = 1;
class st {
  /**
   * Constructs a new 4D vector.
   *
   * @param {number} [x=0] - The x value of this vector.
   * @param {number} [y=0] - The y value of this vector.
   * @param {number} [z=0] - The z value of this vector.
   * @param {number} [w=1] - The w value of this vector.
   */
  constructor(e = 0, t = 0, n = 0, r = 1) {
    st.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  /**
   * Alias for {@link Vector4#z}.
   *
   * @type {number}
   */
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  /**
   * Alias for {@link Vector4#w}.
   *
   * @type {number}
   */
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  /**
   * Sets the vector components.
   *
   * @param {number} x - The value of the x component.
   * @param {number} y - The value of the y component.
   * @param {number} z - The value of the z component.
   * @param {number} w - The value of the w component.
   * @return {Vector4} A reference to this vector.
   */
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  /**
   * Sets the vector components to the same value.
   *
   * @param {number} scalar - The value to set for all vector components.
   * @return {Vector4} A reference to this vector.
   */
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  /**
   * Sets the vector's x component to the given value
   *
   * @param {number} x - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setX(e) {
    return this.x = e, this;
  }
  /**
   * Sets the vector's y component to the given value
   *
   * @param {number} y - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setY(e) {
    return this.y = e, this;
  }
  /**
   * Sets the vector's z component to the given value
   *
   * @param {number} z - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setZ(e) {
    return this.z = e, this;
  }
  /**
   * Sets the vector's w component to the given value
   *
   * @param {number} w - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setW(e) {
    return this.w = e, this;
  }
  /**
   * Allows to set a vector component with an index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @param {number} value - The value to set.
   * @return {Vector4} A reference to this vector.
   */
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  /**
   * Returns the value of the vector component which matches the given index.
   *
   * @param {number} index - The component index. `0` equals to x, `1` equals to y,
   * `2` equals to z, `3` equals to w.
   * @return {number} A vector component value.
   */
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  /**
   * Returns a new vector with copied values from this instance.
   *
   * @return {Vector4} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  /**
   * Copies the values of the given vector to this instance.
   *
   * @param {Vector3|Vector4} v - The vector to copy.
   * @return {Vector4} A reference to this vector.
   */
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  /**
   * Adds the given vector to this instance.
   *
   * @param {Vector4} v - The vector to add.
   * @return {Vector4} A reference to this vector.
   */
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  /**
   * Adds the given scalar value to all components of this instance.
   *
   * @param {number} s - The scalar to add.
   * @return {Vector4} A reference to this vector.
   */
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  /**
   * Adds the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  /**
   * Adds the given vector scaled by the given factor to this instance.
   *
   * @param {Vector4} v - The vector.
   * @param {number} s - The factor that scales `v`.
   * @return {Vector4} A reference to this vector.
   */
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  /**
   * Subtracts the given vector from this instance.
   *
   * @param {Vector4} v - The vector to subtract.
   * @return {Vector4} A reference to this vector.
   */
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  /**
   * Subtracts the given scalar value from all components of this instance.
   *
   * @param {number} s - The scalar to subtract.
   * @return {Vector4} A reference to this vector.
   */
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  /**
   * Subtracts the given vectors and stores the result in this instance.
   *
   * @param {Vector4} a - The first vector.
   * @param {Vector4} b - The second vector.
   * @return {Vector4} A reference to this vector.
   */
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  /**
   * Multiplies the given vector with this instance.
   *
   * @param {Vector4} v - The vector to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  /**
   * Multiplies the given scalar value with all components of this instance.
   *
   * @param {number} scalar - The scalar to multiply.
   * @return {Vector4} A reference to this vector.
   */
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  /**
   * Multiplies this vector with the given 4x4 matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, a = this.w, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r + s[12] * a, this.y = s[1] * t + s[5] * n + s[9] * r + s[13] * a, this.z = s[2] * t + s[6] * n + s[10] * r + s[14] * a, this.w = s[3] * t + s[7] * n + s[11] * r + s[15] * a, this;
  }
  /**
   * Divides this instance by the given vector.
   *
   * @param {Vector4} v - The vector to divide.
   * @return {Vector4} A reference to this vector.
   */
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  /**
   * Divides this vector by the given scalar.
   *
   * @param {number} scalar - The scalar to divide.
   * @return {Vector4} A reference to this vector.
   */
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  /**
   * Sets the x, y and z components of this
   * vector to the quaternion's axis and w to the angle.
   *
   * @param {Quaternion} q - The Quaternion to set.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  /**
   * Sets the x, y and z components of this
   * vector to the axis of rotation and w to the angle.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.
   * @return {Vector4} A reference to this vector.
   */
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, a;
    const c = e.elements, l = c[0], u = c[4], h = c[8], f = c[1], p = c[5], v = c[9], S = c[2], m = c[6], d = c[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(h - S) < 0.01 && Math.abs(v - m) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(h + S) < 0.1 && Math.abs(v + m) < 0.1 && Math.abs(l + p + d - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (l + 1) / 2, E = (p + 1) / 2, C = (d + 1) / 2, R = (u + f) / 4, D = (h + S) / 4, N = (v + m) / 4;
      return y > E && y > C ? y < 0.01 ? (n = 0, r = 0.707106781, a = 0.707106781) : (n = Math.sqrt(y), r = R / n, a = D / n) : E > C ? E < 0.01 ? (n = 0.707106781, r = 0, a = 0.707106781) : (r = Math.sqrt(E), n = R / r, a = N / r) : C < 0.01 ? (n = 0.707106781, r = 0.707106781, a = 0) : (a = Math.sqrt(C), n = D / a, r = N / a), this.set(n, r, a, t), this;
    }
    let A = Math.sqrt((m - v) * (m - v) + (h - S) * (h - S) + (f - u) * (f - u));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (m - v) / A, this.y = (h - S) / A, this.z = (f - u) / A, this.w = Math.acos((l + p + d - 1) / 2), this;
  }
  /**
   * Sets the vector components to the position elements of the
   * given transformation matrix.
   *
   * @param {Matrix4} m - The 4x4 matrix.
   * @return {Vector4} A reference to this vector.
   */
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
   * value, replace that value with the corresponding min value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is less than the given vector's x, y, z or w
   * value, replace that value with the corresponding max value.
   *
   * @param {Vector4} v - The vector.
   * @return {Vector4} A reference to this vector.
   */
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  /**
   * If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
   * value, it is replaced by the corresponding value.
   * If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
   * it is replaced by the corresponding value.
   *
   * @param {Vector4} min - The minimum x, y and z values.
   * @param {Vector4} max - The maximum x, y and z values in the desired range.
   * @return {Vector4} A reference to this vector.
   */
  clamp(e, t) {
    return this.x = Be(this.x, e.x, t.x), this.y = Be(this.y, e.y, t.y), this.z = Be(this.z, e.z, t.z), this.w = Be(this.w, e.w, t.w), this;
  }
  /**
   * If this vector's x, y, z or w values are greater than the max value, they are
   * replaced by the max value.
   * If this vector's x, y, z or w values are less than the min value, they are
   * replaced by the min value.
   *
   * @param {number} minVal - The minimum value the components will be clamped to.
   * @param {number} maxVal - The maximum value the components will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampScalar(e, t) {
    return this.x = Be(this.x, e, t), this.y = Be(this.y, e, t), this.z = Be(this.z, e, t), this.w = Be(this.w, e, t), this;
  }
  /**
   * If this vector's length is greater than the max value, it is replaced by
   * the max value.
   * If this vector's length is less than the min value, it is replaced by the
   * min value.
   *
   * @param {number} min - The minimum value the vector length will be clamped to.
   * @param {number} max - The maximum value the vector length will be clamped to.
   * @return {Vector4} A reference to this vector.
   */
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Be(n, e, t));
  }
  /**
   * The components of this vector are rounded down to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  /**
   * The components of this vector are rounded up to the nearest integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  /**
   * The components of this vector are rounded to the nearest integer value
   *
   * @return {Vector4} A reference to this vector.
   */
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  /**
   * The components of this vector are rounded towards zero (up if negative,
   * down if positive) to an integer value.
   *
   * @return {Vector4} A reference to this vector.
   */
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  /**
   * Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.
   *
   * @return {Vector4} A reference to this vector.
   */
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  /**
   * Calculates the dot product of the given vector with this instance.
   *
   * @param {Vector4} v - The vector to compute the dot product with.
   * @return {number} The result of the dot product.
   */
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  /**
   * Computes the square of the Euclidean length (straight-line length) from
   * (0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
   * compare the length squared instead as it is slightly more efficient to calculate.
   *
   * @return {number} The square length of this vector.
   */
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  /**
   * Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).
   *
   * @return {number} The length of this vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  /**
   * Computes the Manhattan length of this vector.
   *
   * @return {number} The length of this vector.
   */
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  /**
   * Converts this vector to a unit vector - that is, sets it equal to a vector
   * with the same direction as this one, but with a vector length of `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  /**
   * Sets this vector to a vector with the same direction as this one, but
   * with the specified length.
   *
   * @param {number} length - The new length of this vector.
   * @return {Vector4} A reference to this vector.
   */
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  /**
   * Linearly interpolates between the given vector and this instance, where
   * alpha is the percent distance along the line - alpha = 0 will be this
   * vector, and alpha = 1 will be the given one.
   *
   * @param {Vector4} v - The vector to interpolate towards.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  /**
   * Linearly interpolates between the given vectors, where alpha is the percent
   * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
   * be the second one. The result is stored in this instance.
   *
   * @param {Vector4} v1 - The first vector.
   * @param {Vector4} v2 - The second vector.
   * @param {number} alpha - The interpolation factor, typically in the closed interval `[0, 1]`.
   * @return {Vector4} A reference to this vector.
   */
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  /**
   * Returns `true` if this vector is equal with the given one.
   *
   * @param {Vector4} v - The vector to test for equality.
   * @return {boolean} Whether this vector is equal with the given one.
   */
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  /**
   * Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
   * z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.
   *
   * @param {Array<number>} array - An array holding the vector component values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Vector4} A reference to this vector.
   */
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  /**
   * Writes the components of this vector to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the vector components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The vector components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  /**
   * Sets the components of this vector from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
   * @param {number} index - The index into the attribute.
   * @return {Vector4} A reference to this vector.
   */
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  /**
   * Sets each component of this vector to a pseudo-random value between `0` and
   * `1`, excluding `1`.
   *
   * @return {Vector4} A reference to this vector.
   */
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ya extends Nn {
  /**
   * Render target options.
   *
   * @typedef {Object} RenderTarget~Options
   * @property {boolean} [generateMipmaps=false] - Whether to generate mipmaps or not.
   * @property {number} [magFilter=LinearFilter] - The mag filter.
   * @property {number} [minFilter=LinearFilter] - The min filter.
   * @property {number} [format=RGBAFormat] - The texture format.
   * @property {number} [type=UnsignedByteType] - The texture type.
   * @property {?string} [internalFormat=null] - The texture's internal format.
   * @property {number} [wrapS=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [wrapT=ClampToEdgeWrapping] - The texture's uv wrapping mode.
   * @property {number} [anisotropy=1] - The texture's anisotropy value.
   * @property {string} [colorSpace=NoColorSpace] - The texture's color space.
   * @property {boolean} [depthBuffer=true] - Whether to allocate a depth buffer or not.
   * @property {boolean} [stencilBuffer=false] - Whether to allocate a stencil buffer or not.
   * @property {boolean} [resolveDepthBuffer=true] - Whether to resolve the depth buffer or not.
   * @property {boolean} [resolveStencilBuffer=true] - Whether  to resolve the stencil buffer or not.
   * @property {?Texture} [depthTexture=null] - Reference to a depth texture.
   * @property {number} [samples=0] - The MSAA samples count.
   * @property {number} [count=1] - Defines the number of color attachments . Must be at least `1`.
   * @property {number} [depth=1] - The texture depth.
   * @property {boolean} [multiview=false] - Whether this target is used for multiview rendering.
   */
  /**
   * Constructs a new render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new st(0, 0, e, t), this.scissorTest = !1, this.viewport = new st(0, 0, e, t);
    const r = { width: e, height: t, depth: n.depth }, a = new gt(r);
    this.textures = [];
    const s = n.count;
    for (let o = 0; o < s; o++)
      this.textures[o] = a.clone(), this.textures[o].isRenderTargetTexture = !0, this.textures[o].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: 1006,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  /**
   * The texture representing the default color attachment.
   *
   * @type {Texture}
   */
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  /**
   * Instead of saving the depth in a renderbuffer, a texture
   * can be used instead which is useful for further processing
   * e.g. in context of post-processing.
   *
   * @type {?DepthTexture}
   * @default null
   */
  get depthTexture() {
    return this._depthTexture;
  }
  /**
   * Sets the size of this render target.
   *
   * @param {number} width - The width.
   * @param {number} height - The height.
   * @param {number} [depth=1] - The depth.
   */
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, a = this.textures.length; r < a; r++)
        this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isArrayTexture = this.textures[r].image.depth > 1;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  /**
   * Returns a new render target with copied values from this instance.
   *
   * @return {RenderTarget} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the settings of the given render target. This is a structural copy so
   * no resources are shared between render targets after the copy. That includes
   * all MRT textures and the depth texture.
   *
   * @param {RenderTarget} source - The render target to copy.
   * @return {RenderTarget} A reference to this instance.
   */
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new dr(r);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires RenderTarget#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class _n extends Ya {
  /**
   * Constructs a new 3D render target.
   *
   * @param {number} [width=1] - The width of the render target.
   * @param {number} [height=1] - The height of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class ga extends gt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  /**
   * Describes that a specific layer of the texture needs to be updated.
   * Normally when {@link Texture#needsUpdate} is set to `true`, the
   * entire data texture array is sent to the GPU. Marking specific
   * layers will only transmit subsets of all mipmaps associated with a
   * specific depth in the array which is often much more performant.
   *
   * @param {number} layerIndex - The layer index that should be updated.
   */
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  /**
   * Resets the layer updates registry.
   */
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Ka extends gt {
  /**
   * Constructs a new data array texture.
   *
   * @param {?TypedArray} [data=null] - The buffer data.
   * @param {number} [width=1] - The width of the texture.
   * @param {number} [height=1] - The height of the texture.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Zn {
  /**
   * Constructs a new bounding box.
   *
   * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
   * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
   */
  constructor(e = new F(1 / 0, 1 / 0, 1 / 0), t = new F(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  /**
   * Sets the lower and upper boundaries of this box.
   * Please note that this method only copies the values from the given objects.
   *
   * @param {Vector3} min - The lower boundary of the box.
   * @param {Vector3} max - The upper boundary of the box.
   * @return {Box3} A reference to this bounding box.
   */
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<number>} array - An array holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Dt.fromArray(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
   * @return {Box3} A reference to this bounding box.
   */
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Dt.fromBufferAttribute(e, t));
    return this;
  }
  /**
   * Sets the upper and lower bounds of this box so it encloses the position data
   * in the given array.
   *
   * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
   * @return {Box3} A reference to this bounding box.
   */
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  /**
   * Centers this box on the given center vector and sets this box's width, height and
   * depth to the given size values.
   *
   * @param {Vector3} center - The center of the box.
   * @param {Vector3} size - The x, y and z dimensions of the box.
   * @return {Box3} A reference to this bounding box.
   */
  setFromCenterAndSize(e, t) {
    const n = Dt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  /**
   * Computes the world-axis-aligned bounding box for the given 3D object
   * (including its children), accounting for the object's, and children's,
   * world transforms. The function may result in a larger box than strictly necessary.
   *
   * @param {Object3D} object - The 3D object to compute the bounding box for.
   * @param {boolean} [precise=false] - If set to `true`, the method computes the smallest
   * world-axis-aligned bounding box at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  /**
   * Returns a new box with copied values from this instance.
   *
   * @return {Box3} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given box to this instance.
   *
   * @param {Box3} box - The box to copy.
   * @return {Box3} A reference to this bounding box.
   */
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  /**
   * Makes this box empty which means in encloses a zero space in 3D.
   *
   * @return {Box3} A reference to this bounding box.
   */
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  /**
   * Returns true if this box includes zero points within its bounds.
   * Note that a box with equal lower and upper bounds still includes one
   * point, the one both bounds share.
   *
   * @return {boolean} Whether this box is empty or not.
   */
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  /**
   * Returns the center point of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The center point.
   */
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  /**
   * Returns the dimensions of this box.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The size.
   */
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  /**
   * Expands the boundaries of this box to include the given point.
   *
   * @param {Vector3} point - The point that should be included by the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  /**
   * Expands this box equilaterally by the given vector. The width of this
   * box will be expanded by the x component of the vector in both
   * directions. The height of this box will be expanded by the y component of
   * the vector in both directions. The depth of this box will be
   * expanded by the z component of the vector in both directions.
   *
   * @param {Vector3} vector - The vector that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  /**
   * Expands each dimension of the box by the given scalar. If negative, the
   * dimensions of the box will be contracted.
   *
   * @param {number} scalar - The scalar value that should expand the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  /**
   * Expands the boundaries of this box to include the given 3D object and
   * its children, accounting for the object's, and children's, world
   * transforms. The function may result in a larger box than strictly
   * necessary (unless the precise parameter is set to true).
   *
   * @param {Object3D} object - The 3D object that should expand the bounding box.
   * @param {boolean} precise - If set to `true`, the method expands the bounding box
   * as little as necessary at the expense of more computation.
   * @return {Box3} A reference to this bounding box.
   */
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const a = n.getAttribute("position");
      if (t === !0 && a !== void 0 && e.isInstancedMesh !== !0)
        for (let s = 0, o = a.count; s < o; s++)
          e.isMesh === !0 ? e.getVertexPosition(s, Dt) : Dt.fromBufferAttribute(a, s), Dt.applyMatrix4(e.matrixWorld), this.expandByPoint(Dt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Qn.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Qn.copy(n.boundingBox)), Qn.applyMatrix4(e.matrixWorld), this.union(Qn);
    }
    const r = e.children;
    for (let a = 0, s = r.length; a < s; a++)
      this.expandByObject(r[a], t);
    return this;
  }
  /**
   * Returns `true` if the given point lies within or on the boundaries of this box.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the bounding box contains the given point or not.
   */
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  /**
   * Returns `true` if this bounding box includes the entirety of the given bounding box.
   * If this box and the given one are identical, this function also returns `true`.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box contains the given bounding box or not.
   */
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  /**
   * Returns a point as a proportion of this box's width, height and depth.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A point as a proportion of this box's width, height and depth.
   */
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  /**
   * Returns `true` if the given bounding box intersects with this bounding box.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with this bounding box.
   */
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  /**
   * Returns `true` if the given bounding sphere intersects with this bounding box.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
   */
  intersectsSphere(e) {
    return this.clampPoint(e.center, Dt), Dt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  /**
   * Returns `true` if the given plane intersects with this bounding box.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether the given plane intersects with this bounding box.
   */
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  /**
   * Returns `true` if the given triangle intersects with this bounding box.
   *
   * @param {Triangle} triangle - The triangle to test.
   * @return {boolean} Whether the given triangle intersects with this bounding box.
   */
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Gn), ei.subVectors(this.max, Gn), xn.subVectors(e.a, Gn), Sn.subVectors(e.b, Gn), Mn.subVectors(e.c, Gn), Yt.subVectors(Sn, xn), Kt.subVectors(Mn, Sn), an.subVectors(xn, Mn);
    let t = [
      0,
      -Yt.z,
      Yt.y,
      0,
      -Kt.z,
      Kt.y,
      0,
      -an.z,
      an.y,
      Yt.z,
      0,
      -Yt.x,
      Kt.z,
      0,
      -Kt.x,
      an.z,
      0,
      -an.x,
      -Yt.y,
      Yt.x,
      0,
      -Kt.y,
      Kt.x,
      0,
      -an.y,
      an.x,
      0
    ];
    return !Fi(t, xn, Sn, Mn, ei) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Fi(t, xn, Sn, Mn, ei)) ? !1 : (ti.crossVectors(Yt, Kt), t = [ti.x, ti.y, ti.z], Fi(t, xn, Sn, Mn, ei));
  }
  /**
   * Clamps the given point within the bounds of this box.
   *
   * @param {Vector3} point - The point to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  /**
   * Returns the euclidean distance from any edge of this box to the specified point. If
   * the given point lies inside of this box, the distance will be `0`.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The euclidean distance.
   */
  distanceToPoint(e) {
    return this.clampPoint(e, Dt).distanceTo(e);
  }
  /**
   * Returns a bounding sphere that encloses this bounding box.
   *
   * @param {Sphere} target - The target sphere that is used to store the method's result.
   * @return {Sphere} The bounding sphere that encloses this bounding box.
   */
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Dt).length() * 0.5), e;
  }
  /**
   * Computes the intersection of this bounding box and the given one, setting the upper
   * bound of this box to the lesser of the two boxes' upper bounds and the
   * lower bound of this box to the greater of the two boxes' lower bounds. If
   * there's no overlap, makes this box empty.
   *
   * @param {Box3} box - The bounding box to intersect with.
   * @return {Box3} A reference to this bounding box.
   */
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  /**
   * Computes the union of this box and another and the given one, setting the upper
   * bound of this box to the greater of the two boxes' upper bounds and the
   * lower bound of this box to the lesser of the two boxes' lower bounds.
   *
   * @param {Box3} box - The bounding box that will be unioned with this instance.
   * @return {Box3} A reference to this bounding box.
   */
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  /**
   * Transforms this bounding box by the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Box3} A reference to this bounding box.
   */
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Vt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Vt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Vt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Vt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Vt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Vt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Vt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Vt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Vt), this);
  }
  /**
   * Adds the given offset to both the upper and lower bounds of this bounding box,
   * effectively moving it in 3D space.
   *
   * @param {Vector3} offset - The offset that should be used to translate the bounding box.
   * @return {Box3} A reference to this bounding box.
   */
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  /**
   * Returns `true` if this bounding box is equal with the given one.
   *
   * @param {Box3} box - The box to test for equality.
   * @return {boolean} Whether this bounding box is equal with the given one.
   */
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding box.
   *
   * @param {Object} json - The serialized json to set the box from.
   * @return {Box3} A reference to this bounding box.
   */
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const Vt = [
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F(),
  /* @__PURE__ */ new F()
], Dt = /* @__PURE__ */ new F(), Qn = /* @__PURE__ */ new Zn(), xn = /* @__PURE__ */ new F(), Sn = /* @__PURE__ */ new F(), Mn = /* @__PURE__ */ new F(), Yt = /* @__PURE__ */ new F(), Kt = /* @__PURE__ */ new F(), an = /* @__PURE__ */ new F(), Gn = /* @__PURE__ */ new F(), ei = /* @__PURE__ */ new F(), ti = /* @__PURE__ */ new F(), sn = /* @__PURE__ */ new F();
function Fi(i, e, t, n, r) {
  for (let a = 0, s = i.length - 3; a <= s; a += 3) {
    sn.fromArray(i, a);
    const o = r.x * Math.abs(sn.x) + r.y * Math.abs(sn.y) + r.z * Math.abs(sn.z), c = e.dot(sn), l = t.dot(sn), u = n.dot(sn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o)
      return !1;
  }
  return !0;
}
const Za = /* @__PURE__ */ new Zn(), Vn = /* @__PURE__ */ new F(), Ni = /* @__PURE__ */ new F();
class ur {
  /**
   * Constructs a new sphere.
   *
   * @param {Vector3} [center=(0,0,0)] - The center of the sphere
   * @param {number} [radius=-1] - The radius of the sphere.
   */
  constructor(e = new F(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  /**
   * Sets the sphere's components by copying the given values.
   *
   * @param {Vector3} center - The center.
   * @param {number} radius - The radius.
   * @return {Sphere} A reference to this sphere.
   */
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  /**
   * Computes the minimum bounding sphere for list of points.
   * If the optional center point is given, it is used as the sphere's
   * center. Otherwise, the center of the axis-aligned bounding box
   * encompassing the points is calculated.
   *
   * @param {Array<Vector3>} points - A list of points in 3D space.
   * @param {Vector3} [optionalCenter] - The center of the sphere.
   * @return {Sphere} A reference to this sphere.
   */
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Za.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let a = 0, s = e.length; a < s; a++)
      r = Math.max(r, n.distanceToSquared(e[a]));
    return this.radius = Math.sqrt(r), this;
  }
  /**
   * Copies the values of the given sphere to this instance.
   *
   * @param {Sphere} sphere - The sphere to copy.
   * @return {Sphere} A reference to this sphere.
   */
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  /**
   * Returns `true` if the sphere is empty (the radius set to a negative number).
   *
   * Spheres with a radius of `0` contain only their center point and are not
   * considered to be empty.
   *
   * @return {boolean} Whether this sphere is empty or not.
   */
  isEmpty() {
    return this.radius < 0;
  }
  /**
   * Makes this sphere empty which means in encloses a zero space in 3D.
   *
   * @return {Sphere} A reference to this sphere.
   */
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  /**
   * Returns `true` if this sphere contains the given point inclusive of
   * the surface of the sphere.
   *
   * @param {Vector3} point - The point to check.
   * @return {boolean} Whether this sphere contains the given point or not.
   */
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  /**
   * Returns the closest distance from the boundary of the sphere to the
   * given point. If the sphere contains the point, the distance will
   * be negative.
   *
   * @param {Vector3} point - The point to compute the distance to.
   * @return {number} The distance to the point.
   */
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  /**
   * Returns `true` if this sphere intersects with the given one.
   *
   * @param {Sphere} sphere - The sphere to test.
   * @return {boolean} Whether this sphere intersects with the given one or not.
   */
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  /**
   * Returns `true` if this sphere intersects with the given box.
   *
   * @param {Box3} box - The box to test.
   * @return {boolean} Whether this sphere intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  /**
   * Returns `true` if this sphere intersects with the given plane.
   *
   * @param {Plane} plane - The plane to test.
   * @return {boolean} Whether this sphere intersects with the given plane or not.
   */
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  /**
   * Clamps a point within the sphere. If the point is outside the sphere, it
   * will clamp it to the closest point on the edge of the sphere. Points
   * already inside the sphere will not be affected.
   *
   * @param {Vector3} point - The plane to clamp.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The clamped point.
   */
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  /**
   * Returns a bounding box that encloses this sphere.
   *
   * @param {Box3} target - The target box that is used to store the method's result.
   * @return {Box3} The bounding box that encloses this sphere.
   */
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  /**
   * Transforms this sphere with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @return {Sphere} A reference to this sphere.
   */
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  /**
   * Translates the sphere's center by the given offset.
   *
   * @param {Vector3} offset - The offset.
   * @return {Sphere} A reference to this sphere.
   */
  translate(e) {
    return this.center.add(e), this;
  }
  /**
   * Expands the boundaries of this sphere to include the given point.
   *
   * @param {Vector3} point - The point to include.
   * @return {Sphere} A reference to this sphere.
   */
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Vn.subVectors(e, this.center);
    const t = Vn.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(Vn, r / n), this.radius += r;
    }
    return this;
  }
  /**
   * Expands this sphere to enclose both the original sphere and the given sphere.
   *
   * @param {Sphere} sphere - The sphere to include.
   * @return {Sphere} A reference to this sphere.
   */
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ni.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Vn.copy(e.center).add(Ni)), this.expandByPoint(Vn.copy(e.center).sub(Ni))), this);
  }
  /**
   * Returns `true` if this sphere is equal with the given one.
   *
   * @param {Sphere} sphere - The sphere to test for equality.
   * @return {boolean} Whether this bounding sphere is equal with the given one.
   */
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  /**
   * Returns a new sphere with copied values from this instance.
   *
   * @return {Sphere} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @return {Object} Serialized structure with fields representing the object state.
   */
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  /**
   * Returns a serialized structure of the bounding sphere.
   *
   * @param {Object} json - The serialized json to set the sphere from.
   * @return {Box3} A reference to this bounding sphere.
   */
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
const Ht = /* @__PURE__ */ new F(), Oi = /* @__PURE__ */ new F(), ni = /* @__PURE__ */ new F(), Zt = /* @__PURE__ */ new F(), Bi = /* @__PURE__ */ new F(), ii = /* @__PURE__ */ new F(), zi = /* @__PURE__ */ new F();
class $a {
  /**
   * Constructs a new ray.
   *
   * @param {Vector3} [origin=(0,0,0)] - The origin of the ray.
   * @param {Vector3} [direction=(0,0,-1)] - The (normalized) direction of the ray.
   */
  constructor(e = new F(), t = new F(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  /**
   * Sets the ray's components by copying the given values.
   *
   * @param {Vector3} origin - The origin.
   * @param {Vector3} direction - The direction.
   * @return {Ray} A reference to this ray.
   */
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  /**
   * Copies the values of the given ray to this instance.
   *
   * @param {Ray} ray - The ray to copy.
   * @return {Ray} A reference to this ray.
   */
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  /**
   * Returns a vector that is located at a given distance along this ray.
   *
   * @param {number} t - The distance along the ray to retrieve a position for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} A position on the ray.
   */
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  /**
   * Adjusts the direction of the ray to point at the given vector in world space.
   *
   * @param {Vector3} v - The target position.
   * @return {Ray} A reference to this ray.
   */
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  /**
   * Shift the origin of this ray along its direction by the given distance.
   *
   * @param {number} t - The distance along the ray to interpolate.
   * @return {Ray} A reference to this ray.
   */
  recast(e) {
    return this.origin.copy(this.at(e, Ht)), this;
  }
  /**
   * Returns the point along this ray that is closest to the given point.
   *
   * @param {Vector3} point - A point in 3D space to get the closet location on the ray for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on this ray.
   */
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  /**
   * Returns the distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The distance.
   */
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  /**
   * Returns the squared distance of the closest approach between this ray and the given point.
   *
   * @param {Vector3} point - A point in 3D space to compute the distance to.
   * @return {number} The squared distance.
   */
  distanceSqToPoint(e) {
    const t = Ht.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Ht.copy(this.origin).addScaledVector(this.direction, t), Ht.distanceToSquared(e));
  }
  /**
   * Returns the squared distance between this ray and the given line segment.
   *
   * @param {Vector3} v0 - The start point of the line segment.
   * @param {Vector3} v1 - The end point of the line segment.
   * @param {Vector3} [optionalPointOnRay] - When provided, it receives the point on this ray that is closest to the segment.
   * @param {Vector3} [optionalPointOnSegment] - When provided, it receives the point on the line segment that is closest to this ray.
   * @return {number} The squared distance.
   */
  distanceSqToSegment(e, t, n, r) {
    Oi.copy(e).add(t).multiplyScalar(0.5), ni.copy(t).sub(e).normalize(), Zt.copy(this.origin).sub(Oi);
    const a = e.distanceTo(t) * 0.5, s = -this.direction.dot(ni), o = Zt.dot(this.direction), c = -Zt.dot(ni), l = Zt.lengthSq(), u = Math.abs(1 - s * s);
    let h, f, p, v;
    if (u > 0)
      if (h = s * c - o, f = s * o - c, v = a * u, h >= 0)
        if (f >= -v)
          if (f <= v) {
            const S = 1 / u;
            h *= S, f *= S, p = h * (h + s * f + 2 * o) + f * (s * h + f + 2 * c) + l;
          } else
            f = a, h = Math.max(0, -(s * f + o)), p = -h * h + f * (f + 2 * c) + l;
        else
          f = -a, h = Math.max(0, -(s * f + o)), p = -h * h + f * (f + 2 * c) + l;
      else
        f <= -v ? (h = Math.max(0, -(-s * a + o)), f = h > 0 ? -a : Math.min(Math.max(-a, -c), a), p = -h * h + f * (f + 2 * c) + l) : f <= v ? (h = 0, f = Math.min(Math.max(-a, -c), a), p = f * (f + 2 * c) + l) : (h = Math.max(0, -(s * a + o)), f = h > 0 ? a : Math.min(Math.max(-a, -c), a), p = -h * h + f * (f + 2 * c) + l);
    else
      f = s > 0 ? -a : a, h = Math.max(0, -(s * f + o)), p = -h * h + f * (f + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, h), r && r.copy(Oi).addScaledVector(ni, f), p;
  }
  /**
   * Intersects this ray with the given sphere, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectSphere(e, t) {
    Ht.subVectors(e.center, this.origin);
    const n = Ht.dot(this.direction), r = Ht.dot(Ht) - n * n, a = e.radius * e.radius;
    if (r > a) return null;
    const s = Math.sqrt(a - r), o = n - s, c = n + s;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  /**
   * Returns `true` if this ray intersects with the given sphere.
   *
   * @param {Sphere} sphere - The sphere to intersect.
   * @return {boolean} Whether this ray intersects with the given sphere or not.
   */
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  /**
   * Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
   * does not intersect with the plane.
   *
   * @param {Plane} plane - The plane to compute the distance to.
   * @return {?number} Whether this ray intersects with the given sphere or not.
   */
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  /**
   * Intersects this ray with the given plane, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Plane} plane - The plane to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  /**
   * Returns `true` if this ray intersects with the given plane.
   *
   * @param {Plane} plane - The plane to intersect.
   * @return {boolean} Whether this ray intersects with the given plane or not.
   */
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  /**
   * Intersects this ray with the given bounding box, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Box3} box - The box to intersect.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectBox(e, t) {
    let n, r, a, s, o, c;
    const l = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (e.min.x - f.x) * l, r = (e.max.x - f.x) * l) : (n = (e.max.x - f.x) * l, r = (e.min.x - f.x) * l), u >= 0 ? (a = (e.min.y - f.y) * u, s = (e.max.y - f.y) * u) : (a = (e.max.y - f.y) * u, s = (e.min.y - f.y) * u), n > s || a > r || ((a > n || isNaN(n)) && (n = a), (s < r || isNaN(r)) && (r = s), h >= 0 ? (o = (e.min.z - f.z) * h, c = (e.max.z - f.z) * h) : (o = (e.max.z - f.z) * h, c = (e.min.z - f.z) * h), n > c || o > r) || ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  /**
   * Returns `true` if this ray intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this ray intersects with the given box or not.
   */
  intersectsBox(e) {
    return this.intersectBox(e, Ht) !== null;
  }
  /**
   * Intersects this ray with the given triangle, returning the intersection
   * point or `null` if there is no intersection.
   *
   * @param {Vector3} a - The first vertex of the triangle.
   * @param {Vector3} b - The second vertex of the triangle.
   * @param {Vector3} c - The third vertex of the triangle.
   * @param {boolean} backfaceCulling - Whether to use backface culling or not.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectTriangle(e, t, n, r, a) {
    Bi.subVectors(t, e), ii.subVectors(n, e), zi.crossVectors(Bi, ii);
    let s = this.direction.dot(zi), o;
    if (s > 0) {
      if (r) return null;
      o = 1;
    } else if (s < 0)
      o = -1, s = -s;
    else
      return null;
    Zt.subVectors(this.origin, e);
    const c = o * this.direction.dot(ii.crossVectors(Zt, ii));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(Bi.cross(Zt));
    if (l < 0 || c + l > s)
      return null;
    const u = -o * Zt.dot(zi);
    return u < 0 ? null : this.at(u / s, a);
  }
  /**
   * Transforms this ray with the given 4x4 transformation matrix.
   *
   * @param {Matrix4} matrix4 - The transformation matrix.
   * @return {Ray} A reference to this ray.
   */
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  /**
   * Returns `true` if this ray is equal with the given one.
   *
   * @param {Ray} ray - The ray to test for equality.
   * @return {boolean} Whether this ray is equal with the given one.
   */
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  /**
   * Returns a new ray with copied values from this instance.
   *
   * @return {Ray} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class rt {
  /**
   * Constructs a new 4x4 matrix. The arguments are supposed to be
   * in row-major order. If no arguments are provided, the constructor
   * initializes the matrix as an identity matrix.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   */
  constructor(e, t, n, r, a, s, o, c, l, u, h, f, p, v, S, m) {
    rt.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, r, a, s, o, c, l, u, h, f, p, v, S, m);
  }
  /**
   * Sets the elements of the matrix.The arguments are supposed to be
   * in row-major order.
   *
   * @param {number} [n11] - 1-1 matrix element.
   * @param {number} [n12] - 1-2 matrix element.
   * @param {number} [n13] - 1-3 matrix element.
   * @param {number} [n14] - 1-4 matrix element.
   * @param {number} [n21] - 2-1 matrix element.
   * @param {number} [n22] - 2-2 matrix element.
   * @param {number} [n23] - 2-3 matrix element.
   * @param {number} [n24] - 2-4 matrix element.
   * @param {number} [n31] - 3-1 matrix element.
   * @param {number} [n32] - 3-2 matrix element.
   * @param {number} [n33] - 3-3 matrix element.
   * @param {number} [n34] - 3-4 matrix element.
   * @param {number} [n41] - 4-1 matrix element.
   * @param {number} [n42] - 4-2 matrix element.
   * @param {number} [n43] - 4-3 matrix element.
   * @param {number} [n44] - 4-4 matrix element.
   * @return {Matrix4} A reference to this matrix.
   */
  set(e, t, n, r, a, s, o, c, l, u, h, f, p, v, S, m) {
    const d = this.elements;
    return d[0] = e, d[4] = t, d[8] = n, d[12] = r, d[1] = a, d[5] = s, d[9] = o, d[13] = c, d[2] = l, d[6] = u, d[10] = h, d[14] = f, d[3] = p, d[7] = v, d[11] = S, d[15] = m, this;
  }
  /**
   * Sets this matrix to the 4x4 identity matrix.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Returns a matrix with copied values from this instance.
   *
   * @return {Matrix4} A clone of this instance.
   */
  clone() {
    return new rt().fromArray(this.elements);
  }
  /**
   * Copies the values of the given matrix to this instance.
   *
   * @param {Matrix4} m - The matrix to copy.
   * @return {Matrix4} A reference to this matrix.
   */
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  /**
   * Copies the translation component of the given matrix
   * into this matrix's translation component.
   *
   * @param {Matrix4} m - The matrix to copy the translation component.
   * @return {Matrix4} A reference to this matrix.
   */
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  /**
   * Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.
   *
   * @param {Matrix3} m - The 3x3 matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the basis of this matrix into the three axis vectors provided.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  /**
   * Sets the given basis vectors to this matrix.
   *
   * @param {Vector3} xAxis - The basis's x axis.
   * @param {Vector3} yAxis - The basis's y axis.
   * @param {Vector3} zAxis - The basis's z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Extracts the rotation component of the given matrix
   * into this matrix's rotation component.
   *
   * Note: This method does not support reflection matrices.
   *
   * @param {Matrix4} m - The matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / En.setFromMatrixColumn(e, 0).length(), a = 1 / En.setFromMatrixColumn(e, 1).length(), s = 1 / En.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = 0, t[8] = n[8] * s, t[9] = n[9] * s, t[10] = n[10] * s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component (the upper left 3x3 matrix) of this matrix to
   * the rotation specified by the given Euler angles. The rest of
   * the matrix is set to the identity. Depending on the {@link Euler#order},
   * there are six possible outcomes. See [this page]{@link https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix}
   * for a complete list.
   *
   * @param {Euler} euler - The Euler angles.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, a = e.z, s = Math.cos(n), o = Math.sin(n), c = Math.cos(r), l = Math.sin(r), u = Math.cos(a), h = Math.sin(a);
    if (e.order === "XYZ") {
      const f = s * u, p = s * h, v = o * u, S = o * h;
      t[0] = c * u, t[4] = -c * h, t[8] = l, t[1] = p + v * l, t[5] = f - S * l, t[9] = -o * c, t[2] = S - f * l, t[6] = v + p * l, t[10] = s * c;
    } else if (e.order === "YXZ") {
      const f = c * u, p = c * h, v = l * u, S = l * h;
      t[0] = f + S * o, t[4] = v * o - p, t[8] = s * l, t[1] = s * h, t[5] = s * u, t[9] = -o, t[2] = p * o - v, t[6] = S + f * o, t[10] = s * c;
    } else if (e.order === "ZXY") {
      const f = c * u, p = c * h, v = l * u, S = l * h;
      t[0] = f - S * o, t[4] = -s * h, t[8] = v + p * o, t[1] = p + v * o, t[5] = s * u, t[9] = S - f * o, t[2] = -s * l, t[6] = o, t[10] = s * c;
    } else if (e.order === "ZYX") {
      const f = s * u, p = s * h, v = o * u, S = o * h;
      t[0] = c * u, t[4] = v * l - p, t[8] = f * l + S, t[1] = c * h, t[5] = S * l + f, t[9] = p * l - v, t[2] = -l, t[6] = o * c, t[10] = s * c;
    } else if (e.order === "YZX") {
      const f = s * c, p = s * l, v = o * c, S = o * l;
      t[0] = c * u, t[4] = S - f * h, t[8] = v * h + p, t[1] = h, t[5] = s * u, t[9] = -o * u, t[2] = -l * u, t[6] = p * h + v, t[10] = f - S * h;
    } else if (e.order === "XZY") {
      const f = s * c, p = s * l, v = o * c, S = o * l;
      t[0] = c * u, t[4] = -h, t[8] = l * u, t[1] = f * h + S, t[5] = s * u, t[9] = p * h - v, t[2] = v * h - p, t[6] = o * u, t[10] = S * h + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  /**
   * Sets the rotation component of this matrix to the rotation specified by
   * the given Quaternion as outlined [here]{@link https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion}
   * The rest of the matrix is set to the identity.
   *
   * @param {Quaternion} q - The Quaternion.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationFromQuaternion(e) {
    return this.compose(ja, e, Ja);
  }
  /**
   * Sets the rotation component of the transformation matrix, looking from `eye` towards
   * `target`, and oriented by the up-direction.
   *
   * @param {Vector3} eye - The eye vector.
   * @param {Vector3} target - The target vector.
   * @param {Vector3} up - The up vector.
   * @return {Matrix4} A reference to this matrix.
   */
  lookAt(e, t, n) {
    const r = this.elements;
    return yt.subVectors(e, t), yt.lengthSq() === 0 && (yt.z = 1), yt.normalize(), $t.crossVectors(n, yt), $t.lengthSq() === 0 && (Math.abs(n.z) === 1 ? yt.x += 1e-4 : yt.z += 1e-4, yt.normalize(), $t.crossVectors(n, yt)), $t.normalize(), ri.crossVectors(yt, $t), r[0] = $t.x, r[4] = ri.x, r[8] = yt.x, r[1] = $t.y, r[5] = ri.y, r[9] = yt.y, r[2] = $t.z, r[6] = ri.z, r[10] = yt.z, this;
  }
  /**
   * Post-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  /**
   * Pre-multiplies this matrix by the given 4x4 matrix.
   *
   * @param {Matrix4} m - The matrix to multiply with.
   * @return {Matrix4} A reference to this matrix.
   */
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  /**
   * Multiples the given 4x4 matrices and stores the result
   * in this matrix.
   *
   * @param {Matrix4} a - The first matrix.
   * @param {Matrix4} b - The second matrix.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, a = this.elements, s = n[0], o = n[4], c = n[8], l = n[12], u = n[1], h = n[5], f = n[9], p = n[13], v = n[2], S = n[6], m = n[10], d = n[14], A = n[3], y = n[7], E = n[11], C = n[15], R = r[0], D = r[4], N = r[8], M = r[12], x = r[1], P = r[5], z = r[9], H = r[13], X = r[2], K = r[6], W = r[10], te = r[14], G = r[3], ae = r[7], ce = r[11], Ee = r[15];
    return a[0] = s * R + o * x + c * X + l * G, a[4] = s * D + o * P + c * K + l * ae, a[8] = s * N + o * z + c * W + l * ce, a[12] = s * M + o * H + c * te + l * Ee, a[1] = u * R + h * x + f * X + p * G, a[5] = u * D + h * P + f * K + p * ae, a[9] = u * N + h * z + f * W + p * ce, a[13] = u * M + h * H + f * te + p * Ee, a[2] = v * R + S * x + m * X + d * G, a[6] = v * D + S * P + m * K + d * ae, a[10] = v * N + S * z + m * W + d * ce, a[14] = v * M + S * H + m * te + d * Ee, a[3] = A * R + y * x + E * X + C * G, a[7] = A * D + y * P + E * K + C * ae, a[11] = A * N + y * z + E * W + C * ce, a[15] = A * M + y * H + E * te + C * Ee, this;
  }
  /**
   * Multiplies every component of the matrix by the given scalar.
   *
   * @param {number} s - The scalar.
   * @return {Matrix4} A reference to this matrix.
   */
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  /**
   * Computes and returns the determinant of this matrix.
   *
   * Based on the method outlined [here]{@link http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html}.
   *
   * @return {number} The determinant.
   */
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], a = e[12], s = e[1], o = e[5], c = e[9], l = e[13], u = e[2], h = e[6], f = e[10], p = e[14], v = e[3], S = e[7], m = e[11], d = e[15];
    return v * (+a * c * h - r * l * h - a * o * f + n * l * f + r * o * p - n * c * p) + S * (+t * c * p - t * l * f + a * s * f - r * s * p + r * l * u - a * c * u) + m * (+t * l * h - t * o * p - a * s * h + n * s * p + a * o * u - n * l * u) + d * (-r * o * u - t * c * h + t * o * f + r * s * h - n * s * f + n * c * u);
  }
  /**
   * Transposes this matrix in place.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  /**
   * Sets the position component for this matrix from the given vector,
   * without affecting the rest of the matrix.
   *
   * @param {number|Vector3} x - The x component of the vector or alternatively the vector object.
   * @param {number} y - The y component of the vector.
   * @param {number} z - The z component of the vector.
   * @return {Matrix4} A reference to this matrix.
   */
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  /**
   * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
   * You can not invert with a determinant of zero. If you attempt this, the method produces
   * a zero matrix instead.
   *
   * @return {Matrix4} A reference to this matrix.
   */
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], a = e[3], s = e[4], o = e[5], c = e[6], l = e[7], u = e[8], h = e[9], f = e[10], p = e[11], v = e[12], S = e[13], m = e[14], d = e[15], A = h * m * l - S * f * l + S * c * p - o * m * p - h * c * d + o * f * d, y = v * f * l - u * m * l - v * c * p + s * m * p + u * c * d - s * f * d, E = u * S * l - v * h * l + v * o * p - s * S * p - u * o * d + s * h * d, C = v * h * c - u * S * c - v * o * f + s * S * f + u * o * m - s * h * m, R = t * A + n * y + r * E + a * C;
    if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const D = 1 / R;
    return e[0] = A * D, e[1] = (S * f * a - h * m * a - S * r * p + n * m * p + h * r * d - n * f * d) * D, e[2] = (o * m * a - S * c * a + S * r * l - n * m * l - o * r * d + n * c * d) * D, e[3] = (h * c * a - o * f * a - h * r * l + n * f * l + o * r * p - n * c * p) * D, e[4] = y * D, e[5] = (u * m * a - v * f * a + v * r * p - t * m * p - u * r * d + t * f * d) * D, e[6] = (v * c * a - s * m * a - v * r * l + t * m * l + s * r * d - t * c * d) * D, e[7] = (s * f * a - u * c * a + u * r * l - t * f * l - s * r * p + t * c * p) * D, e[8] = E * D, e[9] = (v * h * a - u * S * a - v * n * p + t * S * p + u * n * d - t * h * d) * D, e[10] = (s * S * a - v * o * a + v * n * l - t * S * l - s * n * d + t * o * d) * D, e[11] = (u * o * a - s * h * a - u * n * l + t * h * l + s * n * p - t * o * p) * D, e[12] = C * D, e[13] = (u * S * r - v * h * r + v * n * f - t * S * f - u * n * m + t * h * m) * D, e[14] = (v * o * r - s * S * r - v * n * c + t * S * c + s * n * m - t * o * m) * D, e[15] = (s * h * r - u * o * r + u * n * c - t * h * c - s * n * f + t * o * f) * D, this;
  }
  /**
   * Multiplies the columns of this matrix by the given vector.
   *
   * @param {Vector3} v - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, a = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= a, t[1] *= n, t[5] *= r, t[9] *= a, t[2] *= n, t[6] *= r, t[10] *= a, t[3] *= n, t[7] *= r, t[11] *= a, this;
  }
  /**
   * Gets the maximum scale value of the three axes.
   *
   * @return {number} The maximum scale.
   */
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  /**
   * Sets this matrix as a translation transform from the given vector.
   *
   * @param {number|Vector3} x - The amount to translate in the X axis or alternatively a translation vector.
   * @param {number} y - The amount to translate in the Y axis.
   * @param {number} z - The amount to translate in the z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the X axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Y axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the Z axis by
   * the given angle.
   *
   * @param {number} theta - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a rotational transformation around the given axis by
   * the given angle.
   *
   * This is a somewhat controversial but mathematically sound alternative to
   * rotating via Quaternions. See the discussion [here]{@link https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199}.
   *
   * @param {Vector3} axis - The normalized rotation axis.
   * @param {number} angle - The rotation in radians.
   * @return {Matrix4} A reference to this matrix.
   */
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), a = 1 - n, s = e.x, o = e.y, c = e.z, l = a * s, u = a * o;
    return this.set(
      l * s + n,
      l * o - r * c,
      l * c + r * o,
      0,
      l * o + r * c,
      u * o + n,
      u * c - r * s,
      0,
      l * c - r * o,
      u * c + r * s,
      a * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a scale transformation.
   *
   * @param {number} x - The amount to scale in the X axis.
   * @param {number} y - The amount to scale in the Y axis.
   * @param {number} z - The amount to scale in the Z axis.
   * @return {Matrix4} A reference to this matrix.
   */
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix as a shear transformation.
   *
   * @param {number} xy - The amount to shear X by Y.
   * @param {number} xz - The amount to shear X by Z.
   * @param {number} yx - The amount to shear Y by X.
   * @param {number} yz - The amount to shear Y by Z.
   * @param {number} zx - The amount to shear Z by X.
   * @param {number} zy - The amount to shear Z by Y.
   * @return {Matrix4} A reference to this matrix.
   */
  makeShear(e, t, n, r, a, s) {
    return this.set(
      1,
      n,
      a,
      0,
      e,
      1,
      s,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  /**
   * Sets this matrix to the transformation composed of the given position,
   * rotation (Quaternion) and scale.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  compose(e, t, n) {
    const r = this.elements, a = t._x, s = t._y, o = t._z, c = t._w, l = a + a, u = s + s, h = o + o, f = a * l, p = a * u, v = a * h, S = s * u, m = s * h, d = o * h, A = c * l, y = c * u, E = c * h, C = n.x, R = n.y, D = n.z;
    return r[0] = (1 - (S + d)) * C, r[1] = (p + E) * C, r[2] = (v - y) * C, r[3] = 0, r[4] = (p - E) * R, r[5] = (1 - (f + d)) * R, r[6] = (m + A) * R, r[7] = 0, r[8] = (v + y) * D, r[9] = (m - A) * D, r[10] = (1 - (f + S)) * D, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  /**
   * Decomposes this matrix into its position, rotation and scale components
   * and provides the result in the given objects.
   *
   * Note: Not all matrices are decomposable in this way. For example, if an
   * object has a non-uniformly scaled parent, then the object's world matrix
   * may not be decomposable, and this method may not be appropriate.
   *
   * @param {Vector3} position - The position vector.
   * @param {Quaternion} quaternion - The rotation as a Quaternion.
   * @param {Vector3} scale - The scale vector.
   * @return {Matrix4} A reference to this matrix.
   */
  decompose(e, t, n) {
    const r = this.elements;
    let a = En.set(r[0], r[1], r[2]).length();
    const s = En.set(r[4], r[5], r[6]).length(), o = En.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (a = -a), e.x = r[12], e.y = r[13], e.z = r[14], Lt.copy(this);
    const l = 1 / a, u = 1 / s, h = 1 / o;
    return Lt.elements[0] *= l, Lt.elements[1] *= l, Lt.elements[2] *= l, Lt.elements[4] *= u, Lt.elements[5] *= u, Lt.elements[6] *= u, Lt.elements[8] *= h, Lt.elements[9] *= h, Lt.elements[10] *= h, t.setFromRotationMatrix(Lt), n.x = a, n.y = s, n.z = o, this;
  }
  /**
  	 * Creates a perspective projection matrix. This is used internally by
  	 * {@link PerspectiveCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makePerspective(e, t, n, r, a, s, o = 2e3, c = !1) {
    const l = this.elements, u = 2 * a / (t - e), h = 2 * a / (n - r), f = (t + e) / (t - e), p = (n + r) / (n - r);
    let v, S;
    if (c)
      v = a / (s - a), S = s * a / (s - a);
    else if (o === 2e3)
      v = -(s + a) / (s - a), S = -2 * s * a / (s - a);
    else if (o === 2001)
      v = -s / (s - a), S = -s * a / (s - a);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = h, l[9] = p, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = v, l[14] = S, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  /**
  	 * Creates a orthographic projection matrix. This is used internally by
  	 * {@link OrthographicCamera#updateProjectionMatrix}.
  
  	 * @param {number} left - Left boundary of the viewing frustum at the near plane.
  	 * @param {number} right - Right boundary of the viewing frustum at the near plane.
  	 * @param {number} top - Top boundary of the viewing frustum at the near plane.
  	 * @param {number} bottom - Bottom boundary of the viewing frustum at the near plane.
  	 * @param {number} near - The distance from the camera to the near plane.
  	 * @param {number} far - The distance from the camera to the far plane.
  	 * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} [coordinateSystem=WebGLCoordinateSystem] - The coordinate system.
  	 * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
  	 * @return {Matrix4} A reference to this matrix.
  	 */
  makeOrthographic(e, t, n, r, a, s, o = 2e3, c = !1) {
    const l = this.elements, u = 2 / (t - e), h = 2 / (n - r), f = -(t + e) / (t - e), p = -(n + r) / (n - r);
    let v, S;
    if (c)
      v = 1 / (s - a), S = s / (s - a);
    else if (o === 2e3)
      v = -2 / (s - a), S = -(s + a) / (s - a);
    else if (o === 2001)
      v = -1 / (s - a), S = -a / (s - a);
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = h, l[9] = 0, l[13] = p, l[2] = 0, l[6] = 0, l[10] = v, l[14] = S, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  /**
   * Returns `true` if this matrix is equal with the given one.
   *
   * @param {Matrix4} matrix - The matrix to test for equality.
   * @return {boolean} Whether this matrix is equal with the given one.
   */
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r]) return !1;
    return !0;
  }
  /**
   * Sets the elements of the matrix from the given array.
   *
   * @param {Array<number>} array - The matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Matrix4} A reference to this matrix.
   */
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  /**
   * Writes the elements of this matrix to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The matrix elements in column-major order.
   */
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const En = /* @__PURE__ */ new F(), Lt = /* @__PURE__ */ new rt(), ja = /* @__PURE__ */ new F(0, 0, 0), Ja = /* @__PURE__ */ new F(1, 1, 1), $t = /* @__PURE__ */ new F(), ri = /* @__PURE__ */ new F(), yt = /* @__PURE__ */ new F(), Ar = /* @__PURE__ */ new rt(), Rr = /* @__PURE__ */ new en();
class zt {
  /**
   * Constructs a new euler instance.
   *
   * @param {number} [x=0] - The angle of the x axis in radians.
   * @param {number} [y=0] - The angle of the y axis in radians.
   * @param {number} [z=0] - The angle of the z axis in radians.
   * @param {string} [order=Euler.DEFAULT_ORDER] - A string representing the order that the rotations are applied.
   */
  constructor(e = 0, t = 0, n = 0, r = zt.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  /**
   * The angle of the x axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  /**
   * The angle of the y axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  /**
   * The angle of the z axis in radians.
   *
   * @type {number}
   * @default 0
   */
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  /**
   * A string representing the order that the rotations are applied.
   *
   * @type {string}
   * @default 'XYZ'
   */
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  /**
   * Sets the Euler components.
   *
   * @param {number} x - The angle of the x axis in radians.
   * @param {number} y - The angle of the y axis in radians.
   * @param {number} z - The angle of the z axis in radians.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  /**
   * Returns a new Euler instance with copied values from this instance.
   *
   * @return {Euler} A clone of this instance.
   */
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  /**
   * Copies the values of the given Euler instance to this instance.
   *
   * @param {Euler} euler - The Euler instance to copy.
   * @return {Euler} A reference to this Euler instance.
   */
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a pure rotation matrix.
   *
   * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements, a = r[0], s = r[4], o = r[8], c = r[1], l = r[5], u = r[9], h = r[2], f = r[6], p = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Be(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-s, a)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Be(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-h, a), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Be(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-h, p), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(c, a));
        break;
      case "ZYX":
        this._y = Math.asin(-Be(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(f, p), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-s, l));
        break;
      case "YZX":
        this._z = Math.asin(Be(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-h, a)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Be(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(o, a)) : (this._x = Math.atan2(-u, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  /**
   * Sets the angles of this Euler instance from a normalized quaternion.
   *
   * @param {Quaternion} q - A normalized Quaternion.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @param {boolean} [update=true] - Whether the internal `onChange` callback should be executed or not.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromQuaternion(e, t, n) {
    return Ar.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ar, t, n);
  }
  /**
   * Sets the angles of this Euler instance from the given vector.
   *
   * @param {Vector3} v - The vector.
   * @param {string} [order] - A string representing the order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  /**
   * Resets the euler angle with a new order by creating a quaternion from this
   * euler angle and then setting this euler angle with the quaternion and the
   * new order.
   *
   * Warning: This discards revolution information.
   *
   * @param {string} [newOrder] - A string representing the new order that the rotations are applied.
   * @return {Euler} A reference to this Euler instance.
   */
  reorder(e) {
    return Rr.setFromEuler(this), this.setFromQuaternion(Rr, e);
  }
  /**
   * Returns `true` if this Euler instance is equal with the given one.
   *
   * @param {Euler} euler - The Euler instance to test for equality.
   * @return {boolean} Whether this Euler instance is equal with the given one.
   */
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  /**
   * Sets this Euler instance's components to values from the given array. The first three
   * entries of the array are assign to the x,y and z components. An optional fourth entry
   * defines the Euler order.
   *
   * @param {Array<number,number,number,?string>} array - An array holding the Euler component values.
   * @return {Euler} A reference to this Euler instance.
   */
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  /**
   * Writes the components of this Euler instance to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number,number,number,string>} [array=[]] - The target array holding the Euler components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number,number,number,string>} The Euler components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
zt.DEFAULT_ORDER = "XYZ";
class va {
  /**
   * Constructs a new layers instance, with membership
   * initially set to layer `0`.
   */
  constructor() {
    this.mask = 1;
  }
  /**
   * Sets membership to the given layer, and remove membership all other layers.
   *
   * @param {number} layer - The layer to set.
   */
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  /**
   * Adds membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  /**
   * Adds membership to all layers.
   */
  enableAll() {
    this.mask = -1;
  }
  /**
   * Toggles the membership of the given layer.
   *
   * @param {number} layer - The layer to toggle.
   */
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  /**
   * Removes membership of the given layer.
   *
   * @param {number} layer - The layer to enable.
   */
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  /**
   * Removes the membership from all layers.
   */
  disableAll() {
    this.mask = 0;
  }
  /**
   * Returns `true` if this and the given layers object have at least one
   * layer in common.
   *
   * @param {Layers} layers - The layers to test.
   * @return {boolean } Whether this and the given layers object have at least one layer in common or not.
   */
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  /**
   * Returns `true` if the given layer is enabled.
   *
   * @param {number} layer - The layer to test.
   * @return {boolean } Whether the given layer is enabled or not.
   */
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Qa = 0;
const wr = /* @__PURE__ */ new F(), Tn = /* @__PURE__ */ new en(), kt = /* @__PURE__ */ new rt(), ai = /* @__PURE__ */ new F(), Hn = /* @__PURE__ */ new F(), es = /* @__PURE__ */ new F(), ts = /* @__PURE__ */ new en(), Cr = /* @__PURE__ */ new F(1, 0, 0), Pr = /* @__PURE__ */ new F(0, 1, 0), Dr = /* @__PURE__ */ new F(0, 0, 1), Lr = { type: "added" }, ns = { type: "removed" }, yn = { type: "childadded", child: null }, Gi = { type: "childremoved", child: null };
class At extends Nn {
  /**
   * Constructs a new 3D object.
   */
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Qa++ }), this.uuid = Kn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = At.DEFAULT_UP.clone();
    const e = new F(), t = new zt(), n = new en(), r = new F(1, 1, 1);
    function a() {
      n.setFromEuler(t, !1);
    }
    function s() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(a), n._onChange(s), Object.defineProperties(this, {
      /**
       * Represents the object's local position.
       *
       * @name Object3D#position
       * @type {Vector3}
       * @default (0,0,0)
       */
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      /**
       * Represents the object's local rotation as Euler angles, in radians.
       *
       * @name Object3D#rotation
       * @type {Euler}
       * @default (0,0,0)
       */
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      /**
       * Represents the object's local rotation as Quaternions.
       *
       * @name Object3D#quaternion
       * @type {Quaternion}
       */
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      /**
       * Represents the object's local scale.
       *
       * @name Object3D#scale
       * @type {Vector3}
       * @default (1,1,1)
       */
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      /**
       * Represents the object's model-view matrix.
       *
       * @name Object3D#modelViewMatrix
       * @type {Matrix4}
       */
      modelViewMatrix: {
        value: new rt()
      },
      /**
       * Represents the object's normal matrix.
       *
       * @name Object3D#normalMatrix
       * @type {Matrix3}
       */
      normalMatrix: {
        value: new Ue()
      }
    }), this.matrix = new rt(), this.matrixWorld = new rt(), this.matrixAutoUpdate = At.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new va(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeShadow() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered to a shadow map.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {Camera} shadowCamera - The shadow camera.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} depthMaterial - The depth material.
   * @param {Object} group - The geometry group data.
   */
  onAfterShadow() {
  }
  /**
   * A callback that is executed immediately before a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * A callback that is executed immediately after a 3D object is rendered.
   *
   * @param {Renderer|WebGLRenderer} renderer - The renderer.
   * @param {Object3D} object - The 3D object.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Material} material - The 3D object's material.
   * @param {Object} group - The geometry group data.
   */
  onAfterRender() {
  }
  /**
   * Applies the given transformation matrix to the object and updates the object's position,
   * rotation and scale.
   *
   * @param {Matrix4} matrix - The transformation matrix.
   */
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  /**
   * Applies a rotation represented by given the quaternion to the 3D object.
   *
   * @param {Quaternion} q - The quaternion.
   * @return {Object3D} A reference to this instance.
   */
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  /**
   * Sets the given rotation represented as an axis/angle couple to the 3D object.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   */
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  /**
   * Sets the given rotation represented as Euler angles to the 3D object.
   *
   * @param {Euler} euler - The Euler angles.
   */
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  /**
   * Sets the given rotation represented as rotation matrix to the 3D object.
   *
   * @param {Matrix4} m - Although a 4x4 matrix is expected, the upper 3x3 portion must be
   * a pure rotation matrix (i.e, unscaled).
   */
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  /**
   * Sets the given rotation represented as a Quaternion to the 3D object.
   *
   * @param {Quaternion} q - The Quaternion
   */
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  /**
   * Rotates the 3D object along an axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnAxis(e, t) {
    return Tn.setFromAxisAngle(e, t), this.quaternion.multiply(Tn), this;
  }
  /**
   * Rotates the 3D object along an axis in world space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateOnWorldAxis(e, t) {
    return Tn.setFromAxisAngle(e, t), this.quaternion.premultiply(Tn), this;
  }
  /**
   * Rotates the 3D object around its X axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateX(e) {
    return this.rotateOnAxis(Cr, e);
  }
  /**
   * Rotates the 3D object around its Y axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateY(e) {
    return this.rotateOnAxis(Pr, e);
  }
  /**
   * Rotates the 3D object around its Z axis in local space.
   *
   * @param {number} angle - The angle in radians.
   * @return {Object3D} A reference to this instance.
   */
  rotateZ(e) {
    return this.rotateOnAxis(Dr, e);
  }
  /**
   * Translate the 3D object by a distance along the given axis in local space.
   *
   * @param {Vector3} axis - The (normalized) axis vector.
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateOnAxis(e, t) {
    return wr.copy(e).applyQuaternion(this.quaternion), this.position.add(wr.multiplyScalar(t)), this;
  }
  /**
   * Translate the 3D object by a distance along its X-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateX(e) {
    return this.translateOnAxis(Cr, e);
  }
  /**
   * Translate the 3D object by a distance along its Y-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateY(e) {
    return this.translateOnAxis(Pr, e);
  }
  /**
   * Translate the 3D object by a distance along its Z-axis in local space.
   *
   * @param {number} distance - The distance in world units.
   * @return {Object3D} A reference to this instance.
   */
  translateZ(e) {
    return this.translateOnAxis(Dr, e);
  }
  /**
   * Converts the given vector from this 3D object's local space to world space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  /**
   * Converts the given vector from this 3D object's word space to local space.
   *
   * @param {Vector3} vector - The vector to convert.
   * @return {Vector3} The converted vector.
   */
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(kt.copy(this.matrixWorld).invert());
  }
  /**
   * Rotates the object to face a point in world space.
   *
   * This method does not support objects having non-uniformly-scaled parent(s).
   *
   * @param {number|Vector3} x - The x coordinate in world space. Alternatively, a vector representing a position in world space
   * @param {number} [y] - The y coordinate in world space.
   * @param {number} [z] - The z coordinate in world space.
   */
  lookAt(e, t, n) {
    e.isVector3 ? ai.copy(e) : ai.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), Hn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? kt.lookAt(Hn, ai, this.up) : kt.lookAt(ai, Hn, this.up), this.quaternion.setFromRotationMatrix(kt), r && (kt.extractRotation(r.matrixWorld), Tn.setFromRotationMatrix(kt), this.quaternion.premultiply(Tn.invert()));
  }
  /**
   * Adds the given 3D object as a child to this 3D object. An arbitrary number of
   * objects may be added. Any current parent on an object passed in here will be
   * removed, since an object can have at most one parent.
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to add.
   * @return {Object3D} A reference to this instance.
   */
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Lr), yn.child = e, this.dispatchEvent(yn), yn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  /**
   * Removes the given 3D object as child from this 3D object.
   * An arbitrary number of objects may be removed.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @param {Object3D} object - The 3D object to remove.
   * @return {Object3D} A reference to this instance.
   */
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(ns), Gi.child = e, this.dispatchEvent(Gi), Gi.child = null), this;
  }
  /**
   * Removes this 3D object from its current parent.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  /**
   * Removes all child objects.
   *
   * @fires Object3D#removed
   * @fires Object3D#childremoved
   * @return {Object3D} A reference to this instance.
   */
  clear() {
    return this.remove(...this.children);
  }
  /**
   * Adds the given 3D object as a child of this 3D object, while maintaining the object's world
   * transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).
   *
   * @fires Object3D#added
   * @fires Object3D#childadded
   * @param {Object3D} object - The 3D object to attach.
   * @return {Object3D} A reference to this instance.
   */
  attach(e) {
    return this.updateWorldMatrix(!0, !1), kt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), kt.multiply(e.parent.matrixWorld)), e.applyMatrix4(kt), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Lr), yn.child = e, this.dispatchEvent(yn), yn.child = null, this;
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching ID.
   *
   * @param {number} id - The id.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching name.
   *
   * @param {string} name - The name.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns the first with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @return {Object3D|undefined} The found 3D object. Returns `undefined` if no 3D object has been found.
   */
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const s = this.children[n].getObjectByProperty(e, t);
      if (s !== void 0)
        return s;
    }
  }
  /**
   * Searches through the 3D object and its children, starting with the 3D object
   * itself, and returns all 3D objects with a matching property value.
   *
   * @param {string} name - The name of the property.
   * @param {any} value - The value.
   * @param {Array<Object3D>} result - The method stores the result in this array.
   * @return {Array<Object3D>} The found 3D objects.
   */
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let a = 0, s = r.length; a < s; a++)
      r[a].getObjectsByProperty(e, t, n);
    return n;
  }
  /**
   * Returns a vector representing the position of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's position in world space.
   */
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  /**
   * Returns a Quaternion representing the position of the 3D object in world space.
   *
   * @param {Quaternion} target - The target Quaternion the result is stored to.
   * @return {Quaternion} The 3D object's rotation in world space.
   */
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Hn, e, es), e;
  }
  /**
   * Returns a vector representing the scale of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's scale in world space.
   */
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Hn, ts, e), e;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  /**
   * Abstract method to get intersections between a casted ray and this
   * 3D object. Renderable 3D objects such as {@link Mesh}, {@link Line} or {@link Points}
   * implement this method in order to use raycasting.
   *
   * @abstract
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - An array holding the result of the method.
   */
  raycast() {
  }
  /**
   * Executes the callback on this 3D object and all descendants.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for visible 3D objects.
   * Descendants of invisible 3D objects are not traversed.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  /**
   * Like {@link Object3D#traverse}, but the callback will only be executed for all ancestors.
   *
   * Note: Modifying the scene graph inside the callback is discouraged.
   *
   * @param {Function} callback - A callback function that allows to process the current 3D object.
   */
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  /**
   * Updates the transformation matrix in local space by computing it from the current
   * position, rotation and scale values.
   */
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  /**
   * Updates the transformation matrix in world space of this 3D objects and its descendants.
   *
   * To ensure correct results, this method also recomputes the 3D object's transformation matrix in
   * local space. The computation of the local and world matrix can be controlled with the
   * {@link Object3D#matrixAutoUpdate} and {@link Object3D#matrixWorldAutoUpdate} flags which are both
   * `true` by default.  Set these flags to `false` if you need more control over the update matrix process.
   *
   * @param {boolean} [force=false] - When set to `true`, a recomputation of world matrices is forced even
   * when {@link Object3D#matrixWorldAutoUpdate} is set to `false`.
   */
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  }
  /**
   * An alternative version of {@link Object3D#updateMatrixWorld} with more control over the
   * update of ancestor and descendant nodes.
   *
   * @param {boolean} [updateParents=false] Whether ancestor nodes should be updated or not.
   * @param {boolean} [updateChildren=false] Whether descendant nodes should be updated or not.
   */
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const r = this.children;
      for (let a = 0, s = r.length; a < s; a++)
        r[a].updateWorldMatrix(!1, !0);
    }
  }
  /**
   * Serializes the 3D object into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized 3D object.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({
      ...o,
      boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
      boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
    })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function a(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = a(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const h = c[l];
            a(e.shapes, h);
          }
        else
          a(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (a(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(a(e.materials, this.material[c]));
        r.material = o;
      } else
        r.material = a(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(a(e.animations, c));
      }
    }
    if (t) {
      const o = s(e.geometries), c = s(e.materials), l = s(e.textures), u = s(e.images), h = s(e.shapes), f = s(e.skeletons), p = s(e.animations), v = s(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), f.length > 0 && (n.skeletons = f), p.length > 0 && (n.animations = p), v.length > 0 && (n.nodes = v);
    }
    return n.object = r, n;
    function s(o) {
      const c = [];
      for (const l in o) {
        const u = o[l];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  /**
   * Returns a new 3D object with copied values from this instance.
   *
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are also cloned.
   * @return {Object3D} A clone of this instance.
   */
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  /**
   * Copies the values of the given 3D object to this instance.
   *
   * @param {Object3D} source - The 3D object to copy.
   * @param {boolean} [recursive=true] - When set to `true`, descendants of the 3D object are cloned.
   * @return {Object3D} A reference to this instance.
   */
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
At.DEFAULT_UP = /* @__PURE__ */ new F(0, 1, 0);
At.DEFAULT_MATRIX_AUTO_UPDATE = !0;
At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ut = /* @__PURE__ */ new F(), Wt = /* @__PURE__ */ new F(), Vi = /* @__PURE__ */ new F(), Xt = /* @__PURE__ */ new F(), bn = /* @__PURE__ */ new F(), An = /* @__PURE__ */ new F(), Ur = /* @__PURE__ */ new F(), Hi = /* @__PURE__ */ new F(), ki = /* @__PURE__ */ new F(), Wi = /* @__PURE__ */ new F(), Xi = /* @__PURE__ */ new st(), qi = /* @__PURE__ */ new st(), Yi = /* @__PURE__ */ new st();
class It {
  /**
   * Constructs a new triangle.
   *
   * @param {Vector3} [a=(0,0,0)] - The first corner of the triangle.
   * @param {Vector3} [b=(0,0,0)] - The second corner of the triangle.
   * @param {Vector3} [c=(0,0,0)] - The third corner of the triangle.
   */
  constructor(e = new F(), t = new F(), n = new F()) {
    this.a = e, this.b = t, this.c = n;
  }
  /**
   * Computes the normal vector of a triangle.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Ut.subVectors(e, t), r.cross(Ut);
    const a = r.lengthSq();
    return a > 0 ? r.multiplyScalar(1 / Math.sqrt(a)) : r.set(0, 0, 0);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  static getBarycoord(e, t, n, r, a) {
    Ut.subVectors(r, t), Wt.subVectors(n, t), Vi.subVectors(e, t);
    const s = Ut.dot(Ut), o = Ut.dot(Wt), c = Ut.dot(Vi), l = Wt.dot(Wt), u = Wt.dot(Vi), h = s * l - o * o;
    if (h === 0)
      return a.set(0, 0, 0), null;
    const f = 1 / h, p = (l * c - o * u) * f, v = (s * u - o * c) * f;
    return a.set(1 - p - v, v, p);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Xt) === null ? !1 : Xt.x >= 0 && Xt.y >= 0 && Xt.x + Xt.y <= 1;
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} p1 - The first corner of the triangle.
   * @param {Vector3} p2 - The second corner of the triangle.
   * @param {Vector3} p3 - The third corner of the triangle.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  static getInterpolation(e, t, n, r, a, s, o, c) {
    return this.getBarycoord(e, t, n, r, Xt) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(a, Xt.x), c.addScaledVector(s, Xt.y), c.addScaledVector(o, Xt.z), c);
  }
  /**
   * Computes the value barycentrically interpolated for the given attribute and indices.
   *
   * @param {BufferAttribute} attr - The attribute to interpolate.
   * @param {number} i1 - Index of first vertex.
   * @param {number} i2 - Index of second vertex.
   * @param {number} i3 - Index of third vertex.
   * @param {Vector3} barycoord - The barycoordinate value to use to interpolate.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The interpolated attribute value.
   */
  static getInterpolatedAttribute(e, t, n, r, a, s) {
    return Xi.setScalar(0), qi.setScalar(0), Yi.setScalar(0), Xi.fromBufferAttribute(e, t), qi.fromBufferAttribute(e, n), Yi.fromBufferAttribute(e, r), s.setScalar(0), s.addScaledVector(Xi, a.x), s.addScaledVector(qi, a.y), s.addScaledVector(Yi, a.z), s;
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  static isFrontFacing(e, t, n, r) {
    return Ut.subVectors(n, t), Wt.subVectors(e, t), Ut.cross(Wt).dot(r) < 0;
  }
  /**
   * Sets the triangle's vertices by copying the given values.
   *
   * @param {Vector3} a - The first corner of the triangle.
   * @param {Vector3} b - The second corner of the triangle.
   * @param {Vector3} c - The third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  /**
   * Sets the triangle's vertices by copying the given array values.
   *
   * @param {Array<Vector3>} points - An array with 3D points.
   * @param {number} i0 - The array index representing the first corner of the triangle.
   * @param {number} i1 - The array index representing the second corner of the triangle.
   * @param {number} i2 - The array index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  /**
   * Sets the triangle's vertices by copying the given attribute values.
   *
   * @param {BufferAttribute} attribute - A buffer attribute with 3D points data.
   * @param {number} i0 - The attribute index representing the first corner of the triangle.
   * @param {number} i1 - The attribute index representing the second corner of the triangle.
   * @param {number} i2 - The attribute index representing the third corner of the triangle.
   * @return {Triangle} A reference to this triangle.
   */
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  /**
   * Returns a new triangle with copied values from this instance.
   *
   * @return {Triangle} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given triangle to this instance.
   *
   * @param {Triangle} triangle - The triangle to copy.
   * @return {Triangle} A reference to this triangle.
   */
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  /**
   * Computes the area of the triangle.
   *
   * @return {number} The triangle's area.
   */
  getArea() {
    return Ut.subVectors(this.c, this.b), Wt.subVectors(this.a, this.b), Ut.cross(Wt).length() * 0.5;
  }
  /**
   * Computes the midpoint of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's midpoint.
   */
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  /**
   * Computes the normal of the triangle.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The triangle's normal.
   */
  getNormal(e) {
    return It.getNormal(this.a, this.b, this.c, e);
  }
  /**
   * Computes a plane the triangle lies within.
   *
   * @param {Plane} target - The target vector that is used to store the method's result.
   * @return {Plane} The plane the triangle lies within.
   */
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  /**
   * Computes a barycentric coordinates from the given vector.
   * Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - A point in 3D space.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The barycentric coordinates for the given point
   */
  getBarycoord(e, t) {
    return It.getBarycoord(e, this.a, this.b, this.c, t);
  }
  /**
   * Computes the value barycentrically interpolated for the given point on the
   * triangle. Returns `null` if the triangle is degenerate.
   *
   * @param {Vector3} point - Position of interpolated point.
   * @param {Vector3} v1 - Value to interpolate of first vertex.
   * @param {Vector3} v2 - Value to interpolate of second vertex.
   * @param {Vector3} v3 - Value to interpolate of third vertex.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The interpolated value.
   */
  getInterpolation(e, t, n, r, a) {
    return It.getInterpolation(e, this.a, this.b, this.c, t, n, r, a);
  }
  /**
   * Returns `true` if the given point, when projected onto the plane of the
   * triangle, lies within the triangle.
   *
   * @param {Vector3} point - The point in 3D space to test.
   * @return {boolean} Whether the given point, when projected onto the plane of the
   * triangle, lies within the triangle or not.
   */
  containsPoint(e) {
    return It.containsPoint(e, this.a, this.b, this.c);
  }
  /**
   * Returns `true` if the triangle is oriented towards the given direction.
   *
   * @param {Vector3} direction - The (normalized) direction vector.
   * @return {boolean} Whether the triangle is oriented towards the given direction or not.
   */
  isFrontFacing(e) {
    return It.isFrontFacing(this.a, this.b, this.c, e);
  }
  /**
   * Returns `true` if this triangle intersects with the given box.
   *
   * @param {Box3} box - The box to intersect.
   * @return {boolean} Whether this triangle intersects with the given box or not.
   */
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  /**
   * Returns the closest point on the triangle to the given point.
   *
   * @param {Vector3} p - The point to compute the closest point for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The closest point on the triangle.
   */
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, a = this.c;
    let s, o;
    bn.subVectors(r, n), An.subVectors(a, n), Hi.subVectors(e, n);
    const c = bn.dot(Hi), l = An.dot(Hi);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    ki.subVectors(e, r);
    const u = bn.dot(ki), h = An.dot(ki);
    if (u >= 0 && h <= u)
      return t.copy(r);
    const f = c * h - u * l;
    if (f <= 0 && c >= 0 && u <= 0)
      return s = c / (c - u), t.copy(n).addScaledVector(bn, s);
    Wi.subVectors(e, a);
    const p = bn.dot(Wi), v = An.dot(Wi);
    if (v >= 0 && p <= v)
      return t.copy(a);
    const S = p * l - c * v;
    if (S <= 0 && l >= 0 && v <= 0)
      return o = l / (l - v), t.copy(n).addScaledVector(An, o);
    const m = u * v - p * h;
    if (m <= 0 && h - u >= 0 && p - v >= 0)
      return Ur.subVectors(a, r), o = (h - u) / (h - u + (p - v)), t.copy(r).addScaledVector(Ur, o);
    const d = 1 / (m + S + f);
    return s = S * d, o = f * d, t.copy(n).addScaledVector(bn, s).addScaledVector(An, o);
  }
  /**
   * Returns `true` if this triangle is equal with the given one.
   *
   * @param {Triangle} triangle - The triangle to test for equality.
   * @return {boolean} Whether this triangle is equal with the given one.
   */
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const xa = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, jt = { h: 0, s: 0, l: 0 }, si = { h: 0, s: 0, l: 0 };
function Ki(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class qe {
  /**
   * Constructs a new color.
   *
   * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
   * and that method is used throughout the rest of the documentation.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   */
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  /**
   * Sets the colors's components from the given values.
   *
   * @param {(number|string|Color)} [r] - The red component of the color. If `g` and `b` are
   * not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.
   * @param {number} [g] - The green component.
   * @param {number} [b] - The blue component.
   * @return {Color} A reference to this color.
   */
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  /**
   * Sets the colors's components to the given scalar value.
   *
   * @param {number} scalar - The scalar value.
   * @return {Color} A reference to this color.
   */
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  /**
   * Sets this color from a hexadecimal value.
   *
   * @param {number} hex - The hexadecimal value.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHex(e, t = St) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ve.colorSpaceToWorking(this, t), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} r - Red channel value between `0.0` and `1.0`.
   * @param {number} g - Green channel value between `0.0` and `1.0`.
   * @param {number} b - Blue channel value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setRGB(e, t, n, r = Ve.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Ve.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from RGB values.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setHSL(e, t, n, r = Ve.workingColorSpace) {
    if (e = Ga(e, 1), t = Be(t, 0, 1), n = Be(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const a = n <= 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - a;
      this.r = Ki(s, a, e + 1 / 3), this.g = Ki(s, a, e), this.b = Ki(s, a, e - 1 / 3);
    }
    return Ve.colorSpaceToWorking(this, r), this;
  }
  /**
   * Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
   * `rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
   * any [X11 color name]{@link https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart} -
   * all 140 color names are supported).
   *
   * @param {string} style - Color as a CSS-style string.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setStyle(e, t = St) {
    function n(a) {
      a !== void 0 && parseFloat(a) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let a;
      const s = r[1], o = r[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (a = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(a[4]), this.setRGB(
              Math.min(255, parseInt(a[1], 10)) / 255,
              Math.min(255, parseInt(a[2], 10)) / 255,
              Math.min(255, parseInt(a[3], 10)) / 255,
              t
            );
          if (a = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(a[4]), this.setRGB(
              Math.min(100, parseInt(a[1], 10)) / 100,
              Math.min(100, parseInt(a[2], 10)) / 100,
              Math.min(100, parseInt(a[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (a = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(a[4]), this.setHSL(
              parseFloat(a[1]) / 360,
              parseFloat(a[2]) / 100,
              parseFloat(a[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const a = r[1], s = a.length;
      if (s === 3)
        return this.setRGB(
          parseInt(a.charAt(0), 16) / 15,
          parseInt(a.charAt(1), 16) / 15,
          parseInt(a.charAt(2), 16) / 15,
          t
        );
      if (s === 6)
        return this.setHex(parseInt(a, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  /**
   * Sets this color from a color name. Faster than {@link Color#setStyle} if
   * you don't need the other CSS-style formats.
   *
   * For convenience, the list of names is exposed in `Color.NAMES` as a hash.
   * ```js
   * Color.NAMES.aliceblue // returns 0xF0F8FF
   * ```
   *
   * @param {string} style - The color name.
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {Color} A reference to this color.
   */
  setColorName(e, t = St) {
    const n = xa[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  /**
   * Returns a new color with copied values from this instance.
   *
   * @return {Color} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  /**
   * Copies the values of the given color to this instance.
   *
   * @param {Color} color - The color to copy.
   * @return {Color} A reference to this color.
   */
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copySRGBToLinear(e) {
    return this.r = qt(e.r), this.g = qt(e.g), this.b = qt(e.b), this;
  }
  /**
   * Copies the given color into this color, and then converts this color from
   * `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @param {Color} color - The color to copy/convert.
   * @return {Color} A reference to this color.
   */
  copyLinearToSRGB(e) {
    return this.r = Un(e.r), this.g = Un(e.g), this.b = Un(e.b), this;
  }
  /**
   * Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  /**
   * Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.
   *
   * @return {Color} A reference to this color.
   */
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  /**
   * Returns the hexadecimal value of this color.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {number} The hexadecimal value.
   */
  getHex(e = St) {
    return Ve.workingToColorSpace(pt.copy(this), e), Math.round(Be(pt.r * 255, 0, 255)) * 65536 + Math.round(Be(pt.g * 255, 0, 255)) * 256 + Math.round(Be(pt.b * 255, 0, 255));
  }
  /**
   * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The hexadecimal value as a string.
   */
  getHexString(e = St) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  /**
   * Converts the colors RGB values into the HSL format and stores them into the
   * given target object.
   *
   * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {{h:number,s:number,l:number}} The HSL representation of this color.
   */
  getHSL(e, t = Ve.workingColorSpace) {
    Ve.workingToColorSpace(pt.copy(this), t);
    const n = pt.r, r = pt.g, a = pt.b, s = Math.max(n, r, a), o = Math.min(n, r, a);
    let c, l;
    const u = (o + s) / 2;
    if (o === s)
      c = 0, l = 0;
    else {
      const h = s - o;
      switch (l = u <= 0.5 ? h / (s + o) : h / (2 - s - o), s) {
        case n:
          c = (r - a) / h + (r < a ? 6 : 0);
          break;
        case r:
          c = (a - n) / h + 2;
          break;
        case a:
          c = (n - r) / h + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = u, e;
  }
  /**
   * Returns the RGB values of this color and stores them into the given target object.
   *
   * @param {Color} target - The target color that is used to store the method's result.
   * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
   * @return {Color} The RGB representation of this color.
   */
  getRGB(e, t = Ve.workingColorSpace) {
    return Ve.workingToColorSpace(pt.copy(this), t), e.r = pt.r, e.g = pt.g, e.b = pt.b, e;
  }
  /**
   * Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.
   *
   * @param {string} [colorSpace=SRGBColorSpace] - The color space.
   * @return {string} The CSS representation of this color.
   */
  getStyle(e = St) {
    Ve.workingToColorSpace(pt.copy(this), e);
    const t = pt.r, n = pt.g, r = pt.b;
    return e !== St ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  /**
   * Adds the given HSL values to this color's values.
   * Internally, this converts the color's RGB values to HSL, adds HSL
   * and then converts the color back to RGB.
   *
   * @param {number} h - Hue value between `0.0` and `1.0`.
   * @param {number} s - Saturation value between `0.0` and `1.0`.
   * @param {number} l - Lightness value between `0.0` and `1.0`.
   * @return {Color} A reference to this color.
   */
  offsetHSL(e, t, n) {
    return this.getHSL(jt), this.setHSL(jt.h + e, jt.s + t, jt.l + n);
  }
  /**
   * Adds the RGB values of the given color to the RGB values of this color.
   *
   * @param {Color} color - The color to add.
   * @return {Color} A reference to this color.
   */
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  /**
   * Adds the RGB values of the given colors and stores the result in this instance.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @return {Color} A reference to this color.
   */
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  /**
   * Adds the given scalar value to the RGB values of this color.
   *
   * @param {number} s - The scalar to add.
   * @return {Color} A reference to this color.
   */
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  /**
   * Subtracts the RGB values of the given color from the RGB values of this color.
   *
   * @param {Color} color - The color to subtract.
   * @return {Color} A reference to this color.
   */
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  /**
   * Multiplies the RGB values of the given color with the RGB values of this color.
   *
   * @param {Color} color - The color to multiply.
   * @return {Color} A reference to this color.
   */
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  /**
   * Multiplies the given scalar value with the RGB values of this color.
   *
   * @param {number} s - The scalar to multiply.
   * @return {Color} A reference to this color.
   */
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  /**
   * Linearly interpolates this color's RGB values toward the RGB values of the
   * given color. The alpha argument can be thought of as the ratio between
   * the two colors, where `0.0` is this color and `1.0` is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  /**
   * Linearly interpolates between the given colors and stores the result in this instance.
   * The alpha argument can be thought of as the ratio between the two colors, where `0.0`
   * is the first and `1.0` is the second color.
   *
   * @param {Color} color1 - The first color.
   * @param {Color} color2 - The second color.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  /**
   * Linearly interpolates this color's HSL values toward the HSL values of the
   * given color. It differs from {@link Color#lerp} by not interpolating straight
   * from one color to the other, but instead going through all the hues in between
   * those two colors. The alpha argument can be thought of as the ratio between
   * the two colors, where 0.0 is this color and 1.0 is the first argument.
   *
   * @param {Color} color - The color to converge on.
   * @param {number} alpha - The interpolation factor in the closed interval `[0,1]`.
   * @return {Color} A reference to this color.
   */
  lerpHSL(e, t) {
    this.getHSL(jt), e.getHSL(si);
    const n = Pi(jt.h, si.h, t), r = Pi(jt.s, si.s, t), a = Pi(jt.l, si.l, t);
    return this.setHSL(n, r, a), this;
  }
  /**
   * Sets the color's RGB components from the given 3D vector.
   *
   * @param {Vector3} v - The vector to set.
   * @return {Color} A reference to this color.
   */
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  /**
   * Transforms this color with the given 3x3 matrix.
   *
   * @param {Matrix3} m - The matrix.
   * @return {Color} A reference to this color.
   */
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, a = e.elements;
    return this.r = a[0] * t + a[3] * n + a[6] * r, this.g = a[1] * t + a[4] * n + a[7] * r, this.b = a[2] * t + a[5] * n + a[8] * r, this;
  }
  /**
   * Returns `true` if this color is equal with the given one.
   *
   * @param {Color} c - The color to test for equality.
   * @return {boolean} Whether this bounding color is equal with the given one.
   */
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  /**
   * Sets this color's RGB components from the given array.
   *
   * @param {Array<number>} array - An array holding the RGB values.
   * @param {number} [offset=0] - The offset into the array.
   * @return {Color} A reference to this color.
   */
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  /**
   * Writes the RGB components of this color to the given array. If no array is provided,
   * the method returns a new instance.
   *
   * @param {Array<number>} [array=[]] - The target array holding the color components.
   * @param {number} [offset=0] - Index of the first element in the array.
   * @return {Array<number>} The color components.
   */
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  /**
   * Sets the components of this color from the given buffer attribute.
   *
   * @param {BufferAttribute} attribute - The buffer attribute holding color data.
   * @param {number} index - The index into the attribute.
   * @return {Color} A reference to this color.
   */
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  /**
   * This methods defines the serialization result of this class. Returns the color
   * as a hexadecimal value.
   *
   * @return {number} The hexadecimal value.
   */
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const pt = /* @__PURE__ */ new qe();
qe.NAMES = xa;
let is = 0;
class bi extends Nn {
  /**
   * Constructs a new material.
   */
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: is++ }), this.uuid = Kn(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new qe(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  /**
   * Sets the alpha value to be used when running an alpha test. The material
   * will not be rendered if the opacity is lower than this value.
   *
   * @type {number}
   * @readonly
   * @default 0
   */
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  /**
   * An optional callback that is executed immediately before the material is used to render a 3D object.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - The scene.
   * @param {Camera} camera - The camera that is used to render the scene.
   * @param {BufferGeometry} geometry - The 3D object's geometry.
   * @param {Object3D} object - The 3D object.
   * @param {Object} group - The geometry group data.
   */
  onBeforeRender() {
  }
  /**
   * An optional callback that is executed immediately before the shader
   * program is compiled. This function is called with the shader source code
   * as a parameter. Useful for the modification of built-in materials.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}. The
   * recommended approach when customizing materials is to use `WebGPURenderer` with the new
   * Node Material system and [TSL]{@link https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language}.
   *
   * @param {{vertexShader:string,fragmentShader:string,uniforms:Object}} shaderobject - The object holds the uniforms and the vertex and fragment shader source.
   * @param {WebGLRenderer} renderer - A reference to the renderer.
   */
  onBeforeCompile() {
  }
  /**
   * In case {@link Material#onBeforeCompile} is used, this callback can be used to identify
   * values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
   * shader or recompile the shader for this material as needed.
   *
   * This method can only be used when rendering with {@link WebGLRenderer}.
   *
   * @return {string} The custom program cache key.
   */
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  /**
   * This method can be used to set default values from parameter objects.
   * It is a generic implementation so it can be used with different types
   * of materials.
   *
   * @param {Object} [values] - The material values to set.
   */
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  /**
   * Serializes the material into JSON.
   *
   * @param {?(Object|string)} meta - An optional value holding meta information about the serialization.
   * @return {Object} A JSON object representing the serialized material.
   * @see {@link ObjectLoader#parse}
   */
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(a) {
      const s = [];
      for (const o in a) {
        const c = a[o];
        delete c.metadata, s.push(c);
      }
      return s;
    }
    if (t) {
      const a = r(e.textures), s = r(e.images);
      a.length > 0 && (n.textures = a), s.length > 0 && (n.images = s);
    }
    return n;
  }
  /**
   * Returns a new material with copied values from this instance.
   *
   * @return {Material} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given material to this instance.
   *
   * @param {Material} source - The material to copy.
   * @return {Material} A reference to this instance.
   */
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let a = 0; a !== r; ++a)
        n[a] = t[a].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires Material#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  /**
   * Setting this property to `true` indicates the engine the material
   * needs to be recompiled.
   *
   * @type {boolean}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Xn extends bi {
  /**
   * Constructs a new mesh basic material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new qe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new zt(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ot = /* @__PURE__ */ new F(), oi = /* @__PURE__ */ new Ye();
let rs = 0;
class Ot {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {TypedArray} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: rs++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  /**
   * A callback function that is executed after the renderer has transferred the attribute
   * array data to the GPU.
   */
  onUploadCallback() {
  }
  /**
   * Flag to indicate that this attribute has changed and should be re-sent to
   * the GPU. Set this to `true` when you modify the value of the array.
   *
   * @type {number}
   * @default false
   * @param {boolean} value
   */
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  /**
   * Sets the usage of this buffer attribute.
   *
   * @param {(StaticDrawUsage|DynamicDrawUsage|StreamDrawUsage|StaticReadUsage|DynamicReadUsage|StreamReadUsage|StaticCopyUsage|DynamicCopyUsage|StreamCopyUsage)} value - The usage to set.
   * @return {BufferAttribute} A reference to this buffer attribute.
   */
  setUsage(e) {
    return this.usage = e, this;
  }
  /**
   * Adds a range of data in the data array to be updated on the GPU.
   *
   * @param {number} start - Position at which to start update.
   * @param {number} count - The number of components to update.
   */
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  /**
   * Clears the update ranges.
   */
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  /**
   * Copies the values of the given buffer attribute to this instance.
   *
   * @param {BufferAttribute} source - The buffer attribute to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  /**
   * Copies a vector from the given buffer attribute to this one. The start
   * and destination position in the attribute buffers are represented by the
   * given indices.
   *
   * @param {number} index1 - The destination index into this buffer attribute.
   * @param {BufferAttribute} attribute - The buffer attribute to copy from.
   * @param {number} index2 - The source index into the given buffer attribute.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, a = this.itemSize; r < a; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  /**
   * Copies the given array data into this buffer attribute.
   *
   * @param {(TypedArray|Array)} array - The array to copy.
   * @return {BufferAttribute} A reference to this instance.
   */
  copyArray(e) {
    return this.array.set(e), this;
  }
  /**
   * Applies the given 3x3 matrix to the given attribute. Works with
   * item size `2` and `3`.
   *
   * @param {Matrix3} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        oi.fromBufferAttribute(this, t), oi.applyMatrix3(e), this.setXY(t, oi.x, oi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ot.fromBufferAttribute(this, t), ot.applyMatrix3(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.applyMatrix4(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  /**
   * Applies the given 3x3 normal matrix to the given attribute. Only works with
   * item size `3`.
   *
   * @param {Matrix3} m - The normal matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.applyNormalMatrix(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  /**
   * Applies the given 4x4 matrix to the given attribute. Only works with
   * item size `3` and with direction vectors.
   *
   * @param {Matrix4} m - The matrix to apply.
   * @return {BufferAttribute} A reference to this instance.
   */
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t), ot.transformDirection(e), this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  /**
   * Sets the given array data in the buffer attribute.
   *
   * @param {(TypedArray|Array)} value - The array data to set.
   * @param {number} [offset=0] - The offset in this buffer attribute's array.
   * @return {BufferAttribute} A reference to this instance.
   */
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  /**
   * Returns the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @return {number} The returned value.
   */
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = zn(n, this.array)), n;
  }
  /**
   * Sets the given value to the given component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} component - The component index.
   * @param {number} value - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setComponent(e, t, n) {
    return this.normalized && (n = xt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  /**
   * Returns the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The x component.
   */
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = zn(t, this.array)), t;
  }
  /**
   * Sets the x component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setX(e, t) {
    return this.normalized && (t = xt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  /**
   * Returns the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The y component.
   */
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = zn(t, this.array)), t;
  }
  /**
   * Sets the y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} y - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setY(e, t) {
    return this.normalized && (t = xt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  /**
   * Returns the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The z component.
   */
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = zn(t, this.array)), t;
  }
  /**
   * Sets the z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} z - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setZ(e, t) {
    return this.normalized && (t = xt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  /**
   * Returns the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @return {number} The w component.
   */
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = zn(t, this.array)), t;
  }
  /**
   * Sets the w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} w - The value to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setW(e, t) {
    return this.normalized && (t = xt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  /**
   * Sets the x and y component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = xt(t, this.array), n = xt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  /**
   * Sets the x, y and z component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = xt(t, this.array), n = xt(n, this.array), r = xt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  /**
   * Sets the x, y, z and w component of the vector at the given index.
   *
   * @param {number} index - The index into the buffer attribute.
   * @param {number} x - The value for the x component to set.
   * @param {number} y - The value for the y component to set.
   * @param {number} z - The value for the z component to set.
   * @param {number} w - The value for the w component to set.
   * @return {BufferAttribute} A reference to this instance.
   */
  setXYZW(e, t, n, r, a) {
    return e *= this.itemSize, this.normalized && (t = xt(t, this.array), n = xt(n, this.array), r = xt(r, this.array), a = xt(a, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = a, this;
  }
  /**
   * Sets the given callback function that is executed after the Renderer has transferred
   * the attribute array data to the GPU. Can be used to perform clean-up operations after
   * the upload when attribute data are not needed anymore on the CPU side.
   *
   * @param {Function} callback - The `onUpload()` callback.
   * @return {BufferAttribute} A reference to this instance.
   */
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  /**
   * Returns a new buffer attribute with copied values from this instance.
   *
   * @return {BufferAttribute} A clone of this instance.
   */
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  /**
   * Serializes the buffer attribute into JSON.
   *
   * @return {Object} A JSON object representing the serialized buffer attribute.
   */
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
}
class Sa extends Ot {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint16Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Ma extends Ot {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Uint32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Bt extends Ot {
  /**
   * Constructs a new buffer attribute.
   *
   * @param {(Array<number>|Float32Array)} array - The array holding the attribute data.
   * @param {number} itemSize - The item size.
   * @param {boolean} [normalized=false] - Whether the data are normalized or not.
   */
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let as = 0;
const Ct = /* @__PURE__ */ new rt(), Zi = /* @__PURE__ */ new At(), Rn = /* @__PURE__ */ new F(), bt = /* @__PURE__ */ new Zn(), kn = /* @__PURE__ */ new Zn(), ut = /* @__PURE__ */ new F();
class tn extends Nn {
  /**
   * Constructs a new geometry.
   */
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: as++ }), this.uuid = Kn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  /**
   * Returns the index of this geometry.
   *
   * @return {?BufferAttribute} The index. Returns `null` if no index is defined.
   */
  getIndex() {
    return this.index;
  }
  /**
   * Sets the given index to this geometry.
   *
   * @param {Array<number>|BufferAttribute} index - The index to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (_a(e) ? Ma : Sa)(e, 1) : this.index = e, this;
  }
  /**
   * Sets the given indirect attribute to this geometry.
   *
   * @param {BufferAttribute} indirect - The attribute holding indirect draw calls.
   * @return {BufferGeometry} A reference to this instance.
   */
  setIndirect(e) {
    return this.indirect = e, this;
  }
  /**
   * Returns the indirect attribute of this geometry.
   *
   * @return {?BufferAttribute} The indirect attribute. Returns `null` if no indirect attribute is defined.
   */
  getIndirect() {
    return this.indirect;
  }
  /**
   * Returns the buffer attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {BufferAttribute|InterleavedBufferAttribute|undefined} The buffer attribute.
   * Returns `undefined` if not attribute has been found.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Sets the given attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @param {BufferAttribute|InterleavedBufferAttribute} attribute - The attribute to set.
   * @return {BufferGeometry} A reference to this instance.
   */
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  /**
   * Deletes the attribute for the given name.
   *
   * @param {string} name - The attribute name to delete.
   * @return {BufferGeometry} A reference to this instance.
   */
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  /**
   * Returns `true` if this geometry has an attribute for the given name.
   *
   * @param {string} name - The attribute name.
   * @return {boolean} Whether this geometry has an attribute for the given name or not.
   */
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  /**
   * Adds a group to this geometry.
   *
   * @param {number} start - The first element in this draw call. That is the first
   * vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - Specifies how many vertices (or indices) are part of this group.
   * @param {number} [materialIndex=0] - The material array index to use.
   */
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  /**
   * Clears all groups.
   */
  clearGroups() {
    this.groups = [];
  }
  /**
   * Sets the draw range for this geometry.
   *
   * @param {number} start - The first vertex for non-indexed geometry, otherwise the first triangle index.
   * @param {number} count - For non-indexed BufferGeometry, `count` is the number of vertices to render.
   * For indexed BufferGeometry, `count` is the number of indices to render.
   */
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  /**
   * Applies the given 4x4 transformation matrix to the geometry.
   *
   * @param {Matrix4} matrix - The matrix to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const a = new Ue().getNormalMatrix(e);
      n.applyNormalMatrix(a), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  /**
   * Applies the rotation represented by the Quaternion to the geometry.
   *
   * @param {Quaternion} q - The Quaternion to apply.
   * @return {BufferGeometry} A reference to this instance.
   */
  applyQuaternion(e) {
    return Ct.makeRotationFromQuaternion(e), this.applyMatrix4(Ct), this;
  }
  /**
   * Rotates the geometry about the X axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateX(e) {
    return Ct.makeRotationX(e), this.applyMatrix4(Ct), this;
  }
  /**
   * Rotates the geometry about the Y axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateY(e) {
    return Ct.makeRotationY(e), this.applyMatrix4(Ct), this;
  }
  /**
   * Rotates the geometry about the Z axis. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#rotation} for typical
   * real-time mesh rotation.
   *
   * @param {number} angle - The angle in radians.
   * @return {BufferGeometry} A reference to this instance.
   */
  rotateZ(e) {
    return Ct.makeRotationZ(e), this.applyMatrix4(Ct), this;
  }
  /**
   * Translates the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#position} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x offset.
   * @param {number} y - The y offset.
   * @param {number} z - The z offset.
   * @return {BufferGeometry} A reference to this instance.
   */
  translate(e, t, n) {
    return Ct.makeTranslation(e, t, n), this.applyMatrix4(Ct), this;
  }
  /**
   * Scales the geometry. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#scale} for typical
   * real-time mesh rotation.
   *
   * @param {number} x - The x scale.
   * @param {number} y - The y scale.
   * @param {number} z - The z scale.
   * @return {BufferGeometry} A reference to this instance.
   */
  scale(e, t, n) {
    return Ct.makeScale(e, t, n), this.applyMatrix4(Ct), this;
  }
  /**
   * Rotates the geometry to face a point in 3D space. This is typically done as a one time
   * operation, and not during a loop. Use {@link Object3D#lookAt} for typical
   * real-time mesh rotation.
   *
   * @param {Vector3} vector - The target point.
   * @return {BufferGeometry} A reference to this instance.
   */
  lookAt(e) {
    return Zi.lookAt(e), Zi.updateMatrix(), this.applyMatrix4(Zi.matrix), this;
  }
  /**
   * Center the geometry based on its bounding box.
   *
   * @return {BufferGeometry} A reference to this instance.
   */
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Rn).negate(), this.translate(Rn.x, Rn.y, Rn.z), this;
  }
  /**
   * Defines a geometry by creating a `position` attribute based on the given array of points. The array
   * can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
   * set to `0`.
   *
   * If the method is used with an existing `position` attribute, the vertex data are overwritten with the
   * data from the array. The length of the array must match the vertex count.
   *
   * @param {Array<Vector2>|Array<Vector3>} points - The points.
   * @return {BufferGeometry} A reference to this instance.
   */
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, a = e.length; r < a; r++) {
        const s = e[r];
        n.push(s.x, s.y, s.z || 0);
      }
      this.setAttribute("position", new Bt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const a = e[r];
        t.setXYZ(r, a.x, a.y, a.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  /**
   * Computes the bounding box of the geometry, and updates the `boundingBox` member.
   * The bounding box is not computed by the engine; it must be computed by your app.
   * You may need to recompute the bounding box if the geometry vertices are modified.
   */
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Zn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new F(-1 / 0, -1 / 0, -1 / 0),
        new F(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const a = t[n];
          bt.setFromBufferAttribute(a), this.morphTargetsRelative ? (ut.addVectors(this.boundingBox.min, bt.min), this.boundingBox.expandByPoint(ut), ut.addVectors(this.boundingBox.max, bt.max), this.boundingBox.expandByPoint(ut)) : (this.boundingBox.expandByPoint(bt.min), this.boundingBox.expandByPoint(bt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  /**
   * Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
   * The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
   * You may need to recompute the bounding sphere if the geometry vertices are modified.
   */
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ur());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new F(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (bt.setFromBufferAttribute(e), t)
        for (let a = 0, s = t.length; a < s; a++) {
          const o = t[a];
          kn.setFromBufferAttribute(o), this.morphTargetsRelative ? (ut.addVectors(bt.min, kn.min), bt.expandByPoint(ut), ut.addVectors(bt.max, kn.max), bt.expandByPoint(ut)) : (bt.expandByPoint(kn.min), bt.expandByPoint(kn.max));
        }
      bt.getCenter(n);
      let r = 0;
      for (let a = 0, s = e.count; a < s; a++)
        ut.fromBufferAttribute(e, a), r = Math.max(r, n.distanceToSquared(ut));
      if (t)
        for (let a = 0, s = t.length; a < s; a++) {
          const o = t[a], c = this.morphTargetsRelative;
          for (let l = 0, u = o.count; l < u; l++)
            ut.fromBufferAttribute(o, l), c && (Rn.fromBufferAttribute(e, l), ut.add(Rn)), r = Math.max(r, n.distanceToSquared(ut));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  /**
   * Calculates and adds a tangent attribute to this geometry.
   *
   * The computation is only supported for indexed geometries and if position, normal, and uv attributes
   * are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
   * {@link BufferGeometryUtils#computeMikkTSpaceTangents} instead.
   */
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, a = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ot(new Float32Array(4 * n.count), 4));
    const s = this.getAttribute("tangent"), o = [], c = [];
    for (let N = 0; N < n.count; N++)
      o[N] = new F(), c[N] = new F();
    const l = new F(), u = new F(), h = new F(), f = new Ye(), p = new Ye(), v = new Ye(), S = new F(), m = new F();
    function d(N, M, x) {
      l.fromBufferAttribute(n, N), u.fromBufferAttribute(n, M), h.fromBufferAttribute(n, x), f.fromBufferAttribute(a, N), p.fromBufferAttribute(a, M), v.fromBufferAttribute(a, x), u.sub(l), h.sub(l), p.sub(f), v.sub(f);
      const P = 1 / (p.x * v.y - v.x * p.y);
      isFinite(P) && (S.copy(u).multiplyScalar(v.y).addScaledVector(h, -p.y).multiplyScalar(P), m.copy(h).multiplyScalar(p.x).addScaledVector(u, -v.x).multiplyScalar(P), o[N].add(S), o[M].add(S), o[x].add(S), c[N].add(m), c[M].add(m), c[x].add(m));
    }
    let A = this.groups;
    A.length === 0 && (A = [{
      start: 0,
      count: e.count
    }]);
    for (let N = 0, M = A.length; N < M; ++N) {
      const x = A[N], P = x.start, z = x.count;
      for (let H = P, X = P + z; H < X; H += 3)
        d(
          e.getX(H + 0),
          e.getX(H + 1),
          e.getX(H + 2)
        );
    }
    const y = new F(), E = new F(), C = new F(), R = new F();
    function D(N) {
      C.fromBufferAttribute(r, N), R.copy(C);
      const M = o[N];
      y.copy(M), y.sub(C.multiplyScalar(C.dot(M))).normalize(), E.crossVectors(R, M);
      const P = E.dot(c[N]) < 0 ? -1 : 1;
      s.setXYZW(N, y.x, y.y, y.z, P);
    }
    for (let N = 0, M = A.length; N < M; ++N) {
      const x = A[N], P = x.start, z = x.count;
      for (let H = P, X = P + z; H < X; H += 3)
        D(e.getX(H + 0)), D(e.getX(H + 1)), D(e.getX(H + 2));
    }
  }
  /**
   * Computes vertex normals for the given vertex data. For indexed geometries, the method sets
   * each vertex normal to be the average of the face normals of the faces that share that vertex.
   * For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
   * to be the same as the face normal.
   */
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Ot(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, p = n.count; f < p; f++)
          n.setXYZ(f, 0, 0, 0);
      const r = new F(), a = new F(), s = new F(), o = new F(), c = new F(), l = new F(), u = new F(), h = new F();
      if (e)
        for (let f = 0, p = e.count; f < p; f += 3) {
          const v = e.getX(f + 0), S = e.getX(f + 1), m = e.getX(f + 2);
          r.fromBufferAttribute(t, v), a.fromBufferAttribute(t, S), s.fromBufferAttribute(t, m), u.subVectors(s, a), h.subVectors(r, a), u.cross(h), o.fromBufferAttribute(n, v), c.fromBufferAttribute(n, S), l.fromBufferAttribute(n, m), o.add(u), c.add(u), l.add(u), n.setXYZ(v, o.x, o.y, o.z), n.setXYZ(S, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let f = 0, p = t.count; f < p; f += 3)
          r.fromBufferAttribute(t, f + 0), a.fromBufferAttribute(t, f + 1), s.fromBufferAttribute(t, f + 2), u.subVectors(s, a), h.subVectors(r, a), u.cross(h), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  /**
   * Ensures every normal vector in a geometry will have a magnitude of `1`. This will
   * correct lighting on the geometry surfaces.
   */
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      ut.fromBufferAttribute(e, t), ut.normalize(), e.setXYZ(t, ut.x, ut.y, ut.z);
  }
  /**
   * Return a new non-index version of this indexed geometry. If the geometry
   * is already non-indexed, the method is a NOOP.
   *
   * @return {BufferGeometry} The non-indexed version of this indexed geometry.
   */
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, u = o.itemSize, h = o.normalized, f = new l.constructor(c.length * u);
      let p = 0, v = 0;
      for (let S = 0, m = c.length; S < m; S++) {
        o.isInterleavedBufferAttribute ? p = c[S] * o.data.stride + o.offset : p = c[S] * u;
        for (let d = 0; d < u; d++)
          f[v++] = l[p++];
      }
      return new Ot(f, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new tn(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const a = this.morphAttributes;
    for (const o in a) {
      const c = [], l = a[o];
      for (let u = 0, h = l.length; u < h; u++) {
        const f = l[u], p = e(f, n);
        c.push(p);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const s = this.groups;
    for (let o = 0, c = s.length; o < c; o++) {
      const l = s[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  /**
   * Serializes the geometry into JSON.
   *
   * @return {Object} A JSON object representing the serialized geometry.
   */
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let a = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], u = [];
      for (let h = 0, f = l.length; h < f; h++) {
        const p = l[h];
        u.push(p.toJSON(e.data));
      }
      u.length > 0 && (r[c] = u, a = !0);
    }
    a && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const s = this.groups;
    s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  /**
   * Returns a new geometry with copied values from this instance.
   *
   * @return {BufferGeometry} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
  /**
   * Copies the values of the given geometry to this instance.
   *
   * @param {BufferGeometry} source - The geometry to copy.
   * @return {BufferGeometry} A reference to this instance.
   */
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const r = e.attributes;
    for (const l in r) {
      const u = r[l];
      this.setAttribute(l, u.clone(t));
    }
    const a = e.morphAttributes;
    for (const l in a) {
      const u = [], h = a[l];
      for (let f = 0, p = h.length; f < p; f++)
        u.push(h[f].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const s = e.groups;
    for (let l = 0, u = s.length; l < u; l++) {
      const h = s[l];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  /**
   * Frees the GPU-related resources allocated by this instance. Call this
   * method whenever this instance is no longer used in your app.
   *
   * @fires BufferGeometry#dispose
   */
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ir = /* @__PURE__ */ new rt(), on = /* @__PURE__ */ new $a(), li = /* @__PURE__ */ new ur(), Fr = /* @__PURE__ */ new F(), ci = /* @__PURE__ */ new F(), di = /* @__PURE__ */ new F(), ui = /* @__PURE__ */ new F(), $i = /* @__PURE__ */ new F(), hi = /* @__PURE__ */ new F(), Nr = /* @__PURE__ */ new F(), fi = /* @__PURE__ */ new F();
class Pt extends At {
  /**
   * Constructs a new mesh.
   *
   * @param {BufferGeometry} [geometry] - The mesh geometry.
   * @param {Material|Array<Material>} [material] - The mesh material.
   */
  constructor(e = new tn(), t = new Xn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  /**
   * Sets the values of {@link Mesh#morphTargetDictionary} and {@link Mesh#morphTargetInfluences}
   * to make sure existing morph targets can influence this 3D object.
   */
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let a = 0, s = r.length; a < s; a++) {
          const o = r[a].name || String(a);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = a;
        }
      }
    }
  }
  /**
   * Returns the local-space position of the vertex at the given index, taking into
   * account the current animation state of both morph targets and skinning.
   *
   * @param {number} index - The vertex index.
   * @param {Vector3} target - The target object that is used to store the method's result.
   * @return {Vector3} The vertex position in local space.
   */
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, a = n.morphAttributes.position, s = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (a && o) {
      hi.set(0, 0, 0);
      for (let c = 0, l = a.length; c < l; c++) {
        const u = o[c], h = a[c];
        u !== 0 && ($i.fromBufferAttribute(h, e), s ? hi.addScaledVector($i, u) : hi.addScaledVector($i.sub(t), u));
      }
      t.add(hi);
    }
    return t;
  }
  /**
   * Computes intersection points between a casted ray and this line.
   *
   * @param {Raycaster} raycaster - The raycaster.
   * @param {Array<Object>} intersects - The target array that holds the intersection points.
   */
  raycast(e, t) {
    const n = this.geometry, r = this.material, a = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), li.copy(n.boundingSphere), li.applyMatrix4(a), on.copy(e.ray).recast(e.near), !(li.containsPoint(on.origin) === !1 && (on.intersectSphere(li, Fr) === null || on.origin.distanceToSquared(Fr) > (e.far - e.near) ** 2)) && (Ir.copy(a).invert(), on.copy(e.ray).applyMatrix4(Ir), !(n.boundingBox !== null && on.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, on)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const a = this.geometry, s = this.material, o = a.index, c = a.attributes.position, l = a.attributes.uv, u = a.attributes.uv1, h = a.attributes.normal, f = a.groups, p = a.drawRange;
    if (o !== null)
      if (Array.isArray(s))
        for (let v = 0, S = f.length; v < S; v++) {
          const m = f[v], d = s[m.materialIndex], A = Math.max(m.start, p.start), y = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
          for (let E = A, C = y; E < C; E += 3) {
            const R = o.getX(E), D = o.getX(E + 1), N = o.getX(E + 2);
            r = pi(this, d, e, n, l, u, h, R, D, N), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = m.materialIndex, t.push(r));
          }
        }
      else {
        const v = Math.max(0, p.start), S = Math.min(o.count, p.start + p.count);
        for (let m = v, d = S; m < d; m += 3) {
          const A = o.getX(m), y = o.getX(m + 1), E = o.getX(m + 2);
          r = pi(this, s, e, n, l, u, h, A, y, E), r && (r.faceIndex = Math.floor(m / 3), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(s))
        for (let v = 0, S = f.length; v < S; v++) {
          const m = f[v], d = s[m.materialIndex], A = Math.max(m.start, p.start), y = Math.min(c.count, Math.min(m.start + m.count, p.start + p.count));
          for (let E = A, C = y; E < C; E += 3) {
            const R = E, D = E + 1, N = E + 2;
            r = pi(this, d, e, n, l, u, h, R, D, N), r && (r.faceIndex = Math.floor(E / 3), r.face.materialIndex = m.materialIndex, t.push(r));
          }
        }
      else {
        const v = Math.max(0, p.start), S = Math.min(c.count, p.start + p.count);
        for (let m = v, d = S; m < d; m += 3) {
          const A = m, y = m + 1, E = m + 2;
          r = pi(this, s, e, n, l, u, h, A, y, E), r && (r.faceIndex = Math.floor(m / 3), t.push(r));
        }
      }
  }
}
function ss(i, e, t, n, r, a, s, o) {
  let c;
  if (e.side === 1 ? c = n.intersectTriangle(s, a, r, !0, o) : c = n.intersectTriangle(r, a, s, e.side === 0, o), c === null) return null;
  fi.copy(o), fi.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(fi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: fi.clone(),
    object: i
  };
}
function pi(i, e, t, n, r, a, s, o, c, l) {
  i.getVertexPosition(o, ci), i.getVertexPosition(c, di), i.getVertexPosition(l, ui);
  const u = ss(i, e, t, n, ci, di, ui, Nr);
  if (u) {
    const h = new F();
    It.getBarycoord(Nr, ci, di, ui, h), r && (u.uv = It.getInterpolatedAttribute(r, o, c, l, h, new Ye())), a && (u.uv1 = It.getInterpolatedAttribute(a, o, c, l, h, new Ye())), s && (u.normal = It.getInterpolatedAttribute(s, o, c, l, h, new F()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = {
      a: o,
      b: c,
      c: l,
      normal: new F(),
      materialIndex: 0
    };
    It.getNormal(ci, di, ui, f.normal), u.face = f, u.barycoord = h;
  }
  return u;
}
class $n extends tn {
  /**
   * Constructs a new box geometry.
   *
   * @param {number} [width=1] - The width. That is, the length of the edges parallel to the X axis.
   * @param {number} [height=1] - The height. That is, the length of the edges parallel to the Y axis.
   * @param {number} [depth=1] - The depth. That is, the length of the edges parallel to the Z axis.
   * @param {number} [widthSegments=1] - Number of segmented rectangular faces along the width of the sides.
   * @param {number} [heightSegments=1] - Number of segmented rectangular faces along the height of the sides.
   * @param {number} [depthSegments=1] - Number of segmented rectangular faces along the depth of the sides.
   */
  constructor(e = 1, t = 1, n = 1, r = 1, a = 1, s = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: a,
      depthSegments: s
    };
    const o = this;
    r = Math.floor(r), a = Math.floor(a), s = Math.floor(s);
    const c = [], l = [], u = [], h = [];
    let f = 0, p = 0;
    v("z", "y", "x", -1, -1, n, t, e, s, a, 0), v("z", "y", "x", 1, -1, n, t, -e, s, a, 1), v("x", "z", "y", 1, 1, e, n, t, r, s, 2), v("x", "z", "y", 1, -1, e, n, -t, r, s, 3), v("x", "y", "z", 1, -1, e, t, n, r, a, 4), v("x", "y", "z", -1, -1, e, t, -n, r, a, 5), this.setIndex(c), this.setAttribute("position", new Bt(l, 3)), this.setAttribute("normal", new Bt(u, 3)), this.setAttribute("uv", new Bt(h, 2));
    function v(S, m, d, A, y, E, C, R, D, N, M) {
      const x = E / D, P = C / N, z = E / 2, H = C / 2, X = R / 2, K = D + 1, W = N + 1;
      let te = 0, G = 0;
      const ae = new F();
      for (let ce = 0; ce < W; ce++) {
        const Ee = ce * P - H;
        for (let Ne = 0; Ne < K; Ne++) {
          const Ze = Ne * x - z;
          ae[S] = Ze * A, ae[m] = Ee * y, ae[d] = X, l.push(ae.x, ae.y, ae.z), ae[S] = 0, ae[m] = 0, ae[d] = R > 0 ? 1 : -1, u.push(ae.x, ae.y, ae.z), h.push(Ne / D), h.push(1 - ce / N), te += 1;
        }
      }
      for (let ce = 0; ce < N; ce++)
        for (let Ee = 0; Ee < D; Ee++) {
          const Ne = f + Ee + K * ce, Ze = f + Ee + K * (ce + 1), Je = f + (Ee + 1) + K * (ce + 1), He = f + (Ee + 1) + K * ce;
          c.push(Ne, Ze, He), c.push(Ze, Je, He), G += 6;
        }
      o.addGroup(p, G, M), p += G, f += te;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {BoxGeometry} A new instance.
   */
  static fromJSON(e) {
    return new $n(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Fn(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function _t(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Fn(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function os(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Ea(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Ve.workingColorSpace;
}
const ls = { clone: Fn, merge: _t };
var cs = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, ds = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Qt extends bi {
  /**
   * Constructs a new shader material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = cs, this.fragmentShader = ds, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Fn(e.uniforms), this.uniformsGroups = os(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const s = this.uniforms[r].value;
      s && s.isTexture ? t.uniforms[r] = {
        type: "t",
        value: s.toJSON(e).uuid
      } : s && s.isColor ? t.uniforms[r] = {
        type: "c",
        value: s.getHex()
      } : s && s.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: s.toArray()
      } : s && s.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: s.toArray()
      } : s && s.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: s.toArray()
      } : s && s.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: s.toArray()
      } : s && s.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: s.toArray()
      } : t.uniforms[r] = {
        value: s
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ta extends At {
  /**
   * Constructs a new camera.
   */
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new rt(), this.projectionMatrix = new rt(), this.projectionMatrixInverse = new rt(), this.coordinateSystem = 2e3, this._reversedDepth = !1;
  }
  /**
   * The flag that indicates whether the camera uses a reversed depth buffer.
   *
   * @type {boolean}
   * @default false
   */
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  /**
   * Returns a vector representing the ("look") direction of the 3D object in world space.
   *
   * This method is overwritten since cameras have a different forward vector compared to other
   * 3D objects. A camera looks down its local, negative z-axis by default.
   *
   * @param {Vector3} target - The target vector the result is stored to.
   * @return {Vector3} The 3D object's direction in world space.
   */
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Jt = /* @__PURE__ */ new F(), Or = /* @__PURE__ */ new Ye(), Br = /* @__PURE__ */ new Ye();
class Mt extends Ta {
  /**
   * Constructs a new perspective camera.
   *
   * @param {number} [fov=50] - The vertical field of view.
   * @param {number} [aspect=1] - The aspect ratio.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current {@link PerspectiveCamera#filmGauge}.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * @param {number} focalLength - Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = or * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Returns the focal length from the current {@link PerspectiveCamera#fov} and
   * {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The computed focal length.
   */
  getFocalLength() {
    const e = Math.tan(Mi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  /**
   * Returns the current vertical field of view angle in degrees considering {@link PerspectiveCamera#zoom}.
   *
   * @return {number} The effective FOV.
   */
  getEffectiveFOV() {
    return or * 2 * Math.atan(
      Math.tan(Mi * 0.5 * this.fov) / this.zoom
    );
  }
  /**
   * Returns the width of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  /**
   * Returns the height of the image on the film. If {@link PerspectiveCamera#aspect} is greater than or
   * equal to one (landscape format), the result equals {@link PerspectiveCamera#filmGauge}.
   *
   * @return {number} The film width.
   */
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} minTarget - The lower-left corner of the view rectangle is written into this vector.
   * @param {Vector2} maxTarget - The upper-right corner of the view rectangle is written into this vector.
   */
  getViewBounds(e, t, n) {
    Jt.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Jt.x, Jt.y).multiplyScalar(-e / Jt.z), Jt.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Jt.x, Jt.y).multiplyScalar(-e / Jt.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   *
   * @param {number} distance - The viewing distance.
   * @param {Vector2} target - The target vector that is used to store result where x is width and y is height.
   * @returns {Vector2} The view size.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, Or, Br), t.subVectors(Br, Or);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *```
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *```
   * then for each monitor you would call it like this:
   *```js
   * const w = 1920;
   * const h = 1080;
   * const fullWidth = w * 3;
   * const fullHeight = h * 2;
   *
   * // --A--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   * // --B--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   * // --C--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   * // --D--
   * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   * // --E--
   * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   * // --F--
   * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   * ```
   *
   * Note there is no reason monitors have to be the same size or in a grid.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   */
  setViewOffset(e, t, n, r, a, s) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = a, this.view.height = s, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Mi * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, a = -0.5 * r;
    const s = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = s.fullWidth, l = s.fullHeight;
      a += s.offsetX * r / c, t -= s.offsetY * n / l, r *= s.width / c, n *= s.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (a += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(a, a + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const wn = -90, Cn = 1;
class us extends At {
  /**
   * Constructs a new cube camera.
   *
   * @param {number} near - The camera's near plane.
   * @param {number} far - The camera's far plane.
   * @param {WebGLCubeRenderTarget} renderTarget - The cube render target.
   */
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Mt(wn, Cn, e, t);
    r.layers = this.layers, this.add(r);
    const a = new Mt(wn, Cn, e, t);
    a.layers = this.layers, this.add(a);
    const s = new Mt(wn, Cn, e, t);
    s.layers = this.layers, this.add(s);
    const o = new Mt(wn, Cn, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Mt(wn, Cn, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Mt(wn, Cn, e, t);
    l.layers = this.layers, this.add(l);
  }
  /**
   * Must be called when the coordinate system of the cube camera is changed.
   */
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, a, s, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), a.up.set(0, 0, -1), a.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), a.up.set(0, 0, 1), a.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  /**
   * Calling this method will render the given scene with the given renderer
   * into the cube render target of the camera.
   *
   * @param {(Renderer|WebGLRenderer)} renderer - The renderer.
   * @param {Scene} scene - The scene to render.
   */
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [a, s, o, c, l, u] = this.children, h = e.getRenderTarget(), f = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), v = e.xr.enabled;
    e.xr.enabled = !1;
    const S = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, a), e.setRenderTarget(n, 1, r), e.render(t, s), e.setRenderTarget(n, 2, r), e.render(t, o), e.setRenderTarget(n, 3, r), e.render(t, c), e.setRenderTarget(n, 4, r), e.render(t, l), n.texture.generateMipmaps = S, e.setRenderTarget(n, 5, r), e.render(t, u), e.setRenderTarget(h, f, p), e.xr.enabled = v, n.texture.needsPMREMUpdate = !0;
  }
}
class ya extends gt {
  /**
   * Constructs a new cube texture.
   *
   * @param {Array<Image>} [images=[]] - An array holding a image for each side of a cube.
   * @param {number} [mapping=CubeReflectionMapping] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearMipmapLinearFilter] - The min filter value.
   * @param {number} [format=RGBAFormat] - The texture format.
   * @param {number} [type=UnsignedByteType] - The texture type.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {string} [colorSpace=NoColorSpace] - The color space value.
   */
  constructor(e = [], t = 301, n, r, a, s, o, c, l, u) {
    super(e, t, n, r, a, s, o, c, l, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  /**
   * Alias for {@link CubeTexture#image}.
   *
   * @type {Array<Image>}
   */
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class hs extends _n {
  /**
   * Constructs a new cube render target.
   *
   * @param {number} [size=1] - The size of the render target.
   * @param {RenderTarget~Options} [options] - The configuration object.
   */
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new ya(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
  }
  /**
   * Converts the given equirectangular texture to a cube map.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Texture} texture - The equirectangular texture.
   * @return {WebGLCubeRenderTarget} A reference to this cube render target.
   */
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new $n(5, 5, 5), a = new Qt({
      name: "CubemapFromEquirect",
      uniforms: Fn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    a.uniforms.tEquirect.value = t;
    const s = new Pt(r, a), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new us(1, 10, this).update(e, s), t.minFilter = o, s.geometry.dispose(), s.material.dispose(), this;
  }
  /**
   * Clears this cube render target.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {boolean} [color=true] - Whether the color buffer should be cleared or not.
   * @param {boolean} [depth=true] - Whether the depth buffer should be cleared or not.
   * @param {boolean} [stencil=true] - Whether the stencil buffer should be cleared or not.
   */
  clear(e, t = !0, n = !0, r = !0) {
    const a = e.getRenderTarget();
    for (let s = 0; s < 6; s++)
      e.setRenderTarget(this, s), e.clear(t, n, r);
    e.setRenderTarget(a);
  }
}
class mi extends At {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const fs = { type: "move" };
class ji {
  /**
   * Constructs a new XR controller.
   */
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  /**
   * Returns a group representing the hand space of the XR controller.
   *
   * @return {Group} A group representing the hand space of the XR controller.
   */
  getHandSpace() {
    return this._hand === null && (this._hand = new mi(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  /**
   * Returns a group representing the target ray space of the XR controller.
   *
   * @return {Group} A group representing the target ray space of the XR controller.
   */
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new mi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new F(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new F()), this._targetRay;
  }
  /**
   * Returns a group representing the grip space of the XR controller.
   *
   * @return {Group} A group representing the grip space of the XR controller.
   */
  getGripSpace() {
    return this._grip === null && (this._grip = new mi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new F(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new F()), this._grip;
  }
  /**
   * Dispatches the given event to the groups representing
   * the different coordinate spaces of the XR controller.
   *
   * @param {Object} event - The event to dispatch.
   * @return {WebXRController} A reference to this instance.
   */
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  /**
   * Connects the controller with the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  /**
   * Disconnects the controller from the given XR input source.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @return {WebXRController} A reference to this instance.
   */
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  /**
   * Updates the controller with the given input source, XR frame and reference space.
   * This updates the transformations of the groups that represent the different
   * coordinate systems of the controller.
   *
   * @param {XRInputSource} inputSource - The input source.
   * @param {XRFrame} frame - The XR frame.
   * @param {XRReferenceSpace} referenceSpace - The reference space.
   * @return {WebXRController} A reference to this instance.
   */
  update(e, t, n) {
    let r = null, a = null, s = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        s = !0;
        for (const S of e.hand.values()) {
          const m = t.getJointPose(S, n), d = this._getHandJoint(l, S);
          m !== null && (d.matrix.fromArray(m.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = !0, d.jointRadius = m.radius), d.visible = m !== null;
        }
        const u = l.joints["index-finger-tip"], h = l.joints["thumb-tip"], f = u.position.distanceTo(h.position), p = 0.02, v = 5e-3;
        l.inputState.pinching && f > p + v ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && f <= p - v && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (a = t.getPose(e.gripSpace, n), a !== null && (c.matrix.fromArray(a.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, a.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(a.linearVelocity)) : c.hasLinearVelocity = !1, a.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(a.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && a !== null && (r = a), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(fs)));
    }
    return o !== null && (o.visible = r !== null), c !== null && (c.visible = a !== null), l !== null && (l.visible = s !== null), this;
  }
  /**
   * Returns a group representing the hand joint for the given input joint.
   *
   * @private
   * @param {Group} hand - The group representing the hand space.
   * @param {XRJointSpace} inputjoint - The hand joint data.
   * @return {Group} A group representing the hand joint for the given input joint.
   */
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new mi();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class ps extends At {
  /**
   * Constructs a new scene.
   */
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new zt(), this.environmentIntensity = 1, this.environmentRotation = new zt(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const Ji = /* @__PURE__ */ new F(), ms = /* @__PURE__ */ new F(), _s = /* @__PURE__ */ new Ue();
class fn {
  /**
   * Constructs a new plane.
   *
   * @param {Vector3} [normal=(1,0,0)] - A unit length vector defining the normal of the plane.
   * @param {number} [constant=0] - The signed distance from the origin to the plane.
   */
  constructor(e = new F(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  /**
   * Sets the plane components by copying the given values.
   *
   * @param {Vector3} normal - The normal.
   * @param {number} constant - The constant.
   * @return {Plane} A reference to this plane.
   */
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  /**
   * Sets the plane components by defining `x`, `y`, `z` as the
   * plane normal and `w` as the constant.
   *
   * @param {number} x - The value for the normal's x component.
   * @param {number} y - The value for the normal's y component.
   * @param {number} z - The value for the normal's z component.
   * @param {number} w - The constant value.
   * @return {Plane} A reference to this plane.
   */
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  /**
   * Sets the plane from the given normal and coplanar point (that is a point
   * that lies onto the plane).
   *
   * @param {Vector3} normal - The normal.
   * @param {Vector3} point - A coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  /**
   * Sets the plane from three coplanar points. The winding order is
   * assumed to be counter-clockwise, and determines the direction of
   * the plane normal.
   *
   * @param {Vector3} a - The first coplanar point.
   * @param {Vector3} b - The second coplanar point.
   * @param {Vector3} c - The third coplanar point.
   * @return {Plane} A reference to this plane.
   */
  setFromCoplanarPoints(e, t, n) {
    const r = Ji.subVectors(n, t).cross(ms.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  /**
   * Copies the values of the given plane to this instance.
   *
   * @param {Plane} plane - The plane to copy.
   * @return {Plane} A reference to this plane.
   */
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  /**
   * Normalizes the plane normal and adjusts the constant accordingly.
   *
   * @return {Plane} A reference to this plane.
   */
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  /**
   * Negates both the plane normal and the constant.
   *
   * @return {Plane} A reference to this plane.
   */
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  /**
   * Returns the signed distance from the given point to this plane.
   *
   * @param {Vector3} point - The point to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  /**
   * Returns the signed distance from the given sphere to this plane.
   *
   * @param {Sphere} sphere - The sphere to compute the distance for.
   * @return {number} The signed distance.
   */
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  /**
   * Projects a the given point onto the plane.
   *
   * @param {Vector3} point - The point to project.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The projected point on the plane.
   */
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  /**
   * Returns the intersection point of the passed line and the plane. Returns
   * `null` if the line does not intersect. Returns the line's starting point if
   * the line is coplanar with the plane.
   *
   * @param {Line3} line - The line to compute the intersection for.
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {?Vector3} The intersection point.
   */
  intersectLine(e, t) {
    const n = e.delta(Ji), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const a = -(e.start.dot(this.normal) + this.constant) / r;
    return a < 0 || a > 1 ? null : t.copy(e.start).addScaledVector(n, a);
  }
  /**
   * Returns `true` if the given line segment intersects with (passes through) the plane.
   *
   * @param {Line3} line - The line to test.
   * @return {boolean} Whether the given line segment intersects with the plane or not.
   */
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  /**
   * Returns `true` if the given bounding box intersects with the plane.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the given bounding box intersects with the plane or not.
   */
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns `true` if the given bounding sphere intersects with the plane.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the given bounding sphere intersects with the plane or not.
   */
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  /**
   * Returns a coplanar vector to the plane, by calculating the
   * projection of the normal at the origin onto the plane.
   *
   * @param {Vector3} target - The target vector that is used to store the method's result.
   * @return {Vector3} The coplanar point.
   */
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  /**
   * Apply a 4x4 matrix to the plane. The matrix must be an affine, homogeneous transform.
   *
   * The optional normal matrix can be pre-computed like so:
   * ```js
   * const optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );
   * ```
   *
   * @param {Matrix4} matrix - The transformation matrix.
   * @param {Matrix4} [optionalNormalMatrix] - A pre-computed normal matrix.
   * @return {Plane} A reference to this plane.
   */
  applyMatrix4(e, t) {
    const n = t || _s.getNormalMatrix(e), r = this.coplanarPoint(Ji).applyMatrix4(e), a = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(a), this;
  }
  /**
   * Translates the plane by the distance defined by the given offset vector.
   * Note that this only affects the plane constant and will not affect the normal vector.
   *
   * @param {Vector3} offset - The offset vector.
   * @return {Plane} A reference to this plane.
   */
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  /**
   * Returns `true` if this plane is equal with the given one.
   *
   * @param {Plane} plane - The plane to test for equality.
   * @return {boolean} Whether this plane is equal with the given one.
   */
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  /**
   * Returns a new plane with copied values from this instance.
   *
   * @return {Plane} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
const ln = /* @__PURE__ */ new ur(), gs = /* @__PURE__ */ new Ye(0.5, 0.5), _i = /* @__PURE__ */ new F();
class ba {
  /**
   * Constructs a new frustum.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   */
  constructor(e = new fn(), t = new fn(), n = new fn(), r = new fn(), a = new fn(), s = new fn()) {
    this.planes = [e, t, n, r, a, s];
  }
  /**
   * Sets the frustum planes by copying the given planes.
   *
   * @param {Plane} [p0] - The first plane that encloses the frustum.
   * @param {Plane} [p1] - The second plane that encloses the frustum.
   * @param {Plane} [p2] - The third plane that encloses the frustum.
   * @param {Plane} [p3] - The fourth plane that encloses the frustum.
   * @param {Plane} [p4] - The fifth plane that encloses the frustum.
   * @param {Plane} [p5] - The sixth plane that encloses the frustum.
   * @return {Frustum} A reference to this frustum.
   */
  set(e, t, n, r, a, s) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(a), o[5].copy(s), this;
  }
  /**
   * Copies the values of the given frustum to this instance.
   *
   * @param {Frustum} frustum - The frustum to copy.
   * @return {Frustum} A reference to this frustum.
   */
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  /**
   * Sets the frustum planes from the given projection matrix.
   *
   * @param {Matrix4} m - The projection matrix.
   * @param {(WebGLCoordinateSystem|WebGPUCoordinateSystem)} coordinateSystem - The coordinate system.
   * @param {boolean} [reversedDepth=false] - Whether to use a reversed depth.
   * @return {Frustum} A reference to this frustum.
   */
  setFromProjectionMatrix(e, t = 2e3, n = !1) {
    const r = this.planes, a = e.elements, s = a[0], o = a[1], c = a[2], l = a[3], u = a[4], h = a[5], f = a[6], p = a[7], v = a[8], S = a[9], m = a[10], d = a[11], A = a[12], y = a[13], E = a[14], C = a[15];
    if (r[0].setComponents(l - s, p - u, d - v, C - A).normalize(), r[1].setComponents(l + s, p + u, d + v, C + A).normalize(), r[2].setComponents(l + o, p + h, d + S, C + y).normalize(), r[3].setComponents(l - o, p - h, d - S, C - y).normalize(), n)
      r[4].setComponents(c, f, m, E).normalize(), r[5].setComponents(l - c, p - f, d - m, C - E).normalize();
    else if (r[4].setComponents(l - c, p - f, d - m, C - E).normalize(), t === 2e3)
      r[5].setComponents(l + c, p + f, d + m, C + E).normalize();
    else if (t === 2001)
      r[5].setComponents(c, f, m, E).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  /**
   * Returns `true` if the 3D object's bounding sphere is intersecting this frustum.
   *
   * Note that the 3D object must have a geometry so that the bounding sphere can be calculated.
   *
   * @param {Object3D} object - The 3D object to test.
   * @return {boolean} Whether the 3D object's bounding sphere is intersecting this frustum or not.
   */
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), ln.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), ln.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(ln);
  }
  /**
   * Returns `true` if the given sprite is intersecting this frustum.
   *
   * @param {Sprite} sprite - The sprite to test.
   * @return {boolean} Whether the sprite is intersecting this frustum or not.
   */
  intersectsSprite(e) {
    ln.center.set(0, 0, 0);
    const t = gs.distanceTo(e.center);
    return ln.radius = 0.7071067811865476 + t, ln.applyMatrix4(e.matrixWorld), this.intersectsSphere(ln);
  }
  /**
   * Returns `true` if the given bounding sphere is intersecting this frustum.
   *
   * @param {Sphere} sphere - The bounding sphere to test.
   * @return {boolean} Whether the bounding sphere is intersecting this frustum or not.
   */
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let a = 0; a < 6; a++)
      if (t[a].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  /**
   * Returns `true` if the given bounding box is intersecting this frustum.
   *
   * @param {Box3} box - The bounding box to test.
   * @return {boolean} Whether the bounding box is intersecting this frustum or not.
   */
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (_i.x = r.normal.x > 0 ? e.max.x : e.min.x, _i.y = r.normal.y > 0 ? e.max.y : e.min.y, _i.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(_i) < 0)
        return !1;
    }
    return !0;
  }
  /**
   * Returns `true` if the given point lies within the frustum.
   *
   * @param {Vector3} point - The point to test.
   * @return {boolean} Whether the point lies within this frustum or not.
   */
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  /**
   * Returns a new frustum with copied values from this instance.
   *
   * @return {Frustum} A clone of this instance.
   */
  clone() {
    return new this.constructor().copy(this);
  }
}
class Aa extends gt {
  /**
   * Constructs a new depth texture.
   *
   * @param {number} width - The width of the texture.
   * @param {number} height - The height of the texture.
   * @param {number} [type=UnsignedIntType] - The texture type.
   * @param {number} [mapping=Texture.DEFAULT_MAPPING] - The texture mapping.
   * @param {number} [wrapS=ClampToEdgeWrapping] - The wrapS value.
   * @param {number} [wrapT=ClampToEdgeWrapping] - The wrapT value.
   * @param {number} [magFilter=LinearFilter] - The mag filter value.
   * @param {number} [minFilter=LinearFilter] - The min filter value.
   * @param {number} [anisotropy=Texture.DEFAULT_ANISOTROPY] - The anisotropy value.
   * @param {number} [format=DepthFormat] - The texture format.
   * @param {number} [depth=1] - The depth of the texture.
   */
  constructor(e, t, n = 1014, r, a, s, o = 1003, c = 1003, l, u = 1026, h = 1) {
    if (u !== 1026 && u !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: e, height: t, depth: h };
    super(f, r, a, s, o, c, u, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new dr(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Ra extends gt {
  /**
   * Creates a new raw texture.
   *
   * @param {?(WebGLTexture|GPUTexture)} [sourceTexture=null] - The external texture.
   */
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class Ai extends tn {
  /**
   * Constructs a new plane geometry.
   *
   * @param {number} [width=1] - The width along the X axis.
   * @param {number} [height=1] - The height along the Y axis
   * @param {number} [widthSegments=1] - The number of segments along the X axis.
   * @param {number} [heightSegments=1] - The number of segments along the Y axis.
   */
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const a = e / 2, s = t / 2, o = Math.floor(n), c = Math.floor(r), l = o + 1, u = c + 1, h = e / o, f = t / c, p = [], v = [], S = [], m = [];
    for (let d = 0; d < u; d++) {
      const A = d * f - s;
      for (let y = 0; y < l; y++) {
        const E = y * h - a;
        v.push(E, -A, 0), S.push(0, 0, 1), m.push(y / o), m.push(1 - d / c);
      }
    }
    for (let d = 0; d < c; d++)
      for (let A = 0; A < o; A++) {
        const y = A + l * d, E = A + l * (d + 1), C = A + 1 + l * (d + 1), R = A + 1 + l * d;
        p.push(y, E, R), p.push(E, C, R);
      }
    this.setIndex(p), this.setAttribute("position", new Bt(v, 3)), this.setAttribute("normal", new Bt(S, 3)), this.setAttribute("uv", new Bt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {PlaneGeometry} A new instance.
   */
  static fromJSON(e) {
    return new Ai(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class yi extends tn {
  /**
   * Constructs a new sphere geometry.
   *
   * @param {number} [radius=1] - The sphere radius.
   * @param {number} [widthSegments=32] - The number of horizontal segments. Minimum value is `3`.
   * @param {number} [heightSegments=16] - The number of vertical segments. Minimum value is `2`.
   * @param {number} [phiStart=0] - The horizontal starting angle in radians.
   * @param {number} [phiLength=Math.PI*2] - The horizontal sweep angle size.
   * @param {number} [thetaStart=0] - The vertical starting angle in radians.
   * @param {number} [thetaLength=Math.PI] - The vertical sweep angle size.
   */
  constructor(e = 1, t = 32, n = 16, r = 0, a = Math.PI * 2, s = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: r,
      phiLength: a,
      thetaStart: s,
      thetaLength: o
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const c = Math.min(s + o, Math.PI);
    let l = 0;
    const u = [], h = new F(), f = new F(), p = [], v = [], S = [], m = [];
    for (let d = 0; d <= n; d++) {
      const A = [], y = d / n;
      let E = 0;
      d === 0 && s === 0 ? E = 0.5 / t : d === n && c === Math.PI && (E = -0.5 / t);
      for (let C = 0; C <= t; C++) {
        const R = C / t;
        h.x = -e * Math.cos(r + R * a) * Math.sin(s + y * o), h.y = e * Math.cos(s + y * o), h.z = e * Math.sin(r + R * a) * Math.sin(s + y * o), v.push(h.x, h.y, h.z), f.copy(h).normalize(), S.push(f.x, f.y, f.z), m.push(R + E, 1 - y), A.push(l++);
      }
      u.push(A);
    }
    for (let d = 0; d < n; d++)
      for (let A = 0; A < t; A++) {
        const y = u[d][A + 1], E = u[d][A], C = u[d + 1][A], R = u[d + 1][A + 1];
        (d !== 0 || s > 0) && p.push(y, E, R), (d !== n - 1 || c < Math.PI) && p.push(E, C, R);
      }
    this.setIndex(p), this.setAttribute("position", new Bt(v, 3)), this.setAttribute("normal", new Bt(S, 3)), this.setAttribute("uv", new Bt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  /**
   * Factory method for creating an instance of this class from the given
   * JSON object.
   *
   * @param {Object} data - A JSON object representing the serialized geometry.
   * @return {SphereGeometry} A new instance.
   */
  static fromJSON(e) {
    return new yi(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class vs extends bi {
  /**
   * Constructs a new mesh depth material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class xs extends bi {
  /**
   * Constructs a new mesh distance material.
   *
   * @param {Object} [parameters] - An object with one or more properties
   * defining the material's appearance. Any property of the material
   * (including any property from inherited materials) can be passed
   * in here. Color values can be passed any type of value accepted
   * by {@link Color#set}.
   */
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Qi = {
  /**
   * Whether caching is enabled or not.
   *
   * @static
   * @type {boolean}
   * @default false
   */
  enabled: !1,
  /**
   * A dictionary that holds cached files.
   *
   * @static
   * @type {Object<string,Object>}
   */
  files: {},
  /**
   * Adds a cache entry with a key to reference the file. If this key already
   * holds a file, it is overwritten.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   * @param {Object} file -  The file to be cached.
   */
  add: function(i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  /**
   * Gets the cached value for the given key.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   * @return {Object|undefined} The cached file. If the key does not exist `undefined` is returned.
   */
  get: function(i) {
    if (this.enabled !== !1)
      return this.files[i];
  },
  /**
   * Removes the cached file associated with the given key.
   *
   * @static
   * @param {string} key - The key to reference the cached file.
   */
  remove: function(i) {
    delete this.files[i];
  },
  /**
   * Remove all values from the cache.
   *
   * @static
   */
  clear: function() {
    this.files = {};
  }
};
class Ss {
  /**
   * Constructs a new loading manager.
   *
   * @param {Function} [onLoad] - Executes when all items have been loaded.
   * @param {Function} [onProgress] - Executes when single items have been loaded.
   * @param {Function} [onError] - Executes when an error occurs.
   */
  constructor(e, t, n) {
    const r = this;
    let a = !1, s = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.abortController = new AbortController(), this.itemStart = function(u) {
      o++, a === !1 && r.onStart !== void 0 && r.onStart(u, s, o), a = !0;
    }, this.itemEnd = function(u) {
      s++, r.onProgress !== void 0 && r.onProgress(u, s, o), s === o && (a = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(u) {
      r.onError !== void 0 && r.onError(u);
    }, this.resolveURL = function(u) {
      return c ? c(u) : u;
    }, this.setURLModifier = function(u) {
      return c = u, this;
    }, this.addHandler = function(u, h) {
      return l.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = l.indexOf(u);
      return h !== -1 && l.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, f = l.length; h < f; h += 2) {
        const p = l[h], v = l[h + 1];
        if (p.global && (p.lastIndex = 0), p.test(u))
          return v;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this.abortController = new AbortController(), this;
    };
  }
}
const Ms = /* @__PURE__ */ new Ss();
class hr {
  /**
   * Constructs a new loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    this.manager = e !== void 0 ? e : Ms, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for loading assets from the backend.
   *
   * @abstract
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {Function} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @param {onErrorCallback} [onError] - Executed when errors occur.
   */
  load() {
  }
  /**
   * A async version of {@link Loader#load}.
   *
   * @param {string} url - The path/URL of the file to be loaded.
   * @param {onProgressCallback} [onProgress] - Executed while the loading is in progress.
   * @return {Promise} A Promise that resolves when the asset has been loaded.
   */
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(r, a) {
      n.load(e, r, t, a);
    });
  }
  /**
   * This method needs to be implemented by all concrete loaders. It holds the
   * logic for parsing the asset into three.js entities.
   *
   * @abstract
   * @param {any} data - The data to parse.
   */
  parse() {
  }
  /**
   * Sets the `crossOrigin` String to implement CORS for loading the URL
   * from a different domain that allows CORS.
   *
   * @param {string} crossOrigin - The `crossOrigin` value.
   * @return {Loader} A reference to this instance.
   */
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  /**
   * Whether the XMLHttpRequest uses credentials such as cookies, authorization
   * headers or TLS client certificates, see [XMLHttpRequest.withCredentials]{@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials}.
   *
   * Note: This setting has no effect if you are loading files locally or from the same domain.
   *
   * @param {boolean} value - The `withCredentials` value.
   * @return {Loader} A reference to this instance.
   */
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  /**
   * Sets the base path for the asset.
   *
   * @param {string} path - The base path.
   * @return {Loader} A reference to this instance.
   */
  setPath(e) {
    return this.path = e, this;
  }
  /**
   * Sets the base path for dependent resources like textures.
   *
   * @param {string} resourcePath - The resource path.
   * @return {Loader} A reference to this instance.
   */
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  /**
   * Sets the given request header.
   *
   * @param {Object} requestHeader - A [request header]{@link https://developer.mozilla.org/en-US/docs/Glossary/Request_header}
   * for configuring the HTTP request.
   * @return {Loader} A reference to this instance.
   */
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
  /**
   * This method can be implemented in loaders for aborting ongoing requests.
   *
   * @abstract
   * @return {Loader} A reference to this instance.
   */
  abort() {
    return this;
  }
}
hr.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Pn = /* @__PURE__ */ new WeakMap();
class Es extends hr {
  /**
   * Constructs a new image loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e);
  }
  /**
   * Starts loading from the given URL and passes the loaded image
   * to the `onLoad()` callback. The method also returns a new `Image` object which can
   * directly be used for texture creation. If you do it this way, the texture
   * may pop up in your scene once the respective loading process is finished.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(Image)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Unsupported in this loader.
   * @param {onErrorCallback} onError - Executed when errors occur.
   * @return {Image} The image.
   */
  load(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const a = this, s = Qi.get(`image:${e}`);
    if (s !== void 0) {
      if (s.complete === !0)
        a.manager.itemStart(e), setTimeout(function() {
          t && t(s), a.manager.itemEnd(e);
        }, 0);
      else {
        let h = Pn.get(s);
        h === void 0 && (h = [], Pn.set(s, h)), h.push({ onLoad: t, onError: r });
      }
      return s;
    }
    const o = qn("img");
    function c() {
      u(), t && t(this);
      const h = Pn.get(this) || [];
      for (let f = 0; f < h.length; f++) {
        const p = h[f];
        p.onLoad && p.onLoad(this);
      }
      Pn.delete(this), a.manager.itemEnd(e);
    }
    function l(h) {
      u(), r && r(h), Qi.remove(`image:${e}`);
      const f = Pn.get(this) || [];
      for (let p = 0; p < f.length; p++) {
        const v = f[p];
        v.onError && v.onError(h);
      }
      Pn.delete(this), a.manager.itemError(e), a.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), Qi.add(`image:${e}`, o), a.manager.itemStart(e), o.src = e, o;
  }
}
class Ts extends hr {
  /**
   * Constructs a new texture loader.
   *
   * @param {LoadingManager} [manager] - The loading manager.
   */
  constructor(e) {
    super(e);
  }
  /**
   * Starts loading from the given URL and pass the fully loaded texture
   * to the `onLoad()` callback. The method also returns a new texture object which can
   * directly be used for material creation. If you do it this way, the texture
   * may pop up in your scene once the respective loading process is finished.
   *
   * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
   * @param {function(Texture)} onLoad - Executed when the loading process has been finished.
   * @param {onProgressCallback} onProgress - Unsupported in this loader.
   * @param {onErrorCallback} onError - Executed when errors occur.
   * @return {Texture} The texture.
   */
  load(e, t, n, r) {
    const a = new gt(), s = new Es(this.manager);
    return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(e, function(o) {
      a.image = o, a.needsUpdate = !0, t !== void 0 && t(a);
    }, n, r), a;
  }
}
class ys extends Ta {
  /**
   * Constructs a new orthographic camera.
   *
   * @param {number} [left=-1] - The left plane of the camera's frustum.
   * @param {number} [right=1] - The right plane of the camera's frustum.
   * @param {number} [top=1] - The top plane of the camera's frustum.
   * @param {number} [bottom=-1] - The bottom plane of the camera's frustum.
   * @param {number} [near=0.1] - The camera's near plane.
   * @param {number} [far=2000] - The camera's far plane.
   */
  constructor(e = -1, t = 1, n = 1, r = -1, a = 0.1, s = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = a, this.far = s, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * @param {number} fullWidth - The full width of multiview setup.
   * @param {number} fullHeight - The full height of multiview setup.
   * @param {number} x - The horizontal offset of the subcamera.
   * @param {number} y - The vertical offset of the subcamera.
   * @param {number} width - The width of subcamera.
   * @param {number} height - The height of subcamera.
   * @see {@link PerspectiveCamera#setViewOffset}
   */
  setViewOffset(e, t, n, r, a, s) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = a, this.view.height = s, this.updateProjectionMatrix();
  }
  /**
   * Removes the view offset from the projection matrix.
   */
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  /**
   * Updates the camera's projection matrix. Must be called after any change of
   * camera properties.
   */
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let a = n - e, s = n + e, o = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      a += l * this.view.offsetX, s = a + l * this.view.width, o -= u * this.view.offsetY, c = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(a, s, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const zr = /* @__PURE__ */ new rt(), Gr = /* @__PURE__ */ new rt(), cn = /* @__PURE__ */ new rt();
class bs {
  /**
   * Constructs a new stereo camera.
   */
  constructor() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new Mt(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Mt(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
      focus: null,
      fov: null,
      aspect: null,
      near: null,
      far: null,
      zoom: null,
      eyeSep: null
    };
  }
  /**
   * Updates the stereo camera based on the given perspective camera.
   *
   * @param {PerspectiveCamera} camera - The perspective camera.
   */
  update(e) {
    const t = this._cache;
    if (t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep) {
      t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep, cn.copy(e.projectionMatrix);
      const r = t.eyeSep / 2, a = r * t.near / t.focus, s = t.near * Math.tan(Mi * t.fov * 0.5) / t.zoom;
      let o, c;
      Gr.elements[12] = -r, zr.elements[12] = r, o = -s * t.aspect + a, c = s * t.aspect + a, cn.elements[0] = 2 * t.near / (c - o), cn.elements[8] = (c + o) / (c - o), this.cameraL.projectionMatrix.copy(cn), o = -s * t.aspect - a, c = s * t.aspect - a, cn.elements[0] = 2 * t.near / (c - o), cn.elements[8] = (c + o) / (c - o), this.cameraR.projectionMatrix.copy(cn);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Gr), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(zr);
  }
}
class As extends Mt {
  /**
   * Constructs a new array camera.
   *
   * @param {Array<PerspectiveCamera>} [array=[]] - An array of perspective sub cameras.
   */
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
  }
}
function Vr(i, e, t, n) {
  const r = Rs(n);
  switch (t) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case 1021:
      return i * e;
    case 1028:
      return i * e / r.components * r.byteLength;
    case 1029:
      return i * e / r.components * r.byteLength;
    case 1030:
      return i * e * 2 / r.components * r.byteLength;
    case 1031:
      return i * e * 2 / r.components * r.byteLength;
    case 1022:
      return i * e * 3 / r.components * r.byteLength;
    case 1023:
      return i * e * 4 / r.components * r.byteLength;
    case 1033:
      return i * e * 4 / r.components * r.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case 33776:
    case 33777:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case 35841:
    case 35843:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case 36196:
    case 37492:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case 37808:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case 36283:
    case 36284:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function Rs(i) {
  switch (i) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
    case 35899:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: "180"
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "180");
function wa() {
  let i = null, e = !1, t = null, n = null;
  function r(a, s) {
    t(a, s), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(a) {
      t = a;
    },
    setContext: function(a) {
      i = a;
    }
  };
}
function ws(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, u = o.usage, h = l.byteLength, f = i.createBuffer();
    i.bindBuffer(c, f), i.bufferData(c, l, u), o.onUploadCallback();
    let p;
    if (l instanceof Float32Array)
      p = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      p = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = i.HALF_FLOAT : p = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      p = i.SHORT;
    else if (l instanceof Uint32Array)
      p = i.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      p = i.INT;
    else if (l instanceof Int8Array)
      p = i.BYTE;
    else if (l instanceof Uint8Array)
      p = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      p = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: f,
      type: p,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: h
    };
  }
  function n(o, c, l) {
    const u = c.array, h = c.updateRanges;
    if (i.bindBuffer(l, o), h.length === 0)
      i.bufferSubData(l, 0, u);
    else {
      h.sort((p, v) => p.start - v.start);
      let f = 0;
      for (let p = 1; p < h.length; p++) {
        const v = h[f], S = h[p];
        S.start <= v.start + v.count + 1 ? v.count = Math.max(
          v.count,
          S.start + S.count - v.start
        ) : (++f, h[f] = S);
      }
      h.length = f + 1;
      for (let p = 0, v = h.length; p < v; p++) {
        const S = h[p];
        i.bufferSubData(
          l,
          S.start * u.BYTES_PER_ELEMENT,
          u,
          S.start,
          S.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function a(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (i.deleteBuffer(c.buffer), e.delete(o));
  }
  function s(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const u = e.get(o);
      (!u || u.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const l = e.get(o);
    if (l === void 0)
      e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return {
    get: r,
    remove: a,
    update: s
  };
}
var Cs = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Ps = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Ds = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Ls = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Us = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Is = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Fs = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Ns = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Os = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Bs = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, zs = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Gs = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Vs = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Hs = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, ks = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Ws = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Xs = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, qs = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Ys = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Ks = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Zs = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, $s = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, js = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Js = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Qs = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, eo = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, to = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, no = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, io = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, ro = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, ao = "gl_FragColor = linearToOutputTexel( gl_FragColor );", so = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, oo = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, lo = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, co = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, uo = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, ho = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, fo = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, po = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, mo = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, _o = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, go = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, vo = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, xo = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, So = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Mo = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Eo = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, To = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, yo = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, bo = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Ao = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Ro = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, wo = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Co = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Po = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Do = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Lo = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Uo = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Io = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Fo = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, No = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Oo = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Bo = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, zo = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Go = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Vo = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Ho = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, ko = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Wo = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Xo = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, qo = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Yo = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Ko = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Zo = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, $o = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, jo = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Jo = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Qo = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, el = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, tl = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, nl = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, il = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, rl = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, al = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, sl = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, ol = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, ll = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, cl = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, dl = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ul = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, hl = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, fl = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, pl = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, ml = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, _l = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, gl = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, vl = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, xl = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Sl = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Ml = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, El = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Tl = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, yl = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, bl = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Al = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Rl = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, wl = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Cl = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Pl = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Dl = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ll = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ul = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Il = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Fl = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Nl = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Ol = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Bl = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, zl = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Gl = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Vl = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Hl = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, kl = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Wl = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Xl = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ql = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Yl = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Kl = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Zl = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, $l = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, jl = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Jl = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ql = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, ec = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, tc = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, nc = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ic = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, rc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, ac = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, sc = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, oc = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, lc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Fe = {
  alphahash_fragment: Cs,
  alphahash_pars_fragment: Ps,
  alphamap_fragment: Ds,
  alphamap_pars_fragment: Ls,
  alphatest_fragment: Us,
  alphatest_pars_fragment: Is,
  aomap_fragment: Fs,
  aomap_pars_fragment: Ns,
  batching_pars_vertex: Os,
  batching_vertex: Bs,
  begin_vertex: zs,
  beginnormal_vertex: Gs,
  bsdfs: Vs,
  iridescence_fragment: Hs,
  bumpmap_pars_fragment: ks,
  clipping_planes_fragment: Ws,
  clipping_planes_pars_fragment: Xs,
  clipping_planes_pars_vertex: qs,
  clipping_planes_vertex: Ys,
  color_fragment: Ks,
  color_pars_fragment: Zs,
  color_pars_vertex: $s,
  color_vertex: js,
  common: Js,
  cube_uv_reflection_fragment: Qs,
  defaultnormal_vertex: eo,
  displacementmap_pars_vertex: to,
  displacementmap_vertex: no,
  emissivemap_fragment: io,
  emissivemap_pars_fragment: ro,
  colorspace_fragment: ao,
  colorspace_pars_fragment: so,
  envmap_fragment: oo,
  envmap_common_pars_fragment: lo,
  envmap_pars_fragment: co,
  envmap_pars_vertex: uo,
  envmap_physical_pars_fragment: Eo,
  envmap_vertex: ho,
  fog_vertex: fo,
  fog_pars_vertex: po,
  fog_fragment: mo,
  fog_pars_fragment: _o,
  gradientmap_pars_fragment: go,
  lightmap_pars_fragment: vo,
  lights_lambert_fragment: xo,
  lights_lambert_pars_fragment: So,
  lights_pars_begin: Mo,
  lights_toon_fragment: To,
  lights_toon_pars_fragment: yo,
  lights_phong_fragment: bo,
  lights_phong_pars_fragment: Ao,
  lights_physical_fragment: Ro,
  lights_physical_pars_fragment: wo,
  lights_fragment_begin: Co,
  lights_fragment_maps: Po,
  lights_fragment_end: Do,
  logdepthbuf_fragment: Lo,
  logdepthbuf_pars_fragment: Uo,
  logdepthbuf_pars_vertex: Io,
  logdepthbuf_vertex: Fo,
  map_fragment: No,
  map_pars_fragment: Oo,
  map_particle_fragment: Bo,
  map_particle_pars_fragment: zo,
  metalnessmap_fragment: Go,
  metalnessmap_pars_fragment: Vo,
  morphinstance_vertex: Ho,
  morphcolor_vertex: ko,
  morphnormal_vertex: Wo,
  morphtarget_pars_vertex: Xo,
  morphtarget_vertex: qo,
  normal_fragment_begin: Yo,
  normal_fragment_maps: Ko,
  normal_pars_fragment: Zo,
  normal_pars_vertex: $o,
  normal_vertex: jo,
  normalmap_pars_fragment: Jo,
  clearcoat_normal_fragment_begin: Qo,
  clearcoat_normal_fragment_maps: el,
  clearcoat_pars_fragment: tl,
  iridescence_pars_fragment: nl,
  opaque_fragment: il,
  packing: rl,
  premultiplied_alpha_fragment: al,
  project_vertex: sl,
  dithering_fragment: ol,
  dithering_pars_fragment: ll,
  roughnessmap_fragment: cl,
  roughnessmap_pars_fragment: dl,
  shadowmap_pars_fragment: ul,
  shadowmap_pars_vertex: hl,
  shadowmap_vertex: fl,
  shadowmask_pars_fragment: pl,
  skinbase_vertex: ml,
  skinning_pars_vertex: _l,
  skinning_vertex: gl,
  skinnormal_vertex: vl,
  specularmap_fragment: xl,
  specularmap_pars_fragment: Sl,
  tonemapping_fragment: Ml,
  tonemapping_pars_fragment: El,
  transmission_fragment: Tl,
  transmission_pars_fragment: yl,
  uv_pars_fragment: bl,
  uv_pars_vertex: Al,
  uv_vertex: Rl,
  worldpos_vertex: wl,
  background_vert: Cl,
  background_frag: Pl,
  backgroundCube_vert: Dl,
  backgroundCube_frag: Ll,
  cube_vert: Ul,
  cube_frag: Il,
  depth_vert: Fl,
  depth_frag: Nl,
  distanceRGBA_vert: Ol,
  distanceRGBA_frag: Bl,
  equirect_vert: zl,
  equirect_frag: Gl,
  linedashed_vert: Vl,
  linedashed_frag: Hl,
  meshbasic_vert: kl,
  meshbasic_frag: Wl,
  meshlambert_vert: Xl,
  meshlambert_frag: ql,
  meshmatcap_vert: Yl,
  meshmatcap_frag: Kl,
  meshnormal_vert: Zl,
  meshnormal_frag: $l,
  meshphong_vert: jl,
  meshphong_frag: Jl,
  meshphysical_vert: Ql,
  meshphysical_frag: ec,
  meshtoon_vert: tc,
  meshtoon_frag: nc,
  points_vert: ic,
  points_frag: rc,
  shadow_vert: ac,
  shadow_frag: sc,
  sprite_vert: oc,
  sprite_frag: lc
}, re = {
  common: {
    diffuse: { value: /* @__PURE__ */ new qe(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Ue() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ue() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ue() },
    normalScale: { value: /* @__PURE__ */ new Ye(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ue() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ue() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new qe(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new qe(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ue() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new qe(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ye(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ue() },
    alphaTest: { value: 0 }
  }
}, Nt = {
  basic: {
    uniforms: /* @__PURE__ */ _t([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.fog
    ]),
    vertexShader: Fe.meshbasic_vert,
    fragmentShader: Fe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ _t([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new qe(0) }
      }
    ]),
    vertexShader: Fe.meshlambert_vert,
    fragmentShader: Fe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ _t([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new qe(0) },
        specular: { value: /* @__PURE__ */ new qe(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Fe.meshphong_vert,
    fragmentShader: Fe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ _t([
      re.common,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.roughnessmap,
      re.metalnessmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new qe(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshphysical_vert,
    fragmentShader: Fe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ _t([
      re.common,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.gradientmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new qe(0) }
      }
    ]),
    vertexShader: Fe.meshtoon_vert,
    fragmentShader: Fe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ _t([
      re.common,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Fe.meshmatcap_vert,
    fragmentShader: Fe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ _t([
      re.points,
      re.fog
    ]),
    vertexShader: Fe.points_vert,
    fragmentShader: Fe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ _t([
      re.common,
      re.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Fe.linedashed_vert,
    fragmentShader: Fe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ _t([
      re.common,
      re.displacementmap
    ]),
    vertexShader: Fe.depth_vert,
    fragmentShader: Fe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ _t([
      re.common,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshnormal_vert,
    fragmentShader: Fe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ _t([
      re.sprite,
      re.fog
    ]),
    vertexShader: Fe.sprite_vert,
    fragmentShader: Fe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ue() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Fe.background_vert,
    fragmentShader: Fe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Ue() }
    },
    vertexShader: Fe.backgroundCube_vert,
    fragmentShader: Fe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Fe.cube_vert,
    fragmentShader: Fe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Fe.equirect_vert,
    fragmentShader: Fe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ _t([
      re.common,
      re.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new F() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Fe.distanceRGBA_vert,
    fragmentShader: Fe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ _t([
      re.lights,
      re.fog,
      {
        color: { value: /* @__PURE__ */ new qe(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.shadow_vert,
    fragmentShader: Fe.shadow_frag
  }
};
Nt.physical = {
  uniforms: /* @__PURE__ */ _t([
    Nt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ue() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ue() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ye(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ue() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ue() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ue() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new qe(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ue() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ue() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ue() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ye() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ue() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new qe(0) },
      specularColor: { value: /* @__PURE__ */ new qe(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ue() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ue() },
      anisotropyVector: { value: /* @__PURE__ */ new Ye() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Ue() }
    }
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag
};
const gi = { r: 0, b: 0, g: 0 }, dn = /* @__PURE__ */ new zt(), cc = /* @__PURE__ */ new rt();
function dc(i, e, t, n, r, a, s) {
  const o = new qe(0);
  let c = a === !0 ? 0 : 1, l, u, h = null, f = 0, p = null;
  function v(y) {
    let E = y.isScene === !0 ? y.background : null;
    return E && E.isTexture && (E = (y.backgroundBlurriness > 0 ? t : e).get(E)), E;
  }
  function S(y) {
    let E = !1;
    const C = v(y);
    C === null ? d(o, c) : C && C.isColor && (d(C, 1), E = !0);
    const R = i.xr.getEnvironmentBlendMode();
    R === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, s) : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, s), (i.autoClear || E) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function m(y, E) {
    const C = v(E);
    C && (C.isCubeTexture || C.mapping === 306) ? (u === void 0 && (u = new Pt(
      new $n(1, 1, 1),
      new Qt({
        name: "BackgroundCubeMaterial",
        uniforms: Fn(Nt.backgroundCube.uniforms),
        vertexShader: Nt.backgroundCube.vertexShader,
        fragmentShader: Nt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(R, D, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(u)), dn.copy(E.backgroundRotation), dn.x *= -1, dn.y *= -1, dn.z *= -1, C.isCubeTexture && C.isRenderTargetTexture === !1 && (dn.y *= -1, dn.z *= -1), u.material.uniforms.envMap.value = C, u.material.uniforms.flipEnvMap.value = C.isCubeTexture && C.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = E.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(cc.makeRotationFromEuler(dn)), u.material.toneMapped = Ve.getTransfer(C.colorSpace) !== Xe, (h !== C || f !== C.version || p !== i.toneMapping) && (u.material.needsUpdate = !0, h = C, f = C.version, p = i.toneMapping), u.layers.enableAll(), y.unshift(u, u.geometry, u.material, 0, 0, null)) : C && C.isTexture && (l === void 0 && (l = new Pt(
      new Ai(2, 2),
      new Qt({
        name: "BackgroundMaterial",
        uniforms: Fn(Nt.background.uniforms),
        vertexShader: Nt.background.vertexShader,
        fragmentShader: Nt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        allowOverride: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(l)), l.material.uniforms.t2D.value = C, l.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, l.material.toneMapped = Ve.getTransfer(C.colorSpace) !== Xe, C.matrixAutoUpdate === !0 && C.updateMatrix(), l.material.uniforms.uvTransform.value.copy(C.matrix), (h !== C || f !== C.version || p !== i.toneMapping) && (l.material.needsUpdate = !0, h = C, f = C.version, p = i.toneMapping), l.layers.enableAll(), y.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function d(y, E) {
    y.getRGB(gi, Ea(i)), n.buffers.color.setClear(gi.r, gi.g, gi.b, E, s);
  }
  function A() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(y, E = 1) {
      o.set(y), c = E, d(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(y) {
      c = y, d(o, c);
    },
    render: S,
    addToRenderList: m,
    dispose: A
  };
}
function uc(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = f(null);
  let a = r, s = !1;
  function o(x, P, z, H, X) {
    let K = !1;
    const W = h(H, z, P);
    a !== W && (a = W, l(a.object)), K = p(x, H, z, X), K && v(x, H, z, X), X !== null && e.update(X, i.ELEMENT_ARRAY_BUFFER), (K || s) && (s = !1, E(x, P, z, H), X !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(X).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(x) {
    return i.bindVertexArray(x);
  }
  function u(x) {
    return i.deleteVertexArray(x);
  }
  function h(x, P, z) {
    const H = z.wireframe === !0;
    let X = n[x.id];
    X === void 0 && (X = {}, n[x.id] = X);
    let K = X[P.id];
    K === void 0 && (K = {}, X[P.id] = K);
    let W = K[H];
    return W === void 0 && (W = f(c()), K[H] = W), W;
  }
  function f(x) {
    const P = [], z = [], H = [];
    for (let X = 0; X < t; X++)
      P[X] = 0, z[X] = 0, H[X] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: z,
      attributeDivisors: H,
      object: x,
      attributes: {},
      index: null
    };
  }
  function p(x, P, z, H) {
    const X = a.attributes, K = P.attributes;
    let W = 0;
    const te = z.getAttributes();
    for (const G in te)
      if (te[G].location >= 0) {
        const ce = X[G];
        let Ee = K[G];
        if (Ee === void 0 && (G === "instanceMatrix" && x.instanceMatrix && (Ee = x.instanceMatrix), G === "instanceColor" && x.instanceColor && (Ee = x.instanceColor)), ce === void 0 || ce.attribute !== Ee || Ee && ce.data !== Ee.data) return !0;
        W++;
      }
    return a.attributesNum !== W || a.index !== H;
  }
  function v(x, P, z, H) {
    const X = {}, K = P.attributes;
    let W = 0;
    const te = z.getAttributes();
    for (const G in te)
      if (te[G].location >= 0) {
        let ce = K[G];
        ce === void 0 && (G === "instanceMatrix" && x.instanceMatrix && (ce = x.instanceMatrix), G === "instanceColor" && x.instanceColor && (ce = x.instanceColor));
        const Ee = {};
        Ee.attribute = ce, ce && ce.data && (Ee.data = ce.data), X[G] = Ee, W++;
      }
    a.attributes = X, a.attributesNum = W, a.index = H;
  }
  function S() {
    const x = a.newAttributes;
    for (let P = 0, z = x.length; P < z; P++)
      x[P] = 0;
  }
  function m(x) {
    d(x, 0);
  }
  function d(x, P) {
    const z = a.newAttributes, H = a.enabledAttributes, X = a.attributeDivisors;
    z[x] = 1, H[x] === 0 && (i.enableVertexAttribArray(x), H[x] = 1), X[x] !== P && (i.vertexAttribDivisor(x, P), X[x] = P);
  }
  function A() {
    const x = a.newAttributes, P = a.enabledAttributes;
    for (let z = 0, H = P.length; z < H; z++)
      P[z] !== x[z] && (i.disableVertexAttribArray(z), P[z] = 0);
  }
  function y(x, P, z, H, X, K, W) {
    W === !0 ? i.vertexAttribIPointer(x, P, z, X, K) : i.vertexAttribPointer(x, P, z, H, X, K);
  }
  function E(x, P, z, H) {
    S();
    const X = H.attributes, K = z.getAttributes(), W = P.defaultAttributeValues;
    for (const te in K) {
      const G = K[te];
      if (G.location >= 0) {
        let ae = X[te];
        if (ae === void 0 && (te === "instanceMatrix" && x.instanceMatrix && (ae = x.instanceMatrix), te === "instanceColor" && x.instanceColor && (ae = x.instanceColor)), ae !== void 0) {
          const ce = ae.normalized, Ee = ae.itemSize, Ne = e.get(ae);
          if (Ne === void 0) continue;
          const Ze = Ne.buffer, Je = Ne.type, He = Ne.bytesPerElement, q = Je === i.INT || Je === i.UNSIGNED_INT || ae.gpuType === 1013;
          if (ae.isInterleavedBufferAttribute) {
            const $ = ae.data, he = $.stride, Ce = ae.offset;
            if ($.isInstancedInterleavedBuffer) {
              for (let Me = 0; Me < G.locationSize; Me++)
                d(G.location + Me, $.meshPerAttribute);
              x.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = $.meshPerAttribute * $.count);
            } else
              for (let Me = 0; Me < G.locationSize; Me++)
                m(G.location + Me);
            i.bindBuffer(i.ARRAY_BUFFER, Ze);
            for (let Me = 0; Me < G.locationSize; Me++)
              y(
                G.location + Me,
                Ee / G.locationSize,
                Je,
                ce,
                he * He,
                (Ce + Ee / G.locationSize * Me) * He,
                q
              );
          } else {
            if (ae.isInstancedBufferAttribute) {
              for (let $ = 0; $ < G.locationSize; $++)
                d(G.location + $, ae.meshPerAttribute);
              x.isInstancedMesh !== !0 && H._maxInstanceCount === void 0 && (H._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let $ = 0; $ < G.locationSize; $++)
                m(G.location + $);
            i.bindBuffer(i.ARRAY_BUFFER, Ze);
            for (let $ = 0; $ < G.locationSize; $++)
              y(
                G.location + $,
                Ee / G.locationSize,
                Je,
                ce,
                Ee * He,
                Ee / G.locationSize * $ * He,
                q
              );
          }
        } else if (W !== void 0) {
          const ce = W[te];
          if (ce !== void 0)
            switch (ce.length) {
              case 2:
                i.vertexAttrib2fv(G.location, ce);
                break;
              case 3:
                i.vertexAttrib3fv(G.location, ce);
                break;
              case 4:
                i.vertexAttrib4fv(G.location, ce);
                break;
              default:
                i.vertexAttrib1fv(G.location, ce);
            }
        }
      }
    }
    A();
  }
  function C() {
    N();
    for (const x in n) {
      const P = n[x];
      for (const z in P) {
        const H = P[z];
        for (const X in H)
          u(H[X].object), delete H[X];
        delete P[z];
      }
      delete n[x];
    }
  }
  function R(x) {
    if (n[x.id] === void 0) return;
    const P = n[x.id];
    for (const z in P) {
      const H = P[z];
      for (const X in H)
        u(H[X].object), delete H[X];
      delete P[z];
    }
    delete n[x.id];
  }
  function D(x) {
    for (const P in n) {
      const z = n[P];
      if (z[x.id] === void 0) continue;
      const H = z[x.id];
      for (const X in H)
        u(H[X].object), delete H[X];
      delete z[x.id];
    }
  }
  function N() {
    M(), s = !0, a !== r && (a = r, l(a.object));
  }
  function M() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: N,
    resetDefaultState: M,
    dispose: C,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: D,
    initAttributes: S,
    enableAttribute: m,
    disableUnusedAttributes: A
  };
}
function hc(i, e, t) {
  let n;
  function r(l) {
    n = l;
  }
  function a(l, u) {
    i.drawArrays(n, l, u), t.update(u, n, 1);
  }
  function s(l, u, h) {
    h !== 0 && (i.drawArraysInstanced(n, l, u, h), t.update(u, n, h));
  }
  function o(l, u, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, h);
    let p = 0;
    for (let v = 0; v < h; v++)
      p += u[v];
    t.update(p, n, 1);
  }
  function c(l, u, h, f) {
    if (h === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let v = 0; v < l.length; v++)
        s(l[v], u[v], f[v]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, f, 0, h);
      let v = 0;
      for (let S = 0; S < h; S++)
        v += u[S] * f[S];
      t.update(v, n, 1);
    }
  }
  this.setMode = r, this.render = a, this.renderInstances = s, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function fc(i, e, t, n) {
  let r;
  function a() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const D = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      r = 0;
    return r;
  }
  function s(D) {
    return !(D !== 1023 && n.convert(D) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(D) {
    const N = D === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(D !== 1009 && n.convert(D) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    D !== 1015 && !N);
  }
  function c(D) {
    if (D === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      D = "mediump";
    }
    return D === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const u = c(l);
  u !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
  const h = t.logarithmicDepthBuffer === !0, f = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control"), p = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), v = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), S = i.getParameter(i.MAX_TEXTURE_SIZE), m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), d = i.getParameter(i.MAX_VERTEX_ATTRIBS), A = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), y = i.getParameter(i.MAX_VARYING_VECTORS), E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), C = v > 0, R = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: a,
    getMaxPrecision: c,
    textureFormatReadable: s,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: h,
    reversedDepthBuffer: f,
    maxTextures: p,
    maxVertexTextures: v,
    maxTextureSize: S,
    maxCubemapSize: m,
    maxAttributes: d,
    maxVertexUniforms: A,
    maxVaryings: y,
    maxFragmentUniforms: E,
    vertexTextures: C,
    maxSamples: R
  };
}
function pc(i) {
  const e = this;
  let t = null, n = 0, r = !1, a = !1;
  const s = new fn(), o = new Ue(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, f) {
    const p = h.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = f, n = h.length, p;
  }, this.beginShadows = function() {
    a = !0, u(null);
  }, this.endShadows = function() {
    a = !1;
  }, this.setGlobalState = function(h, f) {
    t = u(h, f, 0);
  }, this.setState = function(h, f, p) {
    const v = h.clippingPlanes, S = h.clipIntersection, m = h.clipShadows, d = i.get(h);
    if (!r || v === null || v.length === 0 || a && !m)
      a ? u(null) : l();
    else {
      const A = a ? 0 : n, y = A * 4;
      let E = d.clippingState || null;
      c.value = E, E = u(v, f, y, p);
      for (let C = 0; C !== y; ++C)
        E[C] = t[C];
      d.clippingState = E, this.numIntersection = S ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(h, f, p, v) {
    const S = h !== null ? h.length : 0;
    let m = null;
    if (S !== 0) {
      if (m = c.value, v !== !0 || m === null) {
        const d = p + S * 4, A = f.matrixWorldInverse;
        o.getNormalMatrix(A), (m === null || m.length < d) && (m = new Float32Array(d));
        for (let y = 0, E = p; y !== S; ++y, E += 4)
          s.copy(h[y]).applyMatrix4(A, o), s.normal.toArray(m, E), m[E + 3] = s.constant;
      }
      c.value = m, c.needsUpdate = !0;
    }
    return e.numPlanes = S, e.numIntersection = 0, m;
  }
}
function mc(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, o) {
    return o === 303 ? s.mapping = 301 : o === 304 && (s.mapping = 302), s;
  }
  function n(s) {
    if (s && s.isTexture) {
      const o = s.mapping;
      if (o === 303 || o === 304)
        if (e.has(s)) {
          const c = e.get(s).texture;
          return t(c, s.mapping);
        } else {
          const c = s.image;
          if (c && c.height > 0) {
            const l = new hs(c.height);
            return l.fromEquirectangularTexture(i, s), e.set(s, l), s.addEventListener("dispose", r), t(l.texture, s.mapping);
          } else
            return null;
        }
    }
    return s;
  }
  function r(s) {
    const o = s.target;
    o.removeEventListener("dispose", r);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: a
  };
}
const Ln = 4, Hr = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], mn = 20, er = /* @__PURE__ */ new ys(), kr = /* @__PURE__ */ new qe();
let tr = null, nr = 0, ir = 0, rr = !1;
const pn = (1 + Math.sqrt(5)) / 2, Dn = 1 / pn, Wr = [
  /* @__PURE__ */ new F(-pn, Dn, 0),
  /* @__PURE__ */ new F(pn, Dn, 0),
  /* @__PURE__ */ new F(-Dn, 0, pn),
  /* @__PURE__ */ new F(Dn, 0, pn),
  /* @__PURE__ */ new F(0, pn, -Dn),
  /* @__PURE__ */ new F(0, pn, Dn),
  /* @__PURE__ */ new F(-1, 1, -1),
  /* @__PURE__ */ new F(1, 1, -1),
  /* @__PURE__ */ new F(-1, 1, 1),
  /* @__PURE__ */ new F(1, 1, 1)
], _c = /* @__PURE__ */ new F();
class Xr {
  /**
   * Constructs a new PMREM generator.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety.
   *
   * @param {Scene} scene - The scene to be captured.
   * @param {number} [sigma=0] - The blur radius in radians.
   * @param {number} [near=0.1] - The near plane distance.
   * @param {number} [far=100] - The far plane distance.
   * @param {Object} [options={}] - The configuration options.
   * @param {number} [options.size=256] - The texture size of the PMREM.
   * @param {Vector3} [options.renderTarget=origin] - The position of the internal cube camera that renders the scene.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromScene(e, t = 0, n = 0.1, r = 100, a = {}) {
    const {
      size: s = 256,
      position: o = _c
    } = a;
    tr = this._renderer.getRenderTarget(), nr = this._renderer.getActiveCubeFace(), ir = this._renderer.getActiveMipmapLevel(), rr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(s);
    const c = this._allocateTargets();
    return c.depthBuffer = !0, this._sceneToCubeUV(e, n, r, c, o), t > 0 && this._blur(c, 0, 0, t), this._applyPMREM(c), this._cleanup(c), c;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} equirectangular - The equirectangular texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   *
   * @param {Texture} cubemap - The cubemap texture to be converted.
   * @param {?WebGLRenderTarget} [renderTarget=null] - The render target to use.
   * @return {WebGLRenderTarget} The resulting PMREM.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Kr(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Yr(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(tr, nr, ir), this._renderer.xr.enabled = rr, e.scissorTest = !1, vi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), tr = this._renderer.getRenderTarget(), nr = this._renderer.getActiveCubeFace(), ir = this._renderer.getActiveMipmapLevel(), rr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: In,
      depthBuffer: !1
    }, r = qr(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = qr(e, t, n);
      const { _lodMax: a } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = gc(a)), this._blurMaterial = vc(a, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Pt(this._lodPlanes[0], e);
    this._renderer.compile(t, er);
  }
  _sceneToCubeUV(e, t, n, r, a) {
    const c = new Mt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], h = this._renderer, f = h.autoClear, p = h.toneMapping;
    h.getClearColor(kr), h.toneMapping = 0, h.autoClear = !1, h.state.buffers.depth.getReversed() && (h.setRenderTarget(r), h.clearDepth(), h.setRenderTarget(null));
    const S = new Xn({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), m = new Pt(new $n(), S);
    let d = !1;
    const A = e.background;
    A ? A.isColor && (S.color.copy(A), e.background = null, d = !0) : (S.color.copy(kr), d = !0);
    for (let y = 0; y < 6; y++) {
      const E = y % 3;
      E === 0 ? (c.up.set(0, l[y], 0), c.position.set(a.x, a.y, a.z), c.lookAt(a.x + u[y], a.y, a.z)) : E === 1 ? (c.up.set(0, 0, l[y]), c.position.set(a.x, a.y, a.z), c.lookAt(a.x, a.y + u[y], a.z)) : (c.up.set(0, l[y], 0), c.position.set(a.x, a.y, a.z), c.lookAt(a.x, a.y, a.z + u[y]));
      const C = this._cubeSize;
      vi(r, E * C, y > 2 ? C : 0, C, C), h.setRenderTarget(r), d && h.render(m, c), h.render(e, c);
    }
    m.geometry.dispose(), m.material.dispose(), h.toneMapping = p, h.autoClear = f, e.background = A;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Kr()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Yr());
    const a = r ? this._cubemapMaterial : this._equirectMaterial, s = new Pt(this._lodPlanes[0], a), o = a.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    vi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(s, er);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let a = 1; a < r; a++) {
      const s = Math.sqrt(this._sigmas[a] * this._sigmas[a] - this._sigmas[a - 1] * this._sigmas[a - 1]), o = Wr[(r - a - 1) % Wr.length];
      this._blur(e, a - 1, a, s, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   *
   * @private
   * @param {WebGLRenderTarget} cubeUVRenderTarget
   * @param {number} lodIn
   * @param {number} lodOut
   * @param {number} sigma
   * @param {Vector3} [poleAxis]
   */
  _blur(e, t, n, r, a) {
    const s = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      s,
      t,
      n,
      r,
      "latitudinal",
      a
    ), this._halfBlur(
      s,
      e,
      n,
      n,
      r,
      "longitudinal",
      a
    );
  }
  _halfBlur(e, t, n, r, a, s, o) {
    const c = this._renderer, l = this._blurMaterial;
    s !== "latitudinal" && s !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, h = new Pt(this._lodPlanes[r], l), f = l.uniforms, p = this._sizeLods[n] - 1, v = isFinite(a) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * mn - 1), S = a / v, m = isFinite(a) ? 1 + Math.floor(u * S) : mn;
    m > mn && console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mn}`);
    const d = [];
    let A = 0;
    for (let D = 0; D < mn; ++D) {
      const N = D / S, M = Math.exp(-N * N / 2);
      d.push(M), D === 0 ? A += M : D < m && (A += 2 * M);
    }
    for (let D = 0; D < d.length; D++)
      d[D] = d[D] / A;
    f.envMap.value = e.texture, f.samples.value = m, f.weights.value = d, f.latitudinal.value = s === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: y } = this;
    f.dTheta.value = v, f.mipInt.value = y - n;
    const E = this._sizeLods[r], C = 3 * E * (r > y - Ln ? r - y + Ln : 0), R = 4 * (this._cubeSize - E);
    vi(t, C, R, 3 * E, 2 * E), c.setRenderTarget(t), c.render(h, er);
  }
}
function gc(i) {
  const e = [], t = [], n = [];
  let r = i;
  const a = i - Ln + 1 + Hr.length;
  for (let s = 0; s < a; s++) {
    const o = Math.pow(2, r);
    t.push(o);
    let c = 1 / o;
    s > i - Ln ? c = Hr[s - i + Ln - 1] : s === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), u = -l, h = 1 + l, f = [u, u, h, u, h, h, u, u, h, h, u, h], p = 6, v = 6, S = 3, m = 2, d = 1, A = new Float32Array(S * v * p), y = new Float32Array(m * v * p), E = new Float32Array(d * v * p);
    for (let R = 0; R < p; R++) {
      const D = R % 3 * 2 / 3 - 1, N = R > 2 ? 0 : -1, M = [
        D,
        N,
        0,
        D + 2 / 3,
        N,
        0,
        D + 2 / 3,
        N + 1,
        0,
        D,
        N,
        0,
        D + 2 / 3,
        N + 1,
        0,
        D,
        N + 1,
        0
      ];
      A.set(M, S * v * R), y.set(f, m * v * R);
      const x = [R, R, R, R, R, R];
      E.set(x, d * v * R);
    }
    const C = new tn();
    C.setAttribute("position", new Ot(A, S)), C.setAttribute("uv", new Ot(y, m)), C.setAttribute("faceIndex", new Ot(E, d)), e.push(C), r > Ln && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function qr(i, e, t) {
  const n = new _n(i, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function vi(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function vc(i, e, t) {
  const n = new Float32Array(mn), r = new F(0, 1, 0);
  return new Qt({
    name: "SphericalGaussianBlur",
    defines: {
      n: mn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: fr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Yr() {
  return new Qt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: fr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Kr() {
  return new Qt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: fr(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function fr() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function xc(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === 303 || c === 304, u = c === 301 || c === 302;
      if (l || u) {
        let h = e.get(o);
        const f = h !== void 0 ? h.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return t === null && (t = new Xr(i)), h = l ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h), h.texture.pmremVersion = o.pmremVersion, e.set(o, h), h.texture;
        if (h !== void 0)
          return h.texture;
        {
          const p = o.image;
          return l && p && p.height > 0 || u && p && r(p) ? (t === null && (t = new Xr(i)), h = l ? t.fromEquirectangular(o) : t.fromCubemap(o), h.texture.pmremVersion = o.pmremVersion, e.set(o, h), o.addEventListener("dispose", a), h.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++)
      o[u] !== void 0 && c++;
    return c === l;
  }
  function a(o) {
    const c = o.target;
    c.removeEventListener("dispose", a);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: s
  };
}
function Sc(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const r = t(n);
      return r === null && Yn("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function Mc(i, e, t, n) {
  const r = {}, a = /* @__PURE__ */ new WeakMap();
  function s(h) {
    const f = h.target;
    f.index !== null && e.remove(f.index);
    for (const v in f.attributes)
      e.remove(f.attributes[v]);
    f.removeEventListener("dispose", s), delete r[f.id];
    const p = a.get(f);
    p && (e.remove(p), a.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(h, f) {
    return r[f.id] === !0 || (f.addEventListener("dispose", s), r[f.id] = !0, t.memory.geometries++), f;
  }
  function c(h) {
    const f = h.attributes;
    for (const p in f)
      e.update(f[p], i.ARRAY_BUFFER);
  }
  function l(h) {
    const f = [], p = h.index, v = h.attributes.position;
    let S = 0;
    if (p !== null) {
      const A = p.array;
      S = p.version;
      for (let y = 0, E = A.length; y < E; y += 3) {
        const C = A[y + 0], R = A[y + 1], D = A[y + 2];
        f.push(C, R, R, D, D, C);
      }
    } else if (v !== void 0) {
      const A = v.array;
      S = v.version;
      for (let y = 0, E = A.length / 3 - 1; y < E; y += 3) {
        const C = y + 0, R = y + 1, D = y + 2;
        f.push(C, R, R, D, D, C);
      }
    } else
      return;
    const m = new (_a(f) ? Ma : Sa)(f, 1);
    m.version = S;
    const d = a.get(h);
    d && e.remove(d), a.set(h, m);
  }
  function u(h) {
    const f = a.get(h);
    if (f) {
      const p = h.index;
      p !== null && f.version < p.version && l(h);
    } else
      l(h);
    return a.get(h);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: u
  };
}
function Ec(i, e, t) {
  let n;
  function r(f) {
    n = f;
  }
  let a, s;
  function o(f) {
    a = f.type, s = f.bytesPerElement;
  }
  function c(f, p) {
    i.drawElements(n, p, a, f * s), t.update(p, n, 1);
  }
  function l(f, p, v) {
    v !== 0 && (i.drawElementsInstanced(n, p, a, f * s, v), t.update(p, n, v));
  }
  function u(f, p, v) {
    if (v === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, a, f, 0, v);
    let m = 0;
    for (let d = 0; d < v; d++)
      m += p[d];
    t.update(m, n, 1);
  }
  function h(f, p, v, S) {
    if (v === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let d = 0; d < f.length; d++)
        l(f[d] / s, p[d], S[d]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, a, f, 0, S, 0, v);
      let d = 0;
      for (let A = 0; A < v; A++)
        d += p[A] * S[A];
      t.update(d, n, 1);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = u, this.renderMultiDrawInstances = h;
}
function Tc(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(a, s, o) {
    switch (t.calls++, s) {
      case i.TRIANGLES:
        t.triangles += o * (a / 3);
        break;
      case i.LINES:
        t.lines += o * (a / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (a - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * a;
        break;
      case i.POINTS:
        t.points += o * a;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", s);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function yc(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new st();
  function a(s, o, c) {
    const l = s.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, h = u !== void 0 ? u.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== h) {
      let M = function() {
        D.dispose(), n.delete(o), o.removeEventListener("dispose", M);
      };
      f !== void 0 && f.texture.dispose();
      const p = o.morphAttributes.position !== void 0, v = o.morphAttributes.normal !== void 0, S = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], d = o.morphAttributes.normal || [], A = o.morphAttributes.color || [];
      let y = 0;
      p === !0 && (y = 1), v === !0 && (y = 2), S === !0 && (y = 3);
      let E = o.attributes.position.count * y, C = 1;
      E > e.maxTextureSize && (C = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
      const R = new Float32Array(E * C * 4 * h), D = new ga(R, E, C, h);
      D.type = 1015, D.needsUpdate = !0;
      const N = y * 4;
      for (let x = 0; x < h; x++) {
        const P = m[x], z = d[x], H = A[x], X = E * C * 4 * x;
        for (let K = 0; K < P.count; K++) {
          const W = K * N;
          p === !0 && (r.fromBufferAttribute(P, K), R[X + W + 0] = r.x, R[X + W + 1] = r.y, R[X + W + 2] = r.z, R[X + W + 3] = 0), v === !0 && (r.fromBufferAttribute(z, K), R[X + W + 4] = r.x, R[X + W + 5] = r.y, R[X + W + 6] = r.z, R[X + W + 7] = 0), S === !0 && (r.fromBufferAttribute(H, K), R[X + W + 8] = r.x, R[X + W + 9] = r.y, R[X + W + 10] = r.z, R[X + W + 11] = H.itemSize === 4 ? r.w : 1);
        }
      }
      f = {
        count: h,
        texture: D,
        size: new Ye(E, C)
      }, n.set(o, f), o.addEventListener("dispose", M);
    }
    if (s.isInstancedMesh === !0 && s.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", s.morphTexture, t);
    else {
      let p = 0;
      for (let S = 0; S < l.length; S++)
        p += l[S];
      const v = o.morphTargetsRelative ? 1 : 1 - p;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", v), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, t), c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return {
    update: a
  };
}
function bc(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function a(c) {
    const l = n.render.frame, u = c.geometry, h = e.get(c, u);
    if (r.get(h) !== l && (e.update(h), r.set(h, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), r.get(c) !== l && (t.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER), r.set(c, l))), c.isSkinnedMesh) {
      const f = c.skeleton;
      r.get(f) !== l && (f.update(), r.set(f, l));
    }
    return h;
  }
  function s() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: a,
    dispose: s
  };
}
const Ca = /* @__PURE__ */ new gt(), Zr = /* @__PURE__ */ new Aa(1, 1), Pa = /* @__PURE__ */ new ga(), Da = /* @__PURE__ */ new Ka(), La = /* @__PURE__ */ new ya(), $r = [], jr = [], Jr = new Float32Array(16), Qr = new Float32Array(9), ea = new Float32Array(4);
function On(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let a = $r[r];
  if (a === void 0 && (a = new Float32Array(r), $r[r] = a), e !== 0) {
    n.toArray(a, 0);
    for (let s = 1, o = 0; s !== e; ++s)
      o += t, i[s].toArray(a, o);
  }
  return a;
}
function lt(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1;
  return !0;
}
function ct(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function Ri(i, e) {
  let t = jr[e];
  t === void 0 && (t = new Int32Array(e), jr[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Ac(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Rc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (lt(t, e)) return;
    i.uniform2fv(this.addr, e), ct(t, e);
  }
}
function wc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (lt(t, e)) return;
    i.uniform3fv(this.addr, e), ct(t, e);
  }
}
function Cc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (lt(t, e)) return;
    i.uniform4fv(this.addr, e), ct(t, e);
  }
}
function Pc(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (lt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), ct(t, e);
  } else {
    if (lt(t, n)) return;
    ea.set(n), i.uniformMatrix2fv(this.addr, !1, ea), ct(t, n);
  }
}
function Dc(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (lt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), ct(t, e);
  } else {
    if (lt(t, n)) return;
    Qr.set(n), i.uniformMatrix3fv(this.addr, !1, Qr), ct(t, n);
  }
}
function Lc(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (lt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), ct(t, e);
  } else {
    if (lt(t, n)) return;
    Jr.set(n), i.uniformMatrix4fv(this.addr, !1, Jr), ct(t, n);
  }
}
function Uc(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Ic(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (lt(t, e)) return;
    i.uniform2iv(this.addr, e), ct(t, e);
  }
}
function Fc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (lt(t, e)) return;
    i.uniform3iv(this.addr, e), ct(t, e);
  }
}
function Nc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (lt(t, e)) return;
    i.uniform4iv(this.addr, e), ct(t, e);
  }
}
function Oc(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Bc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (lt(t, e)) return;
    i.uniform2uiv(this.addr, e), ct(t, e);
  }
}
function zc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (lt(t, e)) return;
    i.uniform3uiv(this.addr, e), ct(t, e);
  }
}
function Gc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (lt(t, e)) return;
    i.uniform4uiv(this.addr, e), ct(t, e);
  }
}
function Vc(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? (Zr.compareFunction = 515, a = Zr) : a = Ca, t.setTexture2D(e || a, r);
}
function Hc(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Da, r);
}
function kc(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || La, r);
}
function Wc(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Pa, r);
}
function Xc(i) {
  switch (i) {
    case 5126:
      return Ac;
    // FLOAT
    case 35664:
      return Rc;
    // _VEC2
    case 35665:
      return wc;
    // _VEC3
    case 35666:
      return Cc;
    // _VEC4
    case 35674:
      return Pc;
    // _MAT2
    case 35675:
      return Dc;
    // _MAT3
    case 35676:
      return Lc;
    // _MAT4
    case 5124:
    case 35670:
      return Uc;
    // INT, BOOL
    case 35667:
    case 35671:
      return Ic;
    // _VEC2
    case 35668:
    case 35672:
      return Fc;
    // _VEC3
    case 35669:
    case 35673:
      return Nc;
    // _VEC4
    case 5125:
      return Oc;
    // UINT
    case 36294:
      return Bc;
    // _VEC2
    case 36295:
      return zc;
    // _VEC3
    case 36296:
      return Gc;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Vc;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Hc;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return kc;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Wc;
  }
}
function qc(i, e) {
  i.uniform1fv(this.addr, e);
}
function Yc(i, e) {
  const t = On(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Kc(i, e) {
  const t = On(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Zc(i, e) {
  const t = On(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function $c(i, e) {
  const t = On(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function jc(i, e) {
  const t = On(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Jc(i, e) {
  const t = On(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Qc(i, e) {
  i.uniform1iv(this.addr, e);
}
function ed(i, e) {
  i.uniform2iv(this.addr, e);
}
function td(i, e) {
  i.uniform3iv(this.addr, e);
}
function nd(i, e) {
  i.uniform4iv(this.addr, e);
}
function id(i, e) {
  i.uniform1uiv(this.addr, e);
}
function rd(i, e) {
  i.uniform2uiv(this.addr, e);
}
function ad(i, e) {
  i.uniform3uiv(this.addr, e);
}
function sd(i, e) {
  i.uniform4uiv(this.addr, e);
}
function od(i, e, t) {
  const n = this.cache, r = e.length, a = Ri(t, r);
  lt(n, a) || (i.uniform1iv(this.addr, a), ct(n, a));
  for (let s = 0; s !== r; ++s)
    t.setTexture2D(e[s] || Ca, a[s]);
}
function ld(i, e, t) {
  const n = this.cache, r = e.length, a = Ri(t, r);
  lt(n, a) || (i.uniform1iv(this.addr, a), ct(n, a));
  for (let s = 0; s !== r; ++s)
    t.setTexture3D(e[s] || Da, a[s]);
}
function cd(i, e, t) {
  const n = this.cache, r = e.length, a = Ri(t, r);
  lt(n, a) || (i.uniform1iv(this.addr, a), ct(n, a));
  for (let s = 0; s !== r; ++s)
    t.setTextureCube(e[s] || La, a[s]);
}
function dd(i, e, t) {
  const n = this.cache, r = e.length, a = Ri(t, r);
  lt(n, a) || (i.uniform1iv(this.addr, a), ct(n, a));
  for (let s = 0; s !== r; ++s)
    t.setTexture2DArray(e[s] || Pa, a[s]);
}
function ud(i) {
  switch (i) {
    case 5126:
      return qc;
    // FLOAT
    case 35664:
      return Yc;
    // _VEC2
    case 35665:
      return Kc;
    // _VEC3
    case 35666:
      return Zc;
    // _VEC4
    case 35674:
      return $c;
    // _MAT2
    case 35675:
      return jc;
    // _MAT3
    case 35676:
      return Jc;
    // _MAT4
    case 5124:
    case 35670:
      return Qc;
    // INT, BOOL
    case 35667:
    case 35671:
      return ed;
    // _VEC2
    case 35668:
    case 35672:
      return td;
    // _VEC3
    case 35669:
    case 35673:
      return nd;
    // _VEC4
    case 5125:
      return id;
    // UINT
    case 36294:
      return rd;
    // _VEC2
    case 36295:
      return ad;
    // _VEC3
    case 36296:
      return sd;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return od;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return ld;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return cd;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return dd;
  }
}
class hd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Xc(t.type);
  }
}
class fd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = ud(t.type);
  }
}
class pd {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let a = 0, s = r.length; a !== s; ++a) {
      const o = r[a];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ar = /(\w+)(\])?(\[|\.)?/g;
function ta(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function md(i, e, t) {
  const n = i.name, r = n.length;
  for (ar.lastIndex = 0; ; ) {
    const a = ar.exec(n), s = ar.lastIndex;
    let o = a[1];
    const c = a[2] === "]", l = a[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && s + 2 === r) {
      ta(t, l === void 0 ? new hd(o, i, e) : new fd(o, i, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && (h = new pd(o), ta(t, h)), t = h;
    }
  }
}
class Ei {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const a = e.getActiveUniform(t, r), s = e.getUniformLocation(t, a.name);
      md(a, s, this);
    }
  }
  setValue(e, t, n, r) {
    const a = this.map[t];
    a !== void 0 && a.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let a = 0, s = t.length; a !== s; ++a) {
      const o = t[a], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, a = e.length; r !== a; ++r) {
      const s = e[r];
      s.id in t && n.push(s);
    }
    return n;
  }
}
function na(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const _d = 37297;
let gd = 0;
function vd(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), a = Math.min(e + 6, t.length);
  for (let s = r; s < a; s++) {
    const o = s + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[s]}`);
  }
  return n.join(`
`);
}
const ia = /* @__PURE__ */ new Ue();
function xd(i) {
  Ve._getMatrix(ia, Ve.workingColorSpace, i);
  const e = `mat3( ${ia.elements.map((t) => t.toFixed(4))} )`;
  switch (Ve.getTransfer(i)) {
    case Ti:
      return [e, "LinearTransferOETF"];
    case Xe:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function ra(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), a = (i.getShaderInfoLog(e) || "").trim();
  if (n && a === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(a);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + a + `

` + vd(i.getShaderSource(e), o);
  } else
    return a;
}
function Sd(i, e) {
  const t = xd(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function Md(i, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "Cineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 6:
      t = "AgX";
      break;
    case 7:
      t = "Neutral";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const xi = /* @__PURE__ */ new F();
function Ed() {
  Ve.getLuminanceCoefficients(xi);
  const i = xi.x.toFixed(4), e = xi.y.toFixed(4), t = xi.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Td(i) {
  return [
    i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Wn).join(`
`);
}
function yd(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function bd(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const a = i.getActiveAttrib(e, r), s = a.name;
    let o = 1;
    a.type === i.FLOAT_MAT2 && (o = 2), a.type === i.FLOAT_MAT3 && (o = 3), a.type === i.FLOAT_MAT4 && (o = 4), t[s] = {
      type: a.type,
      location: i.getAttribLocation(e, s),
      locationSize: o
    };
  }
  return t;
}
function Wn(i) {
  return i !== "";
}
function aa(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function sa(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Ad = /^[ \t]*#include +<([\w\d./]+)>/gm;
function lr(i) {
  return i.replace(Ad, wd);
}
const Rd = /* @__PURE__ */ new Map();
function wd(i, e) {
  let t = Fe[e];
  if (t === void 0) {
    const n = Rd.get(e);
    if (n !== void 0)
      t = Fe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return lr(t);
}
const Cd = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function oa(i) {
  return i.replace(Cd, Pd);
}
function Pd(i, e, t, n) {
  let r = "";
  for (let a = parseInt(e); a < parseInt(t); a++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
  return r;
}
function la(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Dd(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Ld(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Ud(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  return i.envMap && i.envMapMode === 302 && (e = "ENVMAP_MODE_REFRACTION"), e;
}
function Id(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Fd(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function Nd(i, e, t, n) {
  const r = i.getContext(), a = t.defines;
  let s = t.vertexShader, o = t.fragmentShader;
  const c = Dd(t), l = Ld(t), u = Ud(t), h = Id(t), f = Fd(t), p = Td(t), v = yd(a), S = r.createProgram();
  let m, d, A = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v
  ].filter(Wn).join(`
`), m.length > 0 && (m += `
`), d = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v
  ].filter(Wn).join(`
`), d.length > 0 && (d += `
`)) : (m = [
    la(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Wn).join(`
`), d = [
    la(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    v,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + h : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Fe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? Md("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Fe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Sd("linearToOutputTexel", t.outputColorSpace),
    Ed(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Wn).join(`
`)), s = lr(s), s = aa(s, t), s = sa(s, t), o = lr(o), o = aa(o, t), o = sa(o, t), s = oa(s), o = oa(o), t.isRawShaderMaterial !== !0 && (A = `#version 300 es
`, m = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, d = [
    "#define varying in",
    t.glslVersion === Mr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Mr ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + d);
  const y = A + m + s, E = A + d + o, C = na(r, r.VERTEX_SHADER, y), R = na(r, r.FRAGMENT_SHADER, E);
  r.attachShader(S, C), r.attachShader(S, R), t.index0AttributeName !== void 0 ? r.bindAttribLocation(S, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(S, 0, "position"), r.linkProgram(S);
  function D(P) {
    if (i.debug.checkShaderErrors) {
      const z = r.getProgramInfoLog(S) || "", H = r.getShaderInfoLog(C) || "", X = r.getShaderInfoLog(R) || "", K = z.trim(), W = H.trim(), te = X.trim();
      let G = !0, ae = !0;
      if (r.getProgramParameter(S, r.LINK_STATUS) === !1)
        if (G = !1, typeof i.debug.onShaderError == "function")
          i.debug.onShaderError(r, S, C, R);
        else {
          const ce = ra(r, C, "vertex"), Ee = ra(r, R, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(S, r.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + K + `
` + ce + `
` + Ee
          );
        }
      else K !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", K) : (W === "" || te === "") && (ae = !1);
      ae && (P.diagnostics = {
        runnable: G,
        programLog: K,
        vertexShader: {
          log: W,
          prefix: m
        },
        fragmentShader: {
          log: te,
          prefix: d
        }
      });
    }
    r.deleteShader(C), r.deleteShader(R), N = new Ei(r, S), M = bd(r, S);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && D(this), N;
  };
  let M;
  this.getAttributes = function() {
    return M === void 0 && D(this), M;
  };
  let x = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return x === !1 && (x = r.getProgramParameter(S, _d)), x;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(S), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = gd++, this.cacheKey = e, this.usedTimes = 1, this.program = S, this.vertexShader = C, this.fragmentShader = R, this;
}
let Od = 0;
class Bd {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), a = this._getShaderStage(n), s = this._getShaderCacheForMaterial(e);
    return s.has(r) === !1 && (s.add(r), r.usedTimes++), s.has(a) === !1 && (s.add(a), a.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new zd(e), t.set(e, n)), n;
  }
}
class zd {
  constructor(e) {
    this.id = Od++, this.code = e, this.usedTimes = 0;
  }
}
function Gd(i, e, t, n, r, a, s) {
  const o = new va(), c = new Bd(), l = /* @__PURE__ */ new Set(), u = [], h = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let p = r.precision;
  const v = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function S(M) {
    return l.add(M), M === 0 ? "uv" : `uv${M}`;
  }
  function m(M, x, P, z, H) {
    const X = z.fog, K = H.geometry, W = M.isMeshStandardMaterial ? z.environment : null, te = (M.isMeshStandardMaterial ? t : e).get(M.envMap || W), G = te && te.mapping === 306 ? te.image.height : null, ae = v[M.type];
    M.precision !== null && (p = r.getMaxPrecision(M.precision), p !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", p, "instead."));
    const ce = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, Ee = ce !== void 0 ? ce.length : 0;
    let Ne = 0;
    K.morphAttributes.position !== void 0 && (Ne = 1), K.morphAttributes.normal !== void 0 && (Ne = 2), K.morphAttributes.color !== void 0 && (Ne = 3);
    let Ze, Je, He, q;
    if (ae) {
      const ke = Nt[ae];
      Ze = ke.vertexShader, Je = ke.fragmentShader;
    } else
      Ze = M.vertexShader, Je = M.fragmentShader, c.update(M), He = c.getVertexShaderID(M), q = c.getFragmentShaderID(M);
    const $ = i.getRenderTarget(), he = i.state.buffers.depth.getReversed(), Ce = H.isInstancedMesh === !0, Me = H.isBatchedMesh === !0, ze = !!M.map, ht = !!M.matcap, b = !!te, Qe = !!M.aoMap, De = !!M.lightMap, Re = !!M.bumpMap, me = !!M.normalMap, et = !!M.displacementMap, _e = !!M.emissiveMap, Ie = !!M.metalnessMap, dt = !!M.roughnessMap, at = M.anisotropy > 0, T = M.clearcoat > 0, _ = M.dispersion > 0, I = M.iridescence > 0, k = M.sheen > 0, Z = M.transmission > 0, V = at && !!M.anisotropyMap, Se = T && !!M.clearcoatMap, ne = T && !!M.clearcoatNormalMap, ge = T && !!M.clearcoatRoughnessMap, ve = I && !!M.iridescenceMap, Q = I && !!M.iridescenceThicknessMap, le = k && !!M.sheenColorMap, Ae = k && !!M.sheenRoughnessMap, xe = !!M.specularMap, se = !!M.specularColorMap, Le = !!M.specularIntensityMap, w = Z && !!M.transmissionMap, ee = Z && !!M.thicknessMap, ie = !!M.gradientMap, ue = !!M.alphaMap, j = M.alphaTest > 0, Y = !!M.alphaHash, pe = !!M.extensions;
    let Pe = 0;
    M.toneMapped && ($ === null || $.isXRRenderTarget === !0) && (Pe = i.toneMapping);
    const $e = {
      shaderID: ae,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: Ze,
      fragmentShader: Je,
      defines: M.defines,
      customVertexShaderID: He,
      customFragmentShaderID: q,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: p,
      batching: Me,
      batchingColor: Me && H._colorsTexture !== null,
      instancing: Ce,
      instancingColor: Ce && H.instanceColor !== null,
      instancingMorph: Ce && H.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: $ === null ? i.outputColorSpace : $.isXRRenderTarget === !0 ? $.texture.colorSpace : In,
      alphaToCoverage: !!M.alphaToCoverage,
      map: ze,
      matcap: ht,
      envMap: b,
      envMapMode: b && te.mapping,
      envMapCubeUVHeight: G,
      aoMap: Qe,
      lightMap: De,
      bumpMap: Re,
      normalMap: me,
      displacementMap: f && et,
      emissiveMap: _e,
      normalMapObjectSpace: me && M.normalMapType === 1,
      normalMapTangentSpace: me && M.normalMapType === 0,
      metalnessMap: Ie,
      roughnessMap: dt,
      anisotropy: at,
      anisotropyMap: V,
      clearcoat: T,
      clearcoatMap: Se,
      clearcoatNormalMap: ne,
      clearcoatRoughnessMap: ge,
      dispersion: _,
      iridescence: I,
      iridescenceMap: ve,
      iridescenceThicknessMap: Q,
      sheen: k,
      sheenColorMap: le,
      sheenRoughnessMap: Ae,
      specularMap: xe,
      specularColorMap: se,
      specularIntensityMap: Le,
      transmission: Z,
      transmissionMap: w,
      thicknessMap: ee,
      gradientMap: ie,
      opaque: M.transparent === !1 && M.blending === 1 && M.alphaToCoverage === !1,
      alphaMap: ue,
      alphaTest: j,
      alphaHash: Y,
      combine: M.combine,
      //
      mapUv: ze && S(M.map.channel),
      aoMapUv: Qe && S(M.aoMap.channel),
      lightMapUv: De && S(M.lightMap.channel),
      bumpMapUv: Re && S(M.bumpMap.channel),
      normalMapUv: me && S(M.normalMap.channel),
      displacementMapUv: et && S(M.displacementMap.channel),
      emissiveMapUv: _e && S(M.emissiveMap.channel),
      metalnessMapUv: Ie && S(M.metalnessMap.channel),
      roughnessMapUv: dt && S(M.roughnessMap.channel),
      anisotropyMapUv: V && S(M.anisotropyMap.channel),
      clearcoatMapUv: Se && S(M.clearcoatMap.channel),
      clearcoatNormalMapUv: ne && S(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ge && S(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ve && S(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: Q && S(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: le && S(M.sheenColorMap.channel),
      sheenRoughnessMapUv: Ae && S(M.sheenRoughnessMap.channel),
      specularMapUv: xe && S(M.specularMap.channel),
      specularColorMapUv: se && S(M.specularColorMap.channel),
      specularIntensityMapUv: Le && S(M.specularIntensityMap.channel),
      transmissionMapUv: w && S(M.transmissionMap.channel),
      thicknessMapUv: ee && S(M.thicknessMap.channel),
      alphaMapUv: ue && S(M.alphaMap.channel),
      //
      vertexTangents: !!K.attributes.tangent && (me || at),
      vertexColors: M.vertexColors,
      vertexAlphas: M.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4,
      pointsUvs: H.isPoints === !0 && !!K.attributes.uv && (ze || ue),
      fog: !!X,
      useFog: M.fog === !0,
      fogExp2: !!X && X.isFogExp2,
      flatShading: M.flatShading === !0 && M.wireframe === !1,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      reversedDepthBuffer: he,
      skinning: H.isSkinnedMesh === !0,
      morphTargets: K.morphAttributes.position !== void 0,
      morphNormals: K.morphAttributes.normal !== void 0,
      morphColors: K.morphAttributes.color !== void 0,
      morphTargetsCount: Ee,
      morphTextureStride: Ne,
      numDirLights: x.directional.length,
      numPointLights: x.point.length,
      numSpotLights: x.spot.length,
      numSpotLightMaps: x.spotLightMap.length,
      numRectAreaLights: x.rectArea.length,
      numHemiLights: x.hemi.length,
      numDirLightShadows: x.directionalShadowMap.length,
      numPointLightShadows: x.pointShadowMap.length,
      numSpotLightShadows: x.spotShadowMap.length,
      numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps,
      numLightProbes: x.numLightProbes,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: i.shadowMap.enabled && P.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Pe,
      decodeVideoTexture: ze && M.map.isVideoTexture === !0 && Ve.getTransfer(M.map.colorSpace) === Xe,
      decodeVideoTextureEmissive: _e && M.emissiveMap.isVideoTexture === !0 && Ve.getTransfer(M.emissiveMap.colorSpace) === Xe,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === 2,
      flipSided: M.side === 1,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionClipCullDistance: pe && M.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (pe && M.extensions.multiDraw === !0 || Me) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: M.customProgramCacheKey()
    };
    return $e.vertexUv1s = l.has(1), $e.vertexUv2s = l.has(2), $e.vertexUv3s = l.has(3), l.clear(), $e;
  }
  function d(M) {
    const x = [];
    if (M.shaderID ? x.push(M.shaderID) : (x.push(M.customVertexShaderID), x.push(M.customFragmentShaderID)), M.defines !== void 0)
      for (const P in M.defines)
        x.push(P), x.push(M.defines[P]);
    return M.isRawShaderMaterial === !1 && (A(x, M), y(x, M), x.push(i.outputColorSpace)), x.push(M.customProgramCacheKey), x.join();
  }
  function A(M, x) {
    M.push(x.precision), M.push(x.outputColorSpace), M.push(x.envMapMode), M.push(x.envMapCubeUVHeight), M.push(x.mapUv), M.push(x.alphaMapUv), M.push(x.lightMapUv), M.push(x.aoMapUv), M.push(x.bumpMapUv), M.push(x.normalMapUv), M.push(x.displacementMapUv), M.push(x.emissiveMapUv), M.push(x.metalnessMapUv), M.push(x.roughnessMapUv), M.push(x.anisotropyMapUv), M.push(x.clearcoatMapUv), M.push(x.clearcoatNormalMapUv), M.push(x.clearcoatRoughnessMapUv), M.push(x.iridescenceMapUv), M.push(x.iridescenceThicknessMapUv), M.push(x.sheenColorMapUv), M.push(x.sheenRoughnessMapUv), M.push(x.specularMapUv), M.push(x.specularColorMapUv), M.push(x.specularIntensityMapUv), M.push(x.transmissionMapUv), M.push(x.thicknessMapUv), M.push(x.combine), M.push(x.fogExp2), M.push(x.sizeAttenuation), M.push(x.morphTargetsCount), M.push(x.morphAttributeCount), M.push(x.numDirLights), M.push(x.numPointLights), M.push(x.numSpotLights), M.push(x.numSpotLightMaps), M.push(x.numHemiLights), M.push(x.numRectAreaLights), M.push(x.numDirLightShadows), M.push(x.numPointLightShadows), M.push(x.numSpotLightShadows), M.push(x.numSpotLightShadowsWithMaps), M.push(x.numLightProbes), M.push(x.shadowMapType), M.push(x.toneMapping), M.push(x.numClippingPlanes), M.push(x.numClipIntersection), M.push(x.depthPacking);
  }
  function y(M, x) {
    o.disableAll(), x.supportsVertexTextures && o.enable(0), x.instancing && o.enable(1), x.instancingColor && o.enable(2), x.instancingMorph && o.enable(3), x.matcap && o.enable(4), x.envMap && o.enable(5), x.normalMapObjectSpace && o.enable(6), x.normalMapTangentSpace && o.enable(7), x.clearcoat && o.enable(8), x.iridescence && o.enable(9), x.alphaTest && o.enable(10), x.vertexColors && o.enable(11), x.vertexAlphas && o.enable(12), x.vertexUv1s && o.enable(13), x.vertexUv2s && o.enable(14), x.vertexUv3s && o.enable(15), x.vertexTangents && o.enable(16), x.anisotropy && o.enable(17), x.alphaHash && o.enable(18), x.batching && o.enable(19), x.dispersion && o.enable(20), x.batchingColor && o.enable(21), x.gradientMap && o.enable(22), M.push(o.mask), o.disableAll(), x.fog && o.enable(0), x.useFog && o.enable(1), x.flatShading && o.enable(2), x.logarithmicDepthBuffer && o.enable(3), x.reversedDepthBuffer && o.enable(4), x.skinning && o.enable(5), x.morphTargets && o.enable(6), x.morphNormals && o.enable(7), x.morphColors && o.enable(8), x.premultipliedAlpha && o.enable(9), x.shadowMapEnabled && o.enable(10), x.doubleSided && o.enable(11), x.flipSided && o.enable(12), x.useDepthPacking && o.enable(13), x.dithering && o.enable(14), x.transmission && o.enable(15), x.sheen && o.enable(16), x.opaque && o.enable(17), x.pointsUvs && o.enable(18), x.decodeVideoTexture && o.enable(19), x.decodeVideoTextureEmissive && o.enable(20), x.alphaToCoverage && o.enable(21), M.push(o.mask);
  }
  function E(M) {
    const x = v[M.type];
    let P;
    if (x) {
      const z = Nt[x];
      P = ls.clone(z.uniforms);
    } else
      P = M.uniforms;
    return P;
  }
  function C(M, x) {
    let P;
    for (let z = 0, H = u.length; z < H; z++) {
      const X = u[z];
      if (X.cacheKey === x) {
        P = X, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new Nd(i, x, M, a), u.push(P)), P;
  }
  function R(M) {
    if (--M.usedTimes === 0) {
      const x = u.indexOf(M);
      u[x] = u[u.length - 1], u.pop(), M.destroy();
    }
  }
  function D(M) {
    c.remove(M);
  }
  function N() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: d,
    getUniforms: E,
    acquireProgram: C,
    releaseProgram: R,
    releaseShaderCache: D,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: u,
    dispose: N
  };
}
function Vd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(s) {
    return i.has(s);
  }
  function t(s) {
    let o = i.get(s);
    return o === void 0 && (o = {}, i.set(s, o)), o;
  }
  function n(s) {
    i.delete(s);
  }
  function r(s, o, c) {
    i.get(s)[o] = c;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: r,
    dispose: a
  };
}
function Hd(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function ca(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function da() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function a() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function s(h, f, p, v, S, m) {
    let d = i[e];
    return d === void 0 ? (d = {
      id: h.id,
      object: h,
      geometry: f,
      material: p,
      groupOrder: v,
      renderOrder: h.renderOrder,
      z: S,
      group: m
    }, i[e] = d) : (d.id = h.id, d.object = h, d.geometry = f, d.material = p, d.groupOrder = v, d.renderOrder = h.renderOrder, d.z = S, d.group = m), e++, d;
  }
  function o(h, f, p, v, S, m) {
    const d = s(h, f, p, v, S, m);
    p.transmission > 0 ? n.push(d) : p.transparent === !0 ? r.push(d) : t.push(d);
  }
  function c(h, f, p, v, S, m) {
    const d = s(h, f, p, v, S, m);
    p.transmission > 0 ? n.unshift(d) : p.transparent === !0 ? r.unshift(d) : t.unshift(d);
  }
  function l(h, f) {
    t.length > 1 && t.sort(h || Hd), n.length > 1 && n.sort(f || ca), r.length > 1 && r.sort(f || ca);
  }
  function u() {
    for (let h = e, f = i.length; h < f; h++) {
      const p = i[h];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: a,
    push: o,
    unshift: c,
    finish: u,
    sort: l
  };
}
function kd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const a = i.get(n);
    let s;
    return a === void 0 ? (s = new da(), i.set(n, [s])) : r >= a.length ? (s = new da(), a.push(s)) : s = a[r], s;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Wd() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new F(),
            color: new qe()
          };
          break;
        case "SpotLight":
          t = {
            position: new F(),
            direction: new F(),
            color: new qe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new F(),
            color: new qe(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new F(),
            skyColor: new qe(),
            groundColor: new qe()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new qe(),
            position: new F(),
            halfWidth: new F(),
            halfHeight: new F()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Xd() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ye()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ye()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ye(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let qd = 0;
function Yd(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Kd(i) {
  const e = new Wd(), t = Xd(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let l = 0; l < 9; l++) n.probe.push(new F());
  const r = new F(), a = new rt(), s = new rt();
  function o(l) {
    let u = 0, h = 0, f = 0;
    for (let M = 0; M < 9; M++) n.probe[M].set(0, 0, 0);
    let p = 0, v = 0, S = 0, m = 0, d = 0, A = 0, y = 0, E = 0, C = 0, R = 0, D = 0;
    l.sort(Yd);
    for (let M = 0, x = l.length; M < x; M++) {
      const P = l[M], z = P.color, H = P.intensity, X = P.distance, K = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight)
        u += z.r * H, h += z.g * H, f += z.b * H;
      else if (P.isLightProbe) {
        for (let W = 0; W < 9; W++)
          n.probe[W].addScaledVector(P.sh.coefficients[W], H);
        D++;
      } else if (P.isDirectionalLight) {
        const W = e.get(P);
        if (W.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const te = P.shadow, G = t.get(P);
          G.shadowIntensity = te.intensity, G.shadowBias = te.bias, G.shadowNormalBias = te.normalBias, G.shadowRadius = te.radius, G.shadowMapSize = te.mapSize, n.directionalShadow[p] = G, n.directionalShadowMap[p] = K, n.directionalShadowMatrix[p] = P.shadow.matrix, A++;
        }
        n.directional[p] = W, p++;
      } else if (P.isSpotLight) {
        const W = e.get(P);
        W.position.setFromMatrixPosition(P.matrixWorld), W.color.copy(z).multiplyScalar(H), W.distance = X, W.coneCos = Math.cos(P.angle), W.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), W.decay = P.decay, n.spot[S] = W;
        const te = P.shadow;
        if (P.map && (n.spotLightMap[C] = P.map, C++, te.updateMatrices(P), P.castShadow && R++), n.spotLightMatrix[S] = te.matrix, P.castShadow) {
          const G = t.get(P);
          G.shadowIntensity = te.intensity, G.shadowBias = te.bias, G.shadowNormalBias = te.normalBias, G.shadowRadius = te.radius, G.shadowMapSize = te.mapSize, n.spotShadow[S] = G, n.spotShadowMap[S] = K, E++;
        }
        S++;
      } else if (P.isRectAreaLight) {
        const W = e.get(P);
        W.color.copy(z).multiplyScalar(H), W.halfWidth.set(P.width * 0.5, 0, 0), W.halfHeight.set(0, P.height * 0.5, 0), n.rectArea[m] = W, m++;
      } else if (P.isPointLight) {
        const W = e.get(P);
        if (W.color.copy(P.color).multiplyScalar(P.intensity), W.distance = P.distance, W.decay = P.decay, P.castShadow) {
          const te = P.shadow, G = t.get(P);
          G.shadowIntensity = te.intensity, G.shadowBias = te.bias, G.shadowNormalBias = te.normalBias, G.shadowRadius = te.radius, G.shadowMapSize = te.mapSize, G.shadowCameraNear = te.camera.near, G.shadowCameraFar = te.camera.far, n.pointShadow[v] = G, n.pointShadowMap[v] = K, n.pointShadowMatrix[v] = P.shadow.matrix, y++;
        }
        n.point[v] = W, v++;
      } else if (P.isHemisphereLight) {
        const W = e.get(P);
        W.skyColor.copy(P.color).multiplyScalar(H), W.groundColor.copy(P.groundColor).multiplyScalar(H), n.hemi[d] = W, d++;
      }
    }
    m > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = re.LTC_FLOAT_1, n.rectAreaLTC2 = re.LTC_FLOAT_2) : (n.rectAreaLTC1 = re.LTC_HALF_1, n.rectAreaLTC2 = re.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = h, n.ambient[2] = f;
    const N = n.hash;
    (N.directionalLength !== p || N.pointLength !== v || N.spotLength !== S || N.rectAreaLength !== m || N.hemiLength !== d || N.numDirectionalShadows !== A || N.numPointShadows !== y || N.numSpotShadows !== E || N.numSpotMaps !== C || N.numLightProbes !== D) && (n.directional.length = p, n.spot.length = S, n.rectArea.length = m, n.point.length = v, n.hemi.length = d, n.directionalShadow.length = A, n.directionalShadowMap.length = A, n.pointShadow.length = y, n.pointShadowMap.length = y, n.spotShadow.length = E, n.spotShadowMap.length = E, n.directionalShadowMatrix.length = A, n.pointShadowMatrix.length = y, n.spotLightMatrix.length = E + C - R, n.spotLightMap.length = C, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = D, N.directionalLength = p, N.pointLength = v, N.spotLength = S, N.rectAreaLength = m, N.hemiLength = d, N.numDirectionalShadows = A, N.numPointShadows = y, N.numSpotShadows = E, N.numSpotMaps = C, N.numLightProbes = D, n.version = qd++);
  }
  function c(l, u) {
    let h = 0, f = 0, p = 0, v = 0, S = 0;
    const m = u.matrixWorldInverse;
    for (let d = 0, A = l.length; d < A; d++) {
      const y = l[d];
      if (y.isDirectionalLight) {
        const E = n.directional[h];
        E.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(m), h++;
      } else if (y.isSpotLight) {
        const E = n.spot[p];
        E.position.setFromMatrixPosition(y.matrixWorld), E.position.applyMatrix4(m), E.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(m), p++;
      } else if (y.isRectAreaLight) {
        const E = n.rectArea[v];
        E.position.setFromMatrixPosition(y.matrixWorld), E.position.applyMatrix4(m), s.identity(), a.copy(y.matrixWorld), a.premultiply(m), s.extractRotation(a), E.halfWidth.set(y.width * 0.5, 0, 0), E.halfHeight.set(0, y.height * 0.5, 0), E.halfWidth.applyMatrix4(s), E.halfHeight.applyMatrix4(s), v++;
      } else if (y.isPointLight) {
        const E = n.point[f];
        E.position.setFromMatrixPosition(y.matrixWorld), E.position.applyMatrix4(m), f++;
      } else if (y.isHemisphereLight) {
        const E = n.hemi[S];
        E.direction.setFromMatrixPosition(y.matrixWorld), E.direction.transformDirection(m), S++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function ua(i) {
  const e = new Kd(i), t = [], n = [];
  function r(u) {
    l.camera = u, t.length = 0, n.length = 0;
  }
  function a(u) {
    t.push(u);
  }
  function s(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function c(u) {
    e.setupView(t, u);
  }
  const l = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: r,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: a,
    pushShadow: s
  };
}
function Zd(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, a = 0) {
    const s = e.get(r);
    let o;
    return s === void 0 ? (o = new ua(i), e.set(r, [o])) : a >= s.length ? (o = new ua(i), s.push(o)) : o = s[a], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
const $d = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, jd = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Jd(i, e, t) {
  let n = new ba();
  const r = new Ye(), a = new Ye(), s = new st(), o = new vs({ depthPacking: 3201 }), c = new xs(), l = {}, u = t.maxTextureSize, h = { 0: 1, 1: 0, 2: 2 }, f = new Qt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ye() },
      radius: { value: 4 }
    },
    vertexShader: $d,
    fragmentShader: jd
  }), p = f.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const v = new tn();
  v.setAttribute(
    "position",
    new Ot(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const S = new Pt(v, f), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let d = this.type;
  this.render = function(R, D, N) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || R.length === 0) return;
    const M = i.getRenderTarget(), x = i.getActiveCubeFace(), P = i.getActiveMipmapLevel(), z = i.state;
    z.setBlending(0), z.buffers.depth.getReversed() === !0 ? z.buffers.color.setClear(0, 0, 0, 0) : z.buffers.color.setClear(1, 1, 1, 1), z.buffers.depth.setTest(!0), z.setScissorTest(!1);
    const H = d !== 3 && this.type === 3, X = d === 3 && this.type !== 3;
    for (let K = 0, W = R.length; K < W; K++) {
      const te = R[K], G = te.shadow;
      if (G === void 0) {
        console.warn("THREE.WebGLShadowMap:", te, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === !1 && G.needsUpdate === !1) continue;
      r.copy(G.mapSize);
      const ae = G.getFrameExtents();
      if (r.multiply(ae), a.copy(G.mapSize), (r.x > u || r.y > u) && (r.x > u && (a.x = Math.floor(u / ae.x), r.x = a.x * ae.x, G.mapSize.x = a.x), r.y > u && (a.y = Math.floor(u / ae.y), r.y = a.y * ae.y, G.mapSize.y = a.y)), G.map === null || H === !0 || X === !0) {
        const Ee = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        G.map !== null && G.map.dispose(), G.map = new _n(r.x, r.y, Ee), G.map.texture.name = te.name + ".shadowMap", G.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(G.map), i.clear();
      const ce = G.getViewportCount();
      for (let Ee = 0; Ee < ce; Ee++) {
        const Ne = G.getViewport(Ee);
        s.set(
          a.x * Ne.x,
          a.y * Ne.y,
          a.x * Ne.z,
          a.y * Ne.w
        ), z.viewport(s), G.updateMatrices(te, Ee), n = G.getFrustum(), E(D, N, G.camera, te, this.type);
      }
      G.isPointLightShadow !== !0 && this.type === 3 && A(G, N), G.needsUpdate = !1;
    }
    d = this.type, m.needsUpdate = !1, i.setRenderTarget(M, x, P);
  };
  function A(R, D) {
    const N = e.update(S);
    f.defines.VSM_SAMPLES !== R.blurSamples && (f.defines.VSM_SAMPLES = R.blurSamples, p.defines.VSM_SAMPLES = R.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0), R.mapPass === null && (R.mapPass = new _n(r.x, r.y)), f.uniforms.shadow_pass.value = R.map.texture, f.uniforms.resolution.value = R.mapSize, f.uniforms.radius.value = R.radius, i.setRenderTarget(R.mapPass), i.clear(), i.renderBufferDirect(D, null, N, f, S, null), p.uniforms.shadow_pass.value = R.mapPass.texture, p.uniforms.resolution.value = R.mapSize, p.uniforms.radius.value = R.radius, i.setRenderTarget(R.map), i.clear(), i.renderBufferDirect(D, null, N, p, S, null);
  }
  function y(R, D, N, M) {
    let x = null;
    const P = N.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial;
    if (P !== void 0)
      x = P;
    else if (x = N.isPointLight === !0 ? c : o, i.localClippingEnabled && D.clipShadows === !0 && Array.isArray(D.clippingPlanes) && D.clippingPlanes.length !== 0 || D.displacementMap && D.displacementScale !== 0 || D.alphaMap && D.alphaTest > 0 || D.map && D.alphaTest > 0 || D.alphaToCoverage === !0) {
      const z = x.uuid, H = D.uuid;
      let X = l[z];
      X === void 0 && (X = {}, l[z] = X);
      let K = X[H];
      K === void 0 && (K = x.clone(), X[H] = K, D.addEventListener("dispose", C)), x = K;
    }
    if (x.visible = D.visible, x.wireframe = D.wireframe, M === 3 ? x.side = D.shadowSide !== null ? D.shadowSide : D.side : x.side = D.shadowSide !== null ? D.shadowSide : h[D.side], x.alphaMap = D.alphaMap, x.alphaTest = D.alphaToCoverage === !0 ? 0.5 : D.alphaTest, x.map = D.map, x.clipShadows = D.clipShadows, x.clippingPlanes = D.clippingPlanes, x.clipIntersection = D.clipIntersection, x.displacementMap = D.displacementMap, x.displacementScale = D.displacementScale, x.displacementBias = D.displacementBias, x.wireframeLinewidth = D.wireframeLinewidth, x.linewidth = D.linewidth, N.isPointLight === !0 && x.isMeshDistanceMaterial === !0) {
      const z = i.properties.get(x);
      z.light = N;
    }
    return x;
  }
  function E(R, D, N, M, x) {
    if (R.visible === !1) return;
    if (R.layers.test(D.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && x === 3) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, R.matrixWorld);
      const H = e.update(R), X = R.material;
      if (Array.isArray(X)) {
        const K = H.groups;
        for (let W = 0, te = K.length; W < te; W++) {
          const G = K[W], ae = X[G.materialIndex];
          if (ae && ae.visible) {
            const ce = y(R, ae, M, x);
            R.onBeforeShadow(i, R, D, N, H, ce, G), i.renderBufferDirect(N, null, H, ce, R, G), R.onAfterShadow(i, R, D, N, H, ce, G);
          }
        }
      } else if (X.visible) {
        const K = y(R, X, M, x);
        R.onBeforeShadow(i, R, D, N, H, K, null), i.renderBufferDirect(N, null, H, K, R, null), R.onAfterShadow(i, R, D, N, H, K, null);
      }
    }
    const z = R.children;
    for (let H = 0, X = z.length; H < X; H++)
      E(z[H], D, N, M, x);
  }
  function C(R) {
    R.target.removeEventListener("dispose", C);
    for (const N in l) {
      const M = l[N], x = R.target.uuid;
      x in M && (M[x].dispose(), delete M[x]);
    }
  }
}
const Qd = {
  0: 1,
  2: 6,
  4: 7,
  3: 5,
  1: 0,
  6: 2,
  7: 4,
  5: 3
};
function eu(i, e) {
  function t() {
    let w = !1;
    const ee = new st();
    let ie = null;
    const ue = new st(0, 0, 0, 0);
    return {
      setMask: function(j) {
        ie !== j && !w && (i.colorMask(j, j, j, j), ie = j);
      },
      setLocked: function(j) {
        w = j;
      },
      setClear: function(j, Y, pe, Pe, $e) {
        $e === !0 && (j *= Pe, Y *= Pe, pe *= Pe), ee.set(j, Y, pe, Pe), ue.equals(ee) === !1 && (i.clearColor(j, Y, pe, Pe), ue.copy(ee));
      },
      reset: function() {
        w = !1, ie = null, ue.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let w = !1, ee = !1, ie = null, ue = null, j = null;
    return {
      setReversed: function(Y) {
        if (ee !== Y) {
          const pe = e.get("EXT_clip_control");
          Y ? pe.clipControlEXT(pe.LOWER_LEFT_EXT, pe.ZERO_TO_ONE_EXT) : pe.clipControlEXT(pe.LOWER_LEFT_EXT, pe.NEGATIVE_ONE_TO_ONE_EXT), ee = Y;
          const Pe = j;
          j = null, this.setClear(Pe);
        }
      },
      getReversed: function() {
        return ee;
      },
      setTest: function(Y) {
        Y ? $(i.DEPTH_TEST) : he(i.DEPTH_TEST);
      },
      setMask: function(Y) {
        ie !== Y && !w && (i.depthMask(Y), ie = Y);
      },
      setFunc: function(Y) {
        if (ee && (Y = Qd[Y]), ue !== Y) {
          switch (Y) {
            case 0:
              i.depthFunc(i.NEVER);
              break;
            case 1:
              i.depthFunc(i.ALWAYS);
              break;
            case 2:
              i.depthFunc(i.LESS);
              break;
            case 3:
              i.depthFunc(i.LEQUAL);
              break;
            case 4:
              i.depthFunc(i.EQUAL);
              break;
            case 5:
              i.depthFunc(i.GEQUAL);
              break;
            case 6:
              i.depthFunc(i.GREATER);
              break;
            case 7:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          ue = Y;
        }
      },
      setLocked: function(Y) {
        w = Y;
      },
      setClear: function(Y) {
        j !== Y && (ee && (Y = 1 - Y), i.clearDepth(Y), j = Y);
      },
      reset: function() {
        w = !1, ie = null, ue = null, j = null, ee = !1;
      }
    };
  }
  function r() {
    let w = !1, ee = null, ie = null, ue = null, j = null, Y = null, pe = null, Pe = null, $e = null;
    return {
      setTest: function(ke) {
        w || (ke ? $(i.STENCIL_TEST) : he(i.STENCIL_TEST));
      },
      setMask: function(ke) {
        ee !== ke && !w && (i.stencilMask(ke), ee = ke);
      },
      setFunc: function(ke, Gt, Ft) {
        (ie !== ke || ue !== Gt || j !== Ft) && (i.stencilFunc(ke, Gt, Ft), ie = ke, ue = Gt, j = Ft);
      },
      setOp: function(ke, Gt, Ft) {
        (Y !== ke || pe !== Gt || Pe !== Ft) && (i.stencilOp(ke, Gt, Ft), Y = ke, pe = Gt, Pe = Ft);
      },
      setLocked: function(ke) {
        w = ke;
      },
      setClear: function(ke) {
        $e !== ke && (i.clearStencil(ke), $e = ke);
      },
      reset: function() {
        w = !1, ee = null, ie = null, ue = null, j = null, Y = null, pe = null, Pe = null, $e = null;
      }
    };
  }
  const a = new t(), s = new n(), o = new r(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let u = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), p = [], v = null, S = !1, m = null, d = null, A = null, y = null, E = null, C = null, R = null, D = new qe(0, 0, 0), N = 0, M = !1, x = null, P = null, z = null, H = null, X = null;
  const K = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let W = !1, te = 0;
  const G = i.getParameter(i.VERSION);
  G.indexOf("WebGL") !== -1 ? (te = parseFloat(/^WebGL (\d)/.exec(G)[1]), W = te >= 1) : G.indexOf("OpenGL ES") !== -1 && (te = parseFloat(/^OpenGL ES (\d)/.exec(G)[1]), W = te >= 2);
  let ae = null, ce = {};
  const Ee = i.getParameter(i.SCISSOR_BOX), Ne = i.getParameter(i.VIEWPORT), Ze = new st().fromArray(Ee), Je = new st().fromArray(Ne);
  function He(w, ee, ie, ue) {
    const j = new Uint8Array(4), Y = i.createTexture();
    i.bindTexture(w, Y), i.texParameteri(w, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(w, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let pe = 0; pe < ie; pe++)
      w === i.TEXTURE_3D || w === i.TEXTURE_2D_ARRAY ? i.texImage3D(ee, 0, i.RGBA, 1, 1, ue, 0, i.RGBA, i.UNSIGNED_BYTE, j) : i.texImage2D(ee + pe, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, j);
    return Y;
  }
  const q = {};
  q[i.TEXTURE_2D] = He(i.TEXTURE_2D, i.TEXTURE_2D, 1), q[i.TEXTURE_CUBE_MAP] = He(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), q[i.TEXTURE_2D_ARRAY] = He(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), q[i.TEXTURE_3D] = He(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), s.setClear(1), o.setClear(0), $(i.DEPTH_TEST), s.setFunc(3), Re(!1), me(1), $(i.CULL_FACE), Qe(0);
  function $(w) {
    u[w] !== !0 && (i.enable(w), u[w] = !0);
  }
  function he(w) {
    u[w] !== !1 && (i.disable(w), u[w] = !1);
  }
  function Ce(w, ee) {
    return h[w] !== ee ? (i.bindFramebuffer(w, ee), h[w] = ee, w === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = ee), w === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = ee), !0) : !1;
  }
  function Me(w, ee) {
    let ie = p, ue = !1;
    if (w) {
      ie = f.get(ee), ie === void 0 && (ie = [], f.set(ee, ie));
      const j = w.textures;
      if (ie.length !== j.length || ie[0] !== i.COLOR_ATTACHMENT0) {
        for (let Y = 0, pe = j.length; Y < pe; Y++)
          ie[Y] = i.COLOR_ATTACHMENT0 + Y;
        ie.length = j.length, ue = !0;
      }
    } else
      ie[0] !== i.BACK && (ie[0] = i.BACK, ue = !0);
    ue && i.drawBuffers(ie);
  }
  function ze(w) {
    return v !== w ? (i.useProgram(w), v = w, !0) : !1;
  }
  const ht = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT
  };
  ht[103] = i.MIN, ht[104] = i.MAX;
  const b = {
    200: i.ZERO,
    201: i.ONE,
    202: i.SRC_COLOR,
    204: i.SRC_ALPHA,
    210: i.SRC_ALPHA_SATURATE,
    208: i.DST_COLOR,
    206: i.DST_ALPHA,
    203: i.ONE_MINUS_SRC_COLOR,
    205: i.ONE_MINUS_SRC_ALPHA,
    209: i.ONE_MINUS_DST_COLOR,
    207: i.ONE_MINUS_DST_ALPHA,
    211: i.CONSTANT_COLOR,
    212: i.ONE_MINUS_CONSTANT_COLOR,
    213: i.CONSTANT_ALPHA,
    214: i.ONE_MINUS_CONSTANT_ALPHA
  };
  function Qe(w, ee, ie, ue, j, Y, pe, Pe, $e, ke) {
    if (w === 0) {
      S === !0 && (he(i.BLEND), S = !1);
      return;
    }
    if (S === !1 && ($(i.BLEND), S = !0), w !== 5) {
      if (w !== m || ke !== M) {
        if ((d !== 100 || E !== 100) && (i.blendEquation(i.FUNC_ADD), d = 100, E = 100), ke)
          switch (w) {
            case 1:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", w);
              break;
          }
        else
          switch (w) {
            case 1:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case 3:
              console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case 4:
              console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", w);
              break;
          }
        A = null, y = null, C = null, R = null, D.set(0, 0, 0), N = 0, m = w, M = ke;
      }
      return;
    }
    j = j || ee, Y = Y || ie, pe = pe || ue, (ee !== d || j !== E) && (i.blendEquationSeparate(ht[ee], ht[j]), d = ee, E = j), (ie !== A || ue !== y || Y !== C || pe !== R) && (i.blendFuncSeparate(b[ie], b[ue], b[Y], b[pe]), A = ie, y = ue, C = Y, R = pe), (Pe.equals(D) === !1 || $e !== N) && (i.blendColor(Pe.r, Pe.g, Pe.b, $e), D.copy(Pe), N = $e), m = w, M = !1;
  }
  function De(w, ee) {
    w.side === 2 ? he(i.CULL_FACE) : $(i.CULL_FACE);
    let ie = w.side === 1;
    ee && (ie = !ie), Re(ie), w.blending === 1 && w.transparent === !1 ? Qe(0) : Qe(w.blending, w.blendEquation, w.blendSrc, w.blendDst, w.blendEquationAlpha, w.blendSrcAlpha, w.blendDstAlpha, w.blendColor, w.blendAlpha, w.premultipliedAlpha), s.setFunc(w.depthFunc), s.setTest(w.depthTest), s.setMask(w.depthWrite), a.setMask(w.colorWrite);
    const ue = w.stencilWrite;
    o.setTest(ue), ue && (o.setMask(w.stencilWriteMask), o.setFunc(w.stencilFunc, w.stencilRef, w.stencilFuncMask), o.setOp(w.stencilFail, w.stencilZFail, w.stencilZPass)), _e(w.polygonOffset, w.polygonOffsetFactor, w.polygonOffsetUnits), w.alphaToCoverage === !0 ? $(i.SAMPLE_ALPHA_TO_COVERAGE) : he(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Re(w) {
    x !== w && (w ? i.frontFace(i.CW) : i.frontFace(i.CCW), x = w);
  }
  function me(w) {
    w !== 0 ? ($(i.CULL_FACE), w !== P && (w === 1 ? i.cullFace(i.BACK) : w === 2 ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : he(i.CULL_FACE), P = w;
  }
  function et(w) {
    w !== z && (W && i.lineWidth(w), z = w);
  }
  function _e(w, ee, ie) {
    w ? ($(i.POLYGON_OFFSET_FILL), (H !== ee || X !== ie) && (i.polygonOffset(ee, ie), H = ee, X = ie)) : he(i.POLYGON_OFFSET_FILL);
  }
  function Ie(w) {
    w ? $(i.SCISSOR_TEST) : he(i.SCISSOR_TEST);
  }
  function dt(w) {
    w === void 0 && (w = i.TEXTURE0 + K - 1), ae !== w && (i.activeTexture(w), ae = w);
  }
  function at(w, ee, ie) {
    ie === void 0 && (ae === null ? ie = i.TEXTURE0 + K - 1 : ie = ae);
    let ue = ce[ie];
    ue === void 0 && (ue = { type: void 0, texture: void 0 }, ce[ie] = ue), (ue.type !== w || ue.texture !== ee) && (ae !== ie && (i.activeTexture(ie), ae = ie), i.bindTexture(w, ee || q[w]), ue.type = w, ue.texture = ee);
  }
  function T() {
    const w = ce[ae];
    w !== void 0 && w.type !== void 0 && (i.bindTexture(w.type, null), w.type = void 0, w.texture = void 0);
  }
  function _() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function I() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function k() {
    try {
      i.texSubImage2D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Z() {
    try {
      i.texSubImage3D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function V() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Se() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function ne() {
    try {
      i.texStorage2D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function ge() {
    try {
      i.texStorage3D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function ve() {
    try {
      i.texImage2D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function Q() {
    try {
      i.texImage3D(...arguments);
    } catch (w) {
      console.error("THREE.WebGLState:", w);
    }
  }
  function le(w) {
    Ze.equals(w) === !1 && (i.scissor(w.x, w.y, w.z, w.w), Ze.copy(w));
  }
  function Ae(w) {
    Je.equals(w) === !1 && (i.viewport(w.x, w.y, w.z, w.w), Je.copy(w));
  }
  function xe(w, ee) {
    let ie = l.get(ee);
    ie === void 0 && (ie = /* @__PURE__ */ new WeakMap(), l.set(ee, ie));
    let ue = ie.get(w);
    ue === void 0 && (ue = i.getUniformBlockIndex(ee, w.name), ie.set(w, ue));
  }
  function se(w, ee) {
    const ue = l.get(ee).get(w);
    c.get(ee) !== ue && (i.uniformBlockBinding(ee, ue, w.__bindingPointIndex), c.set(ee, ue));
  }
  function Le() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), s.setReversed(!1), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, ae = null, ce = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), p = [], v = null, S = !1, m = null, d = null, A = null, y = null, E = null, C = null, R = null, D = new qe(0, 0, 0), N = 0, M = !1, x = null, P = null, z = null, H = null, X = null, Ze.set(0, 0, i.canvas.width, i.canvas.height), Je.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), s.reset(), o.reset();
  }
  return {
    buffers: {
      color: a,
      depth: s,
      stencil: o
    },
    enable: $,
    disable: he,
    bindFramebuffer: Ce,
    drawBuffers: Me,
    useProgram: ze,
    setBlending: Qe,
    setMaterial: De,
    setFlipSided: Re,
    setCullFace: me,
    setLineWidth: et,
    setPolygonOffset: _e,
    setScissorTest: Ie,
    activeTexture: dt,
    bindTexture: at,
    unbindTexture: T,
    compressedTexImage2D: _,
    compressedTexImage3D: I,
    texImage2D: ve,
    texImage3D: Q,
    updateUBOMapping: xe,
    uniformBlockBinding: se,
    texStorage2D: ne,
    texStorage3D: ge,
    texSubImage2D: k,
    texSubImage3D: Z,
    compressedTexSubImage2D: V,
    compressedTexSubImage3D: Se,
    scissor: le,
    viewport: Ae,
    reset: Le
  };
}
function tu(i, e, t, n, r, a, s) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Ye(), u = /* @__PURE__ */ new WeakMap();
  let h;
  const f = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(T, _) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(T, _)
    ) : qn("canvas");
  }
  function S(T, _, I) {
    let k = 1;
    const Z = at(T);
    if ((Z.width > I || Z.height > I) && (k = I / Math.max(Z.width, Z.height)), k < 1)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
        const V = Math.floor(k * Z.width), Se = Math.floor(k * Z.height);
        h === void 0 && (h = v(V, Se));
        const ne = _ ? v(V, Se) : h;
        return ne.width = V, ne.height = Se, ne.getContext("2d").drawImage(T, 0, 0, V, Se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + V + "x" + Se + ")."), ne;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), T;
    return T;
  }
  function m(T) {
    return T.generateMipmaps;
  }
  function d(T) {
    i.generateMipmap(T);
  }
  function A(T) {
    return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function y(T, _, I, k, Z = !1) {
    if (T !== null) {
      if (i[T] !== void 0) return i[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let V = _;
    if (_ === i.RED && (I === i.FLOAT && (V = i.R32F), I === i.HALF_FLOAT && (V = i.R16F), I === i.UNSIGNED_BYTE && (V = i.R8)), _ === i.RED_INTEGER && (I === i.UNSIGNED_BYTE && (V = i.R8UI), I === i.UNSIGNED_SHORT && (V = i.R16UI), I === i.UNSIGNED_INT && (V = i.R32UI), I === i.BYTE && (V = i.R8I), I === i.SHORT && (V = i.R16I), I === i.INT && (V = i.R32I)), _ === i.RG && (I === i.FLOAT && (V = i.RG32F), I === i.HALF_FLOAT && (V = i.RG16F), I === i.UNSIGNED_BYTE && (V = i.RG8)), _ === i.RG_INTEGER && (I === i.UNSIGNED_BYTE && (V = i.RG8UI), I === i.UNSIGNED_SHORT && (V = i.RG16UI), I === i.UNSIGNED_INT && (V = i.RG32UI), I === i.BYTE && (V = i.RG8I), I === i.SHORT && (V = i.RG16I), I === i.INT && (V = i.RG32I)), _ === i.RGB_INTEGER && (I === i.UNSIGNED_BYTE && (V = i.RGB8UI), I === i.UNSIGNED_SHORT && (V = i.RGB16UI), I === i.UNSIGNED_INT && (V = i.RGB32UI), I === i.BYTE && (V = i.RGB8I), I === i.SHORT && (V = i.RGB16I), I === i.INT && (V = i.RGB32I)), _ === i.RGBA_INTEGER && (I === i.UNSIGNED_BYTE && (V = i.RGBA8UI), I === i.UNSIGNED_SHORT && (V = i.RGBA16UI), I === i.UNSIGNED_INT && (V = i.RGBA32UI), I === i.BYTE && (V = i.RGBA8I), I === i.SHORT && (V = i.RGBA16I), I === i.INT && (V = i.RGBA32I)), _ === i.RGB && (I === i.UNSIGNED_INT_5_9_9_9_REV && (V = i.RGB9_E5), I === i.UNSIGNED_INT_10F_11F_11F_REV && (V = i.R11F_G11F_B10F)), _ === i.RGBA) {
      const Se = Z ? Ti : Ve.getTransfer(k);
      I === i.FLOAT && (V = i.RGBA32F), I === i.HALF_FLOAT && (V = i.RGBA16F), I === i.UNSIGNED_BYTE && (V = Se === Xe ? i.SRGB8_ALPHA8 : i.RGBA8), I === i.UNSIGNED_SHORT_4_4_4_4 && (V = i.RGBA4), I === i.UNSIGNED_SHORT_5_5_5_1 && (V = i.RGB5_A1);
    }
    return (V === i.R16F || V === i.R32F || V === i.RG16F || V === i.RG32F || V === i.RGBA16F || V === i.RGBA32F) && e.get("EXT_color_buffer_float"), V;
  }
  function E(T, _) {
    let I;
    return T ? _ === null || _ === 1014 || _ === 1020 ? I = i.DEPTH24_STENCIL8 : _ === 1015 ? I = i.DEPTH32F_STENCIL8 : _ === 1012 && (I = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === 1014 || _ === 1020 ? I = i.DEPTH_COMPONENT24 : _ === 1015 ? I = i.DEPTH_COMPONENT32F : _ === 1012 && (I = i.DEPTH_COMPONENT16), I;
  }
  function C(T, _) {
    return m(T) === !0 || T.isFramebufferTexture && T.minFilter !== 1003 && T.minFilter !== 1006 ? Math.log2(Math.max(_.width, _.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? _.mipmaps.length : 1;
  }
  function R(T) {
    const _ = T.target;
    _.removeEventListener("dispose", R), N(_), _.isVideoTexture && u.delete(_);
  }
  function D(T) {
    const _ = T.target;
    _.removeEventListener("dispose", D), x(_);
  }
  function N(T) {
    const _ = n.get(T);
    if (_.__webglInit === void 0) return;
    const I = T.source, k = f.get(I);
    if (k) {
      const Z = k[_.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && M(T), Object.keys(k).length === 0 && f.delete(I);
    }
    n.remove(T);
  }
  function M(T) {
    const _ = n.get(T);
    i.deleteTexture(_.__webglTexture);
    const I = T.source, k = f.get(I);
    delete k[_.__cacheKey], s.memory.textures--;
  }
  function x(T) {
    const _ = n.get(T);
    if (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)), T.isWebGLCubeRenderTarget)
      for (let k = 0; k < 6; k++) {
        if (Array.isArray(_.__webglFramebuffer[k]))
          for (let Z = 0; Z < _.__webglFramebuffer[k].length; Z++) i.deleteFramebuffer(_.__webglFramebuffer[k][Z]);
        else
          i.deleteFramebuffer(_.__webglFramebuffer[k]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[k]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let k = 0; k < _.__webglFramebuffer.length; k++) i.deleteFramebuffer(_.__webglFramebuffer[k]);
      else
        i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer)
        for (let k = 0; k < _.__webglColorRenderbuffer.length; k++)
          _.__webglColorRenderbuffer[k] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const I = T.textures;
    for (let k = 0, Z = I.length; k < Z; k++) {
      const V = n.get(I[k]);
      V.__webglTexture && (i.deleteTexture(V.__webglTexture), s.memory.textures--), n.remove(I[k]);
    }
    n.remove(T);
  }
  let P = 0;
  function z() {
    P = 0;
  }
  function H() {
    const T = P;
    return T >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + r.maxTextures), P += 1, T;
  }
  function X(T) {
    const _ = [];
    return _.push(T.wrapS), _.push(T.wrapT), _.push(T.wrapR || 0), _.push(T.magFilter), _.push(T.minFilter), _.push(T.anisotropy), _.push(T.internalFormat), _.push(T.format), _.push(T.type), _.push(T.generateMipmaps), _.push(T.premultiplyAlpha), _.push(T.flipY), _.push(T.unpackAlignment), _.push(T.colorSpace), _.join();
  }
  function K(T, _) {
    const I = n.get(T);
    if (T.isVideoTexture && Ie(T), T.isRenderTargetTexture === !1 && T.isExternalTexture !== !0 && T.version > 0 && I.__version !== T.version) {
      const k = T.image;
      if (k === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (k.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        q(I, T, _);
        return;
      }
    } else T.isExternalTexture && (I.__webglTexture = T.sourceTexture ? T.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, I.__webglTexture, i.TEXTURE0 + _);
  }
  function W(T, _) {
    const I = n.get(T);
    if (T.isRenderTargetTexture === !1 && T.version > 0 && I.__version !== T.version) {
      q(I, T, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, I.__webglTexture, i.TEXTURE0 + _);
  }
  function te(T, _) {
    const I = n.get(T);
    if (T.isRenderTargetTexture === !1 && T.version > 0 && I.__version !== T.version) {
      q(I, T, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, I.__webglTexture, i.TEXTURE0 + _);
  }
  function G(T, _) {
    const I = n.get(T);
    if (T.version > 0 && I.__version !== T.version) {
      $(I, T, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, I.__webglTexture, i.TEXTURE0 + _);
  }
  const ae = {
    1e3: i.REPEAT,
    1001: i.CLAMP_TO_EDGE,
    1002: i.MIRRORED_REPEAT
  }, ce = {
    1003: i.NEAREST,
    1004: i.NEAREST_MIPMAP_NEAREST,
    1005: i.NEAREST_MIPMAP_LINEAR,
    1006: i.LINEAR,
    1007: i.LINEAR_MIPMAP_NEAREST,
    1008: i.LINEAR_MIPMAP_LINEAR
  }, Ee = {
    512: i.NEVER,
    519: i.ALWAYS,
    513: i.LESS,
    515: i.LEQUAL,
    514: i.EQUAL,
    518: i.GEQUAL,
    516: i.GREATER,
    517: i.NOTEQUAL
  };
  function Ne(T, _) {
    if (_.type === 1015 && e.has("OES_texture_float_linear") === !1 && (_.magFilter === 1006 || _.magFilter === 1007 || _.magFilter === 1005 || _.magFilter === 1008 || _.minFilter === 1006 || _.minFilter === 1007 || _.minFilter === 1005 || _.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, ae[_.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, ae[_.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, ae[_.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, ce[_.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, ce[_.minFilter]), _.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, Ee[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (_.magFilter === 1003 || _.minFilter !== 1005 && _.minFilter !== 1008 || _.type === 1015 && e.has("OES_texture_float_linear") === !1) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const I = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(T, I.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function Ze(T, _) {
    let I = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, _.addEventListener("dispose", R));
    const k = _.source;
    let Z = f.get(k);
    Z === void 0 && (Z = {}, f.set(k, Z));
    const V = X(_);
    if (V !== T.__cacheKey) {
      Z[V] === void 0 && (Z[V] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, s.memory.textures++, I = !0), Z[V].usedTimes++;
      const Se = Z[T.__cacheKey];
      Se !== void 0 && (Z[T.__cacheKey].usedTimes--, Se.usedTimes === 0 && M(_)), T.__cacheKey = V, T.__webglTexture = Z[V].texture;
    }
    return I;
  }
  function Je(T, _, I) {
    return Math.floor(Math.floor(T / I) / _);
  }
  function He(T, _, I, k) {
    const V = T.updateRanges;
    if (V.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, I, k, _.data);
    else {
      V.sort((Q, le) => Q.start - le.start);
      let Se = 0;
      for (let Q = 1; Q < V.length; Q++) {
        const le = V[Se], Ae = V[Q], xe = le.start + le.count, se = Je(Ae.start, _.width, 4), Le = Je(le.start, _.width, 4);
        Ae.start <= xe + 1 && se === Le && Je(Ae.start + Ae.count - 1, _.width, 4) === se ? le.count = Math.max(
          le.count,
          Ae.start + Ae.count - le.start
        ) : (++Se, V[Se] = Ae);
      }
      V.length = Se + 1;
      const ne = i.getParameter(i.UNPACK_ROW_LENGTH), ge = i.getParameter(i.UNPACK_SKIP_PIXELS), ve = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
      for (let Q = 0, le = V.length; Q < le; Q++) {
        const Ae = V[Q], xe = Math.floor(Ae.start / 4), se = Math.ceil(Ae.count / 4), Le = xe % _.width, w = Math.floor(xe / _.width), ee = se, ie = 1;
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, Le), i.pixelStorei(i.UNPACK_SKIP_ROWS, w), t.texSubImage2D(i.TEXTURE_2D, 0, Le, w, ee, ie, I, k, _.data);
      }
      T.clearUpdateRanges(), i.pixelStorei(i.UNPACK_ROW_LENGTH, ne), i.pixelStorei(i.UNPACK_SKIP_PIXELS, ge), i.pixelStorei(i.UNPACK_SKIP_ROWS, ve);
    }
  }
  function q(T, _, I) {
    let k = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (k = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (k = i.TEXTURE_3D);
    const Z = Ze(T, _), V = _.source;
    t.bindTexture(k, T.__webglTexture, i.TEXTURE0 + I);
    const Se = n.get(V);
    if (V.version !== Se.__version || Z === !0) {
      t.activeTexture(i.TEXTURE0 + I);
      const ne = Ve.getPrimaries(Ve.workingColorSpace), ge = _.colorSpace === "" ? null : Ve.getPrimaries(_.colorSpace), ve = _.colorSpace === "" || ne === ge ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ve);
      let Q = S(_.image, !1, r.maxTextureSize);
      Q = dt(_, Q);
      const le = a.convert(_.format, _.colorSpace), Ae = a.convert(_.type);
      let xe = y(_.internalFormat, le, Ae, _.colorSpace, _.isVideoTexture);
      Ne(k, _);
      let se;
      const Le = _.mipmaps, w = _.isVideoTexture !== !0, ee = Se.__version === void 0 || Z === !0, ie = V.dataReady, ue = C(_, Q);
      if (_.isDepthTexture)
        xe = E(_.format === 1027, _.type), ee && (w ? t.texStorage2D(i.TEXTURE_2D, 1, xe, Q.width, Q.height) : t.texImage2D(i.TEXTURE_2D, 0, xe, Q.width, Q.height, 0, le, Ae, null));
      else if (_.isDataTexture)
        if (Le.length > 0) {
          w && ee && t.texStorage2D(i.TEXTURE_2D, ue, xe, Le[0].width, Le[0].height);
          for (let j = 0, Y = Le.length; j < Y; j++)
            se = Le[j], w ? ie && t.texSubImage2D(i.TEXTURE_2D, j, 0, 0, se.width, se.height, le, Ae, se.data) : t.texImage2D(i.TEXTURE_2D, j, xe, se.width, se.height, 0, le, Ae, se.data);
          _.generateMipmaps = !1;
        } else
          w ? (ee && t.texStorage2D(i.TEXTURE_2D, ue, xe, Q.width, Q.height), ie && He(_, Q, le, Ae)) : t.texImage2D(i.TEXTURE_2D, 0, xe, Q.width, Q.height, 0, le, Ae, Q.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          w && ee && t.texStorage3D(i.TEXTURE_2D_ARRAY, ue, xe, Le[0].width, Le[0].height, Q.depth);
          for (let j = 0, Y = Le.length; j < Y; j++)
            if (se = Le[j], _.format !== 1023)
              if (le !== null)
                if (w) {
                  if (ie)
                    if (_.layerUpdates.size > 0) {
                      const pe = Vr(se.width, se.height, _.format, _.type);
                      for (const Pe of _.layerUpdates) {
                        const $e = se.data.subarray(
                          Pe * pe / se.data.BYTES_PER_ELEMENT,
                          (Pe + 1) * pe / se.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, j, 0, 0, Pe, se.width, se.height, 1, le, $e);
                      }
                      _.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, j, 0, 0, 0, se.width, se.height, Q.depth, le, se.data);
                } else
                  t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, j, xe, se.width, se.height, Q.depth, 0, se.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              w ? ie && t.texSubImage3D(i.TEXTURE_2D_ARRAY, j, 0, 0, 0, se.width, se.height, Q.depth, le, Ae, se.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, j, xe, se.width, se.height, Q.depth, 0, le, Ae, se.data);
        } else {
          w && ee && t.texStorage2D(i.TEXTURE_2D, ue, xe, Le[0].width, Le[0].height);
          for (let j = 0, Y = Le.length; j < Y; j++)
            se = Le[j], _.format !== 1023 ? le !== null ? w ? ie && t.compressedTexSubImage2D(i.TEXTURE_2D, j, 0, 0, se.width, se.height, le, se.data) : t.compressedTexImage2D(i.TEXTURE_2D, j, xe, se.width, se.height, 0, se.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : w ? ie && t.texSubImage2D(i.TEXTURE_2D, j, 0, 0, se.width, se.height, le, Ae, se.data) : t.texImage2D(i.TEXTURE_2D, j, xe, se.width, se.height, 0, le, Ae, se.data);
        }
      else if (_.isDataArrayTexture)
        if (w) {
          if (ee && t.texStorage3D(i.TEXTURE_2D_ARRAY, ue, xe, Q.width, Q.height, Q.depth), ie)
            if (_.layerUpdates.size > 0) {
              const j = Vr(Q.width, Q.height, _.format, _.type);
              for (const Y of _.layerUpdates) {
                const pe = Q.data.subarray(
                  Y * j / Q.data.BYTES_PER_ELEMENT,
                  (Y + 1) * j / Q.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Y, Q.width, Q.height, 1, le, Ae, pe);
              }
              _.clearLayerUpdates();
            } else
              t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, le, Ae, Q.data);
        } else
          t.texImage3D(i.TEXTURE_2D_ARRAY, 0, xe, Q.width, Q.height, Q.depth, 0, le, Ae, Q.data);
      else if (_.isData3DTexture)
        w ? (ee && t.texStorage3D(i.TEXTURE_3D, ue, xe, Q.width, Q.height, Q.depth), ie && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, le, Ae, Q.data)) : t.texImage3D(i.TEXTURE_3D, 0, xe, Q.width, Q.height, Q.depth, 0, le, Ae, Q.data);
      else if (_.isFramebufferTexture) {
        if (ee)
          if (w)
            t.texStorage2D(i.TEXTURE_2D, ue, xe, Q.width, Q.height);
          else {
            let j = Q.width, Y = Q.height;
            for (let pe = 0; pe < ue; pe++)
              t.texImage2D(i.TEXTURE_2D, pe, xe, j, Y, 0, le, Ae, null), j >>= 1, Y >>= 1;
          }
      } else if (Le.length > 0) {
        if (w && ee) {
          const j = at(Le[0]);
          t.texStorage2D(i.TEXTURE_2D, ue, xe, j.width, j.height);
        }
        for (let j = 0, Y = Le.length; j < Y; j++)
          se = Le[j], w ? ie && t.texSubImage2D(i.TEXTURE_2D, j, 0, 0, le, Ae, se) : t.texImage2D(i.TEXTURE_2D, j, xe, le, Ae, se);
        _.generateMipmaps = !1;
      } else if (w) {
        if (ee) {
          const j = at(Q);
          t.texStorage2D(i.TEXTURE_2D, ue, xe, j.width, j.height);
        }
        ie && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, le, Ae, Q);
      } else
        t.texImage2D(i.TEXTURE_2D, 0, xe, le, Ae, Q);
      m(_) && d(k), Se.__version = V.version, _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function $(T, _, I) {
    if (_.image.length !== 6) return;
    const k = Ze(T, _), Z = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + I);
    const V = n.get(Z);
    if (Z.version !== V.__version || k === !0) {
      t.activeTexture(i.TEXTURE0 + I);
      const Se = Ve.getPrimaries(Ve.workingColorSpace), ne = _.colorSpace === "" ? null : Ve.getPrimaries(_.colorSpace), ge = _.colorSpace === "" || Se === ne ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ge);
      const ve = _.isCompressedTexture || _.image[0].isCompressedTexture, Q = _.image[0] && _.image[0].isDataTexture, le = [];
      for (let Y = 0; Y < 6; Y++)
        !ve && !Q ? le[Y] = S(_.image[Y], !0, r.maxCubemapSize) : le[Y] = Q ? _.image[Y].image : _.image[Y], le[Y] = dt(_, le[Y]);
      const Ae = le[0], xe = a.convert(_.format, _.colorSpace), se = a.convert(_.type), Le = y(_.internalFormat, xe, se, _.colorSpace), w = _.isVideoTexture !== !0, ee = V.__version === void 0 || k === !0, ie = Z.dataReady;
      let ue = C(_, Ae);
      Ne(i.TEXTURE_CUBE_MAP, _);
      let j;
      if (ve) {
        w && ee && t.texStorage2D(i.TEXTURE_CUBE_MAP, ue, Le, Ae.width, Ae.height);
        for (let Y = 0; Y < 6; Y++) {
          j = le[Y].mipmaps;
          for (let pe = 0; pe < j.length; pe++) {
            const Pe = j[pe];
            _.format !== 1023 ? xe !== null ? w ? ie && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe, 0, 0, Pe.width, Pe.height, xe, Pe.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe, Le, Pe.width, Pe.height, 0, Pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : w ? ie && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe, 0, 0, Pe.width, Pe.height, xe, se, Pe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe, Le, Pe.width, Pe.height, 0, xe, se, Pe.data);
          }
        }
      } else {
        if (j = _.mipmaps, w && ee) {
          j.length > 0 && ue++;
          const Y = at(le[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ue, Le, Y.width, Y.height);
        }
        for (let Y = 0; Y < 6; Y++)
          if (Q) {
            w ? ie && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, le[Y].width, le[Y].height, xe, se, le[Y].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Le, le[Y].width, le[Y].height, 0, xe, se, le[Y].data);
            for (let pe = 0; pe < j.length; pe++) {
              const $e = j[pe].image[Y].image;
              w ? ie && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe + 1, 0, 0, $e.width, $e.height, xe, se, $e.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe + 1, Le, $e.width, $e.height, 0, xe, se, $e.data);
            }
          } else {
            w ? ie && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, xe, se, le[Y]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Le, xe, se, le[Y]);
            for (let pe = 0; pe < j.length; pe++) {
              const Pe = j[pe];
              w ? ie && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe + 1, 0, 0, xe, se, Pe.image[Y]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Y, pe + 1, Le, xe, se, Pe.image[Y]);
            }
          }
      }
      m(_) && d(i.TEXTURE_CUBE_MAP), V.__version = Z.version, _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function he(T, _, I, k, Z, V) {
    const Se = a.convert(I.format, I.colorSpace), ne = a.convert(I.type), ge = y(I.internalFormat, Se, ne, I.colorSpace), ve = n.get(_), Q = n.get(I);
    if (Q.__renderTarget = _, !ve.__hasExternalTextures) {
      const le = Math.max(1, _.width >> V), Ae = Math.max(1, _.height >> V);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? t.texImage3D(Z, V, ge, le, Ae, _.depth, 0, Se, ne, null) : t.texImage2D(Z, V, ge, le, Ae, 0, Se, ne, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, T), _e(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, k, Z, Q.__webglTexture, 0, et(_)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, k, Z, Q.__webglTexture, V), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ce(T, _, I) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, T), _.depthBuffer) {
      const k = _.depthTexture, Z = k && k.isDepthTexture ? k.type : null, V = E(_.stencilBuffer, Z), Se = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ne = et(_);
      _e(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ne, V, _.width, _.height) : I ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ne, V, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, V, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, Se, i.RENDERBUFFER, T);
    } else {
      const k = _.textures;
      for (let Z = 0; Z < k.length; Z++) {
        const V = k[Z], Se = a.convert(V.format, V.colorSpace), ne = a.convert(V.type), ge = y(V.internalFormat, Se, ne, V.colorSpace), ve = et(_);
        I && _e(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ve, ge, _.width, _.height) : _e(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ve, ge, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, ge, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Me(T, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, T), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const k = n.get(_.depthTexture);
    k.__renderTarget = _, (!k.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), K(_.depthTexture, 0);
    const Z = k.__webglTexture, V = et(_);
    if (_.depthTexture.format === 1026)
      _e(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Z, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Z, 0);
    else if (_.depthTexture.format === 1027)
      _e(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Z, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Z, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function ze(T) {
    const _ = n.get(T), I = T.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== T.depthTexture) {
      const k = T.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), k) {
        const Z = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, k.removeEventListener("dispose", Z);
        };
        k.addEventListener("dispose", Z), _.__depthDisposeCallback = Z;
      }
      _.__boundDepthTexture = k;
    }
    if (T.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (I) throw new Error("target.depthTexture not supported in Cube render targets");
      const k = T.texture.mipmaps;
      k && k.length > 0 ? Me(_.__webglFramebuffer[0], T) : Me(_.__webglFramebuffer, T);
    } else if (I) {
      _.__webglDepthbuffer = [];
      for (let k = 0; k < 6; k++)
        if (t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[k]), _.__webglDepthbuffer[k] === void 0)
          _.__webglDepthbuffer[k] = i.createRenderbuffer(), Ce(_.__webglDepthbuffer[k], T, !1);
        else {
          const Z = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, V = _.__webglDepthbuffer[k];
          i.bindRenderbuffer(i.RENDERBUFFER, V), i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, V);
        }
    } else {
      const k = T.texture.mipmaps;
      if (k && k.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0)
        _.__webglDepthbuffer = i.createRenderbuffer(), Ce(_.__webglDepthbuffer, T, !1);
      else {
        const Z = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, V = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, V), i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, V);
      }
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function ht(T, _, I) {
    const k = n.get(T);
    _ !== void 0 && he(k.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), I !== void 0 && ze(T);
  }
  function b(T) {
    const _ = T.texture, I = n.get(T), k = n.get(_);
    T.addEventListener("dispose", D);
    const Z = T.textures, V = T.isWebGLCubeRenderTarget === !0, Se = Z.length > 1;
    if (Se || (k.__webglTexture === void 0 && (k.__webglTexture = i.createTexture()), k.__version = _.version, s.memory.textures++), V) {
      I.__webglFramebuffer = [];
      for (let ne = 0; ne < 6; ne++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          I.__webglFramebuffer[ne] = [];
          for (let ge = 0; ge < _.mipmaps.length; ge++)
            I.__webglFramebuffer[ne][ge] = i.createFramebuffer();
        } else
          I.__webglFramebuffer[ne] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        I.__webglFramebuffer = [];
        for (let ne = 0; ne < _.mipmaps.length; ne++)
          I.__webglFramebuffer[ne] = i.createFramebuffer();
      } else
        I.__webglFramebuffer = i.createFramebuffer();
      if (Se)
        for (let ne = 0, ge = Z.length; ne < ge; ne++) {
          const ve = n.get(Z[ne]);
          ve.__webglTexture === void 0 && (ve.__webglTexture = i.createTexture(), s.memory.textures++);
        }
      if (T.samples > 0 && _e(T) === !1) {
        I.__webglMultisampledFramebuffer = i.createFramebuffer(), I.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, I.__webglMultisampledFramebuffer);
        for (let ne = 0; ne < Z.length; ne++) {
          const ge = Z[ne];
          I.__webglColorRenderbuffer[ne] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, I.__webglColorRenderbuffer[ne]);
          const ve = a.convert(ge.format, ge.colorSpace), Q = a.convert(ge.type), le = y(ge.internalFormat, ve, Q, ge.colorSpace, T.isXRRenderTarget === !0), Ae = et(T);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ae, le, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ne, i.RENDERBUFFER, I.__webglColorRenderbuffer[ne]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (I.__webglDepthRenderbuffer = i.createRenderbuffer(), Ce(I.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (V) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, k.__webglTexture), Ne(i.TEXTURE_CUBE_MAP, _);
      for (let ne = 0; ne < 6; ne++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let ge = 0; ge < _.mipmaps.length; ge++)
            he(I.__webglFramebuffer[ne][ge], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, ge);
        else
          he(I.__webglFramebuffer[ne], T, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ne, 0);
      m(_) && d(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Se) {
      for (let ne = 0, ge = Z.length; ne < ge; ne++) {
        const ve = Z[ne], Q = n.get(ve);
        let le = i.TEXTURE_2D;
        (T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (le = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(le, Q.__webglTexture), Ne(le, ve), he(I.__webglFramebuffer, T, ve, i.COLOR_ATTACHMENT0 + ne, le, 0), m(ve) && d(le);
      }
      t.unbindTexture();
    } else {
      let ne = i.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ne = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ne, k.__webglTexture), Ne(ne, _), _.mipmaps && _.mipmaps.length > 0)
        for (let ge = 0; ge < _.mipmaps.length; ge++)
          he(I.__webglFramebuffer[ge], T, _, i.COLOR_ATTACHMENT0, ne, ge);
      else
        he(I.__webglFramebuffer, T, _, i.COLOR_ATTACHMENT0, ne, 0);
      m(_) && d(ne), t.unbindTexture();
    }
    T.depthBuffer && ze(T);
  }
  function Qe(T) {
    const _ = T.textures;
    for (let I = 0, k = _.length; I < k; I++) {
      const Z = _[I];
      if (m(Z)) {
        const V = A(T), Se = n.get(Z).__webglTexture;
        t.bindTexture(V, Se), d(V), t.unbindTexture();
      }
    }
  }
  const De = [], Re = [];
  function me(T) {
    if (T.samples > 0) {
      if (_e(T) === !1) {
        const _ = T.textures, I = T.width, k = T.height;
        let Z = i.COLOR_BUFFER_BIT;
        const V = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Se = n.get(T), ne = _.length > 1;
        if (ne)
          for (let ve = 0; ve < _.length; ve++)
            t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ve, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ve, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, Se.__webglMultisampledFramebuffer);
        const ge = T.texture.mipmaps;
        ge && ge.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Se.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Se.__webglFramebuffer);
        for (let ve = 0; ve < _.length; ve++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), ne) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Se.__webglColorRenderbuffer[ve]);
            const Q = n.get(_[ve]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Q, 0);
          }
          i.blitFramebuffer(0, 0, I, k, 0, 0, I, k, Z, i.NEAREST), c === !0 && (De.length = 0, Re.length = 0, De.push(i.COLOR_ATTACHMENT0 + ve), T.depthBuffer && T.resolveDepthBuffer === !1 && (De.push(V), Re.push(V), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Re)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, De));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ne)
          for (let ve = 0; ve < _.length; ve++) {
            t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ve, i.RENDERBUFFER, Se.__webglColorRenderbuffer[ve]);
            const Q = n.get(_[ve]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ve, i.TEXTURE_2D, Q, 0);
          }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Se.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && c) {
        const _ = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function et(T) {
    return Math.min(r.maxSamples, T.samples);
  }
  function _e(T) {
    const _ = n.get(T);
    return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function Ie(T) {
    const _ = s.render.frame;
    u.get(T) !== _ && (u.set(T, _), T.update());
  }
  function dt(T, _) {
    const I = T.colorSpace, k = T.format, Z = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || I !== In && I !== "" && (Ve.getTransfer(I) === Xe ? (k !== 1023 || Z !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", I)), _;
  }
  function at(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (l.width = T.naturalWidth || T.width, l.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (l.width = T.displayWidth, l.height = T.displayHeight) : (l.width = T.width, l.height = T.height), l;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = z, this.setTexture2D = K, this.setTexture2DArray = W, this.setTexture3D = te, this.setTextureCube = G, this.rebindTextures = ht, this.setupRenderTarget = b, this.updateRenderTargetMipmap = Qe, this.updateMultisampleRenderTarget = me, this.setupDepthRenderbuffer = ze, this.setupFrameBufferTexture = he, this.useMultisampledRTT = _e;
}
function nu(i, e) {
  function t(n, r = "") {
    let a;
    const s = Ve.getTransfer(r);
    if (n === 1009) return i.UNSIGNED_BYTE;
    if (n === 1017) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 35899) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === 1010) return i.BYTE;
    if (n === 1011) return i.SHORT;
    if (n === 1012) return i.UNSIGNED_SHORT;
    if (n === 1013) return i.INT;
    if (n === 1014) return i.UNSIGNED_INT;
    if (n === 1015) return i.FLOAT;
    if (n === 1016) return i.HALF_FLOAT;
    if (n === 1021) return i.ALPHA;
    if (n === 1022) return i.RGB;
    if (n === 1023) return i.RGBA;
    if (n === 1026) return i.DEPTH_COMPONENT;
    if (n === 1027) return i.DEPTH_STENCIL;
    if (n === 1028) return i.RED;
    if (n === 1029) return i.RED_INTEGER;
    if (n === 1030) return i.RG;
    if (n === 1031) return i.RG_INTEGER;
    if (n === 1033) return i.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (s === Xe)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (n === 33776) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (n === 33776) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (n === 35840) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === 36196 || n === 37492 || n === 37496)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (n === 36196 || n === 37492) return s === Xe ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (n === 37496) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (n === 37808) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821) return s === Xe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (n === 36492) return s === Xe ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (n === 36283) return a.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === 1020 ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const iu = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, ru = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class au {
  /**
   * Constructs a new depth sensing module.
   */
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  /**
   * Inits the depth sensing module
   *
   * @param {XRWebGLDepthInformation} depthData - The XR depth data.
   * @param {XRRenderState} renderState - The XR render state.
   */
  init(e, t) {
    if (this.texture === null) {
      const n = new Ra(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  /**
   * Returns a plane mesh that visualizes the depth texture.
   *
   * @param {ArrayCamera} cameraXR - The XR camera.
   * @return {?Mesh} The plane mesh.
   */
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Qt({
        vertexShader: iu,
        fragmentShader: ru,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Pt(new Ai(20, 20), n);
    }
    return this.mesh;
  }
  /**
   * Resets the module
   */
  reset() {
    this.texture = null, this.mesh = null;
  }
  /**
   * Returns a texture representing the depth of the user's environment.
   *
   * @return {?ExternalTexture} The depth texture.
   */
  getDepthTexture() {
    return this.texture;
  }
}
class su extends Nn {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGL2RenderingContext} gl - The rendering context.
   */
  constructor(e, t) {
    super();
    const n = this;
    let r = null, a = 1, s = null, o = "local-floor", c = 1, l = null, u = null, h = null, f = null, p = null, v = null;
    const S = typeof XRWebGLBinding < "u", m = new au(), d = {}, A = t.getContextAttributes();
    let y = null, E = null;
    const C = [], R = [], D = new Ye();
    let N = null;
    const M = new Mt();
    M.viewport = new st();
    const x = new Mt();
    x.viewport = new st();
    const P = [M, x], z = new As();
    let H = null, X = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(q) {
      let $ = C[q];
      return $ === void 0 && ($ = new ji(), C[q] = $), $.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let $ = C[q];
      return $ === void 0 && ($ = new ji(), C[q] = $), $.getGripSpace();
    }, this.getHand = function(q) {
      let $ = C[q];
      return $ === void 0 && ($ = new ji(), C[q] = $), $.getHandSpace();
    };
    function K(q) {
      const $ = R.indexOf(q.inputSource);
      if ($ === -1)
        return;
      const he = C[$];
      he !== void 0 && (he.update(q.inputSource, q.frame, l || s), he.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function W() {
      r.removeEventListener("select", K), r.removeEventListener("selectstart", K), r.removeEventListener("selectend", K), r.removeEventListener("squeeze", K), r.removeEventListener("squeezestart", K), r.removeEventListener("squeezeend", K), r.removeEventListener("end", W), r.removeEventListener("inputsourceschange", te);
      for (let q = 0; q < C.length; q++) {
        const $ = R[q];
        $ !== null && (R[q] = null, C[q].disconnect($));
      }
      H = null, X = null, m.reset();
      for (const q in d)
        delete d[q];
      e.setRenderTarget(y), p = null, f = null, h = null, r = null, E = null, He.stop(), n.isPresenting = !1, e.setPixelRatio(N), e.setSize(D.width, D.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(q) {
      a = q, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(q) {
      o = q, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || s;
    }, this.setReferenceSpace = function(q) {
      l = q;
    }, this.getBaseLayer = function() {
      return f !== null ? f : p;
    }, this.getBinding = function() {
      return h === null && S && (h = new XRWebGLBinding(r, t)), h;
    }, this.getFrame = function() {
      return v;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(q) {
      if (r = q, r !== null) {
        if (y = e.getRenderTarget(), r.addEventListener("select", K), r.addEventListener("selectstart", K), r.addEventListener("selectend", K), r.addEventListener("squeeze", K), r.addEventListener("squeezestart", K), r.addEventListener("squeezeend", K), r.addEventListener("end", W), r.addEventListener("inputsourceschange", te), A.xrCompatible !== !0 && await t.makeXRCompatible(), N = e.getPixelRatio(), e.getSize(D), S && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let he = null, Ce = null, Me = null;
          A.depth && (Me = A.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, he = A.stencil ? 1027 : 1026, Ce = A.stencil ? 1020 : 1014);
          const ze = {
            colorFormat: t.RGBA8,
            depthFormat: Me,
            scaleFactor: a
          };
          h = this.getBinding(), f = h.createProjectionLayer(ze), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), E = new _n(
            f.textureWidth,
            f.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new Aa(f.textureWidth, f.textureHeight, Ce, void 0, void 0, void 0, void 0, void 0, void 0, he),
              stencilBuffer: A.stencil,
              colorSpace: e.outputColorSpace,
              samples: A.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1,
              resolveStencilBuffer: f.ignoreDepthValues === !1
            }
          );
        } else {
          const he = {
            antialias: A.antialias,
            alpha: !0,
            depth: A.depth,
            stencil: A.stencil,
            framebufferScaleFactor: a
          };
          p = new XRWebGLLayer(r, t, he), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), E = new _n(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: A.stencil,
              resolveDepthBuffer: p.ignoreDepthValues === !1,
              resolveStencilBuffer: p.ignoreDepthValues === !1
            }
          );
        }
        E.isXRRenderTarget = !0, this.setFoveation(c), l = null, s = await r.requestReferenceSpace(o), He.setContext(r), He.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return m.getDepthTexture();
    };
    function te(q) {
      for (let $ = 0; $ < q.removed.length; $++) {
        const he = q.removed[$], Ce = R.indexOf(he);
        Ce >= 0 && (R[Ce] = null, C[Ce].disconnect(he));
      }
      for (let $ = 0; $ < q.added.length; $++) {
        const he = q.added[$];
        let Ce = R.indexOf(he);
        if (Ce === -1) {
          for (let ze = 0; ze < C.length; ze++)
            if (ze >= R.length) {
              R.push(he), Ce = ze;
              break;
            } else if (R[ze] === null) {
              R[ze] = he, Ce = ze;
              break;
            }
          if (Ce === -1) break;
        }
        const Me = C[Ce];
        Me && Me.connect(he);
      }
    }
    const G = new F(), ae = new F();
    function ce(q, $, he) {
      G.setFromMatrixPosition($.matrixWorld), ae.setFromMatrixPosition(he.matrixWorld);
      const Ce = G.distanceTo(ae), Me = $.projectionMatrix.elements, ze = he.projectionMatrix.elements, ht = Me[14] / (Me[10] - 1), b = Me[14] / (Me[10] + 1), Qe = (Me[9] + 1) / Me[5], De = (Me[9] - 1) / Me[5], Re = (Me[8] - 1) / Me[0], me = (ze[8] + 1) / ze[0], et = ht * Re, _e = ht * me, Ie = Ce / (-Re + me), dt = Ie * -Re;
      if ($.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(dt), q.translateZ(Ie), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert(), Me[10] === -1)
        q.projectionMatrix.copy($.projectionMatrix), q.projectionMatrixInverse.copy($.projectionMatrixInverse);
      else {
        const at = ht + Ie, T = b + Ie, _ = et - dt, I = _e + (Ce - dt), k = Qe * b / T * at, Z = De * b / T * at;
        q.projectionMatrix.makePerspective(_, I, k, Z, at, T), q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function Ee(q, $) {
      $ === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices($.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (r === null) return;
      let $ = q.near, he = q.far;
      m.texture !== null && (m.depthNear > 0 && ($ = m.depthNear), m.depthFar > 0 && (he = m.depthFar)), z.near = x.near = M.near = $, z.far = x.far = M.far = he, (H !== z.near || X !== z.far) && (r.updateRenderState({
        depthNear: z.near,
        depthFar: z.far
      }), H = z.near, X = z.far), z.layers.mask = q.layers.mask | 6, M.layers.mask = z.layers.mask & 3, x.layers.mask = z.layers.mask & 5;
      const Ce = q.parent, Me = z.cameras;
      Ee(z, Ce);
      for (let ze = 0; ze < Me.length; ze++)
        Ee(Me[ze], Ce);
      Me.length === 2 ? ce(z, M, x) : z.projectionMatrix.copy(M.projectionMatrix), Ne(q, z, Ce);
    };
    function Ne(q, $, he) {
      he === null ? q.matrix.copy($.matrixWorld) : (q.matrix.copy(he.matrixWorld), q.matrix.invert(), q.matrix.multiply($.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(!0), q.projectionMatrix.copy($.projectionMatrix), q.projectionMatrixInverse.copy($.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = or * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
    }
    this.getCamera = function() {
      return z;
    }, this.getFoveation = function() {
      if (!(f === null && p === null))
        return c;
    }, this.setFoveation = function(q) {
      c = q, f !== null && (f.fixedFoveation = q), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = q);
    }, this.hasDepthSensing = function() {
      return m.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return m.getMesh(z);
    }, this.getCameraTexture = function(q) {
      return d[q];
    };
    let Ze = null;
    function Je(q, $) {
      if (u = $.getViewerPose(l || s), v = $, u !== null) {
        const he = u.views;
        p !== null && (e.setRenderTargetFramebuffer(E, p.framebuffer), e.setRenderTarget(E));
        let Ce = !1;
        he.length !== z.cameras.length && (z.cameras.length = 0, Ce = !0);
        for (let b = 0; b < he.length; b++) {
          const Qe = he[b];
          let De = null;
          if (p !== null)
            De = p.getViewport(Qe);
          else {
            const me = h.getViewSubImage(f, Qe);
            De = me.viewport, b === 0 && (e.setRenderTargetTextures(
              E,
              me.colorTexture,
              me.depthStencilTexture
            ), e.setRenderTarget(E));
          }
          let Re = P[b];
          Re === void 0 && (Re = new Mt(), Re.layers.enable(b), Re.viewport = new st(), P[b] = Re), Re.matrix.fromArray(Qe.transform.matrix), Re.matrix.decompose(Re.position, Re.quaternion, Re.scale), Re.projectionMatrix.fromArray(Qe.projectionMatrix), Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(), Re.viewport.set(De.x, De.y, De.width, De.height), b === 0 && (z.matrix.copy(Re.matrix), z.matrix.decompose(z.position, z.quaternion, z.scale)), Ce === !0 && z.cameras.push(Re);
        }
        const Me = r.enabledFeatures;
        if (Me && Me.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && S) {
          h = n.getBinding();
          const b = h.getDepthInformation(he[0]);
          b && b.isValid && b.texture && m.init(b, r.renderState);
        }
        if (Me && Me.includes("camera-access") && S) {
          e.state.unbindTexture(), h = n.getBinding();
          for (let b = 0; b < he.length; b++) {
            const Qe = he[b].camera;
            if (Qe) {
              let De = d[Qe];
              De || (De = new Ra(), d[Qe] = De);
              const Re = h.getCameraImage(Qe);
              De.sourceTexture = Re;
            }
          }
        }
      }
      for (let he = 0; he < C.length; he++) {
        const Ce = R[he], Me = C[he];
        Ce !== null && Me !== void 0 && Me.update(Ce, $, l || s);
      }
      Ze && Ze(q, $), $.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: $ }), v = null;
    }
    const He = new wa();
    He.setAnimationLoop(Je), this.setAnimationLoop = function(q) {
      Ze = q;
    }, this.dispose = function() {
    };
  }
}
const un = /* @__PURE__ */ new zt(), ou = /* @__PURE__ */ new rt();
function lu(i, e) {
  function t(m, d) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), d.value.copy(m.matrix);
  }
  function n(m, d) {
    d.color.getRGB(m.fogColor.value, Ea(i)), d.isFog ? (m.fogNear.value = d.near, m.fogFar.value = d.far) : d.isFogExp2 && (m.fogDensity.value = d.density);
  }
  function r(m, d, A, y, E) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial ? a(m, d) : d.isMeshToonMaterial ? (a(m, d), h(m, d)) : d.isMeshPhongMaterial ? (a(m, d), u(m, d)) : d.isMeshStandardMaterial ? (a(m, d), f(m, d), d.isMeshPhysicalMaterial && p(m, d, E)) : d.isMeshMatcapMaterial ? (a(m, d), v(m, d)) : d.isMeshDepthMaterial ? a(m, d) : d.isMeshDistanceMaterial ? (a(m, d), S(m, d)) : d.isMeshNormalMaterial ? a(m, d) : d.isLineBasicMaterial ? (s(m, d), d.isLineDashedMaterial && o(m, d)) : d.isPointsMaterial ? c(m, d, A, y) : d.isSpriteMaterial ? l(m, d) : d.isShadowMaterial ? (m.color.value.copy(d.color), m.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function a(m, d) {
    m.opacity.value = d.opacity, d.color && m.diffuse.value.copy(d.color), d.emissive && m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (m.map.value = d.map, t(d.map, m.mapTransform)), d.alphaMap && (m.alphaMap.value = d.alphaMap, t(d.alphaMap, m.alphaMapTransform)), d.bumpMap && (m.bumpMap.value = d.bumpMap, t(d.bumpMap, m.bumpMapTransform), m.bumpScale.value = d.bumpScale, d.side === 1 && (m.bumpScale.value *= -1)), d.normalMap && (m.normalMap.value = d.normalMap, t(d.normalMap, m.normalMapTransform), m.normalScale.value.copy(d.normalScale), d.side === 1 && m.normalScale.value.negate()), d.displacementMap && (m.displacementMap.value = d.displacementMap, t(d.displacementMap, m.displacementMapTransform), m.displacementScale.value = d.displacementScale, m.displacementBias.value = d.displacementBias), d.emissiveMap && (m.emissiveMap.value = d.emissiveMap, t(d.emissiveMap, m.emissiveMapTransform)), d.specularMap && (m.specularMap.value = d.specularMap, t(d.specularMap, m.specularMapTransform)), d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
    const A = e.get(d), y = A.envMap, E = A.envMapRotation;
    y && (m.envMap.value = y, un.copy(E), un.x *= -1, un.y *= -1, un.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === !1 && (un.y *= -1, un.z *= -1), m.envMapRotation.value.setFromMatrix4(ou.makeRotationFromEuler(un)), m.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = d.reflectivity, m.ior.value = d.ior, m.refractionRatio.value = d.refractionRatio), d.lightMap && (m.lightMap.value = d.lightMap, m.lightMapIntensity.value = d.lightMapIntensity, t(d.lightMap, m.lightMapTransform)), d.aoMap && (m.aoMap.value = d.aoMap, m.aoMapIntensity.value = d.aoMapIntensity, t(d.aoMap, m.aoMapTransform));
  }
  function s(m, d) {
    m.diffuse.value.copy(d.color), m.opacity.value = d.opacity, d.map && (m.map.value = d.map, t(d.map, m.mapTransform));
  }
  function o(m, d) {
    m.dashSize.value = d.dashSize, m.totalSize.value = d.dashSize + d.gapSize, m.scale.value = d.scale;
  }
  function c(m, d, A, y) {
    m.diffuse.value.copy(d.color), m.opacity.value = d.opacity, m.size.value = d.size * A, m.scale.value = y * 0.5, d.map && (m.map.value = d.map, t(d.map, m.uvTransform)), d.alphaMap && (m.alphaMap.value = d.alphaMap, t(d.alphaMap, m.alphaMapTransform)), d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
  }
  function l(m, d) {
    m.diffuse.value.copy(d.color), m.opacity.value = d.opacity, m.rotation.value = d.rotation, d.map && (m.map.value = d.map, t(d.map, m.mapTransform)), d.alphaMap && (m.alphaMap.value = d.alphaMap, t(d.alphaMap, m.alphaMapTransform)), d.alphaTest > 0 && (m.alphaTest.value = d.alphaTest);
  }
  function u(m, d) {
    m.specular.value.copy(d.specular), m.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function h(m, d) {
    d.gradientMap && (m.gradientMap.value = d.gradientMap);
  }
  function f(m, d) {
    m.metalness.value = d.metalness, d.metalnessMap && (m.metalnessMap.value = d.metalnessMap, t(d.metalnessMap, m.metalnessMapTransform)), m.roughness.value = d.roughness, d.roughnessMap && (m.roughnessMap.value = d.roughnessMap, t(d.roughnessMap, m.roughnessMapTransform)), d.envMap && (m.envMapIntensity.value = d.envMapIntensity);
  }
  function p(m, d, A) {
    m.ior.value = d.ior, d.sheen > 0 && (m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), m.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (m.sheenColorMap.value = d.sheenColorMap, t(d.sheenColorMap, m.sheenColorMapTransform)), d.sheenRoughnessMap && (m.sheenRoughnessMap.value = d.sheenRoughnessMap, t(d.sheenRoughnessMap, m.sheenRoughnessMapTransform))), d.clearcoat > 0 && (m.clearcoat.value = d.clearcoat, m.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (m.clearcoatMap.value = d.clearcoatMap, t(d.clearcoatMap, m.clearcoatMapTransform)), d.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, t(d.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (m.clearcoatNormalMap.value = d.clearcoatNormalMap, t(d.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === 1 && m.clearcoatNormalScale.value.negate())), d.dispersion > 0 && (m.dispersion.value = d.dispersion), d.iridescence > 0 && (m.iridescence.value = d.iridescence, m.iridescenceIOR.value = d.iridescenceIOR, m.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (m.iridescenceMap.value = d.iridescenceMap, t(d.iridescenceMap, m.iridescenceMapTransform)), d.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = d.iridescenceThicknessMap, t(d.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), d.transmission > 0 && (m.transmission.value = d.transmission, m.transmissionSamplerMap.value = A.texture, m.transmissionSamplerSize.value.set(A.width, A.height), d.transmissionMap && (m.transmissionMap.value = d.transmissionMap, t(d.transmissionMap, m.transmissionMapTransform)), m.thickness.value = d.thickness, d.thicknessMap && (m.thicknessMap.value = d.thicknessMap, t(d.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = d.attenuationDistance, m.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (m.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (m.anisotropyMap.value = d.anisotropyMap, t(d.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = d.specularIntensity, m.specularColor.value.copy(d.specularColor), d.specularColorMap && (m.specularColorMap.value = d.specularColorMap, t(d.specularColorMap, m.specularColorMapTransform)), d.specularIntensityMap && (m.specularIntensityMap.value = d.specularIntensityMap, t(d.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function v(m, d) {
    d.matcap && (m.matcap.value = d.matcap);
  }
  function S(m, d) {
    const A = e.get(d).light;
    m.referencePosition.value.setFromMatrixPosition(A.matrixWorld), m.nearDistance.value = A.shadow.camera.near, m.farDistance.value = A.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function cu(i, e, t, n) {
  let r = {}, a = {}, s = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(A, y) {
    const E = y.program;
    n.uniformBlockBinding(A, E);
  }
  function l(A, y) {
    let E = r[A.id];
    E === void 0 && (v(A), E = u(A), r[A.id] = E, A.addEventListener("dispose", m));
    const C = y.program;
    n.updateUBOMapping(A, C);
    const R = e.render.frame;
    a[A.id] !== R && (f(A), a[A.id] = R);
  }
  function u(A) {
    const y = h();
    A.__bindingPointIndex = y;
    const E = i.createBuffer(), C = A.__size, R = A.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, E), i.bufferData(i.UNIFORM_BUFFER, C, R), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, y, E), E;
  }
  function h() {
    for (let A = 0; A < o; A++)
      if (s.indexOf(A) === -1)
        return s.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(A) {
    const y = r[A.id], E = A.uniforms, C = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, y);
    for (let R = 0, D = E.length; R < D; R++) {
      const N = Array.isArray(E[R]) ? E[R] : [E[R]];
      for (let M = 0, x = N.length; M < x; M++) {
        const P = N[M];
        if (p(P, R, M, C) === !0) {
          const z = P.__offset, H = Array.isArray(P.value) ? P.value : [P.value];
          let X = 0;
          for (let K = 0; K < H.length; K++) {
            const W = H[K], te = S(W);
            typeof W == "number" || typeof W == "boolean" ? (P.__data[0] = W, i.bufferSubData(i.UNIFORM_BUFFER, z + X, P.__data)) : W.isMatrix3 ? (P.__data[0] = W.elements[0], P.__data[1] = W.elements[1], P.__data[2] = W.elements[2], P.__data[3] = 0, P.__data[4] = W.elements[3], P.__data[5] = W.elements[4], P.__data[6] = W.elements[5], P.__data[7] = 0, P.__data[8] = W.elements[6], P.__data[9] = W.elements[7], P.__data[10] = W.elements[8], P.__data[11] = 0) : (W.toArray(P.__data, X), X += te.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, z, P.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(A, y, E, C) {
    const R = A.value, D = y + "_" + E;
    if (C[D] === void 0)
      return typeof R == "number" || typeof R == "boolean" ? C[D] = R : C[D] = R.clone(), !0;
    {
      const N = C[D];
      if (typeof R == "number" || typeof R == "boolean") {
        if (N !== R)
          return C[D] = R, !0;
      } else if (N.equals(R) === !1)
        return N.copy(R), !0;
    }
    return !1;
  }
  function v(A) {
    const y = A.uniforms;
    let E = 0;
    const C = 16;
    for (let D = 0, N = y.length; D < N; D++) {
      const M = Array.isArray(y[D]) ? y[D] : [y[D]];
      for (let x = 0, P = M.length; x < P; x++) {
        const z = M[x], H = Array.isArray(z.value) ? z.value : [z.value];
        for (let X = 0, K = H.length; X < K; X++) {
          const W = H[X], te = S(W), G = E % C, ae = G % te.boundary, ce = G + ae;
          E += ae, ce !== 0 && C - ce < te.storage && (E += C - ce), z.__data = new Float32Array(te.storage / Float32Array.BYTES_PER_ELEMENT), z.__offset = E, E += te.storage;
        }
      }
    }
    const R = E % C;
    return R > 0 && (E += C - R), A.__size = E, A.__cache = {}, this;
  }
  function S(A) {
    const y = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof A == "number" || typeof A == "boolean" ? (y.boundary = 4, y.storage = 4) : A.isVector2 ? (y.boundary = 8, y.storage = 8) : A.isVector3 || A.isColor ? (y.boundary = 16, y.storage = 12) : A.isVector4 ? (y.boundary = 16, y.storage = 16) : A.isMatrix3 ? (y.boundary = 48, y.storage = 48) : A.isMatrix4 ? (y.boundary = 64, y.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), y;
  }
  function m(A) {
    const y = A.target;
    y.removeEventListener("dispose", m);
    const E = s.indexOf(y.__bindingPointIndex);
    s.splice(E, 1), i.deleteBuffer(r[y.id]), delete r[y.id], delete a[y.id];
  }
  function d() {
    for (const A in r)
      i.deleteBuffer(r[A]);
    s = [], r = {}, a = {};
  }
  return {
    bind: c,
    update: l,
    dispose: d
  };
}
class du {
  /**
   * Constructs a new WebGL renderer.
   *
   * @param {WebGLRenderer~Options} [parameters] - The configuration parameter.
   */
  constructor(e = {}) {
    const {
      canvas: t = Va(),
      context: n = null,
      depth: r = !0,
      stencil: a = !1,
      alpha: s = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1,
      reversedDepthBuffer: f = !1
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else
      p = s;
    const v = new Uint32Array(4), S = new Int32Array(4);
    let m = null, d = null;
    const A = [], y = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled.
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const E = this;
    let C = !1;
    this._outputColorSpace = St;
    let R = 0, D = 0, N = null, M = -1, x = null;
    const P = new st(), z = new st();
    let H = null;
    const X = new qe(0);
    let K = 0, W = t.width, te = t.height, G = 1, ae = null, ce = null;
    const Ee = new st(0, 0, W, te), Ne = new st(0, 0, W, te);
    let Ze = !1;
    const Je = new ba();
    let He = !1, q = !1;
    const $ = new rt(), he = new F(), Ce = new st(), Me = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let ze = !1;
    function ht() {
      return N === null ? G : 1;
    }
    let b = n;
    function Qe(g, L) {
      return t.getContext(g, L);
    }
    try {
      const g = {
        alpha: !0,
        depth: r,
        stencil: a,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r180"), t.addEventListener("webglcontextlost", ie, !1), t.addEventListener("webglcontextrestored", ue, !1), t.addEventListener("webglcontextcreationerror", j, !1), b === null) {
        const L = "webgl2";
        if (b = Qe(L, g), b === null)
          throw Qe(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (g) {
      throw console.error("THREE.WebGLRenderer: " + g.message), g;
    }
    let De, Re, me, et, _e, Ie, dt, at, T, _, I, k, Z, V, Se, ne, ge, ve, Q, le, Ae, xe, se, Le;
    function w() {
      De = new Sc(b), De.init(), xe = new nu(b, De), Re = new fc(b, De, e, xe), me = new eu(b, De), Re.reversedDepthBuffer && f && me.buffers.depth.setReversed(!0), et = new Tc(b), _e = new Vd(), Ie = new tu(b, De, me, _e, Re, xe, et), dt = new mc(E), at = new xc(E), T = new ws(b), se = new uc(b, T), _ = new Mc(b, T, et, se), I = new bc(b, _, T, et), Q = new yc(b, Re, Ie), ne = new pc(_e), k = new Gd(E, dt, at, De, Re, se, ne), Z = new lu(E, _e), V = new kd(), Se = new Zd(De), ve = new dc(E, dt, at, me, I, p, c), ge = new Jd(E, I, Re), Le = new cu(b, et, Re, me), le = new hc(b, De, et), Ae = new Ec(b, De, et), et.programs = k.programs, E.capabilities = Re, E.extensions = De, E.properties = _e, E.renderLists = V, E.shadowMap = ge, E.state = me, E.info = et;
    }
    w();
    const ee = new su(E, b);
    this.xr = ee, this.getContext = function() {
      return b;
    }, this.getContextAttributes = function() {
      return b.getContextAttributes();
    }, this.forceContextLoss = function() {
      const g = De.get("WEBGL_lose_context");
      g && g.loseContext();
    }, this.forceContextRestore = function() {
      const g = De.get("WEBGL_lose_context");
      g && g.restoreContext();
    }, this.getPixelRatio = function() {
      return G;
    }, this.setPixelRatio = function(g) {
      g !== void 0 && (G = g, this.setSize(W, te, !1));
    }, this.getSize = function(g) {
      return g.set(W, te);
    }, this.setSize = function(g, L, O = !0) {
      if (ee.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      W = g, te = L, t.width = Math.floor(g * G), t.height = Math.floor(L * G), O === !0 && (t.style.width = g + "px", t.style.height = L + "px"), this.setViewport(0, 0, g, L);
    }, this.getDrawingBufferSize = function(g) {
      return g.set(W * G, te * G).floor();
    }, this.setDrawingBufferSize = function(g, L, O) {
      W = g, te = L, G = O, t.width = Math.floor(g * O), t.height = Math.floor(L * O), this.setViewport(0, 0, g, L);
    }, this.getCurrentViewport = function(g) {
      return g.copy(P);
    }, this.getViewport = function(g) {
      return g.copy(Ee);
    }, this.setViewport = function(g, L, O, B) {
      g.isVector4 ? Ee.set(g.x, g.y, g.z, g.w) : Ee.set(g, L, O, B), me.viewport(P.copy(Ee).multiplyScalar(G).round());
    }, this.getScissor = function(g) {
      return g.copy(Ne);
    }, this.setScissor = function(g, L, O, B) {
      g.isVector4 ? Ne.set(g.x, g.y, g.z, g.w) : Ne.set(g, L, O, B), me.scissor(z.copy(Ne).multiplyScalar(G).round());
    }, this.getScissorTest = function() {
      return Ze;
    }, this.setScissorTest = function(g) {
      me.setScissorTest(Ze = g);
    }, this.setOpaqueSort = function(g) {
      ae = g;
    }, this.setTransparentSort = function(g) {
      ce = g;
    }, this.getClearColor = function(g) {
      return g.copy(ve.getClearColor());
    }, this.setClearColor = function() {
      ve.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return ve.getClearAlpha();
    }, this.setClearAlpha = function() {
      ve.setClearAlpha(...arguments);
    }, this.clear = function(g = !0, L = !0, O = !0) {
      let B = 0;
      if (g) {
        let U = !1;
        if (N !== null) {
          const J = N.texture.format;
          U = J === 1033 || J === 1031 || J === 1029;
        }
        if (U) {
          const J = N.texture.type, oe = J === 1009 || J === 1014 || J === 1012 || J === 1020 || J === 1017 || J === 1018, fe = ve.getClearColor(), de = ve.getClearAlpha(), be = fe.r, we = fe.g, Te = fe.b;
          oe ? (v[0] = be, v[1] = we, v[2] = Te, v[3] = de, b.clearBufferuiv(b.COLOR, 0, v)) : (S[0] = be, S[1] = we, S[2] = Te, S[3] = de, b.clearBufferiv(b.COLOR, 0, S));
        } else
          B |= b.COLOR_BUFFER_BIT;
      }
      L && (B |= b.DEPTH_BUFFER_BIT), O && (B |= b.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), b.clear(B);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ie, !1), t.removeEventListener("webglcontextrestored", ue, !1), t.removeEventListener("webglcontextcreationerror", j, !1), ve.dispose(), V.dispose(), Se.dispose(), _e.dispose(), dt.dispose(), at.dispose(), I.dispose(), se.dispose(), Le.dispose(), k.dispose(), ee.dispose(), ee.removeEventListener("sessionstart", Ft), ee.removeEventListener("sessionend", mr), nn.stop();
    };
    function ie(g) {
      g.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), C = !0;
    }
    function ue() {
      console.log("THREE.WebGLRenderer: Context Restored."), C = !1;
      const g = et.autoReset, L = ge.enabled, O = ge.autoUpdate, B = ge.needsUpdate, U = ge.type;
      w(), et.autoReset = g, ge.enabled = L, ge.autoUpdate = O, ge.needsUpdate = B, ge.type = U;
    }
    function j(g) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", g.statusMessage);
    }
    function Y(g) {
      const L = g.target;
      L.removeEventListener("dispose", Y), pe(L);
    }
    function pe(g) {
      Pe(g), _e.remove(g);
    }
    function Pe(g) {
      const L = _e.get(g).programs;
      L !== void 0 && (L.forEach(function(O) {
        k.releaseProgram(O);
      }), g.isShaderMaterial && k.releaseShaderCache(g));
    }
    this.renderBufferDirect = function(g, L, O, B, U, J) {
      L === null && (L = Me);
      const oe = U.isMesh && U.matrixWorld.determinant() < 0, fe = Ua(g, L, O, B, U);
      me.setMaterial(B, oe);
      let de = O.index, be = 1;
      if (B.wireframe === !0) {
        if (de = _.getWireframeAttribute(O), de === void 0) return;
        be = 2;
      }
      const we = O.drawRange, Te = O.attributes.position;
      let Oe = we.start * be, We = (we.start + we.count) * be;
      J !== null && (Oe = Math.max(Oe, J.start * be), We = Math.min(We, (J.start + J.count) * be)), de !== null ? (Oe = Math.max(Oe, 0), We = Math.min(We, de.count)) : Te != null && (Oe = Math.max(Oe, 0), We = Math.min(We, Te.count));
      const it = We - Oe;
      if (it < 0 || it === 1 / 0) return;
      se.setup(U, B, fe, O, de);
      let je, Ke = le;
      if (de !== null && (je = T.get(de), Ke = Ae, Ke.setIndex(je)), U.isMesh)
        B.wireframe === !0 ? (me.setLineWidth(B.wireframeLinewidth * ht()), Ke.setMode(b.LINES)) : Ke.setMode(b.TRIANGLES);
      else if (U.isLine) {
        let ye = B.linewidth;
        ye === void 0 && (ye = 1), me.setLineWidth(ye * ht()), U.isLineSegments ? Ke.setMode(b.LINES) : U.isLineLoop ? Ke.setMode(b.LINE_LOOP) : Ke.setMode(b.LINE_STRIP);
      } else U.isPoints ? Ke.setMode(b.POINTS) : U.isSprite && Ke.setMode(b.TRIANGLES);
      if (U.isBatchedMesh)
        if (U._multiDrawInstances !== null)
          Yn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Ke.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
        else if (De.get("WEBGL_multi_draw"))
          Ke.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
        else {
          const ye = U._multiDrawStarts, tt = U._multiDrawCounts, Ge = U._multiDrawCount, Et = de ? T.get(de).bytesPerElement : 1, gn = _e.get(B).currentProgram.getUniforms();
          for (let Tt = 0; Tt < Ge; Tt++)
            gn.setValue(b, "_gl_DrawID", Tt), Ke.render(ye[Tt] / Et, tt[Tt]);
        }
      else if (U.isInstancedMesh)
        Ke.renderInstances(Oe, it, U.count);
      else if (O.isInstancedBufferGeometry) {
        const ye = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, tt = Math.min(O.instanceCount, ye);
        Ke.renderInstances(Oe, it, tt);
      } else
        Ke.render(Oe, it);
    };
    function $e(g, L, O) {
      g.transparent === !0 && g.side === 2 && g.forceSinglePass === !1 ? (g.side = 1, g.needsUpdate = !0, Jn(g, L, O), g.side = 0, g.needsUpdate = !0, Jn(g, L, O), g.side = 2) : Jn(g, L, O);
    }
    this.compile = function(g, L, O = null) {
      O === null && (O = g), d = Se.get(O), d.init(L), y.push(d), O.traverseVisible(function(U) {
        U.isLight && U.layers.test(L.layers) && (d.pushLight(U), U.castShadow && d.pushShadow(U));
      }), g !== O && g.traverseVisible(function(U) {
        U.isLight && U.layers.test(L.layers) && (d.pushLight(U), U.castShadow && d.pushShadow(U));
      }), d.setupLights();
      const B = /* @__PURE__ */ new Set();
      return g.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite))
          return;
        const J = U.material;
        if (J)
          if (Array.isArray(J))
            for (let oe = 0; oe < J.length; oe++) {
              const fe = J[oe];
              $e(fe, O, U), B.add(fe);
            }
          else
            $e(J, O, U), B.add(J);
      }), d = y.pop(), B;
    }, this.compileAsync = function(g, L, O = null) {
      const B = this.compile(g, L, O);
      return new Promise((U) => {
        function J() {
          if (B.forEach(function(oe) {
            _e.get(oe).currentProgram.isReady() && B.delete(oe);
          }), B.size === 0) {
            U(g);
            return;
          }
          setTimeout(J, 10);
        }
        De.get("KHR_parallel_shader_compile") !== null ? J() : setTimeout(J, 10);
      });
    };
    let ke = null;
    function Gt(g) {
      ke && ke(g);
    }
    function Ft() {
      nn.stop();
    }
    function mr() {
      nn.start();
    }
    const nn = new wa();
    nn.setAnimationLoop(Gt), typeof self < "u" && nn.setContext(self), this.setAnimationLoop = function(g) {
      ke = g, ee.setAnimationLoop(g), g === null ? nn.stop() : nn.start();
    }, ee.addEventListener("sessionstart", Ft), ee.addEventListener("sessionend", mr), this.render = function(g, L) {
      if (L !== void 0 && L.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (C === !0) return;
      if (g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === !0 && L.updateMatrixWorld(), ee.enabled === !0 && ee.isPresenting === !0 && (ee.cameraAutoUpdate === !0 && ee.updateCamera(L), L = ee.getCamera()), g.isScene === !0 && g.onBeforeRender(E, g, L, N), d = Se.get(g, y.length), d.init(L), y.push(d), $.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), Je.setFromProjectionMatrix($, 2e3, L.reversedDepth), q = this.localClippingEnabled, He = ne.init(this.clippingPlanes, q), m = V.get(g, A.length), m.init(), A.push(m), ee.enabled === !0 && ee.isPresenting === !0) {
        const J = E.xr.getDepthSensingMesh();
        J !== null && wi(J, L, -1 / 0, E.sortObjects);
      }
      wi(g, L, 0, E.sortObjects), m.finish(), E.sortObjects === !0 && m.sort(ae, ce), ze = ee.enabled === !1 || ee.isPresenting === !1 || ee.hasDepthSensing() === !1, ze && ve.addToRenderList(m, g), this.info.render.frame++, He === !0 && ne.beginShadows();
      const O = d.state.shadowsArray;
      ge.render(O, g, L), He === !0 && ne.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const B = m.opaque, U = m.transmissive;
      if (d.setupLights(), L.isArrayCamera) {
        const J = L.cameras;
        if (U.length > 0)
          for (let oe = 0, fe = J.length; oe < fe; oe++) {
            const de = J[oe];
            gr(B, U, g, de);
          }
        ze && ve.render(g);
        for (let oe = 0, fe = J.length; oe < fe; oe++) {
          const de = J[oe];
          _r(m, g, de, de.viewport);
        }
      } else
        U.length > 0 && gr(B, U, g, L), ze && ve.render(g), _r(m, g, L);
      N !== null && D === 0 && (Ie.updateMultisampleRenderTarget(N), Ie.updateRenderTargetMipmap(N)), g.isScene === !0 && g.onAfterRender(E, g, L), se.resetDefaultState(), M = -1, x = null, y.pop(), y.length > 0 ? (d = y[y.length - 1], He === !0 && ne.setGlobalState(E.clippingPlanes, d.state.camera)) : d = null, A.pop(), A.length > 0 ? m = A[A.length - 1] : m = null;
    };
    function wi(g, L, O, B) {
      if (g.visible === !1) return;
      if (g.layers.test(L.layers)) {
        if (g.isGroup)
          O = g.renderOrder;
        else if (g.isLOD)
          g.autoUpdate === !0 && g.update(L);
        else if (g.isLight)
          d.pushLight(g), g.castShadow && d.pushShadow(g);
        else if (g.isSprite) {
          if (!g.frustumCulled || Je.intersectsSprite(g)) {
            B && Ce.setFromMatrixPosition(g.matrixWorld).applyMatrix4($);
            const oe = I.update(g), fe = g.material;
            fe.visible && m.push(g, oe, fe, O, Ce.z, null);
          }
        } else if ((g.isMesh || g.isLine || g.isPoints) && (!g.frustumCulled || Je.intersectsObject(g))) {
          const oe = I.update(g), fe = g.material;
          if (B && (g.boundingSphere !== void 0 ? (g.boundingSphere === null && g.computeBoundingSphere(), Ce.copy(g.boundingSphere.center)) : (oe.boundingSphere === null && oe.computeBoundingSphere(), Ce.copy(oe.boundingSphere.center)), Ce.applyMatrix4(g.matrixWorld).applyMatrix4($)), Array.isArray(fe)) {
            const de = oe.groups;
            for (let be = 0, we = de.length; be < we; be++) {
              const Te = de[be], Oe = fe[Te.materialIndex];
              Oe && Oe.visible && m.push(g, oe, Oe, O, Ce.z, Te);
            }
          } else fe.visible && m.push(g, oe, fe, O, Ce.z, null);
        }
      }
      const J = g.children;
      for (let oe = 0, fe = J.length; oe < fe; oe++)
        wi(J[oe], L, O, B);
    }
    function _r(g, L, O, B) {
      const U = g.opaque, J = g.transmissive, oe = g.transparent;
      d.setupLightsView(O), He === !0 && ne.setGlobalState(E.clippingPlanes, O), B && me.viewport(P.copy(B)), U.length > 0 && jn(U, L, O), J.length > 0 && jn(J, L, O), oe.length > 0 && jn(oe, L, O), me.buffers.depth.setTest(!0), me.buffers.depth.setMask(!0), me.buffers.color.setMask(!0), me.setPolygonOffset(!1);
    }
    function gr(g, L, O, B) {
      if ((O.isScene === !0 ? O.overrideMaterial : null) !== null)
        return;
      d.state.transmissionRenderTarget[B.id] === void 0 && (d.state.transmissionRenderTarget[B.id] = new _n(1, 1, {
        generateMipmaps: !0,
        type: De.has("EXT_color_buffer_half_float") || De.has("EXT_color_buffer_float") ? 1016 : 1009,
        minFilter: 1008,
        samples: 4,
        stencilBuffer: a,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Ve.workingColorSpace
      }));
      const J = d.state.transmissionRenderTarget[B.id], oe = B.viewport || P;
      J.setSize(oe.z * E.transmissionResolutionScale, oe.w * E.transmissionResolutionScale);
      const fe = E.getRenderTarget(), de = E.getActiveCubeFace(), be = E.getActiveMipmapLevel();
      E.setRenderTarget(J), E.getClearColor(X), K = E.getClearAlpha(), K < 1 && E.setClearColor(16777215, 0.5), E.clear(), ze && ve.render(O);
      const we = E.toneMapping;
      E.toneMapping = 0;
      const Te = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), d.setupLightsView(B), He === !0 && ne.setGlobalState(E.clippingPlanes, B), jn(g, O, B), Ie.updateMultisampleRenderTarget(J), Ie.updateRenderTargetMipmap(J), De.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Oe = !1;
        for (let We = 0, it = L.length; We < it; We++) {
          const je = L[We], Ke = je.object, ye = je.geometry, tt = je.material, Ge = je.group;
          if (tt.side === 2 && Ke.layers.test(B.layers)) {
            const Et = tt.side;
            tt.side = 1, tt.needsUpdate = !0, vr(Ke, O, B, ye, tt, Ge), tt.side = Et, tt.needsUpdate = !0, Oe = !0;
          }
        }
        Oe === !0 && (Ie.updateMultisampleRenderTarget(J), Ie.updateRenderTargetMipmap(J));
      }
      E.setRenderTarget(fe, de, be), E.setClearColor(X, K), Te !== void 0 && (B.viewport = Te), E.toneMapping = we;
    }
    function jn(g, L, O) {
      const B = L.isScene === !0 ? L.overrideMaterial : null;
      for (let U = 0, J = g.length; U < J; U++) {
        const oe = g[U], fe = oe.object, de = oe.geometry, be = oe.group;
        let we = oe.material;
        we.allowOverride === !0 && B !== null && (we = B), fe.layers.test(O.layers) && vr(fe, L, O, de, we, be);
      }
    }
    function vr(g, L, O, B, U, J) {
      g.onBeforeRender(E, L, O, B, U, J), g.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, g.matrixWorld), g.normalMatrix.getNormalMatrix(g.modelViewMatrix), U.onBeforeRender(E, L, O, B, g, J), U.transparent === !0 && U.side === 2 && U.forceSinglePass === !1 ? (U.side = 1, U.needsUpdate = !0, E.renderBufferDirect(O, L, B, U, g, J), U.side = 0, U.needsUpdate = !0, E.renderBufferDirect(O, L, B, U, g, J), U.side = 2) : E.renderBufferDirect(O, L, B, U, g, J), g.onAfterRender(E, L, O, B, U, J);
    }
    function Jn(g, L, O) {
      L.isScene !== !0 && (L = Me);
      const B = _e.get(g), U = d.state.lights, J = d.state.shadowsArray, oe = U.state.version, fe = k.getParameters(g, U.state, J, L, O), de = k.getProgramCacheKey(fe);
      let be = B.programs;
      B.environment = g.isMeshStandardMaterial ? L.environment : null, B.fog = L.fog, B.envMap = (g.isMeshStandardMaterial ? at : dt).get(g.envMap || B.environment), B.envMapRotation = B.environment !== null && g.envMap === null ? L.environmentRotation : g.envMapRotation, be === void 0 && (g.addEventListener("dispose", Y), be = /* @__PURE__ */ new Map(), B.programs = be);
      let we = be.get(de);
      if (we !== void 0) {
        if (B.currentProgram === we && B.lightsStateVersion === oe)
          return Sr(g, fe), we;
      } else
        fe.uniforms = k.getUniforms(g), g.onBeforeCompile(fe, E), we = k.acquireProgram(fe, de), be.set(de, we), B.uniforms = fe.uniforms;
      const Te = B.uniforms;
      return (!g.isShaderMaterial && !g.isRawShaderMaterial || g.clipping === !0) && (Te.clippingPlanes = ne.uniform), Sr(g, fe), B.needsLights = Fa(g), B.lightsStateVersion = oe, B.needsLights && (Te.ambientLightColor.value = U.state.ambient, Te.lightProbe.value = U.state.probe, Te.directionalLights.value = U.state.directional, Te.directionalLightShadows.value = U.state.directionalShadow, Te.spotLights.value = U.state.spot, Te.spotLightShadows.value = U.state.spotShadow, Te.rectAreaLights.value = U.state.rectArea, Te.ltc_1.value = U.state.rectAreaLTC1, Te.ltc_2.value = U.state.rectAreaLTC2, Te.pointLights.value = U.state.point, Te.pointLightShadows.value = U.state.pointShadow, Te.hemisphereLights.value = U.state.hemi, Te.directionalShadowMap.value = U.state.directionalShadowMap, Te.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Te.spotShadowMap.value = U.state.spotShadowMap, Te.spotLightMatrix.value = U.state.spotLightMatrix, Te.spotLightMap.value = U.state.spotLightMap, Te.pointShadowMap.value = U.state.pointShadowMap, Te.pointShadowMatrix.value = U.state.pointShadowMatrix), B.currentProgram = we, B.uniformsList = null, we;
    }
    function xr(g) {
      if (g.uniformsList === null) {
        const L = g.currentProgram.getUniforms();
        g.uniformsList = Ei.seqWithValue(L.seq, g.uniforms);
      }
      return g.uniformsList;
    }
    function Sr(g, L) {
      const O = _e.get(g);
      O.outputColorSpace = L.outputColorSpace, O.batching = L.batching, O.batchingColor = L.batchingColor, O.instancing = L.instancing, O.instancingColor = L.instancingColor, O.instancingMorph = L.instancingMorph, O.skinning = L.skinning, O.morphTargets = L.morphTargets, O.morphNormals = L.morphNormals, O.morphColors = L.morphColors, O.morphTargetsCount = L.morphTargetsCount, O.numClippingPlanes = L.numClippingPlanes, O.numIntersection = L.numClipIntersection, O.vertexAlphas = L.vertexAlphas, O.vertexTangents = L.vertexTangents, O.toneMapping = L.toneMapping;
    }
    function Ua(g, L, O, B, U) {
      L.isScene !== !0 && (L = Me), Ie.resetTextureUnits();
      const J = L.fog, oe = B.isMeshStandardMaterial ? L.environment : null, fe = N === null ? E.outputColorSpace : N.isXRRenderTarget === !0 ? N.texture.colorSpace : In, de = (B.isMeshStandardMaterial ? at : dt).get(B.envMap || oe), be = B.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4, we = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Te = !!O.morphAttributes.position, Oe = !!O.morphAttributes.normal, We = !!O.morphAttributes.color;
      let it = 0;
      B.toneMapped && (N === null || N.isXRRenderTarget === !0) && (it = E.toneMapping);
      const je = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Ke = je !== void 0 ? je.length : 0, ye = _e.get(B), tt = d.state.lights;
      if (He === !0 && (q === !0 || g !== x)) {
        const mt = g === x && B.id === M;
        ne.setState(B, g, mt);
      }
      let Ge = !1;
      B.version === ye.__version ? (ye.needsLights && ye.lightsStateVersion !== tt.state.version || ye.outputColorSpace !== fe || U.isBatchedMesh && ye.batching === !1 || !U.isBatchedMesh && ye.batching === !0 || U.isBatchedMesh && ye.batchingColor === !0 && U.colorTexture === null || U.isBatchedMesh && ye.batchingColor === !1 && U.colorTexture !== null || U.isInstancedMesh && ye.instancing === !1 || !U.isInstancedMesh && ye.instancing === !0 || U.isSkinnedMesh && ye.skinning === !1 || !U.isSkinnedMesh && ye.skinning === !0 || U.isInstancedMesh && ye.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && ye.instancingColor === !1 && U.instanceColor !== null || U.isInstancedMesh && ye.instancingMorph === !0 && U.morphTexture === null || U.isInstancedMesh && ye.instancingMorph === !1 && U.morphTexture !== null || ye.envMap !== de || B.fog === !0 && ye.fog !== J || ye.numClippingPlanes !== void 0 && (ye.numClippingPlanes !== ne.numPlanes || ye.numIntersection !== ne.numIntersection) || ye.vertexAlphas !== be || ye.vertexTangents !== we || ye.morphTargets !== Te || ye.morphNormals !== Oe || ye.morphColors !== We || ye.toneMapping !== it || ye.morphTargetsCount !== Ke) && (Ge = !0) : (Ge = !0, ye.__version = B.version);
      let Et = ye.currentProgram;
      Ge === !0 && (Et = Jn(B, L, U));
      let gn = !1, Tt = !1, Bn = !1;
      const nt = Et.getUniforms(), Rt = ye.uniforms;
      if (me.useProgram(Et.program) && (gn = !0, Tt = !0, Bn = !0), B.id !== M && (M = B.id, Tt = !0), gn || x !== g) {
        me.buffers.depth.getReversed() && g.reversedDepth !== !0 && (g._reversedDepth = !0, g.updateProjectionMatrix()), nt.setValue(b, "projectionMatrix", g.projectionMatrix), nt.setValue(b, "viewMatrix", g.matrixWorldInverse);
        const vt = nt.map.cameraPosition;
        vt !== void 0 && vt.setValue(b, he.setFromMatrixPosition(g.matrixWorld)), Re.logarithmicDepthBuffer && nt.setValue(
          b,
          "logDepthBufFC",
          2 / (Math.log(g.far + 1) / Math.LN2)
        ), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && nt.setValue(b, "isOrthographic", g.isOrthographicCamera === !0), x !== g && (x = g, Tt = !0, Bn = !0);
      }
      if (U.isSkinnedMesh) {
        nt.setOptional(b, U, "bindMatrix"), nt.setOptional(b, U, "bindMatrixInverse");
        const mt = U.skeleton;
        mt && (mt.boneTexture === null && mt.computeBoneTexture(), nt.setValue(b, "boneTexture", mt.boneTexture, Ie));
      }
      U.isBatchedMesh && (nt.setOptional(b, U, "batchingTexture"), nt.setValue(b, "batchingTexture", U._matricesTexture, Ie), nt.setOptional(b, U, "batchingIdTexture"), nt.setValue(b, "batchingIdTexture", U._indirectTexture, Ie), nt.setOptional(b, U, "batchingColorTexture"), U._colorsTexture !== null && nt.setValue(b, "batchingColorTexture", U._colorsTexture, Ie));
      const wt = O.morphAttributes;
      if ((wt.position !== void 0 || wt.normal !== void 0 || wt.color !== void 0) && Q.update(U, O, Et), (Tt || ye.receiveShadow !== U.receiveShadow) && (ye.receiveShadow = U.receiveShadow, nt.setValue(b, "receiveShadow", U.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (Rt.envMap.value = de, Rt.flipEnvMap.value = de.isCubeTexture && de.isRenderTargetTexture === !1 ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && L.environment !== null && (Rt.envMapIntensity.value = L.environmentIntensity), Tt && (nt.setValue(b, "toneMappingExposure", E.toneMappingExposure), ye.needsLights && Ia(Rt, Bn), J && B.fog === !0 && Z.refreshFogUniforms(Rt, J), Z.refreshMaterialUniforms(Rt, B, G, te, d.state.transmissionRenderTarget[g.id]), Ei.upload(b, xr(ye), Rt, Ie)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (Ei.upload(b, xr(ye), Rt, Ie), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && nt.setValue(b, "center", U.center), nt.setValue(b, "modelViewMatrix", U.modelViewMatrix), nt.setValue(b, "normalMatrix", U.normalMatrix), nt.setValue(b, "modelMatrix", U.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const mt = B.uniformsGroups;
        for (let vt = 0, Ci = mt.length; vt < Ci; vt++) {
          const rn = mt[vt];
          Le.update(rn, Et), Le.bind(rn, Et);
        }
      }
      return Et;
    }
    function Ia(g, L) {
      g.ambientLightColor.needsUpdate = L, g.lightProbe.needsUpdate = L, g.directionalLights.needsUpdate = L, g.directionalLightShadows.needsUpdate = L, g.pointLights.needsUpdate = L, g.pointLightShadows.needsUpdate = L, g.spotLights.needsUpdate = L, g.spotLightShadows.needsUpdate = L, g.rectAreaLights.needsUpdate = L, g.hemisphereLights.needsUpdate = L;
    }
    function Fa(g) {
      return g.isMeshLambertMaterial || g.isMeshToonMaterial || g.isMeshPhongMaterial || g.isMeshStandardMaterial || g.isShadowMaterial || g.isShaderMaterial && g.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return D;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(g, L, O) {
      const B = _e.get(g);
      B.__autoAllocateDepthBuffer = g.resolveDepthBuffer === !1, B.__autoAllocateDepthBuffer === !1 && (B.__useRenderToTexture = !1), _e.get(g.texture).__webglTexture = L, _e.get(g.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : O, B.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(g, L) {
      const O = _e.get(g);
      O.__webglFramebuffer = L, O.__useDefaultFramebuffer = L === void 0;
    };
    const Na = b.createFramebuffer();
    this.setRenderTarget = function(g, L = 0, O = 0) {
      N = g, R = L, D = O;
      let B = !0, U = null, J = !1, oe = !1;
      if (g) {
        const de = _e.get(g);
        if (de.__useDefaultFramebuffer !== void 0)
          me.bindFramebuffer(b.FRAMEBUFFER, null), B = !1;
        else if (de.__webglFramebuffer === void 0)
          Ie.setupRenderTarget(g);
        else if (de.__hasExternalTextures)
          Ie.rebindTextures(g, _e.get(g.texture).__webglTexture, _e.get(g.depthTexture).__webglTexture);
        else if (g.depthBuffer) {
          const Te = g.depthTexture;
          if (de.__boundDepthTexture !== Te) {
            if (Te !== null && _e.has(Te) && (g.width !== Te.image.width || g.height !== Te.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            Ie.setupDepthRenderbuffer(g);
          }
        }
        const be = g.texture;
        (be.isData3DTexture || be.isDataArrayTexture || be.isCompressedArrayTexture) && (oe = !0);
        const we = _e.get(g).__webglFramebuffer;
        g.isWebGLCubeRenderTarget ? (Array.isArray(we[L]) ? U = we[L][O] : U = we[L], J = !0) : g.samples > 0 && Ie.useMultisampledRTT(g) === !1 ? U = _e.get(g).__webglMultisampledFramebuffer : Array.isArray(we) ? U = we[O] : U = we, P.copy(g.viewport), z.copy(g.scissor), H = g.scissorTest;
      } else
        P.copy(Ee).multiplyScalar(G).floor(), z.copy(Ne).multiplyScalar(G).floor(), H = Ze;
      if (O !== 0 && (U = Na), me.bindFramebuffer(b.FRAMEBUFFER, U) && B && me.drawBuffers(g, U), me.viewport(P), me.scissor(z), me.setScissorTest(H), J) {
        const de = _e.get(g.texture);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_CUBE_MAP_POSITIVE_X + L, de.__webglTexture, O);
      } else if (oe) {
        const de = L;
        for (let be = 0; be < g.textures.length; be++) {
          const we = _e.get(g.textures[be]);
          b.framebufferTextureLayer(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0 + be, we.__webglTexture, O, de);
        }
      } else if (g !== null && O !== 0) {
        const de = _e.get(g.texture);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, de.__webglTexture, O);
      }
      M = -1;
    }, this.readRenderTargetPixels = function(g, L, O, B, U, J, oe, fe = 0) {
      if (!(g && g.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let de = _e.get(g).__webglFramebuffer;
      if (g.isWebGLCubeRenderTarget && oe !== void 0 && (de = de[oe]), de) {
        me.bindFramebuffer(b.FRAMEBUFFER, de);
        try {
          const be = g.textures[fe], we = be.format, Te = be.type;
          if (!Re.textureFormatReadable(we)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Re.textureTypeReadable(Te)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= g.width - B && O >= 0 && O <= g.height - U && (g.textures.length > 1 && b.readBuffer(b.COLOR_ATTACHMENT0 + fe), b.readPixels(L, O, B, U, xe.convert(we), xe.convert(Te), J));
        } finally {
          const be = N !== null ? _e.get(N).__webglFramebuffer : null;
          me.bindFramebuffer(b.FRAMEBUFFER, be);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(g, L, O, B, U, J, oe, fe = 0) {
      if (!(g && g.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let de = _e.get(g).__webglFramebuffer;
      if (g.isWebGLCubeRenderTarget && oe !== void 0 && (de = de[oe]), de)
        if (L >= 0 && L <= g.width - B && O >= 0 && O <= g.height - U) {
          me.bindFramebuffer(b.FRAMEBUFFER, de);
          const be = g.textures[fe], we = be.format, Te = be.type;
          if (!Re.textureFormatReadable(we))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!Re.textureTypeReadable(Te))
            throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const Oe = b.createBuffer();
          b.bindBuffer(b.PIXEL_PACK_BUFFER, Oe), b.bufferData(b.PIXEL_PACK_BUFFER, J.byteLength, b.STREAM_READ), g.textures.length > 1 && b.readBuffer(b.COLOR_ATTACHMENT0 + fe), b.readPixels(L, O, B, U, xe.convert(we), xe.convert(Te), 0);
          const We = N !== null ? _e.get(N).__webglFramebuffer : null;
          me.bindFramebuffer(b.FRAMEBUFFER, We);
          const it = b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return b.flush(), await Ha(b, it, 4), b.bindBuffer(b.PIXEL_PACK_BUFFER, Oe), b.getBufferSubData(b.PIXEL_PACK_BUFFER, 0, J), b.deleteBuffer(Oe), b.deleteSync(it), J;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(g, L = null, O = 0) {
      const B = Math.pow(2, -O), U = Math.floor(g.image.width * B), J = Math.floor(g.image.height * B), oe = L !== null ? L.x : 0, fe = L !== null ? L.y : 0;
      Ie.setTexture2D(g, 0), b.copyTexSubImage2D(b.TEXTURE_2D, O, 0, 0, oe, fe, U, J), me.unbindTexture();
    };
    const Oa = b.createFramebuffer(), Ba = b.createFramebuffer();
    this.copyTextureToTexture = function(g, L, O = null, B = null, U = 0, J = null) {
      J === null && (U !== 0 ? (Yn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), J = U, U = 0) : J = 0);
      let oe, fe, de, be, we, Te, Oe, We, it;
      const je = g.isCompressedTexture ? g.mipmaps[J] : g.image;
      if (O !== null)
        oe = O.max.x - O.min.x, fe = O.max.y - O.min.y, de = O.isBox3 ? O.max.z - O.min.z : 1, be = O.min.x, we = O.min.y, Te = O.isBox3 ? O.min.z : 0;
      else {
        const wt = Math.pow(2, -U);
        oe = Math.floor(je.width * wt), fe = Math.floor(je.height * wt), g.isDataArrayTexture ? de = je.depth : g.isData3DTexture ? de = Math.floor(je.depth * wt) : de = 1, be = 0, we = 0, Te = 0;
      }
      B !== null ? (Oe = B.x, We = B.y, it = B.z) : (Oe = 0, We = 0, it = 0);
      const Ke = xe.convert(L.format), ye = xe.convert(L.type);
      let tt;
      L.isData3DTexture ? (Ie.setTexture3D(L, 0), tt = b.TEXTURE_3D) : L.isDataArrayTexture || L.isCompressedArrayTexture ? (Ie.setTexture2DArray(L, 0), tt = b.TEXTURE_2D_ARRAY) : (Ie.setTexture2D(L, 0), tt = b.TEXTURE_2D), b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, L.flipY), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), b.pixelStorei(b.UNPACK_ALIGNMENT, L.unpackAlignment);
      const Ge = b.getParameter(b.UNPACK_ROW_LENGTH), Et = b.getParameter(b.UNPACK_IMAGE_HEIGHT), gn = b.getParameter(b.UNPACK_SKIP_PIXELS), Tt = b.getParameter(b.UNPACK_SKIP_ROWS), Bn = b.getParameter(b.UNPACK_SKIP_IMAGES);
      b.pixelStorei(b.UNPACK_ROW_LENGTH, je.width), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, je.height), b.pixelStorei(b.UNPACK_SKIP_PIXELS, be), b.pixelStorei(b.UNPACK_SKIP_ROWS, we), b.pixelStorei(b.UNPACK_SKIP_IMAGES, Te);
      const nt = g.isDataArrayTexture || g.isData3DTexture, Rt = L.isDataArrayTexture || L.isData3DTexture;
      if (g.isDepthTexture) {
        const wt = _e.get(g), mt = _e.get(L), vt = _e.get(wt.__renderTarget), Ci = _e.get(mt.__renderTarget);
        me.bindFramebuffer(b.READ_FRAMEBUFFER, vt.__webglFramebuffer), me.bindFramebuffer(b.DRAW_FRAMEBUFFER, Ci.__webglFramebuffer);
        for (let rn = 0; rn < de; rn++)
          nt && (b.framebufferTextureLayer(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, _e.get(g).__webglTexture, U, Te + rn), b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, _e.get(L).__webglTexture, J, it + rn)), b.blitFramebuffer(be, we, oe, fe, Oe, We, oe, fe, b.DEPTH_BUFFER_BIT, b.NEAREST);
        me.bindFramebuffer(b.READ_FRAMEBUFFER, null), me.bindFramebuffer(b.DRAW_FRAMEBUFFER, null);
      } else if (U !== 0 || g.isRenderTargetTexture || _e.has(g)) {
        const wt = _e.get(g), mt = _e.get(L);
        me.bindFramebuffer(b.READ_FRAMEBUFFER, Oa), me.bindFramebuffer(b.DRAW_FRAMEBUFFER, Ba);
        for (let vt = 0; vt < de; vt++)
          nt ? b.framebufferTextureLayer(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, wt.__webglTexture, U, Te + vt) : b.framebufferTexture2D(b.READ_FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, wt.__webglTexture, U), Rt ? b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, mt.__webglTexture, J, it + vt) : b.framebufferTexture2D(b.DRAW_FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, mt.__webglTexture, J), U !== 0 ? b.blitFramebuffer(be, we, oe, fe, Oe, We, oe, fe, b.COLOR_BUFFER_BIT, b.NEAREST) : Rt ? b.copyTexSubImage3D(tt, J, Oe, We, it + vt, be, we, oe, fe) : b.copyTexSubImage2D(tt, J, Oe, We, be, we, oe, fe);
        me.bindFramebuffer(b.READ_FRAMEBUFFER, null), me.bindFramebuffer(b.DRAW_FRAMEBUFFER, null);
      } else
        Rt ? g.isDataTexture || g.isData3DTexture ? b.texSubImage3D(tt, J, Oe, We, it, oe, fe, de, Ke, ye, je.data) : L.isCompressedArrayTexture ? b.compressedTexSubImage3D(tt, J, Oe, We, it, oe, fe, de, Ke, je.data) : b.texSubImage3D(tt, J, Oe, We, it, oe, fe, de, Ke, ye, je) : g.isDataTexture ? b.texSubImage2D(b.TEXTURE_2D, J, Oe, We, oe, fe, Ke, ye, je.data) : g.isCompressedTexture ? b.compressedTexSubImage2D(b.TEXTURE_2D, J, Oe, We, je.width, je.height, Ke, je.data) : b.texSubImage2D(b.TEXTURE_2D, J, Oe, We, oe, fe, Ke, ye, je);
      b.pixelStorei(b.UNPACK_ROW_LENGTH, Ge), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, Et), b.pixelStorei(b.UNPACK_SKIP_PIXELS, gn), b.pixelStorei(b.UNPACK_SKIP_ROWS, Tt), b.pixelStorei(b.UNPACK_SKIP_IMAGES, Bn), J === 0 && L.generateMipmaps && b.generateMipmap(tt), me.unbindTexture();
    }, this.initRenderTarget = function(g) {
      _e.get(g).__webglFramebuffer === void 0 && Ie.setupRenderTarget(g);
    }, this.initTexture = function(g) {
      g.isCubeTexture ? Ie.setTextureCube(g, 0) : g.isData3DTexture ? Ie.setTexture3D(g, 0) : g.isDataArrayTexture || g.isCompressedArrayTexture ? Ie.setTexture2DArray(g, 0) : Ie.setTexture2D(g, 0), me.unbindTexture();
    }, this.resetState = function() {
      R = 0, D = 0, N = null, me.reset(), se.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  /**
   * Defines the coordinate system of the renderer.
   *
   * In `WebGLRenderer`, the value is always `WebGLCoordinateSystem`.
   *
   * @type {WebGLCoordinateSystem|WebGPUCoordinateSystem}
   * @default WebGLCoordinateSystem
   * @readonly
   */
  get coordinateSystem() {
    return 2e3;
  }
  /**
   * Defines the output color space of the renderer.
   *
   * @type {SRGBColorSpace|LinearSRGBColorSpace}
   * @default SRGBColorSpace
   */
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = Ve._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ve._getUnpackColorSpace();
  }
}
const ha = new zt(), uu = new en(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)), hu = new F(0, 0, 1), fu = new en(), pu = new F(0, 0, -1), Si = new F(), fa = new F(), hn = new F(), mu = new F(), _u = -82, gu = 82, vu = 12e3;
function pr(i) {
  return Math.max(_u, Math.min(gu, i));
}
function cr(i) {
  return ((i + 180) % 360 + 360) % 360 - 180;
}
function xu(i, e) {
  const t = Math.max(0, Math.floor(i)), n = Math.max(0, Math.floor(e)), r = Math.floor(t / 2);
  return {
    left: { x: 0, y: 0, width: r, height: n },
    right: { x: r, y: 0, width: t - r, height: n }
  };
}
function sr(i, e, t = 490) {
  const n = (90 - e) * Math.PI / 180, r = i * Math.PI / 180;
  return new F(
    t * Math.sin(n) * Math.cos(r),
    t * Math.cos(n),
    t * Math.sin(n) * Math.sin(r)
  );
}
function Su(i, e, t, n, r) {
  return ha.set(t, e, -n, "YXZ"), i.setFromEuler(ha), i.multiply(uu), i.multiply(fu.setFromAxisAngle(hu, -r)), i;
}
function Mu(i) {
  return Si.copy(pu).applyQuaternion(i).normalize(), {
    longitude: cr(Math.atan2(Si.z, Si.x) * 180 / Math.PI),
    latitude: pr(Math.asin(Math.max(-1, Math.min(1, Si.y))) * 180 / Math.PI)
  };
}
function Eu(i, e) {
  const t = cr(i.longitude - e.deviceLongitude), n = i.latitude - e.deviceLatitude;
  return {
    longitude: cr(e.viewLongitude + t),
    latitude: pr(e.viewLatitude + n)
  };
}
function Tu() {
  return navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;
}
async function yu(i) {
  if (!i) return "unsupported";
  if (!i.requestPermission) return "granted";
  try {
    return await i.requestPermission();
  } catch {
    return "denied";
  }
}
class bu {
  container;
  imageUrl;
  onLoadingChange;
  onControlModeChange;
  onViewChange;
  canvasAriaLabel;
  hotspotsAriaLabel;
  renderer;
  scene;
  camera;
  stereoCamera = new bs();
  frameId;
  resizeObserver;
  panoramaMaterial;
  gazeTargetGeometry;
  gazeTargetMarkers = /* @__PURE__ */ new Map();
  hotspotLayer;
  hotspots = [];
  hotspotElements = /* @__PURE__ */ new Map();
  onHotspotActivate;
  textureRequestId = 0;
  longitude = -104;
  latitude = -4;
  fieldOfView = 72;
  pointerX = 0;
  pointerY = 0;
  pointerLongitude = 0;
  pointerLatitude = 0;
  activePointer;
  pointers = /* @__PURE__ */ new Map();
  pinchStartDistance;
  pinchStartFov;
  controlMode = "drag";
  deviceOrientation;
  deviceQuaternion = new en();
  motionCalibration;
  orientationTimeoutId;
  dragControlsEnabled = !1;
  motionControlsListening = !1;
  stereoModeEnabled = !1;
  constructor({
    container: e,
    imageUrl: t,
    onLoadingChange: n,
    onControlModeChange: r,
    onViewChange: a,
    initialView: s,
    canvasAriaLabel: o,
    hotspotsAriaLabel: c
  }) {
    this.container = e, this.imageUrl = t, this.onLoadingChange = n, this.onControlModeChange = r, this.onViewChange = a, this.canvasAriaLabel = o ?? "Panorama interactivo", this.hotspotsAriaLabel = c ?? "Puntos de interés de la panorámica", s && (this.longitude = s.longitude, this.latitude = s.latitude, this.fieldOfView = s.fov);
  }
  getViewState() {
    return {
      longitude: this.longitude,
      latitude: this.latitude,
      fov: this.camera?.fov ?? this.fieldOfView
    };
  }
  isStereoMode() {
    return this.stereoModeEnabled;
  }
  getControlMode() {
    return this.controlMode;
  }
  setStereoMode(e) {
    this.stereoModeEnabled !== e && (this.stereoModeEnabled = e, this.container.classList.toggle("is-vr-mode", e), this.hotspotLayer?.classList.toggle("is-suppressed", e), this.updateGazeTargetVisibility(), this.resize());
  }
  setHotspots(e, t) {
    this.hotspots = e, this.onHotspotActivate = t, this.renderHotspotElements();
  }
  setGazeNavigationTargets(e, t) {
    if (!this.scene) return;
    const n = e.filter((s) => s.kind === "navigation"), r = new Set(n.map((s) => s.id));
    for (const [s, o] of this.gazeTargetMarkers)
      r.has(s) || (this.scene.remove(o.mesh), o.material.dispose(), this.gazeTargetMarkers.delete(s));
    const a = this.gazeTargetGeometry ??= new yi(8, 20, 20);
    n.forEach((s) => {
      let o = this.gazeTargetMarkers.get(s.id);
      if (!o) {
        const l = new Xn({
          color: 16762967,
          depthTest: !1,
          depthWrite: !1,
          transparent: !0,
          opacity: 0.96
        }), u = new Pt(a, l);
        u.renderOrder = 2, this.scene?.add(u), o = { mesh: u, material: l }, this.gazeTargetMarkers.set(s.id, o);
      }
      const c = t === s.id;
      o.mesh.position.copy(sr(s.longitude, s.latitude, 476)), o.mesh.scale.setScalar(c ? 1.55 : 1), o.mesh.visible = this.stereoModeEnabled, o.material.color.setHex(c ? 10417873 : 16762967);
    });
  }
  async changePanorama(e, t) {
    if (!this.renderer || !this.panoramaMaterial) {
      this.imageUrl = e, this.applyView(t), await this.open();
      return;
    }
    const n = ++this.textureRequestId;
    this.onLoadingChange?.(!0);
    try {
      const r = await this.loadTexture(e);
      if (n !== this.textureRequestId) {
        r.dispose();
        return;
      }
      r.colorSpace = St, this.panoramaMaterial.map?.dispose(), this.panoramaMaterial.map = r, this.panoramaMaterial.needsUpdate = !0, this.imageUrl = e, this.applyView(t), this.motionCalibration = void 0, this.onViewChange?.(this.getViewState());
    } finally {
      n === this.textureRequestId && this.onLoadingChange?.(!1);
    }
  }
  zoomBy(e) {
    this.setFieldOfView(this.fieldOfView + e);
  }
  resetView(e) {
    this.applyView(e), this.motionCalibration = void 0, this.onViewChange?.(this.getViewState());
  }
  async open() {
    if (this.renderer) {
      this.startRendering();
      return;
    }
    this.onLoadingChange?.(!0);
    const e = new ps(), t = new Mt(this.fieldOfView, 1, 0.1, 1100), n = new du({ antialias: !0, powerPreference: "high-performance" });
    n.setPixelRatio(Math.min(window.devicePixelRatio, 2)), n.domElement.className = "panorama-canvas", n.domElement.setAttribute("aria-label", this.canvasAriaLabel), this.container.append(n.domElement), this.scene = e, this.camera = t, this.renderer = n;
    try {
      await this.prepareControls();
      const r = await this.loadTexture(this.imageUrl);
      r.colorSpace = St;
      const a = new yi(500, 72, 48);
      a.scale(-1, 1, 1);
      const s = new Xn({ map: r });
      e.add(new Pt(a, s)), this.panoramaMaterial = s, this.createHotspotLayer(), this.addEventListeners(), this.resize(), this.startRendering();
    } catch (r) {
      throw this.dispose(), r;
    } finally {
      this.onLoadingChange?.(!1);
    }
  }
  pause() {
    this.frameId !== void 0 && (cancelAnimationFrame(this.frameId), this.frameId = void 0);
  }
  dispose() {
    this.pause(), this.resizeObserver?.disconnect(), this.renderer?.domElement.removeEventListener("pointerdown", this.handlePointerDown), window.removeEventListener("pointermove", this.handlePointerMove), window.removeEventListener("pointerup", this.handlePointerUp), window.removeEventListener("pointercancel", this.handlePointerUp), this.renderer?.domElement.removeEventListener("wheel", this.handleWheel), window.removeEventListener("deviceorientation", this.handleDeviceOrientation, !0), this.orientationTimeoutId !== void 0 && window.clearTimeout(this.orientationTimeoutId), this.scene?.traverse((e) => {
      e instanceof Pt && (e.geometry.dispose(), e.material instanceof Xn && (e.material.map?.dispose(), e.material.dispose()));
    }), this.renderer?.dispose(), this.renderer?.domElement.remove(), this.hotspotLayer?.remove(), this.renderer = void 0, this.scene = void 0, this.camera = void 0, this.panoramaMaterial = void 0, this.gazeTargetGeometry = void 0, this.gazeTargetMarkers.clear(), this.hotspotLayer = void 0, this.hotspotElements.clear(), this.stereoModeEnabled = !1, this.container.classList.remove("is-vr-mode"), this.deviceOrientation = void 0, this.motionCalibration = void 0, this.orientationTimeoutId = void 0, this.dragControlsEnabled = !1, this.motionControlsListening = !1, this.pointers.clear(), this.activePointer = void 0, this.pinchStartDistance = void 0, this.pinchStartFov = void 0;
  }
  addEventListeners() {
    const e = this.renderer?.domElement;
    e && (this.enableDragControls(), e.addEventListener("wheel", this.handleWheel, { passive: !1 }), this.resizeObserver = new ResizeObserver(() => this.resize()), this.resizeObserver.observe(this.container));
  }
  handlePointerDown = (e) => {
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY }), this.renderer?.domElement.setPointerCapture(e.pointerId), this.pointers.size === 1 ? (this.beginDrag(e.pointerId, e.clientX, e.clientY), this.controlMode === "drag" && this.renderer?.domElement.classList.add("is-dragging")) : this.pointers.size === 2 && (this.pinchStartDistance = this.getPointerDistance(), this.pinchStartFov = this.fieldOfView, this.renderer?.domElement.classList.remove("is-dragging"));
  };
  async enableMotionControls() {
    if (this.controlMode === "motion") return "granted";
    if (!Tu())
      return this.setControlMode("drag"), "unsupported";
    this.setControlMode("motion-pending");
    const e = await yu(
      "DeviceOrientationEvent" in window ? window.DeviceOrientationEvent : void 0
    );
    return e !== "granted" ? (this.setControlMode("drag"), e) : (this.startDeviceOrientationListening(), "granted");
  }
  async prepareControls() {
    await this.enableMotionControls();
  }
  startDeviceOrientationListening() {
    this.motionControlsListening || (this.motionControlsListening = !0, window.addEventListener("deviceorientation", this.handleDeviceOrientation, !0)), this.orientationTimeoutId !== void 0 && window.clearTimeout(this.orientationTimeoutId), this.controlMode !== "motion" && (this.orientationTimeoutId = window.setTimeout(() => {
      this.controlMode !== "motion" && (window.removeEventListener("deviceorientation", this.handleDeviceOrientation, !0), this.motionControlsListening = !1, this.setControlMode("drag"));
    }, 2500));
  }
  handleDeviceOrientation = (e) => {
    e.alpha === null || e.beta === null || e.gamma === null || (this.deviceOrientation = { alpha: e.alpha, beta: e.beta, gamma: e.gamma }, this.controlMode !== "motion" && (this.orientationTimeoutId !== void 0 && window.clearTimeout(this.orientationTimeoutId), this.motionCalibration = void 0, this.setControlMode("motion")));
  };
  setControlMode(e) {
    this.controlMode = e, this.enableDragControls(), this.onControlModeChange?.(e);
  }
  enableDragControls() {
    const e = this.renderer?.domElement;
    !e || this.dragControlsEnabled || (this.dragControlsEnabled = !0, e.addEventListener("pointerdown", this.handlePointerDown), window.addEventListener("pointermove", this.handlePointerMove), window.addEventListener("pointerup", this.handlePointerUp), window.addEventListener("pointercancel", this.handlePointerUp));
  }
  handlePointerMove = (e) => {
    const t = this.pointers.get(e.pointerId);
    if (t) {
      if (t.x = e.clientX, t.y = e.clientY, this.pointers.size === 2 && this.pinchStartDistance && this.pinchStartFov) {
        const n = this.getPointerDistance();
        n > 0 && this.setFieldOfView(this.pinchStartFov * this.pinchStartDistance / n);
        return;
      }
      this.controlMode !== "drag" || e.pointerId !== this.activePointer || (this.longitude = (this.pointerX - e.clientX) * 0.12 + this.pointerLongitude, this.latitude = (e.clientY - this.pointerY) * 0.12 + this.pointerLatitude, this.onViewChange?.(this.getViewState()));
    }
  };
  handlePointerUp = (e) => {
    if (!this.pointers.has(e.pointerId)) return;
    this.pointers.delete(e.pointerId), this.pinchStartDistance = void 0, this.pinchStartFov = void 0;
    const t = this.pointers.entries().next().value;
    if (t) {
      const [n, r] = t;
      this.beginDrag(n, r.x, r.y), this.controlMode === "drag" && this.renderer?.domElement.classList.add("is-dragging");
    } else
      this.activePointer = void 0, this.renderer?.domElement.classList.remove("is-dragging");
    this.onViewChange?.(this.getViewState());
  };
  handleWheel = (e) => {
    e.preventDefault(), this.setFieldOfView(this.fieldOfView + e.deltaY * 0.035);
  };
  resize() {
    if (!this.renderer || !this.camera) return;
    const e = this.container.clientWidth, t = this.container.clientHeight;
    !e || !t || (this.camera.aspect = (this.stereoModeEnabled ? e / 2 : e) / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t, !1));
  }
  startRendering() {
    if (this.frameId !== void 0) return;
    const e = () => {
      if (!(!this.renderer || !this.scene || !this.camera)) {
        if (this.controlMode === "motion" && this.deviceOrientation) {
          const { alpha: t, beta: n, gamma: r } = this.deviceOrientation, a = (screen.orientation?.angle ?? window.orientation ?? 0) * Math.PI / 180;
          Su(
            this.deviceQuaternion,
            t * Math.PI / 180,
            n * Math.PI / 180,
            r * Math.PI / 180,
            a
          ), this.applyMotionView(this.deviceQuaternion);
        } else
          this.lookAtDragPosition();
        this.updateHotspotPositions(), this.renderScene(), this.frameId = requestAnimationFrame(e);
      }
    };
    e();
  }
  loadTexture(e) {
    return new Promise((t, n) => {
      let r = !1;
      const a = window.setTimeout(() => {
        r = !0, n(new Error("Panorama texture load timed out."));
      }, vu);
      try {
        new Ts().load(
          e,
          (s) => {
            if (window.clearTimeout(a), r) {
              s.dispose();
              return;
            }
            r = !0, t(s);
          },
          void 0,
          (s) => {
            window.clearTimeout(a), !r && (r = !0, n(s instanceof Error ? s : new Error("Panorama texture load failed.")));
          }
        );
      } catch (s) {
        if (window.clearTimeout(a), r) return;
        r = !0, n(s instanceof Error ? s : new Error("Panorama texture load failed."));
      }
    });
  }
  renderScene() {
    if (!this.renderer || !this.scene || !this.camera) return;
    if (!this.stereoModeEnabled) {
      this.renderer.setScissorTest(!1), this.renderer.render(this.scene, this.camera);
      return;
    }
    const e = this.container.clientWidth, t = this.container.clientHeight;
    if (!e || !t) return;
    const n = xu(e, t);
    this.camera.updateMatrixWorld(), this.stereoCamera.update(this.camera), this.renderer.setScissorTest(!0), this.renderStereoEye(n.left, this.stereoCamera.cameraL), this.renderStereoEye(n.right, this.stereoCamera.cameraR), this.renderer.setScissorTest(!1), this.renderer.setViewport(0, 0, e, t), this.renderer.setScissor(0, 0, e, t);
  }
  renderStereoEye(e, t) {
    !this.renderer || !this.scene || (this.renderer.setViewport(e.x, e.y, e.width, e.height), this.renderer.setScissor(e.x, e.y, e.width, e.height), this.renderer.render(this.scene, t));
  }
  lookAtDragPosition() {
    this.camera && (this.latitude = pr(this.latitude), this.camera.lookAt(sr(this.longitude, this.latitude, 500)));
  }
  applyMotionView(e) {
    const t = Mu(e);
    this.motionCalibration || (this.motionCalibration = {
      deviceLongitude: t.longitude,
      deviceLatitude: t.latitude,
      viewLongitude: this.longitude,
      viewLatitude: this.latitude
    });
    const n = Eu(t, this.motionCalibration);
    this.longitude = n.longitude, this.latitude = n.latitude, this.lookAtDragPosition();
  }
  applyView(e) {
    this.longitude = e.longitude, this.latitude = e.latitude, this.setFieldOfView(e.fov, !1);
  }
  setFieldOfView(e, t = !0) {
    this.fieldOfView = Math.max(38, Math.min(92, e)), this.camera && (this.camera.fov = this.fieldOfView, this.camera.updateProjectionMatrix()), t && this.onViewChange?.(this.getViewState());
  }
  beginDrag(e, t, n) {
    this.activePointer = e, this.pointerX = t, this.pointerY = n, this.pointerLongitude = this.longitude, this.pointerLatitude = this.latitude;
  }
  getPointerDistance() {
    const [e, t] = [...this.pointers.values()];
    return !e || !t ? 0 : Math.hypot(t.x - e.x, t.y - e.y);
  }
  createHotspotLayer() {
    if (this.hotspotLayer) return;
    const e = document.createElement("div");
    e.className = "panorama-hotspots", e.setAttribute("aria-label", this.hotspotsAriaLabel), this.container.append(e), this.hotspotLayer = e, this.renderHotspotElements();
  }
  renderHotspotElements() {
    this.hotspotLayer && (this.hotspotLayer.replaceChildren(), this.hotspotElements.clear(), this.hotspots.forEach((e) => {
      const t = document.createElement("button");
      t.type = "button", t.className = `panorama-hotspot panorama-hotspot--${e.kind}`, t.setAttribute("aria-label", e.label);
      const n = document.createElement("span");
      n.className = "panorama-hotspot__icon", n.setAttribute("aria-hidden", "true"), n.textContent = e.kind === "navigation" ? "→" : "i";
      const r = document.createElement("span");
      r.className = "panorama-hotspot__label", r.textContent = e.label, t.append(n, r), t.addEventListener("click", () => this.onHotspotActivate?.(e)), this.hotspotLayer?.append(t), this.hotspotElements.set(e.id, t);
    }));
  }
  updateHotspotPositions() {
    if (!this.camera || !this.hotspotLayer) return;
    if (this.stereoModeEnabled) {
      this.hotspotElements.forEach((t) => {
        t.hidden = !0, t.setAttribute("aria-hidden", "true");
      });
      return;
    }
    const e = this.camera;
    e.updateMatrixWorld(), e.getWorldDirection(fa), this.hotspots.forEach((t) => {
      const n = this.hotspotElements.get(t.id);
      if (!n) return;
      hn.copy(
        sr(t.longitude, t.latitude)
      );
      const r = mu.copy(hn).normalize().dot(fa) > 0.08;
      hn.project(e);
      const a = r && hn.z > -1 && hn.z < 1;
      n.hidden = !a, n.setAttribute("aria-hidden", String(!a)), a && (n.style.left = `${(hn.x * 0.5 + 0.5) * 100}%`, n.style.top = `${(-hn.y * 0.5 + 0.5) * 100}%`);
    });
  }
  updateGazeTargetVisibility() {
    this.gazeTargetMarkers.forEach((e) => {
      e.mesh.visible = this.stereoModeEnabled;
    });
  }
}
const pa = "app-museo-panorama-module-style";
function Au() {
  if (document.getElementById(pa)) return;
  const i = document.createElement("style");
  i.id = pa, i.textContent = za, document.head.append(i);
}
function Ru(i) {
  return i.kind === "info";
}
function ma(i, e) {
  if (e) {
    const n = i.find((r) => r.id === e);
    if (n) return n;
  }
  const [t] = i;
  if (!t) throw new Error("Panorama module requires at least one scene.");
  return t;
}
function wu(i) {
  return i.map((e) => {
    const t = e.hotspots.map((n) => Ru(n) ? `${n.title}: ${n.description}` : n.label);
    return {
      id: e.id,
      title: e.title,
      body: e.location,
      items: t
    };
  });
}
class Cu {
  ready;
  options;
  root;
  viewerRoot;
  stage;
  loader;
  loaderLabel;
  notice;
  title;
  location;
  credit;
  scenePanel;
  infoPanel;
  infoEyebrow;
  infoTitle;
  infoDescription;
  sceneList;
  sceneToggle;
  closeButton;
  degradationStates = /* @__PURE__ */ new Map();
  sceneButtons = /* @__PURE__ */ new Map();
  viewer;
  activeScene;
  destroyed = !1;
  constructor(e) {
    Au(), this.options = e, this.activeScene = ma(e.scenes, e.initialSceneId), this.root = document.createElement("section"), this.root.className = "am-panorama", this.root.setAttribute("aria-label", e.labels.moduleLabel);
    const t = document.createElement("div");
    t.className = "am-panorama__surface", this.root.append(t), this.viewerRoot = document.createElement("div"), this.viewerRoot.className = "am-panorama__viewer", t.append(this.viewerRoot), this.stage = document.createElement("div"), this.stage.className = "am-panorama__stage", this.viewerRoot.append(this.stage);
    const n = document.createElement("div");
    n.className = "am-panorama__shade", this.viewerRoot.append(n);
    const r = document.createElement("div");
    r.className = "am-panorama__topbar", this.viewerRoot.append(r);
    const a = document.createElement("div");
    a.className = "am-panorama__heading", this.location = document.createElement("span"), this.location.className = "am-panorama__location", this.title = document.createElement("strong"), this.title.className = "am-panorama__title", a.append(this.location, this.title), r.append(a), this.closeButton = document.createElement("button"), this.closeButton.type = "button", this.closeButton.className = "am-panorama__button", this.closeButton.textContent = e.labels.close, this.closeButton.addEventListener("click", () => {
      if (this.options.onExit) {
        this.options.onExit(this);
        return;
      }
      this.destroy();
    }), r.append(this.closeButton), this.loader = document.createElement("div"), this.loader.className = "am-panorama__loader";
    const s = document.createElement("span");
    s.className = "am-panorama__spinner", s.setAttribute("aria-hidden", "true"), this.loaderLabel = document.createElement("span"), this.loader.append(s, this.loaderLabel), this.viewerRoot.append(this.loader), this.notice = document.createElement("div"), this.notice.className = "am-panorama__notice", this.notice.hidden = !0, this.viewerRoot.append(this.notice), this.credit = document.createElement("a"), this.credit.className = "am-panorama__credit", this.credit.rel = "noopener noreferrer", this.credit.target = "_blank", this.viewerRoot.append(this.credit);
    const o = document.createElement("div");
    o.className = "am-panorama__tools", this.viewerRoot.append(o), this.sceneToggle = this.createToolButton(e.labels.scenes, "am-panorama__tool am-panorama__tool--scenes"), this.sceneToggle.setAttribute("aria-expanded", "false"), this.sceneToggle.addEventListener("click", () => {
      const v = !this.scenePanel.hidden;
      this.scenePanel.hidden = v, this.sceneToggle.setAttribute("aria-expanded", String(!v)), this.sceneToggle.textContent = v ? e.labels.scenes : e.labels.closeScenes;
    }), o.append(this.sceneToggle);
    const c = this.createToolButton("−", "am-panorama__tool");
    c.setAttribute("aria-label", e.labels.zoomOut), c.addEventListener("click", () => this.viewer.zoomBy(8)), o.append(c);
    const l = this.createToolButton("◎", "am-panorama__tool");
    l.setAttribute("aria-label", e.labels.resetView), l.addEventListener("click", () => this.viewer.resetView(this.activeScene.initialView)), o.append(l);
    const u = this.createToolButton("+", "am-panorama__tool");
    u.setAttribute("aria-label", e.labels.zoomIn), u.addEventListener("click", () => this.viewer.zoomBy(-8)), o.append(u), this.scenePanel = this.createPanel(e.labels.scenes), this.scenePanel.querySelector(".am-panorama__panel-close")?.addEventListener("click", () => {
      this.scenePanel.hidden = !0, this.sceneToggle.setAttribute("aria-expanded", "false"), this.sceneToggle.textContent = e.labels.scenes, this.sceneToggle.focus();
    }), this.sceneList = document.createElement("div"), this.sceneList.className = "am-panorama__scene-list", this.scenePanel.append(this.sceneList), this.viewerRoot.append(this.scenePanel), this.infoPanel = this.createPanel(e.labels.infoPanelTitle, e.labels.closeInfo), this.infoPanel.hidden = !0, this.infoPanel.querySelector(".am-panorama__panel-close")?.addEventListener("click", () => this.closeInfoPanel()), this.infoEyebrow = document.createElement("span"), this.infoEyebrow.className = "am-panorama__info-eyebrow", this.infoTitle = document.createElement("h2"), this.infoTitle.className = "am-panorama__info-title", this.infoDescription = document.createElement("p"), this.infoDescription.className = "am-panorama__info-description", this.infoPanel.append(this.infoEyebrow, this.infoTitle, this.infoDescription), this.viewerRoot.append(this.infoPanel);
    const p = document.createElement("div");
    p.className = "am-panorama__meta", t.append(p), p.append(this.renderDegradationDetails()), p.append(this.renderTextAlternativeDetails()), e.container.replaceChildren(this.root), this.viewer = new bu({
      container: this.stage,
      imageUrl: this.activeScene.imageUrl,
      initialView: this.activeScene.initialView,
      canvasAriaLabel: e.labels.canvasLabel,
      hotspotsAriaLabel: e.labels.hotspotsLabel,
      onLoadingChange: (v) => this.setLoading(v),
      onControlModeChange: (v) => this.updateDegradation(v, !0)
    }), this.renderSceneButtons(), this.applySceneMetadata(), this.viewer.setHotspots(this.activeScene.hotspots, (v) => this.handleHotspot(v)), this.updateDegradation("drag", !0), this.ready = this.viewer.open().then(() => {
      this.notice.hidden = !0, this.updateDegradation(this.viewer.getControlMode(), !0);
    }).catch((v) => {
      throw this.viewerRoot.dataset.renderState = "text-only", this.showNotice(this.options.labels.renderError), this.updateDegradation("drag", !1), v;
    });
  }
  destroy() {
    this.destroyed || (this.destroyed = !0, this.viewer.dispose(), this.root.remove());
  }
  async openScene(e) {
    if (this.destroyed) return;
    const t = ma(this.options.scenes, e);
    t.id !== this.activeScene.id && (this.activeScene = t, this.applySceneMetadata(), this.closeInfoPanel(), this.viewer.setHotspots(t.hotspots, (n) => this.handleHotspot(n)), await this.viewer.changePanorama(t.imageUrl, t.initialView));
  }
  createToolButton(e, t) {
    const n = document.createElement("button");
    return n.type = "button", n.className = t, n.textContent = e, n;
  }
  createPanel(e, t = this.options.labels.close) {
    const n = document.createElement("aside");
    n.className = "am-panorama__panel", n.hidden = !0;
    const r = document.createElement("div");
    r.className = "am-panorama__panel-header";
    const a = document.createElement("h2");
    a.className = "am-panorama__panel-title", a.textContent = e;
    const s = document.createElement("button");
    return s.type = "button", s.className = "am-panorama__button am-panorama__panel-close", s.textContent = "×", s.setAttribute("aria-label", t), r.append(a, s), n.append(r), n;
  }
  renderSceneButtons() {
    this.sceneList.replaceChildren(), this.sceneButtons.clear(), this.options.scenes.forEach((e) => {
      const t = document.createElement("button");
      t.type = "button", t.className = "am-panorama__scene-button";
      const n = document.createElement("span");
      n.className = "am-panorama__scene-copy";
      const r = document.createElement("strong");
      r.textContent = e.title;
      const a = document.createElement("span");
      a.textContent = e.location, n.append(r, a), t.append(n), t.addEventListener("click", () => {
        this.openScene(e.id).catch(() => {
          this.showNotice(this.options.labels.renderError);
        });
      }), this.sceneButtons.set(e.id, t), this.sceneList.append(t);
    }), this.syncSceneButtons();
  }
  renderDegradationDetails() {
    const e = document.createElement("details");
    e.className = "am-panorama__details", e.open = !0;
    const t = document.createElement("summary");
    t.className = "am-panorama__summary", t.textContent = this.options.labels.degradationTitle, e.append(t);
    const n = document.createElement("div");
    n.className = "am-panorama__details-body";
    const r = document.createElement("div");
    return r.className = "am-panorama__degradation-list", this.options.degradation.forEach((a) => {
      const s = document.createElement("article");
      s.className = "am-panorama__degradation-step", s.dataset.state = "inactive";
      const o = document.createElement("strong");
      o.textContent = a.label;
      const c = document.createElement("p");
      c.textContent = a.description, s.append(o, c), r.append(s), this.degradationStates.set(a.id, s);
    }), n.append(r), e.append(n), e;
  }
  renderTextAlternativeDetails() {
    const e = document.createElement("details");
    e.className = "am-panorama__details", e.open = !0;
    const t = document.createElement("summary");
    t.className = "am-panorama__summary", t.textContent = this.options.textAlternative.title || this.options.labels.textAlternativeTitle, e.append(t);
    const n = document.createElement("div");
    if (n.className = "am-panorama__details-body", this.options.textAlternative.intro) {
      const s = document.createElement("p");
      s.textContent = this.options.textAlternative.intro, n.append(s);
    }
    const r = document.createElement("div");
    return r.className = "am-panorama__text-list", (this.options.textAlternative.sections ?? wu(this.options.scenes)).forEach((s) => {
      const o = document.createElement("article");
      o.className = "am-panorama__text-item";
      const c = document.createElement("strong");
      c.textContent = s.title;
      const l = document.createElement("p");
      if (l.textContent = s.body, o.append(c, l), s.items?.length) {
        const u = document.createElement("ul");
        s.items.forEach((h) => {
          const f = document.createElement("li");
          f.textContent = h, u.append(f);
        }), o.append(u);
      }
      r.append(o);
    }), n.append(r), e.append(n), e;
  }
  applySceneMetadata() {
    this.title.textContent = this.activeScene.title, this.location.textContent = this.activeScene.location, this.credit.textContent = this.activeScene.creditLabel, this.credit.href = this.activeScene.creditUrl, this.syncSceneButtons(), this.loaderLabel.textContent = this.options.labels.loading(this.activeScene.title);
  }
  syncSceneButtons() {
    this.sceneButtons.forEach((e, t) => {
      e.setAttribute("aria-current", String(t === this.activeScene.id));
    });
  }
  setLoading(e) {
    this.loader.hidden = !e, e && (this.loaderLabel.textContent = this.options.labels.loading(this.activeScene.title));
  }
  handleHotspot(e) {
    if (e.kind === "navigation") {
      this.openScene(e.targetSceneId).catch(() => {
        this.showNotice(this.options.labels.renderError);
      });
      return;
    }
    this.infoEyebrow.textContent = e.eyebrow, this.infoTitle.textContent = e.title, this.infoDescription.textContent = e.description, this.infoPanel.hidden = !1;
  }
  closeInfoPanel() {
    this.infoPanel.hidden = !0;
  }
  showNotice(e) {
    this.notice.textContent = e, this.notice.hidden = !1;
  }
  updateDegradation(e, t) {
    const n = /* @__PURE__ */ new Map();
    t ? e === "motion" ? (n.set("motion", "active"), n.set("drag", "available"), n.set("text", "available")) : (n.set("motion", "inactive"), n.set("drag", "active"), n.set("text", "available")) : (n.set("motion", "inactive"), n.set("drag", "inactive"), n.set("text", "active")), this.degradationStates.forEach((r, a) => {
      r.dataset.state = n.get(a) ?? "inactive";
    });
  }
}
function Pu(i) {
  return new Cu(i);
}
export {
  Pu as mountPanoramaModule
};
