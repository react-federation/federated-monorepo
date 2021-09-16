import React, { ComponentType, Fragment } from 'react'
import { render } from '@testing-library/react'

function setup<T> (Component: ComponentType<T>, props = {} as T, Wrapper: ComponentType<any> = Fragment) {
  return render(
    <Wrapper>
      <Component {...(props as T)} />
    </Wrapper>
  )
}

export default setup
