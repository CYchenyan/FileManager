
export type IFile = {
  key: string,
  lastModified: number | null,
  size: number
}

export enum IImageTypes {
  JPG = "jpg",
  PNG = "png",
}