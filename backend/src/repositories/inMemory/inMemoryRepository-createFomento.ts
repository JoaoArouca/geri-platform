import { PrismaClient } from "@prisma/client";
import { Fomento } from "../../entities/Fomento";
import { IFomentoRepository } from "../FomentoRepository";

export class InMemoryRepositoryCreateFomento implements IFomentoRepository {
    private globalDB: Fomento[] = [];

    // async findByTitle(title: string): Promise<Fomento> {
    //     const fomento = this.globalDB.find(fomento => fomento.title === title);

    //     return fomento as Fomento;
    // }

    // async save(fomento: Fomento): Promise<void> {
    //     this.globalDB.push(fomento);        
    // }
    private prisma = new PrismaClient();

    async findByTitle(title: string): Promise<Fomento> {
        const fomento = this.globalDB.find(fomento => fomento.title === title);
        // const fomento = this.prisma.fomento.findFirst({
        //     where: {title}
        // })

        return fomento as Fomento;
    }

    async save(fomento: Fomento): Promise<void> {
        console.log("cheguei");        
        await this.prisma.fomento.create({data: fomento});
        console.log("supabase");
        
    }
}