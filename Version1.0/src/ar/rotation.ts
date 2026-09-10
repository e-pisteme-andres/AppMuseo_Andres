import * as THREE from 'three';

const UP = new THREE.Vector3(0, 1, 0);
const LOCAL_X = new THREE.Vector3(1, 0, 0);
const LOCAL_Z = new THREE.Vector3(0, 0, 1);

export function applyDragRotation(
  quaternion: THREE.Quaternion,
  deltaX: number,
  deltaY: number,
  sensitivity = 0.006,
): THREE.Quaternion {
  const yaw = new THREE.Quaternion().setFromAxisAngle(UP, deltaX * sensitivity);
  const pitch = new THREE.Quaternion().setFromAxisAngle(LOCAL_X, deltaY * sensitivity);
  quaternion.premultiply(yaw).multiply(pitch).normalize();
  return quaternion;
}

export function applyRollRotation(
  quaternion: THREE.Quaternion,
  angleDelta: number,
): THREE.Quaternion {
  const roll = new THREE.Quaternion().setFromAxisAngle(LOCAL_Z, angleDelta);
  quaternion.multiply(roll).normalize();
  return quaternion;
}

export function angleBetweenPointers(
  first: { x: number; y: number },
  second: { x: number; y: number },
): number {
  return Math.atan2(second.y - first.y, second.x - first.x);
}

export function normalizeAngleDelta(delta: number): number {
  if (delta > Math.PI) return delta - Math.PI * 2;
  if (delta < -Math.PI) return delta + Math.PI * 2;
  return delta;
}
