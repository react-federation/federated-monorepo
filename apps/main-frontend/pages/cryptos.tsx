import React from 'react'
import useAxios from 'axios-hooks'
import { Heading, Stack } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@material-ui/core'

import useCryptoData from 'hooks/use-crypto-data'

const skeleton = (
  <Stack>
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
  </Stack>
)

const Cryptos = () => {
  const [{ data, error, loading }] = useAxios(COINGECKO_API)
  const dataGridProps = useCryptoData(data)

  return (
    <Stack>
      <Heading size="md">Prices table</Heading>
      {loading && skeleton}
      {error && <Heading>An error has ocurred :(</Heading>}
      {data && (
        <Box width="100%" height="474px">
          <DataGrid
            {...(dataGridProps as any)}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      )}
    </Stack>
  )
}

export default Cryptos
