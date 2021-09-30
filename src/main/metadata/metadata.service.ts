import { Metadata } from 'main/models/metadata.model';
import { MetadataDao } from './metadata.dao';

export class MetadataService {

    metadataDao: MetadataDao;

    constructor() {
        this.metadataDao = new MetadataDao();
    }

    async getAllMetadatas(): Promise<Metadata[]> {

        const allMetadata = await this.metadataDao.getMetadatas();
        return allMetadata;
    }

    async saveMetadatas(newMetadata: Metadata): Promise<Metadata> {

        // fetch metadata from sites.

        // save to mongo
        const savedMetadata = newMetadata;

        return savedMetadata;
    }

}
