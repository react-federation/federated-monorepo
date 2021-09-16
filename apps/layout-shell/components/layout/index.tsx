import React, { FunctionComponent } from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import Header from '../header'
import Footer from '../footer'
import GlobalStyles from 'components/styles'

const Layout: FunctionComponent = ({ children }) => (
  <Flex direction="column" height="100vh">
    <GlobalStyles />
    <Header />
    <Box mt={4} className="container" flex={1}>
      {children}
    </Box>
    <Footer />
  </Flex>
)

export default Layout
