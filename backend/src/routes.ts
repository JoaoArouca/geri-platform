import { Router } from "express";

const router = Router();

router.post('/fomento', (_req, res) => {
    return res.status(201).send();
});

router.get('/', (_req, res) => {
    return res.status(201).send('hello world');
});

export { router };