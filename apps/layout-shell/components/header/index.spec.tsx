import { BrowserRouter } from 'react-router-dom'
import setup from 'utils/test/setup'
import Header from '.'

describe('Header', () => {
  it('should match snapshot', () => {
    const { asFragment } = setup(Header, {}, BrowserRouter)

    expect(asFragment()).toMatchSnapshot()
  })
})
