import dotenv from 'dotenv'
dotenv.config()

import { PlanetsExtractionStageStream } from './stages/extraction/planets-extraction-stage-stream'
import { PlanetsTransformationStageStream } from './stages/transformation/planets-transformation-stage-stream'

;(async () => {
  try {
    await new PlanetsExtractionStageStream().pipe(
      new PlanetsTransformationStageStream()
    )
  } catch (error) {
    console.error('Error:', error.message)
  }
})()
