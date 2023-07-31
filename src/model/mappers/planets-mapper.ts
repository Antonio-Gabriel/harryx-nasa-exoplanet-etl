import { Planet } from '../planet'

export class PlanetsModelMapper {
  public static toModel(planet: Planet) {
    return {
      id: planet.id,
      name: planet.name,
      mass: planet.mass,
    }
  }

  public static toEntity(entity: any) {
    return new Planet(
      {
        name: entity.name,
        mass: entity.mass,
        registered_at: entity.registered_at,
      },
      entity.id
    )
  }
}
