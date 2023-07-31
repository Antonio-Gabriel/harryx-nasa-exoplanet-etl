import chalk from 'chalk'
import dotenv from 'dotenv'
dotenv.config()

import { exec } from 'child_process'
import { Database } from './lib/database'
import { PlanetsExtractionStageStream } from './stages/extraction/planets-extraction-stage-stream'
import { PlanetsTransformationStageStream } from './stages/transformation/planets-transformation-stage-stream'


;(async () => {
  console.log(chalk.blue(`[HARRYX]: Running streaming pipelines`))

  try {
    const repository = new Database()
    const planets = await repository.getPlanets()

    if (planets.length > 0) return

    await new PlanetsExtractionStageStream().pipe(
      new PlanetsTransformationStageStream()
    )
  } catch (error) {
    console.error('Error:', error.message)
  } finally {
    exec('npm run start:server')
  }
})()
