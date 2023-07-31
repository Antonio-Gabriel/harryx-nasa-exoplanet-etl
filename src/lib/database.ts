import { Planet } from 'src/model/planet'
import { prismaClient } from './prisma-client'
import { PlanetsModelMapper } from 'src/model/mappers/planets-mapper'

export class Database {
  public async create(planet: Planet) {
    await prismaClient.planets.create({
      data: PlanetsModelMapper.toModel(planet),
    })
  }

  public async getPlanets(): Promise<Planet[]> {
    const planets = await prismaClient.planets.findMany()
    return planets.map(PlanetsModelMapper.toEntity)
  }
}
