import axios from 'axios'
import fs from 'fs/promises'
import * as fsStream from 'fs'

import { getPath } from 'src/util/get-path'
import { readStreamAsync } from 'src/util/read-stream-async'
import { limitResponseChunks } from 'src/util/limit-response-chunks'
import { parseResponseToJSON } from 'src/util/parse-response-to-json'
import { parseStreamResponseToJson } from 'src/util/parse-stream-response-to-json'

const planetsConfirmedJsonPath = getPath('mock/planets.json')
const planetsConfirmedCsvPath = getPath('storage/confirmed_planets.csv')

export async function fetchJSONDataInMemoryJSON() {
  const data = await fs.readFile(planetsConfirmedJsonPath, 'utf-8')
  return data
}

export async function fetchCSVDataInMemoryStream(limit: number) {
  const readStream = fsStream.createReadStream(planetsConfirmedCsvPath, 'utf-8')
  const data = await readStreamAsync(readStream)
  const parsedData = parseStreamResponseToJson(data, limit)
  return parsedData
}

// TODO: Some issues in breaking to chunk based on the large size of json response
export async function fetchDataFromApi(url: string, limit: number) {
  const response = await axios.get(url, { responseType: 'stream' })

  const limitedResponse = await limitResponseChunks(response, limit)
  const parsedData = await parseResponseToJSON(limitedResponse)
  return parsedData
}
