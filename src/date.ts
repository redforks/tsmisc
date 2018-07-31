/**
 * Returns today date object.
 *
 * Timezone is current local time.
 *
 * @returns date of today with time part be zero.
 */
export function today() {
  const now = new Date(Date.now());
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
