import React, { Fragment, useRef } from 'react'
import { nanoid } from 'nanoid'

import style from './welcome.module.scss'

const DynamicList = ({ items }: any) => {
  const { current: id } = useRef(nanoid())
  return (
    <ul className={style['list-style']}>
      {items.map((item: any, index: number) => {
        const listElement = <li>{item.children}</li>
        const wrappedElement = item.href ? <a href={item.href}>{listElement}</a> : listElement
        const key = `${id}-${index}`

        return <Fragment key={key}>{wrappedElement}</Fragment>
      })}
    </ul>
  )
}

export default DynamicList
