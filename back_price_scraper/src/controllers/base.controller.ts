import { Request, Response } from 'express';
import RespGeneric from '../models/RespGeneric';

class BaseController {
    get = async (_req:Request, res:Response) => {
        let resp = new RespGeneric();
        try {
            // call the service
        } catch (e) {
            resp.msg = e as string;
            resp.cod = 500;
        }
        res.json(resp); // Devolvemos objeto respuesta siempre
    }
}

export default new BaseController();