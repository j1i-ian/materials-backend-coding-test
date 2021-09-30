import fetch from 'node-fetch';

import { Metadata } from 'main/models/metadata.model';
import { MetadataDao } from './metadata.dao';
import { Converter } from '../utils/converter.service';

export class MetadataService {

    metadataDao: MetadataDao;
    converter: Converter;

    constructor() {
        this.metadataDao = new MetadataDao();
        this.converter = new Converter();
    }

    async getAllMetadatas(): Promise<Metadata[]> {

        const allMetadata = await this.metadataDao.getMetadatas();
        return allMetadata;
    }

    async saveMetadatas(newMetadata: Pick<Metadata, 'url'>): Promise<Metadata> {

        const { url } = newMetadata;

        // fetch metadata from sites.
        const resp = await fetch(url);
        const targetPageHtml = await resp.text() as string;

        const metadata = this.converter.convertToMetadata(targetPageHtml);

        // save to mongo
        const savedMetadata = metadata;

        return savedMetadata;
    }

}
