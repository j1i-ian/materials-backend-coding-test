import { Model, model } from 'mongoose';

import { Metadata } from 'main/models/metadata.model';

export class MetadataDao {

    async getAllMetadatas(): Promise<Metadata[]> {

        const Metdata = this.getModel();
        const allMetadata = Metdata.find() as any as Metadata[];

        return allMetadata;
    }

    async saveMetadatas(newMetadata: Metadata): Promise<Metadata> {
        // save to mongo
        const Metdata = this.getModel();
        const savedMetadata = Metdata.insertMany(newMetadata);

        return savedMetadata;
    }

    getModel(): Model<Metadata, {}, {}, {}> {
        const Metadata = model<Metadata>('Metadata');
        return Metadata;
    }

}
