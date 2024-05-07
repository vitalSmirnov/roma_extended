import { IBook } from '../../../entities/types/IBook.ts'

export interface GetBookListPayload {
  page: number
  limit: number
}
export interface GetBookListResponse {
  content: IBook[]
}

export interface GetBookPayload {
  id: string
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

export interface EditBookPayload {
  id: string
  body: CreateBookPayload
}
export type EditBookResponse = IBook

export interface DeleteBookPayload {
  id: string
}
export interface DeleteBookResponse {}
