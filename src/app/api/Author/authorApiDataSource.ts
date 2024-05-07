import { IAuthor, IAuthored } from '../../../entities/types/IAuthor.ts'

export interface GetAuthorPayload {
  id: string
}
export interface GetAuthorResponse extends IAuthor {}

export interface EditAuthorPayload {
  id: string
  body: Pick<IAuthor, 'lastName' | 'firstName'>
}
export interface EditAuthorResponse extends IAuthor {}

export interface DeleteAuthorPayload {
  id: string
}
export interface DeleteAuthorResponse {}

export interface GetListAuthorPayload {}
export interface GetListAuthorResponse extends IAuthored {}

export interface CreateAuthorPayload {
  body: Pick<IAuthor, 'lastName' | 'firstName'>
}
export interface CreateAuthorResponse extends IAuthor {}
