import { InMemoryRepositorySupabase } from "../../repositories/inMemory/inMemoryRepository-supabase";
import { CreateFomento } from "./CreateFomento";
import { CreateFomentoController } from "./CreateFomentoController";

const inMemoryRepositoryCreateFomento = new InMemoryRepositorySupabase();

const createFomento = new CreateFomento(inMemoryRepositoryCreateFomento);

const createFomentoController = new CreateFomentoController(createFomento);

export { createFomento, createFomentoController }