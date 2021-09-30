import fetch from 'node-fetch';

import { Metadata } from 'main/models/metadata.model';
import { MetadataRepository } from './metadata.repository';
import { Converter } from '../utils/converter.service';
import { MetadataResponse } from 'main/models/metadata-response.dto';

export class MetadataService {
  metadataDao: MetadataRepository;
  converter: Converter;

  constructor() {
    this.metadataDao = new MetadataRepository();
    this.converter = new Converter();
  }

  async getAllMetadatas(): Promise<MetadataResponse[]> {
    const allMetadata = await this.metadataDao.getAllMetadatas();

    return allMetadata;
  }

  async saveMetadatas(
    newMetadata: Pick<Metadata, 'url'>
  ): Promise<MetadataResponse> {
    const { url } = newMetadata;

    // fetch metadata from sites.
    const resp = await fetch(url);
    const targetPageHtml = (await resp.text()) as string;

    const convertedMetadata = this.converter.convertToMetadata(targetPageHtml);

    // save to mongo
    const savedMetadata = await this.metadataDao.saveMetadatas(
      convertedMetadata
    );

    return savedMetadata;
  }
}
