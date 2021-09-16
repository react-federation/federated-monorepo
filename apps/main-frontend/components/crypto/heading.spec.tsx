import { ChakraProvider } from '@chakra-ui/react'
import setup from 'utils/test/setup'
import Heading from './heading'

describe('Heading', () => {
  it('should match snapshot', () => {
    const { asFragment } = setup(Heading, { image: { small: '' }, name: '', symbol: '' }, ChakraProvider)

    expect(asFragment()).toMatchSnapshot()
  })
})
