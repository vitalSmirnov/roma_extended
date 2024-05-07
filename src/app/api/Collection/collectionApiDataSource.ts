import { ICollection } from '../../../entities/types/ICollection.ts'
import { IBook } from '../../../entities/types/IBook.ts'

export interface GetCollectionPayload {
  id: string
}
export interface GetCollectionResponse {
  collections: ICollection
}

export interface UpdateCollectionPayload {
  id: string
  name: string
}
export interface UpdateCollectionResponse extends ICollection {}

export interface DeleteCollectionPayload {
  id: string
}
export interface DeleteCollectionResponse {}

export interface GetCollectionListPayload {}
export interface GetCollectionListResponse {
  collections: ICollection[]
}

export interface CreateCollectionPayload {
  name: string
}
export interface CreateCollectionResponse {
  collection: ICollection
}

export interface GetCollectionBookListPayload {
  id: string
  page: number
  limit: number
}
export interface GetCollectionBookListResponse {
  content: IBook[]
}
