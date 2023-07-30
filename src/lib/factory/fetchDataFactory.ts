import {
  fetchDataFromApi,
  fetchJSONDataInMemoryJSON,
  fetchCSVDataInMemoryStream,
} from '../fetchData'

export abstract class FetchDataFactory {
  static createInstance() {
    return {
      fetchDataFromApi,
      fetchJSONDataInMemoryJSON,
      fetchCSVDataInMemoryStream,
    }
  }
}
