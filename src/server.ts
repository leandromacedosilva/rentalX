import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-error";
import swaggerUi from "swagger-ui-express";

import { AppError } from "./errors/AppError";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import "./database";
import "./shared/container";

const app = express();

require("dotenv").config();

const port = process.env.PORT || 3333;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }
        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
        next();
    }
);

// app.listen(3333, () => console.log("EXPRESS Server running!"));
app.listen(port, () => {
    console.log(`EXPRESS Server running at http://127.0.0.1:${port}`);
});
