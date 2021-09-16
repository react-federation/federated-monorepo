import { BrowserRouter } from 'react-router-dom'
import setup from 'utils/test/setup'
import Welcome from '.'

describe('Welcome', () => {
  it('should match snapshot', () => {
    const { asFragment } = setup(Welcome, {}, BrowserRouter)

    expect(asFragment()).toMatchSnapshot()
  })
})
