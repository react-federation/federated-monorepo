import React, { VoidFunctionComponent } from 'react'
import { FallbackProps } from 'react-error-boundary'

const ErrorFallback: VoidFunctionComponent<FallbackProps> = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <pre>{error.stack}</pre>
    </div>
  )
}

export default ErrorFallback
