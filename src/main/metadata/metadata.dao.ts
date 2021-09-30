import { Metadata } from 'main/models/metadata.model';

export class MetadataDao {

    async getMetadatas(): Promise<Metadata[]> {
        return [];
    }

    async saveMetadatas(newMetadata: Metadata): Promise<Metadata> {
        // save to mongo
        const savedMetadata = newMetadata;

        return savedMetadata;
    }

}
