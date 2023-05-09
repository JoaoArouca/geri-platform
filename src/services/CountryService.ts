import { PrismaClient } from '@prisma/client'
import { Country } from '../entities/Country/Country'

export class CountryService {
  private prisma = new PrismaClient()

  async getCountriesByName(names: string[]): Promise<Country[]> {
    if (!names || names.length === 0) {
      throw new Error('Names array cannot be empty or undefined')
    }

    const countries = await this.prisma.country.findMany({
      where: {
        name: {
          in: names,
        },
      },
    })

    const allCountriesExists = countries.every((country) =>
      names.includes(country.name),
    )

    if (!allCountriesExists) {
      throw new Error('Not all countries were found in the database')
    }

    return countries
  }
}
