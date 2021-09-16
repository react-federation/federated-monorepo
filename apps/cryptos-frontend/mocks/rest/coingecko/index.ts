import { rest } from 'msw'
import data from './list.json'
import btc from './btc.json'

export const coinList = (ERR: boolean) =>
  rest.get(COINGECKO_API, (_req, res, ctx) => {
    if (ERR) {
      return res(
        ctx.status(422),
        ctx.json({
          error: 'Missing parameter vs_currency'
        })
      )
    }

    return res(ctx.status(200), ctx.json(data))
  })

export const coinDetailErr = rest.get('https://api.coingecko.com/api/v3/coins/undefined', (_req, res, ctx) => {
  return res(ctx.status(404), ctx.json({ error: 'Could not find coin with the given id' }))
})

export const coinDetail = rest.get('https://api.coingecko.com/api/v3/coins/bitcoin', (_req, res, ctx) => {
  return res(ctx.status(200), ctx.json(btc))
})
