import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  CreateBookPayload,
  CreateBookResponse,
  DeleteBookPayload,
  DeleteBookResponse,
  EditBookPayload,
  EditBookResponse,
  GetBookListPayload,
  GetBookListResponse,
  GetBookPayload,
  GetBookResponse,
} from './bookApiDataSource.ts'

export const bookListApi = createApi({
  reducerPath: 'bookListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://185.177.219.70:8080/api/books/', //здесь внести базовый url, к которому будут подставляться части из query/mutations ниже
    // условно базовый url https://google.com/, a путь в конкретном api (GetBook) - 'books/${...}'.
    // В результате запрос будет направлен на https://google.com/books/${...}
  }),
  endpoints: builder => ({
    GetBookList: builder.query<GetBookListResponse, GetBookListPayload>({
      query: () => ``, // отсюда будут браться
    }),

    GetBook: builder.query<GetBookResponse, GetBookPayload>({
      query: ({ id }) => `${id}`,
    }),

    CreateBook: builder.mutation<CreateBookResponse, CreateBookPayload>({
      query: payload => ({
        url: ``,
        method: 'POST',
        body: payload,
      }),
    }),
    EditBook: builder.mutation<EditBookResponse, EditBookPayload>({
      query: ({ id, body }) => ({
        url: `${id}`,
        method: 'POST',
        body: body,
      }),
    }),
    DeleteBook: builder.mutation<DeleteBookResponse, DeleteBookPayload>({
      query: ({ id }) => ({
        url: `${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})
export const {
  useGetBookListQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useEditBookMutation,
} = bookListApi
