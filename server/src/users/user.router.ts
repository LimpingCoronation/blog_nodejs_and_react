import { Router } from "express";

import { Request, Response } from "express";
import DBServise from "../db/db.service";

export default class AuthController {
    public router: Router;
    public db: DBServise;

    constructor(db: DBServise) {
        this.router = Router();
        this.db = db;
        this.router.post("registration", this.registration);
        this.router.get("login", this.login);
    }

    registration(req: Request, res: Response) {

    }

    login(req: Request, res: Response) {
        
    }
}