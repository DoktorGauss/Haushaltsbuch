import { DataEntityCard } from './data-entity-card.model';

describe('DataEntityCard', () => {
  it('should create an instance', () => {
    expect(new DataEntityCard(0,null,0)).toBeTruthy();
  });
});
