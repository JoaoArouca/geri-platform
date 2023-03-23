import { Fomento } from "../../entities/Fomento";
import { IFomentoRepository } from "../FomentoRepository";
import { PrismaClient } from '@prisma/client';

export class InMemoryRepositorySupabase implements IFomentoRepository {
    private prisma = new PrismaClient();
    private globalDB: Fomento[] = [];

    async findByTitle(title: string): Promise<Fomento> {
        // needs new check program + call
        const fomento = this.globalDB.find(fomento => fomento.title === title);

        return fomento as Fomento;
    }

    async save(fomento: Fomento): Promise<void> {
        await this.prisma.fomento.create({data: fomento});
        console.log("Created");
    }
}