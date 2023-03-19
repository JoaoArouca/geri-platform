import { Fomento } from "../../entities/Fomento";
import { IFomentoRepository } from "../FomentoRepository";
import { PrismaClient } from '@prisma/client'

export class InMemoryRepositorySupabase implements IFomentoRepository {
    private prisma = new PrismaClient();
    private globalDB: Fomento[] = [];

    async findByTitle(title: string): Promise<Fomento> {
        const fomento = this.globalDB.find(fomento => fomento.title === title);

        return fomento as Fomento;
    }

    async save(fomento: Fomento): Promise<void> {
        console.log("cheguei");        
        this.prisma.fomento.create({data: fomento});     
    }

}