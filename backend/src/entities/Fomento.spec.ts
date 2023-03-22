import { Fomento } from "./Fomento";
import { describe, expect, it } from 'vitest'

describe("Test Fomento Class", () => {
    it("should be able to create a new Fomento", () => {
        const fomento = new Fomento({
            countries: ['Brasil'],
            title: 'teste 1',
            region: ['Nacional'],
            institution: 'BNDES',
            program: 'Financiamento',
            call: 'Financiamento x',
            supportType: 'Recursos reembolsável',
            organizations: ['Todas'],
            sector: ['TI'],
            requiresPartner: false,
            partnerType: ['Não se aplica'],
            TRLmin: 'Não especificado',
            TRLmax: 'Não especificado',
            term: 'Não especificado',
            objective: 'Do something great',
            elegibility: 'Todo tipo de Empresa',
            expenses: ['Gastos patronais, diárias', 'equipamentos'],
            minValueReembolsaveis: 'Não especificado',
            maxValueReembolsaveis: 'Não especificado',
            minValueSubvencao: 'Não se aplica',
            maxValueSubvencao: 'Não se aplica',
            supportTax: 'Não especificado',
            duration: '36',
            tax: 'Não especificado',
            shortage: 'Não especificado',
            amortization: 'Não especificado',
            isESG: false,
            link: 'Some Link here',
            abgiInterest: true,
            status: 'Ativo',
            technologies: ['Inteligência Artificial', 'Deep learning', 'IoT'],
            lastRelease: new Date().toString(),
        });

        expect(fomento).toBeInstanceOf(Fomento)
        expect(fomento.institution).toBe('BNDES')
        expect(fomento.isESG).toBe(false)

    })
})