import { Router } from 'express';
import { ControllerInterface } from '../controller.interface';


export class MetadataController implements ControllerInterface {

    router: Router = Router();

    constructor() {

        this.router.get('/', (req, res) => {
            res.send({
                message: 'get called'
            });
        });
        this.router.post('/', (req, res) => {
            res.send({
                message: 'post called'
            });
        });
    }

    get routers(): Router {
        return this.router;
    }
}