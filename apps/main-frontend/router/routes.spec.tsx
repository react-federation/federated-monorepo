import { BrowserRouter } from 'react-router-dom'
import setup from 'utils/test/setup'

import Routes from './routesComponent'

describe('Index', () => {
  it('should match snapshot', async () => {
    const { asFragment } = setup(Routes, {}, BrowserRouter)

    expect(asFragment()).toMatchSnapshot()
  })
})
