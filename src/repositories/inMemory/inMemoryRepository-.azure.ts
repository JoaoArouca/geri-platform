import { PrismaClient } from '@prisma/client'
import { Fund } from '../../entities/Fund/Fund'
import { IFundRepository } from '../FundRepository'

export class InMemoryRepositoryAzure implements IFundRepository {
  private prisma = new PrismaClient()

  async findByTitle(title: string): Promise<Fund> {
    const fund = await this.prisma.fund.findUnique({ where: { title } })

    return fund as Fund
  }

  async save(fund: Fund): Promise<void> {
    // await this.prisma.fund.create({ data: fund })
    console.log('Created')
  }
}
