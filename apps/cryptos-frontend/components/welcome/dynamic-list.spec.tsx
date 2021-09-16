import setup from 'utils/test/setup'
import DynamicList from './dynamic-list'

import { list } from './list'

describe('DynamicList', () => {
  it('should match snapshot', () => {
    const { asFragment } = setup(DynamicList, { items: list })

    expect(asFragment()).toMatchSnapshot()
  })
})
