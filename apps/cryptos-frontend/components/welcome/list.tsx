import { Text } from '@chakra-ui/layout'
import React from 'react'
import DynamicList from './dynamic-list'

const createVscodeUrl = (path: string) => `vscode://file${PROJECT_PATH}${path}`

export const styling = [
  {
    href: createVscodeUrl('/components/html-wrapper/index.tsx'),
    children: 'CSS-in-JS (We prefer to use this one!)'
  },
  {
    href: createVscodeUrl('/components/welcome/welcome.module.scss'),
    children: 'CSS modules'
  },
  {
    href: createVscodeUrl('/styles/main.scss'),
    children: 'Classic CSS/SCSS'
  }
]

export const list = [
  {
    children: (
      <>
        <Text>Styling</Text>
        <DynamicList items={styling} />
      </>
    )
  },
  { children: 'How to write components' },
  { children: 'Data fetching' },
  { children: 'Global state' },
  { children: 'Routing' },
  { children: 'Testing' }
]
