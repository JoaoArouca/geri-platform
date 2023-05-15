import { PrismaClient } from '@prisma/client'
import { Fund } from '../../entities/Fund/Fund'
import { IFundRepository } from '../FundRepository'

export class InMemoryRepositoryAzure implements IFundRepository {
  private prisma = new PrismaClient()

  async findByKey(
    program: string | null,
    call: string | null,
  ): Promise<boolean> {
    if (!program) {
      program = ''
    }

    const key = program.concat(call === null ? '' : call)
    const fund = await this.prisma.fund.findUnique({
      where: { key },
    })

    if (fund === null) {
      return false
    }

    return true
  }

  async save(fund: Fund): Promise<void> {
    // await this.prisma.fund.create({ data: fund })
    console.log('Created')
  }
}
