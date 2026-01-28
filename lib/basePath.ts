// Base path for assets - matches next.config.js
export const basePath = process.env.NODE_ENV === 'production' ? '/hoseki' : ''

export function getAssetPath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
