import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  CreateCollectionPayload,
  CreateCollectionResponse,
  DeleteCollectionPayload,
  DeleteCollectionResponse,
  GetCollectionBookListPayload,
  GetCollectionBookListResponse,
  GetCollectionListPayload,
  GetCollectionListResponse,
  GetCollectionPayload,
  GetCollectionResponse,
  UpdateCollectionPayload,
  UpdateCollectionResponse,
} from './collectionApiDataSource.ts'

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://185.177.219.70:8080/api/collections/', //здесь внести базовый url, к которому будут подставляться части из query/mutations ниже
    // условно базовый url https://google.com/, a путь в конкретном api (CreateCollection) - 'collection'.
    // В результате запрос будет направлен на https://google.com/collection
  }),
  endpoints: builder => ({
    GetCollection: builder.query<GetCollectionResponse, GetCollectionPayload>({
      query: ({ id }) => `${id}`,
    }),

    GetCollectionList: builder.query<GetCollectionListResponse, GetCollectionListPayload>({
      query: () => ``,
    }),

    GetCollectionBookList: builder.query<GetCollectionBookListResponse, GetCollectionBookListPayload>({
      query: ({ id, limit, page }) => `${id}/books?limit=${limit}&page=${page}`,
    }),

    CreateCollection: builder.mutation<CreateCollectionResponse, CreateCollectionPayload>({
      query: ({ name }) => ({
        url: ``,
        method: 'POST',
        body: { name: name },
      }),
    }),
    EditCollection: builder.mutation<UpdateCollectionResponse, UpdateCollectionPayload>({
      query: ({ id, name }) => ({
        url: `${id}`,
        method: 'PUT',
        body: name,
      }),
    }),

    DeleteCollection: builder.mutation<DeleteCollectionResponse, DeleteCollectionPayload>({
      query: ({ id }) => ({
        url: `${id}`,
        method: 'PODELETEST',
      }),
    }),
  }),
})
export const {
  useGetCollectionListQuery,
  useGetCollectionQuery,
  useGetCollectionBookListQuery,
  useCreateCollectionMutation,
  useDeleteCollectionMutation,
  useEditCollectionMutation,
} = collectionApi
