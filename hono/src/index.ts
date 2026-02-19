import { Hono } from 'hono'
import { cors } from 'hono/cors'
import coffees from './data/coffees.json'

const app = new Hono()

app.use(
  '/*',
  cors({
    origin: 'http://localhost:5173',
  })
)

app.get('/coffees', (c) => {
  return c.json(coffees)
})

export default app
