import { Fomento } from "../entities/Fomento";

export interface IFomentoRepository {
    findByTitle(title: string): Promise<Fomento>;
    save(fomento: Fomento): Promise<void>;
}