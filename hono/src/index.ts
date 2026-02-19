import { Hono } from 'hono'
import coffees from './data/coffees.json'

const app = new Hono()

app.get('/coffees', (c) => {
  return c.json(coffees)
})

export default app
