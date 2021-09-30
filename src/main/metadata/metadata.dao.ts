import { model } from 'mongoose';

import { Metadata } from 'main/models/metadata.model';

export class MetadataDao {

    async getAllMetadatas(): Promise<Metadata[]> {

        const Metadata = model('Metadata');
        const allMetadata = await Metadata.find() as any as Metadata[];

        return allMetadata;
    }

    async saveMetadatas(newMetadata: Metadata): Promise<Metadata> {
        // save to mongo
        const savedMetadata = newMetadata;

        return savedMetadata;
    }

}
