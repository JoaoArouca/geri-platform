import { Request, Response } from "express";
import { CreateFomento } from "./CreateFomento";

export class CreateFomentoController {
    constructor(
        private createFomento: CreateFomento
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { countries,
            region,
            institution,
            program,
            call,
            supportType,
            organizations,
            sector,
            requiresPartner,
            partnerType,
            TRLmin,
            TRLmax,
            term,
            objective,
            elegibility,
            expenses,
            minValueReembolsaveis,
            maxValueReembolsaveis,
            minValueSubvencao,
            maxValueSubvencao,
            supportTax,
            duration,
            tax,
            shortage,
            amortization,
            isESG,
            link,
            abgiInterest,
            status,
            areasOrtechnologies,
            lastRelease } = req.body;

        try {
            await this.createFomento.execute({
                countries,
                region,
                institution,
                program,
                call,
                supportType,
                organizations,
                sector,
                requiresPartner,
                partnerType,
                TRLmin,
                TRLmax,
                term,
                objective,
                elegibility,
                expenses,
                minValueReembolsaveis,
                maxValueReembolsaveis,
                minValueSubvencao,
                maxValueSubvencao,
                supportTax,
                duration,
                tax,
                shortage,
                amortization,
                isESG,
                link,
                abgiInterest,
                status,
                areasOrtechnologies,
                lastRelease
            });

            return res.status(201).json(req.body);
        } catch (err) {
            return res.status(400).json()
        }
    }
}