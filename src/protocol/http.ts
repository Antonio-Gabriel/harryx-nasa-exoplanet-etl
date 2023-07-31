import { Database } from 'src/lib/database'
import express, { Request, Response } from 'express'
import { PlanetsViewModel } from './view-models/planets-view-model'

const app = express()
app.use(express.json())

app.get('/planets', async (_: Request, res: Response) => {
  const repository = new Database()
  const planets = (await repository.getPlanets()).map(PlanetsViewModel.toHttp)
  return res.status(200).json({ data: planets, total: planets.length })
})

app.listen(3333, () => {
  console.log('[HARRYX]: Server is running...')
})
