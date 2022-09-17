import * as dotenv from "dotenv";
dotenv.config({path: "../.env"});
import express, { Application } from "express";

const PORT = process.env.HOST_PORT;

class App {
    private app: Application;

    constructor() {
        this.app = express();
    }

    run() {
        this.app.listen(PORT, () => console.log(`Server is running on ${process.env.HOST}:${PORT}`));
    }
}
