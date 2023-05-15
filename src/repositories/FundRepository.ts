import { Fund } from '../entities/Fund/Fund'

export interface IFundRepository {
  findByKey(program: string | null, call: string | null): Promise<boolean>
  save(fund: Fund): Promise<void>
}

export interface IFundRepositoryTestArea {
  findByKey(program: string | null, call: string | null): boolean
  save(fund: Fund): void
}
