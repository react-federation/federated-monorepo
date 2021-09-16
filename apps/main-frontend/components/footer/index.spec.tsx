import setup from 'utils/test/setup'
import Footer from '.'

describe('Footer', () => {
  it('should match snapshot', () => {
    const { asFragment } = setup(Footer)

    expect(asFragment()).toMatchSnapshot()
  })
})
