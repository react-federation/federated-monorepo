import React, { useRef } from 'react'
import { Route, Switch } from 'react-router'
import { nanoid } from 'nanoid'

import routes from './routes'

const Router = () => {
  const id = useRef(nanoid())

  return (
    <Switch>
      {routes.map((routeProps, index) => {
        const key = `route-${routeProps.path}-${index}-${id}`

        return <Route key={key} {...routeProps} />
      })}
    </Switch>
  )
}

export default Router
