import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppRoutes } from './routes'
import { store } from './api/store/store.ts'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
)
