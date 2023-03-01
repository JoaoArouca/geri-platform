import { uuid } from "uuidv4"

// export interface IFomento {
//     id?: string
//     countries: string | string[]
//     region: string | string[]
//     institution: string
//     program: string
//     call: string
//     supportType: string
//     organizations: string
//     sector: string
//     requiresPartner: boolean
//     partnerType: string
//     TRLmin: string
//     TRLmax: string
//     term: Date | string
//     objective: string
//     elegibility: string
//     expenses: string
//     minValueReembolsaveis: string
//     maxValueReembolsaveis: string
//     minValueSubvencao: string
//     maxValueSubvencao: string
//     supportTax: string
//     duration: string
//     tax: string
//     shortage: string
//     amortization: string
//     isESG: boolean
//     link: string
//     abgiInterest: boolean
//     status: string
//     areasOrtechnologies: string | string[]
//     lastRelease: Date
// }

export class Fomento {
    id: string
    countries: string | string[]
    region: string | string[]
    institution: string
    program: string
    call: string
    supportType: string
    organizations: string
    sector: string
    requiresPartner: boolean
    partnerType: string
    TRLmin: string
    TRLmax: string
    term: Date | string
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
    areasOrtechnologies: string | string[]
    lastRelease: Date

    constructor(props: Omit<Fomento, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
        // needs validations
    }
}
