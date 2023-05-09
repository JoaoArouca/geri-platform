import { Fund } from "./Fund";
import { describe, expect, it } from 'vitest'

describe("Test Fomento Class", () => {
    it("should be able to create a new Fomento", () => {
        const fomento = new Fund({
            title: 'teste 1',
            countries: [{id: 'id', name: 'Brasil'}],
            region: [{id: 'id', name: 'Nacional'}],
            institution: 'BNDES',
            program: 'Financiamento',
            call: 'Financiamento x',
            supportType: 'Recursos reembolsável',
            organizations: [{id: 'id', name: 'Brasil'}],
            sector: [{id: 'id', name: 'Brasil'}],
            requiresPartner: 'sim',
            partnerType: [{id: 'id', name: 'Brasil'}],
            TRLmin: 'Não especificado',
            TRLmax: 'Não especificado',
            term: 'Não especificado',
            objective: 'Do something great',
            elegibility: 'Todo tipo de Empresa',
            expenses: 'Gastos patronais; diárias; equipamentos',
            minValue: 'Não especificado',
            maxValue: 'Não especificado',
            supportTax: 'Não especificado',
            duration: '36',
            tax: 'Não especificado',
            shortage: 'Não especificado',
            amortization: 'Não especificado',
            isESG: false,
            link: 'Some Link here',
            status: 'Ativo',
            technologies: [{id: 'id', name: 'IA'},{id: 'id', name: 'Machine Learing'}],
            lastRelease: new Date().toString(),
            observation: 'Something',
            currency: 'BRL'
        });

        expect(fomento).toBeInstanceOf(fomento)
        expect(fomento.institution).toBe('BNDES')
        expect(fomento.isESG).toBe(false)

    })
})
