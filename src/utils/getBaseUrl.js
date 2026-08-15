export const getBaseUrl = (path = '') => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}