import React from 'react'
import { createDynamicComponent } from '@bondi/utils'
import { Route, Switch } from 'react-router-dom'

const Index = createDynamicComponent({
  url: 'https://poc-microfrontends.nyc3.cdn.digitaloceanspaces.com/root_app/root_app.js',
  module: 'root_app',
  scope: 'default_namespace'
})

const Crypto = createDynamicComponent({
  url: 'http://localhost:3000/cryptos_frontend.js',
  module: 'crypto_app',
  scope: 'default_namespace'
})

const Routes = () => (
  <>
    <Switch>
      <Route path="/" exact>
        <Index />
      </Route>
      <Route path="/cryptos">
        <Crypto />
      </Route>
    </Switch>
  </>
)

export default Routes
