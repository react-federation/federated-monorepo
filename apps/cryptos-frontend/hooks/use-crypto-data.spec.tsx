import { renderHook } from '@testing-library/react-hooks'
import useCryptoData from './use-crypto-data'

describe('useCryptoData', () => {
  it('should match snapshot', () => {
    const {
      result: { current }
    } = renderHook(() => useCryptoData([]))

    expect(current).toBeInstanceOf(Object)
    expect(current).toHaveProperty('rows')
    expect(current).toHaveProperty('columns')
  })
})
