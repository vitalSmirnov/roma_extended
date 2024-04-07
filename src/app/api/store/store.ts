import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { bookListApi } from '../Books/bookApiQuerry.ts'
import { collectionApi } from '../Collection/CollectionApiQuerry.ts'

export const store = configureStore({
  reducer: {
    [bookListApi.reducerPath]: bookListApi.reducer,
    [collectionApi.reducerPath]: collectionApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bookListApi.middleware, collectionApi.middleware),
})

setupListeners(store.dispatch)
