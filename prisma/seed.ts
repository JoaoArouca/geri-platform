// import { PrismaClient, Prisma } from '@prisma/client'

// const prisma = new PrismaClient()

// const data: Prisma.FomentoCreateInput[] = [
// {
//   countries: ["Brasil"],
//   title: "teste 201",
//   region: ['Nacional'],
//   institution: "BNDES",
//   program: "Financiamento",
//   call: "Financiamento x",
//   supportType: "Recursos reembolsável",
//   organizations: "['Todas']",
//   sector: ['TI'],
//   requiresPartner: false,
//   partnerType: ['Não se aplica'],
//   TRLmin: "Não especificado",
//   TRLmax: "Não especificado",
//   term: "Não especificado",
//   objective: "Do something great",
//   elegibility: "Todo tipo de Empresa",
//   expenses: 'diárias',
//   minValueReembolsaveis: "Não especificado",
//   maxValueReembolsaveis: "Não especificado",
//   minValueSubvencao: "Não se aplica",
//   maxValueSubvencao: "Não se aplica",
//   supportTax: "Não especificado",
//   duration: "36",
//   tax: "Não especificado",
//   shortage: "Não especificado",
//   amortization: "Não especificado",
//   isESG: false,
//   link: "Some Link here",
//   status: "Ativo",
//   technologies: ['Inteligência Artificial'],
//   lastRelease: "12/01/2023"
// }
// ]
import { PrismaClient } from '@prisma/client'
import { Country } from '../src/entities/Country/Country'
import { Sector } from '../src/entities/Sector/Sector'
import { Region } from '../src/entities/Region/Region'
import { Organization } from '../src/entities/Organization/Organization'
import { PartnerType } from '../src/entities/PartnerType/PartnerType'
import { Technology } from '../src/entities/Technology/Technology'

const prisma = new PrismaClient()

const countryNames = [
  'Brasil',
  'Alemanha',
  'Canada',
  'Europa',
  'França',
  'Irlanda',
  'USA',
  'Reino Unido',
  'Outros países',
]
const sectorNames = [
  'Aeronáutica',
  'Agricultura',
  'Alimentos e bebidas',
  'Artes',
  'Automotivo',
  'Bens de Consumo',
  'Biotecnologia',
  'Construção Civil e Engenharia',
  'Cosmético',
  'Ecologia e Meio Ambiente',
  'Educação',
  'Eletrônico',
  'Energia',
  'Espaço e Defesa',
  'Farmacêutico',
  'Financeiro',
  'Indústria',
  'Jogos e entretenimento',
  'Logística',
  'Manufatura',
  'Mídia',
  'Mobilidade e Transporte',
  'Não especificado',
  'Papel e Celulose',
  'Química e Petroquímica',
  'Saneamento e Resíduos',
  'Saúde',
  'Siderurgia, Metalurgia e Mineração',
  'Social',
  'Telecomunicações',
  'TI',
  'Turismo',
]

const regionNames = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Centro-Oeste',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Nacional',
  'Nordeste',
  'Norte',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Sudeste',
  'Sul',
  'Tocantins',
]

const organizationTypes = [
  'Grande',
  'ICTs',
  'Média',
  'Organizações sem fins lucrativos',
  'Pequena',
  'Startup',
  'Todas',
]

const partnerTypes = [
  'Empresa',
  'ICT',
  'Startup',
  'Não se aplica',
  'Não especificado',
]

const technologyNames = [
  'Biotecnologia',
  'ADAS - Advanced Driver, Assistance Systems',
  'Biocombustíveis',
  'Cibersegurança',
  'Cidades Inteligentes',
  'Ciência de Dados',
  'Cloud',
  'Conectividade',
  'Cultura',
  'Deep learning',
  'Descarbonização',
  'Desenvolvimento Sustentável',
  'Design',
  'Digital Twins',
  'Dinâmica veicular',
  'Dispositivos agrícolas',
  'Economia Circular',
  'Educação',
  'Eficiência Energética',
  'Energia Limpa',
  'Gestão e Governança',
  'Hidrogênio',
  'Indústria 4.0 ou 5.0',
  'Infraestrutura',
  'Inteligência Artificial',
  'IoT',
  'Logística',
  'Machine Learning',
  'Manufatura',
  'Materiais',
  'Mobilidade e Transporte',
  'Modelagem numérica',
  'Nanotecnologia',
  'Não especificado',
  'Powertrain Alternativo',
  'Preservação dos Recursos Hídricos',
  'Preservação/Recuperação Ecológica',
  'Propriedade Intelectual',
  'Quântica',
  'Química Verde',
  'Saneamento e Resíduos',
  'Saúde',
  'Segurança veicular',
  'Sistemas Agroflorestais/ILP',
  'Social',
  'Socioambiental',
  'Sustentabilidade Urbana',
  'Transformação digital',
]

const partnerTypeEntities = partnerTypes.map(
  (type) => new PartnerType({ name: type }),
)

const organizations = organizationTypes.map(
  (name) => new Organization({ name }),
)
const regions = regionNames.map((name) => new Region({ name }))
const technologies = technologyNames.map((name) => new Technology({ name }))
const sectors = sectorNames.map((name) => new Sector({ name }))
const countries = countryNames.map((name) => new Country({ name }))

async function seed() {
  await Promise.all(
    countries.map(async (country) => {
      await prisma.country.create({ data: country })
    }),
  )

  await Promise.all(
    sectors.map(async (sector) => {
      await prisma.sector.create({ data: sector })
    }),
  )

  await Promise.all(
    regions.map(async (region) => {
      await prisma.region.create({ data: region })
    }),
  )

  await Promise.all(
    organizations.map(async (organization) => {
      await prisma.organization.create({ data: organization })
    }),
  )

  await Promise.all(
    partnerTypeEntities.map(async (partner) => {
      await prisma.partnerType.create({ data: partner })
    }),
  )

  await Promise.all(
    technologies.map(async (technology) => {
      await prisma.technology.create({ data: technology })
    }),
  )
}

seed().catch((e) => {
  console.error(e)
  process.exit(1)
})
