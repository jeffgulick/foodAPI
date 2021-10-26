import add from '../testImport';

describe('This is a test', () => {
  it('should pass', () => {
    expect(add(1, 2)).toBe(3);
  });
});
