/**
 * Return a promise resolved after ms millisecond.
 * @param ms milliseconds to wait
 */
export function delay<T>(ms: number, v?: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(v), ms));
}
