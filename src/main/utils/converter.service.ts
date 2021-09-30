import { MetadataResponse } from 'main/models/metadata-response.dto';
import { Metadata } from 'main/models/metadata.model';
import { HTMLElement, parse } from 'node-html-parser';

interface HTMLMetaAttr {
    property: string;
    content: string;
}

export class Converter {

    convertToMetadata(targetPageHtml: string): Metadata {

        const targetDom = parse(targetPageHtml) as HTMLElement;
        const ogMetadataElements = targetDom.querySelectorAll('meta[property*=og]');
        const attributeList = ogMetadataElements.map(m => m.attributes) as any as HTMLMetaAttr[];

        const propertyMaps = {
            'og:description': 'description',
            'og:image': 'image',
            'og:site_name': 'publisher',
            'og:title': 'title',
            'og:url': 'url'
        };

        const metadata = {} as Metadata;
        attributeList.forEach(attr => {
            const metadataProperty = propertyMaps[attr.property];

            if (metadataProperty) {
                metadata[metadataProperty] = attr.content;
            }
        });
        metadata.date = new Date().toISOString();

        return metadata;
    }
}
