import { Router } from "express";
import { createFomentoController } from "./useCases/createFomento";

const router = Router();

router.post('/fomento', (req, res) => {
    return createFomentoController.handle(req, res);
});

router.get('/', (_req, res) => {
    return res.status(201).send('hello world');
});

export { router };