import { Fomento } from "../../entities/Fomento";
import { IFomentoRepository } from "../../repositories/FomentoRepository";
import { ICreateFomentoRequestDTO } from "./CreateFomentoDTO";

export class CreateFomento {

    constructor(
        private fomentoRepository: IFomentoRepository
    ) { }

    async execute(data: ICreateFomentoRequestDTO) {
        console.log("Service");
        
        const fomentoAlreadyExists = await this.fomentoRepository.findByTitle(data.title);

        if (fomentoAlreadyExists) {
            throw new Error("Fomento already exists");
        }

        const fomento = new Fomento(data);

        await this.fomentoRepository.save(fomento);
        
        return fomento;
    }
}