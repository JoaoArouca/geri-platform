import { InMemoryRepositoryAzure } from '../../repositories/inMemory/inMemoryRepository-.azure'
import { CreateFund } from './CreateFund'
import { CreateFomentoController } from './CreateFomentoController'

const inMemoryRepositoryCreateFomento = new InMemoryRepositoryAzure()

const createFund = new CreateFund(inMemoryRepositoryCreateFomento)

const createFomentoController = new CreateFomentoController(createFund)

export { createFund, createFomentoController }
