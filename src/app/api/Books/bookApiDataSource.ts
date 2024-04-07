import { IBook } from '../../../entities/types/IBook.ts'

export interface GetBookListPayload {}
export interface GetBookListResponse {
  content: IBook[]
}

export interface GetBookPayload {
  bookId: string
}
export type GetBookResponse = IBook

export interface CreateBookPayload {
  inventoryNumber: string
  title: string
  partsQuantity: string
  publicationPlace: string
  publishingHouse: string
  publishingYear: 0
  language: string
  subjects: string
  publicationType: string
  autograph: string
  note: string
  bookplate: string
  stamp: string
  label: string
  binding: string
  description: string
  authorsId: string[]
  collectionsId: string[]
  bcode: number
}

export type CreateBookResponse = IBook
