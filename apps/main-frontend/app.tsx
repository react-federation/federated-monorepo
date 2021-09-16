import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ErrorBoundary } from 'react-error-boundary'
import { createDynamicComponent } from '@bondi/utils'
import ErrorFallback from 'components/error-fallback'

import './styles/main.scss'
import Routes from 'components/routes'

const Layout = createDynamicComponent({
  url: 'http://localhost:3001/crypto-layout.js',
  module: 'crypto_app_layout',
  scope: 'default_namespace'
})

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn by example!</title>
      </Helmet>
      <BrowserRouter>
        <ChakraProvider>
          <Layout>
            <Routes></Routes>
          </Layout>
        </ChakraProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
