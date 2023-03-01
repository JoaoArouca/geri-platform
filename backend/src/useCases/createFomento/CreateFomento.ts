import { Fomento } from "../../entities/Fomento";
import { IFomentoRepository } from "../../repositories/FomentoRepository";
import { ICreateFomentoRequestDTO } from "./CreateFomentoDTO";

export class CreateFomento {

    constructor(
        private fomentoRepository: IFomentoRepository
    ) { }

    async execute(data: ICreateFomentoRequestDTO) {
        const fomentoAlreadyExists = await this.fomentoRepository.findByCall(data.call);

        if (fomentoAlreadyExists) {
            throw new Error("Fomento already exists");
        }

        const fomento = new Fomento(data);

        await this.fomentoRepository.save(fomento);
    }
}