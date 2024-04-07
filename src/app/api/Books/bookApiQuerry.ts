import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  CreateBookPayload,
  CreateBookResponse,
  GetBookListPayload,
  GetBookListResponse,
  GetBookPayload,
  GetBookResponse,
} from './bookApiDataSource.ts'

export const bookListApi = createApi({
  reducerPath: 'bookListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '', //здесь внести базовый url, к которому будут подставляться части из query/mutations ниже
    // условно базовый url https://google.com/, a путь в конкретном api (GetBook) - 'books/${...}'.
    // В результате запрос будет направлен на https://google.com/books/${...}
  }),
  endpoints: builder => ({
    GetBookList: builder.query<GetBookListResponse, GetBookListPayload>({
      query: () => `books`, // отсюда будут браться
    }),

    GetBook: builder.query<GetBookResponse, GetBookPayload>({
      query: payload => `books/${payload.bookId}`,
    }),

    CreateBook: builder.mutation<CreateBookResponse, CreateBookPayload>({
      query: payload => ({
        url: `book`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
})
export const { useGetBookListQuery, useGetBookQuery, useCreateBookMutation } = bookListApi
