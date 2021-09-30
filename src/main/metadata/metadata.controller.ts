import { Router } from 'express';
import { Metadata } from 'main/models/metadata.model';
import { ControllerInterface } from '../controller.interface';
import { MetadataService } from './metadata.service';


export class MetadataController implements ControllerInterface {

    router: Router = Router();

    service = new MetadataService();

    constructor() {

        this.router.get('/metadata', async (req, res) => {
            const allMetadata = await this.service.getAllMetadatas();
            res.send(allMetadata);
        });

        this.router.post('/metadatas', async (req, res) => {

            const newMetdata = req.body as Metadata;
            const created = await this.service.saveMetadatas(newMetdata);
            res.send(created);
        });
    }

    get routers(): Router {
        return this.router;
    }
}
