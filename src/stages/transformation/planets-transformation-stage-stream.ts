import chalk from 'chalk'
import { Writable } from 'stream'

import { queue } from 'src/lib/queue'
import { PlanetsEnum } from '../enums/planets-enum'
import { ExtractionStageContract } from 'src/contracts/extraction-stage-contract'

export class PlanetsTransformationStageStream extends Writable {
  _write(
    chunk: any,
    encoding: BufferEncoding,
    callback: (error?: Error | null | undefined) => void
  ): void {
    const planets = JSON.parse(chunk)

    const extractionStage: ExtractionStageContract = {
      hostname: planets.hostname,
      pl_bmassj: +planets.pl_bmassj,
    }

    if (extractionStage.pl_bmassj > PlanetsEnum.HIGH_SEVERITY) {
      console.log(
        chalk.green(`[HARRYX]: planet object ${extractionStage.hostname} is high severity identified`)
      )

      queue.push({
        name: extractionStage.hostname,
        mass: extractionStage.pl_bmassj,
      })
    }

    callback()
  }
}
