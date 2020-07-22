/* eslint-disable jest/prefer-expect-assertions */
import { promisify } from 'util';
import { helloWorld } from '@src/handler';

const handler = promisify(helloWorld);
describe('service process-search', () => {
  it('should exists', () => {
    expect.hasAssertions();
    expect(handler).toBeDefined();
  });
});
