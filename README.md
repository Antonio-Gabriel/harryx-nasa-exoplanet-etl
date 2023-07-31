# Harryx etl

Harryx is a service that pulls data from NASA exoplanets to deliver to another service in my ecosystem.

Basically, we just want to know if a planet is of high severity or not. If yes, we get the data and make some transformations to be used. If not, we just skip it.

## How to start

First, you need to download the CSV file with all the data, or you can exchange the fetch method in the extraction stage `src/stages/extraction` to *fetchDataFromApi*.

However, I regret to inform you that there are some issues with this fetch method in this version. The issue is with the stream, and I will be able to solve it later.

The command to download the CSV file with a large scale of data to be processed is:

```bash

wget "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select
+*+from+ps&format=csv" -O "confirmed_planets.csv"
```

After downloading, move the file to `src/storage`, so that the application can extract and transform the data inside it.

You can also define the amount of data you want to retrieve.

```js
const planetsDataChunk = await fetchCSVDataInMemoryStream(40) // Quantity of planets to verify
```

This file you can be found at: [File](src/stages/extraction/planets-extraction-stage-stream.ts)

After completing all of these steps, run the following command.

```bash
npm install

# run the script
npm run start:pipeline
```

## Features

- [x] Pulls data from exoplanets into NASA
- [x] Transforms the data to be loaded into our database
- [x] Creates different types of data fetchers based on the variety of ways the NASA platform can get the same data
- [x] Creates a database to load the data
- [x] Configures Prisma to connect to the database
- [x] Configures a bash command to check if the script has already been run