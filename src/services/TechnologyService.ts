import { PrismaClient } from '@prisma/client'
import { Technology } from '../entities/Technology/Technology'

export class TechnologyService {
  private prisma = new PrismaClient()

  async getTechnologiesByName(names: string[]): Promise<Technology[]> {
    if (!names || names.length === 0) {
      throw new Error('Names array cannot be empty or undefined')
    }

    const technologies = await this.prisma.technology.findMany({
      where: {
        name: {
          in: names,
        },
      },
    })

    const alltechnologiesExists = technologies.every((technology) =>
      names.includes(technology.name),
    )

    if (!alltechnologiesExists) {
      throw new Error('Not all technologies were found in the database')
    }

    return technologies
  }
}
