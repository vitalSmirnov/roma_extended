import { IAuthor } from './IAuthor.ts'

export interface IBook {
  id: string
  inventoryNumber: number
  title: string
  partsQuantity: string
  publicationPlace: string
  publishingHouse: string
  publishingYear: number
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
  bcode: number
  authors: IAuthor[]
}
