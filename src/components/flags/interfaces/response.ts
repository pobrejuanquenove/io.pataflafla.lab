export interface FlagResponse {
    result:  FlagResult[];
}

export interface FlagResult {
    flags: {
      svg: string,
      png: string,
      alt: string
    },
    name: {
      common: string;
      official: string;
    }
}
