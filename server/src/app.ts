import bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config({path: ".env"});
import express, { Application, Request, Response } from "express";

const PORT = process.env.PORT;

class App {
    private app: Application;

    constructor() {
        this.app = express();
    }

    run() {
        this.app.use(bodyParser.json());
        this.app.listen(PORT, () => console.log(`Server is running on ${process.env.HOST}:${PORT}`));
    }
}

const application = new App();
application.run();
