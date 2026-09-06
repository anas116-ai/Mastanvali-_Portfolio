/**
 * CharacterMotion.ts
 * Organic 2.5D physics, procedural micro-breathing, and inertial weight shifts.
 */

export interface MotionConfig {
  stiffness: number;
  damping: number;
  mass: number;
}

export const SPRING_CONFIG: MotionConfig = {
  stiffness: 120,
  damping: 18,
  mass: 1.2,
};

export const GENTLE_SPRING: MotionConfig = {
  stiffness: 80,
  damping: 24,
  mass: 1.5,
};

export function calculateBreathingOffset(time: number): { y: number; scale: number; chestTilt: number } {
  // Gentle sinusoidal organic cycle (~4.2 seconds cycle)
  const frequency = 0.0015;
  const sinVal = Math.sin(time * frequency);
  const cosVal = Math.cos(time * frequency * 0.5);

  return {
    y: sinVal * 4.5, // 4.5px subtle rise and fall
    scale: 1 + sinVal * 0.006, // subtle torso expansion
    chestTilt: cosVal * 0.4, // subtle degree micro-tilt
  };
}

export function calculateTiltFromPointer(
  normX: number,
  normY: number,
  maxDegX = 6,
  maxDegY = 8
): { rotateX: number; rotateY: number; shiftX: number; shiftY: number } {
  // Clamped proportional response with subtle cubic easing
  const easeX = Math.sign(normX) * Math.pow(Math.abs(normX), 1.2);
  const easeY = Math.sign(normY) * Math.pow(Math.abs(normY), 1.2);

  return {
    rotateX: -easeY * maxDegX,
    rotateY: easeX * maxDegY,
    shiftX: easeX * 12,
    shiftY: easeY * 8,
  };
}
