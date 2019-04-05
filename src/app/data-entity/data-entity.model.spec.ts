import { DataEntity } from './data-entity.model';

describe('DataEntity', () => {
  it('should create an instance', () => {
    expect(new DataEntity(0,0,0,0,0,0)).toBeTruthy();
  });
});
