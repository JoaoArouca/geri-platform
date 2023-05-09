/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { CreateFund } from './CreateFund'
import { CountryService } from '../../services/CountryService'
import { TechnologyService } from '../../services/TechnologyService'
import { SectorService } from '../../services/SectorService'

export class CreateFomentoController {
  constructor(private createFomento: CreateFund) {}

  async handle(req: Request, res: Response): Promise<Response> {
    // const {
    //   title,
    //   countries,
    //   region,
    //   institution,
    //   program,
    //   call,
    //   supportType,
    //   organizations,
    //   sector,
    //   requiresPartner,
    //   partnerType,
    //   TRLmin,
    //   TRLmax,
    //   technologies,
    //   term,
    //   objective,
    //   elegibility,
    //   expenses,
    //   currency,
    //   minValue,
    //   maxValue,
    //   supportTax,
    //   duration,
    //   tax,
    //   shortage,
    //   amortization,
    //   isESG,
    //   link,
    //   status,
    //   lastRelease,
    //   observation,
    // } = req.body
    // Class validator
    try {
      const { countries, technologies, sector } = req.body
      const countryService = new CountryService()
      const technologyService = new TechnologyService()
      const sectorService = new SectorService()

      const countriesList = await countryService.getCountriesByName(countries)
      const technologiesList = await technologyService.getTechnologiesByName(
        technologies,
      )
      const sectorsList = await sectorService.getSectorByName(sector)

      return res.status(201).json({
        countries: countriesList,
        technologies: technologiesList,
        sector: sectorsList,
      })
    } catch (error) {
      return res.status(401)
    }

    // try {
    //   //         const newFomento = await this.createFomento.execute({
    //   //             title: title,
    //   //         countries: [{id: 'id', name: 'oi'}],
    //   //   region:  [{id: 'id', name: 'oi'}],
    //   //   institution,
    //   //   program,
    //   //   call,
    //   //   supportType,
    //   //   organizations:  [{id: 'id', name: 'oi'}],
    //   //   sector,
    //   //   requiresPartner,
    //   //   partnerType:  [{id: 'id', name: 'oi'}],
    //   //   TRLmin,
    //   //   TRLmax,
    //   //   technologies:  [{id: 'id', name: 'oi'}],
    //   //   term,
    //   //   objective,
    //   //   elegibility,
    //   //   expenses,
    //   //   currency,
    //   //   minValue,
    //   //   maxValue,
    //   //   supportTax,
    //   //   duration,
    //   //   tax,
    //   //   shortage,
    //   //   amortization,
    //   //   isESG,
    //   //   link,
    //   //   status,
    //   //   lastRelease,
    //   //   observation,
    //   //         });

    //   return res.status(201).json()
    // } catch (err) {
    //   return res.status(400).json()
    // }
  }
}
