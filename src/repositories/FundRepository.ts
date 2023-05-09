import { Fund } from '../entities/Fund/Fund'

export interface IFundRepository {
  findByTitle(title: string): Promise<Fund>
  save(fomento: Fund): Promise<void>
}
