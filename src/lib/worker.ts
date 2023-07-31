import chalk from 'chalk'
import { Database } from './database'
import { Planet } from 'src/model/planet'
import { QueueContract } from '../contracts/queue-contract'

export async function worker({ name, mass }: QueueContract) {
  const repository = new Database()
  await repository.create(new Planet({ name, mass }))

  console.log(chalk.blue(`Planet ${name} saved successfully`))
}
