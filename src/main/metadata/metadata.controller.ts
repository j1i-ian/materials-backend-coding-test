import { Router } from 'express';
import { ControllerInterface } from '../controller.interface';


export class MetadataController implements ControllerInterface {

    router: Router = Router();
    url = '/metadata'

    constructor() {

        this.router.get(this.url, () => {
            console.log('get called');
        });
        this.router.post(this.url, () => {
            console.log('post called');
        });
    }

    get routers(): Router {
        return this.router;
    }
}