import chalk from 'chalk'
import { AxiosResponse } from 'axios'

export function limitResponseChunks(
  response: AxiosResponse,
  limit: number
): Promise<Uint8Array> {
  return new Promise<Uint8Array>((resolve) => {
    const dataChunks: Uint8Array[] = []
    let receivedChunks = 0

    response.data.on('data', (chunk: Uint8Array) => {
      if (receivedChunks >= limit) {
        response.data.destroy() // Break stage
        const buffer = Buffer.concat(dataChunks)
        resolve(buffer)
      } else {
        dataChunks.push(chunk)
        console.log(
          chalk.green(`[HARRYX]: planet object ${receivedChunks} transformed`)
        )
        receivedChunks++
      }
    })

    response.data.on('end', () => {
      const buffer = Buffer.concat(dataChunks)
      resolve(buffer)
    })
  })
}
