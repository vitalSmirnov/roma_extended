import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  CreateAuthorPayload,
  CreateAuthorResponse,
  DeleteAuthorPayload,
  DeleteAuthorResponse,
  EditAuthorPayload,
  EditAuthorResponse,
  GetAuthorPayload,
  GetAuthorResponse,
  GetListAuthorPayload,
  GetListAuthorResponse,
} from './authorApiDataSource.ts'

export const authorApi = createApi({
  reducerPath: 'authorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://185.177.219.70:8080/api/authors/', //здесь внести базовый url, к которому будут подставляться части из query/mutations ниже
    // условно базовый url https://google.com/, a путь в конкретном api (CreateCollection) - 'collection'.
    // В результате запрос будет направлен на https://google.com/collection
  }),
  endpoints: builder => ({
    GetAuthor: builder.query<GetAuthorResponse, GetAuthorPayload>({
      query: ({ id }) => `${id}`,
    }),

    EditAuthor: builder.mutation<EditAuthorResponse, EditAuthorPayload>({
      query: ({ id, body }) => ({
        url: `${id}`,
        method: 'PUT',
        body: body,
      }),
    }),

    DeleteAuthor: builder.mutation<DeleteAuthorResponse, DeleteAuthorPayload>({
      query: ({ id }) => ({
        url: `${id}`,
        method: 'DELETE',
      }),
    }),

    GetListAuthors: builder.query<GetListAuthorResponse, GetListAuthorPayload>({
      query: () => ``,
    }),

    CreateAuthor: builder.mutation<CreateAuthorResponse, CreateAuthorPayload>({
      query: body => ({
        url: ``,
        method: 'POST',
        body: body,
      }),
    }),
  }),
})
export const {
  useGetAuthorQuery,
  useGetListAuthorsQuery,
  useEditAuthorMutation,
  useDeleteAuthorMutation,
  useCreateAuthorMutation,
} = authorApi
