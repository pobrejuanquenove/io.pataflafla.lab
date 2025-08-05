export interface FlagImage {
  png: string,
  svg: string,
  alt: string
}

export interface FlagName {
  common: string,
  official: string
}

export interface SimpleFlag {
  flags: FlagImage
  name: FlagName
}
