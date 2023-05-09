/* eslint-disable no-useless-constructor */
import { Fund } from '../../entities/Fund/Fund'
import { IFundRepository } from '../../repositories/FundRepository'
import { ICreateFundRequestDTO } from './CreateFundDTO'

export class CreateFund {
  constructor(private fundRepository: IFundRepository) {}

  async execute(data: ICreateFundRequestDTO) {
    const fundAlreadyExists = await this.fundRepository.findByTitle(data.title)

    if (fundAlreadyExists) {
      throw new Error('Fomento already exists')
    }

    const fomento = new Fund(data)

    await this.fundRepository.save(fomento)

    return fomento
  }
}
