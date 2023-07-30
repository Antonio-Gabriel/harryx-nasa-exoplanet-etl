import * as fsStream from 'fs'

export function readStreamAsync(
  readStream: fsStream.ReadStream
): Promise<string> {
  return new Promise((resolve, reject) => {
    let dataChunk = ''

    readStream.on('data', (chunk) => {
      dataChunk += chunk
    })

    readStream.on('error', (error) => {
      reject(error)
    })

    readStream.on('end', () => {
      resolve(dataChunk)
    })
  })
}
