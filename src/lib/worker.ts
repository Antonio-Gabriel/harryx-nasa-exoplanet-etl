import chalk from 'chalk'
import { QueueContract } from '../contracts/queue-contract'

export async function worker({ name, mass }: QueueContract) {
  console.log(chalk.blue(`SAVE PLANETS INTO DATABASE`))

  console.log(name, mass)
}
