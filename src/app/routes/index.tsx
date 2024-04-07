import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Spinner } from 'react-bootstrap'

// функция lazy(()=> import()) отвечает за "ленивую загрузку" компонентов, в данном случае страниц.
// То есть страницы грузятся только один раз, когда они открыты, а не при первом запуске
const MainPage = lazy(() => import('../../pages/Main'))
const BookPage = lazy(() => import('../../pages/Book'))

export const AppRoutes = () => {
  return (
    <>
      <Suspense
        fallback={
          <Spinner
            animation={'grow'}
            variant={'primary'}
          />
        }
      >
        {/*Routes - система путей в проекте, где Route - отдельная страница сайта, а path - url по которой он открывается*/}
        <Routes>
          <Route
            index
            element={<MainPage />}
          />
          <Route
            index
            path={'/book/:id'}
            element={<BookPage />}
          />
        </Routes>
      </Suspense>
    </>
  )
}
