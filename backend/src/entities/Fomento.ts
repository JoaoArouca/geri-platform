import { v4 } from 'uuid';

export class Fomento {
    id: string
    title: string
    countries: string[]
    region: string[]
    institution: string
    program: string
    call: string
    supportType: string
    organizations: string[]
    sector: string[]
    requiresPartner: boolean
    partnerType: string[]
    TRLmin: string
    TRLmax: string
    term: string
    objective: string
    elegibility: string
    expenses: string[]
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
    lastRelease: Date

    constructor(props: Omit<Fomento, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = v4();
        }
        // needs validations
    }
}
