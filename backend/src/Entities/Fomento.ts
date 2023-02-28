import { uuid } from "uuidv4"

export interface IFomento {
    id?: string
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
}

export class Fomento {
    props: IFomento;

    constructor(props: Omit<IFomento, 'id'>, id?: string) {
        this.props = props;
        if (!id) {
            this.props.id = uuid();
        }
        // needs validations
    }

    get countries(): string | string[] {
        return this.props.countries;
    }

    get region(): string | string[] {
        return this.props.region;
    }

    get institution(): string {
        return this.props.institution;
    }

    get program(): string {
        return this.props.program;
    }

    get call(): string {
        return this.props.call;
    }

    get supportType(): string {
        return this.props.supportType;
    }

    get organizations(): string {
        return this.props.organizations;
    }

    get sector(): string {
        return this.props.sector;
    }

    get requiresPartner(): boolean {
        return this.props.requiresPartner;
    }

    get partnerType(): string {
        return this.props.partnerType;
    }

    get TRLmin(): string {
        return this.props.TRLmin;
    }

    get TRLmax(): string {
        return this.props.TRLmax;
    }

    get term(): string | Date {
        return this.props.term;
    }

    get objective(): string {
        return this.props.objective;
    }

    get elegibility(): string {
        return this.props.elegibility;
    }

    get expenses(): string {
        return this.props.expenses;
    }

    get minValueReembolsaveis(): string {
        return this.props.minValueReembolsaveis;
    }

    get maxValueReembolsaveis(): string {
        return this.props.maxValueReembolsaveis;
    }

    get minValueSubvencao(): string {
        return this.props.minValueSubvencao;
    }

    get maxValueSubvencao(): string {
        return this.props.maxValueSubvencao;
    }

    get supportTax(): string {
        return this.props.supportTax;
    }

    get duration(): string {
        return this.props.duration;
    }

    get tax(): string {
        return this.props.tax;
    }

    get shortage(): string {
        return this.props.shortage;
    }

    get amortization(): string {
        return this.props.amortization;
    }

    get isESG(): boolean {
        return this.props.isESG;
    }

    get link(): string {
        return this.props.link;
    }

    get abgiInterest(): boolean {
        return this.props.abgiInterest;
    }

    get status(): string {
        return this.props.status;
    }

    get areasOrtechnologies(): string | string[] {
        return this.props.areasOrtechnologies;
    }

    get lastRelease(): Date {
        return this.props.lastRelease;
    }
}
