import React, { VoidFunctionComponent } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Text } from '@chakra-ui/layout'

export interface TableHelperProps {
  value: string | number;
  row?: any;
}

export const PriceFormatter: VoidFunctionComponent<TableHelperProps> = ({ value }) => {
  const parsedValue = parseFloat(value as string).toLocaleString('en-US')

  return <Text>USD {parsedValue}</Text>
}

export const RenderLink: VoidFunctionComponent<TableHelperProps> = ({ row, value }) => {
  const { url } = useRouteMatch()

  const to = `${url}/${row.id}`

  return <Link to={to}>{value}</Link>
}

export const RenderIcon: VoidFunctionComponent<TableHelperProps> = ({ value }) => (
  <img src={value as string} width="24px" />
)
