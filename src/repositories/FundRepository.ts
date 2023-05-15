import { Fund } from '../entities/Fund/Fund'

export interface IFundRepository {
  findByKey(program: string | null, call: string | null): Promise<boolean>
  save(fomento: Fund): Promise<void>
}
