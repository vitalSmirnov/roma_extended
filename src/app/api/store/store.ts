import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { bookListApi } from '../Books/bookApiQuerry.ts'
import { collectionApi } from '../Collection/CollectionApiQuerry.ts'
import { authorApi } from '../Author/authorApiQuerry.ts'

export const store = configureStore({
  reducer: {
    [bookListApi.reducerPath]: bookListApi.reducer,
    [collectionApi.reducerPath]: collectionApi.reducer,
    [authorApi.reducerPath]: authorApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bookListApi.middleware, collectionApi.middleware),
})

setupListeners(store.dispatch)
