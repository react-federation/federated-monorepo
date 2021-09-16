import { BrowserRouter } from 'react-router-dom'
import setup from 'utils/test/setup'
import server from 'mocks/config'

import Cryptos from './cryptos'
import { coinList } from 'mocks/rest/coingecko'

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

afterEach(() => {
  server.resetHandlers()
})

describe('Cryptos', () => {
  it('should render a skeleton, then error', async () => {
    server.use(coinList(true))

    const { findByText } = setup(Cryptos, {}, BrowserRouter)

    const err = await findByText('An error has ocurred :(')
    expect(err).toBeInTheDocument()
  })

  it('should render a skeleton, then render the table', async () => {
    server.use(coinList(false))
    const { findByRole, asFragment } = setup(Cryptos, {}, BrowserRouter)

    const skeleton = asFragment().querySelector('.chakra-skeleton')
    expect(skeleton).toBeInstanceOf(HTMLDivElement)

    const muiGrid = await findByRole('grid')
    expect(muiGrid).toBeInTheDocument()
  })
})
