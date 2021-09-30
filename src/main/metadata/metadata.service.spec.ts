import { MetadataDao } from './metadata.dao';
import { MetadataService } from './metadata.service';

const service = new MetadataService();
const dao = new MetadataDao();

test('check service is defined', () => {
    expect(service);
});

test('check service is defined', () => {

    dao.getMetadatas = jest.fn().mockResolvedValue([]);

    expect(service.getAllMetadatas());
});

