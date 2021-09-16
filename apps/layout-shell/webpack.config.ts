import { webpackConfig } from '@bondi/config'
import { merge } from 'webpack-merge'
import Webpack from 'webpack'

import packageJson from './package.json'

const { ModuleFederationPlugin } = Webpack.container
const name = 'default_namespace'
const module = 'crypto_app_layout'

const filename = 'crypto-layout.js'

const moduleFederationConfig = {
  name,
  exposes: {
    [module]: './components/layout/index.tsx'
  },
  filename,
  shared: {
    react: {
      import: 'react',
      shareKey: 'react',
      shareScope: 'default',
      singleton: true,
      requiredVersion: packageJson.dependencies.react
    },
    'react-dom': {
      import: 'react-dom',
      shareKey: 'react-dom',
      shareScope: 'default',
      singleton: true,
      requiredVersion: packageJson.dependencies['react-dom']
    },
    'react-router-dom': {
      import: 'react-router-dom',
      shareKey: 'react-router-dom',
      shareScope: 'default',
      singleton: true,
      requiredVersion: packageJson.dependencies['react-router-dom']
    },
    /*  '@chakra-ui/layout': {
      import: '@chakra-ui/layout',
      shareKey: '@chakra-ui/layout',
      shareScope: 'default',
      singleton: true
    }, */
    '@emotion/react': {
      import: '@emotion/react',
      shareKey: '@emotion/react',
      shareScope: 'default',
      singleton: true,
      requiredVersion: packageJson.dependencies['@emotion/react']
    }
  }
}

const moduleFederationPlugin = new ModuleFederationPlugin(moduleFederationConfig)

const projectConfig: ReturnType<typeof merge> = {
  devServer: {
    port: 3001,
    historyApiFallback: true
  },
  plugins: [moduleFederationPlugin],
  output: {
    publicPath: 'auto'
  }
}

const config: any = merge(webpackConfig, projectConfig)

export default config
