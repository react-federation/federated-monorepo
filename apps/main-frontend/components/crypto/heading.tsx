import React, { VoidFunctionComponent } from 'react'
import { Image } from '@chakra-ui/image'
import { Box, Text, Heading as ChakraHeading } from '@chakra-ui/layout'

import { CryptoDetail } from 'types/crypto-detail'

const Heading: VoidFunctionComponent<Pick<CryptoDetail, 'image' | 'name' | 'symbol'>> = ({ image, name, symbol }) => {
  return (
    <Box display="flex" alignItems="center">
      <Image width="32px" height="32px" src={image.small} alt={`${name} logo`} mr={2} />
      <ChakraHeading>
        {name}{' '}
        <Text as="span" color="purple.600">
          ({symbol.toUpperCase()})
        </Text>
      </ChakraHeading>
    </Box>
  )
}

export default Heading
