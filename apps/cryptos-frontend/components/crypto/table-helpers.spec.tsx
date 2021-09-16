import { BrowserRouter } from 'react-router-dom'
import setup from 'utils/test/setup'
import { PriceFormatter, RenderLink, RenderIcon } from './table-helpers'

describe('PriceFormatter', () => {
  it('should match snapshot', () => {
    const { asFragment } = setup(PriceFormatter, { value: 1000 })

    expect(asFragment()).toMatchSnapshot()
  })
})

describe('RenderLink', () => {
  it('should match snapshot', () => {
    const { asFragment } = setup(RenderLink, { value: 1000, row: { id: 'btc' } }, BrowserRouter)

    expect(asFragment()).toMatchSnapshot()
  })
})

describe('RenderIcon', () => {
  it('should match snapshot', () => {
    const { asFragment } = setup(RenderIcon, { value: 'http://image.test/logo.jpeg' })

    expect(asFragment()).toMatchSnapshot()
  })
})
