import { PrismaClient } from '@prisma/client'
import { Sector } from '../entities/Sector/Sector'

export class SectorService {
  private prisma = new PrismaClient()

  async getSectorByName(names: string[]): Promise<Sector[]> {
    if (!names || names.length === 0) {
      throw new Error('Sector array cannot be empty or undefined')
    }

    const sectors = await this.prisma.sector.findMany({
      where: {
        name: {
          in: names,
        },
      },
    })

    const allSectorsExists = sectors.every((sector) =>
      names.includes(sector.name),
    )

    if (!allSectorsExists) {
      throw new Error('Not all sectors were found in the database')
    }

    return sectors
  }
}
