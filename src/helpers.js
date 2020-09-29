/**
 * Generate a uniq random Id
 */
export const newId = () =>
  (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10)
