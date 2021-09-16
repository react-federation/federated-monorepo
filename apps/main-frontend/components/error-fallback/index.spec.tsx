import setup from 'utils/test/setup'
import ErrorFallback from '.'

describe('ErrorFallback', () => {
  it('should match snapshot', () => {
    const resetErrorBoundary = jest.fn()
    const { asFragment } = setup(ErrorFallback, { error: new Error('test error'), resetErrorBoundary })

    expect(asFragment()).toMatchSnapshot()
  })
})
