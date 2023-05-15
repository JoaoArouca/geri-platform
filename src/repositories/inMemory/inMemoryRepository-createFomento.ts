import { Fund } from '../../entities/Fund/Fund'
import { IFundRepositoryTestArea } from '../FundRepository'

export class InMemoryRepositoryCreateFund implements IFundRepositoryTestArea {
  private localDbForTests: Fund[] = []

  findByKey(program: string | null, call: string | null): boolean {
    if (!program) {
      program = ''
    }

    const key = program.concat(call === null ? '' : call)
    const fund = this.localDbForTests.find((fund) => fund.key === key)

    if (fund === null) {
      return false
    }

    return true
  }

  save(fund: Fund): void {
    this.localDbForTests.push(fund)
  }
}
