export function parseStreamResponseToJson(csvData: string, limit: number) {
  const rows = csvData.split('\n')
  const headers = rows.shift()?.split(',') || []
  rows.pop()

  let receivedChunks = 0

  const planets: Record<string, string>[] = []

  for (const row of rows) {
    const planetsRowData = row.split(',')
    const planetObject: Record<string, string> = {}
    for (let i = 0; i < headers.length; i++) {
      planetObject[headers[i]] = planetsRowData[i]
    }

    if (receivedChunks < limit) {
      planets.push(planetObject)
      receivedChunks++
    }
  }

  return JSON.stringify(planets)
}
