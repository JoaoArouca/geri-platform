import { Fund } from '../../entities/Fund/Fund'
import { IFundRepository } from '../FundRepository'

export class InMemoryRepositoryCreateFund implements IFundRepository {
  private localDbForTests: Fund[] = []

  async findByKey(title: string): Promise<Fund> {
    const fomento = this.localDbForTests.find(
      (fomento) => fomento.title === title,
    )

    return fomento as Fund
  }

  async save(fomento: Fund): Promise<void> {
    this.localDbForTests.push(fomento)
  }
}
