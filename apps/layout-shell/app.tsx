import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from 'components/layout'

const App = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <BrowserRouter>
        <ChakraProvider>
          <Layout>TEst</Layout>
        </ChakraProvider>
      </BrowserRouter>
    </>
  )
}

export default App
