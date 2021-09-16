import { PriceFormatter, RenderIcon, RenderLink } from 'components/crypto/table-helpers'

const columns = [
  {
    field: 'image',
    headerName: '💰',
    minWidth: 24,
    renderCell: RenderIcon
  },
  { field: 'name', headerName: 'Name', minWidth: 142, renderCell: RenderLink },
  { field: 'symbol', headerName: 'Symbol', minWidth: 142 },
  { field: 'current_price', headerName: 'Current Price', minWidth: 170, renderCell: PriceFormatter },
  { field: 'atl', headerName: 'ATL', minWidth: 170, renderCell: PriceFormatter },
  { field: 'ath', headerName: 'ATH', minWidth: 170, renderCell: PriceFormatter },
  { field: 'ath', headerName: 'ATH', minWidth: 170, renderCell: PriceFormatter },
  { field: 'market_cap', headerName: 'Market Cap', minWidth: 170, renderCell: PriceFormatter }
]

const useCryptoData = (rows: any[]) => {
  return { rows, columns }
}

export default useCryptoData
