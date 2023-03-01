import { Fomento } from "../entities/Fomento";

export interface IFomentoRepository {
    findByCall(call: string): Promise<Fomento>;
    save(fomento: Fomento): Promise<void>;
}