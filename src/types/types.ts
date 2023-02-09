export type FormType = {
  description: string,
  iconUrl: string,
  detail: string,
  wiki: string,
  comiclink: string,
  name: string,
}

type UrlsType = {
  type: string
  url: string
}

type ThumbnailType = {
  extension: string
  path: string
}

export type CharacterType = {
  id: number
  name: string
  modified: string
  urls: UrlsType[]
  description: string
  thumbnail: ThumbnailType
}