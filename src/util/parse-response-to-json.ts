import { isNull } from './is-null'

export function parseResponseToJSON(responseData: Uint8Array): any {
  if (isNull(responseData)) {
    console.log('Process done!')
    return
  }

  const decoder = new TextDecoder('utf-8')
  const jsonString = decoder.decode(responseData)
  const dataObject = JSON.parse(jsonString)
  return dataObject
}
