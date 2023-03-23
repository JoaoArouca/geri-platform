import { Request, Response } from "express";
import { CreateFomento } from "./CreateFomento";

export class CreateFomentoController {
    constructor(
        private createFomento: CreateFomento
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        
        const {
            title,
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
            technologies,
            lastRelease } = req.body;
            // Class validator

        try {            
            const newFomento = await this.createFomento.execute({
                title,
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
                technologies,
                lastRelease
            });

            return res.status(201).json(newFomento);
        } catch (err) {
            return res.status(400).json()
        }
    }
}