import { Readable } from 'node:stream'

import { FetchDataFactory } from 'src/lib/factory/fetchDataFactory'

export class PlanetsExtractionStageStream extends Readable {
  constructor() {
    super({ objectMode: true })
  }

  async _read(): Promise<void> {
    try {
      const { fetchCSVDataInMemoryStream } = FetchDataFactory.createInstance()
      // const planetsDataChunk = await fetchDataFromApi(process.env.NASA_URL)
      const planetsDataChunk = await fetchCSVDataInMemoryStream(100)

      for (const planetChunk of JSON.parse(planetsDataChunk)) {
        this.push(Buffer.from(JSON.stringify(planetChunk)))
      }

      this.push(null)
    } catch (error) {
      this.emit('Extraction Stage', error)
    }
  }
}
