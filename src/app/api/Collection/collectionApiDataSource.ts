import { ICollection } from '../../../entities/types/ICollection.ts'

export interface GetCollectionListPayload {}
export interface GetCollectionListResponse {
  collections: ICollection[]
}

export interface CreateCollectionPayload {
  name: string
  books: string[]
}
export interface CreateCollectionResponse {
  collection: ICollection
}
