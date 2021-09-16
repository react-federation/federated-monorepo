import React from 'react'
import { Badge, Box, Heading, Stack, Text } from '@chakra-ui/layout'

import DynamicList from './dynamic-list'
import { list } from './list'

const Welcome = () => {
  return (
    <Stack>
      <Box pb={2}>
        <Badge variant="subtle" colorScheme="purple" mr={2}>
          Getting started
        </Badge>
        <Badge variant="subtle" colorScheme="purple">
          React ⚛️
        </Badge>
      </Box>
      <Box backgroundColor="gray.50" p={4} borderRadius="md">
        <Stack>
          <Heading>Welcome to your frontend!</Heading>
          <Text>Here you&apos;ll find examples of how you can implement things the right way!</Text>
          <Box>
            <DynamicList items={list} />
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Welcome
