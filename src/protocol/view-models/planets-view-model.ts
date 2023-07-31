import { Planet } from 'src/model/planet'

export class PlanetsViewModel {
  static toHttp(planet: Planet) {
    return {
      id: planet.id,
      name: planet.name,
      mass: planet.mass,
      registered_at: planet.registered_at,
    }
  }
}
