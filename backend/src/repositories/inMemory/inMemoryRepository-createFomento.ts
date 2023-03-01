import { Fomento } from "../../entities/Fomento";
import { IFomentoRepository } from "../FomentoRepository";

export class InMemoryRepositoryCreateFomento implements IFomentoRepository {
    private globalDB: Fomento[] = [];

    async findByCall(call: string): Promise<Fomento> {
        const fomento = this.globalDB.find(fomento => fomento.call === call);

        return fomento as Fomento;
    }

    async save(fomento: Fomento): Promise<void> {
        this.globalDB.push(fomento);
    }

}