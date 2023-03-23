export interface ICreateFomentoRequestDTO {
    title: string
    countries: string[]
    region: string[]
    institution: string
    program: string
    call: string | null
    supportType: string
    organizations: string[]
    sector: string[]
    requiresPartner: boolean | null
    partnerType: string[]
    TRLmin: string
    TRLmax: string
    term: string
    objective: string
    elegibility: string
    expenses: string
    minValueReembolsaveis: string
    maxValueReembolsaveis: string
    minValueSubvencao: string
    maxValueSubvencao: string
    supportTax: string
    duration: string
    tax: string
    shortage: string
    amortization: string
    isESG: boolean
    link: string
    abgiInterest: boolean
    status: string
    technologies: string[]
    lastRelease: string
}