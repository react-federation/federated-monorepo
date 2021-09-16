import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Heading } from '@chakra-ui/layout'

const Header = () => {
  return (
    <Box as="header" backgroundColor="purple.100" py={4}>
      <Flex className="container" justifyContent="space-between">
        <Box>
          <Link to="/">
            <Heading size="md">Cryptos ✨🤑</Heading>
          </Link>
        </Box>
        <Link to="/cryptos">Cryptos price</Link>
      </Flex>
    </Box>
  )
}

export default Header
