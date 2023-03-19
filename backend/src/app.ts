import express from 'express';
import { router } from './routes';
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

export { app }; // prefer always for named exports
