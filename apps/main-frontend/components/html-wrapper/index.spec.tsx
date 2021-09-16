import { BrowserRouter } from 'react-router-dom'
import setup from 'utils/test/setup'
import HtmlWrapper from '.'

describe('HtmlWrapper', () => {
  it('should match snapshot', () => {
    const { asFragment } = setup(HtmlWrapper, {}, BrowserRouter)

    expect(asFragment()).toMatchSnapshot()
  })
})
