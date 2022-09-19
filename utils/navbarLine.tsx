export const navbarLine = (path: string, pathname: string) => {
  if (pathname === path) return 'line-through'
  return null
}
