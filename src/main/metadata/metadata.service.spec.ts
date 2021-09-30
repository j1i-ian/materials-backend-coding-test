import { MetadataRepository } from './metadata.repository';
import { MetadataService } from './metadata.service';

const service = new MetadataService();
const dao = new MetadataRepository();

test('check service is defined', () => {
  expect(service);
});

test('check service is defined', () => {
  dao.getAllMetadatas = jest.fn().mockResolvedValue([]);

  expect(service.getAllMetadatas());
});
