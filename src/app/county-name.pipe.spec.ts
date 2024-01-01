import { CountyNamePipe } from './county-name.pipe';

describe('CountyNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CountyNamePipe();
    expect(pipe).toBeTruthy();
  });
});
