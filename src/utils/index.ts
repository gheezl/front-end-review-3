export const getIdFromUrl = (url: string): number => {
  const urlParts = url.split("/")
  return parseInt(urlParts[urlParts.length - 2])
}

export const isOG = (url: string) => {
  const id = getIdFromUrl(url)

  return id < 150
}
