/**
 * Map block seed bytes to an integer in [0, max)
 */
export function seedToNumber(seed: Uint8Array, max: number): number {
  let num = 0;
  for (let i = 0; i < seed.length; i++) {
    num = (num << 8) + seed[i];
    num %= max;
  }
  return num;
}