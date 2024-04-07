export interface IAuthor {
  id: string
  firstName: string
  lastName: string
}

export interface IAuthored {
  authors: IAuthor[]
}
