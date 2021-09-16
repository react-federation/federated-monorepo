import CryptoPage from 'pages/cryptos'
import CurrencyDetail from 'pages/detail'
import { RouteProps } from 'react-router'

const routes: RouteProps[] = [
  {
    path: '/cryptos',
    exact: true,
    component: CryptoPage
  },
  {
    path: '/cryptos/:id',
    exact: true,
    component: CurrencyDetail
  }
]

export default routes
