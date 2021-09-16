import { Badge, Box, Stack, Text } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'
import useAxios from 'axios-hooks'
import Heading from 'components/crypto/heading'
import HtmlWrapper from 'components/html-wrapper'
import React, { VoidFunctionComponent } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { CryptoDetail } from 'types/crypto-detail'

const skeleton = (
  <Stack>
    <Skeleton height="48px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
  </Stack>
)

const CurrencyDetail: VoidFunctionComponent = () => {
  const {
    params: { id }
  } = useRouteMatch<{ id: string }>()
  const url = `https://api.coingecko.com/api/v3/coins/${id}`
  const [{ data, error, loading }] = useAxios<CryptoDetail>(url)

  const lastUpdated =
    data &&
    new Date(data.last_updated).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

  if (loading) {
    return skeleton
  }

  if (error) {
    return (
      <Text as="h1" fontSize="3xl" textAlign="center">
        An error has ocurred :(
      </Text>
    )
  }

  if (data) {
    return (
      <Stack position="relative">
        <Box maxWidth="100%">
          {data.categories.map((category) => (
            <Badge key={`${category}-${data.name}`} mr={2} mb={2}>
              {category}
            </Badge>
          ))}
        </Box>
        <Heading {...data} />
        <Text fontSize="xs" color="gray.700">
          Last updated: {lastUpdated}
        </Text>
        <Stack border="1px solid" borderColor="purple.100" p={4} borderRadius="md">
          <Text fontWeight="bold">{data.symbol.toUpperCase()}/USD (24h):</Text>
          <Box>
            <Badge mr={2}>Current price: ${data.market_data.current_price.usd}</Badge>
            <Badge>Price change: {data.market_data.price_change_24h.toFixed(2)}</Badge>
          </Box>
        </Stack>
        <HtmlWrapper dangerouslySetInnerHTML={{ __html: data.description.en.replace('\n', '<br /><br />') }} />
      </Stack>
    )
  }

  return null
}

export default CurrencyDetail
