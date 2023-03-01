import { InMemoryRepositoryCreateFomento } from "../../repositories/inMemory/inMemoryRepository-createFomento";
import { CreateFomento } from "./CreateFomento";
import { CreateFomentoController } from "./CreateFomentoController";

const inMemoryRepositoryCreateFomento = new InMemoryRepositoryCreateFomento();

const createFomento = new CreateFomento(inMemoryRepositoryCreateFomento);

const createFomentoController = new CreateFomentoController(createFomento);

export { createFomento, createFomentoController }