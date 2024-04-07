import { BookCollection } from './IBook.ts'

export interface ICollection {
  id: string
  name: string
  books: BookCollection[]
}
