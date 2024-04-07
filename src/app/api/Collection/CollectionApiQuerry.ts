import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  CreateCollectionPayload,
  CreateCollectionResponse,
  GetCollectionListPayload,
  GetCollectionListResponse,
} from './collectionApiDataSource.ts'

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '', //здесь внести базовый url, к которому будут подставляться части из query/mutations ниже
    // условно базовый url https://google.com/, a путь в конкретном api (CreateCollection) - 'collection'.
    // В результате запрос будет направлен на https://google.com/collection
  }),
  endpoints: builder => ({
    GetCollectionList: builder.query<GetCollectionListResponse, GetCollectionListPayload>({
      query: () => `collection`,
    }),

    CreateCollection: builder.mutation<CreateCollectionResponse, CreateCollectionPayload>({
      query: payload => ({
        url: `collection`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
})
export const { useGetCollectionListQuery, useCreateCollectionMutation } = collectionApi
