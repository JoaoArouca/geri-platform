import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()

const data: Prisma.FomentoCreateInput[] = [
  {
    countries: "Brasil",
    title: "teste 201",
    region: "['Nacional']",
    institution: "BNDES",
    program: "Financiamento",
    call: "Financiamento x",
    supportType: "Recursos reembolsável",
    organizations: "['Todas']",
    sector: "['TI']",
    requiresPartner: false,
    partnerType: "['Não se aplica']",
    TRLmin: "Não especificado",
    TRLmax: "Não especificado",
    term: "Não especificado",
    objective: "Do something great",
    elegibility: "Todo tipo de Empresa",
    expenses: "['diárias']",
    minValueReembolsaveis: "Não especificado",
    maxValueReembolsaveis: "Não especificado",
    minValueSubvencao: "Não se aplica",
    maxValueSubvencao: "Não se aplica",
    supportTax: "Não especificado",
    duration: "36",
    tax: "Não especificado",
    shortage: "Não especificado",
    amortization: "Não especificado",
    isESG: false,
    link: "Some Link here",
    abgiInterest: true,
    status: "Ativo",
    technologies: "['Inteligência Artificial']",
    lastRelease: "12/01/2023"
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of data) {
    const fomento = await prisma.fomento.create({
      data: u,
    });
    console.log(`Created user with id: ${fomento.id}`);
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect();
  })