import { Decimal } from '@prisma/client/runtime/library'
import { v4 as uuidV4 } from 'uuid'

type PlanetProps = {
  name: string
  mass: Decimal
  registered_at?: Date
}

export class Planet {
  private _id: string

  constructor(public readonly props: PlanetProps, id?: string) {
    this._id = id ?? uuidV4()
  }

  public get id(): string {
    return this._id
  }

  public set name(name: string) {
    this.props.name = name
  }

  public set mass(mass: Decimal) {
    this.props.mass = mass
  }

  public get name(): string {
    return this.props.name
  }

  public get mass(): Decimal {
    return this.props.mass
  }

  public set registered_at(date: Date) {
    this.props.registered_at = date
  }

  public get registered_at(): Date | undefined {
    return this.props.registered_at
  }
}
