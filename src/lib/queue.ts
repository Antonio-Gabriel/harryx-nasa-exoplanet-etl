import fastq, {queueAsPromised} from 'fastq'

import { worker } from './worker'
import { QueueContract } from '../contracts/queue-contract'

export const queue: queueAsPromised<QueueContract> = fastq.promise(
    worker,
    Number(process.env.CONCURRENCY)
)