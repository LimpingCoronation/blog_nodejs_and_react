import * as dotenv from "dotenv";
dotenv.config({path: ".env"});
import mysql, { Connection } from "mysql2/promise";

export default class DBServise {
    public connect: Promise<Connection>;

    constructor() {
        this.connect = mysql.createConnection({
            host: process.env.DB_HOST,
            password: process.env.DB_PASSWORD,
            user: process.env.DB_USER,
            database: process.env.DB_NAME
        });
    }
}