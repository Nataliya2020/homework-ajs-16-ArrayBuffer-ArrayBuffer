import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('checking the correctness of converting the contents of a typed array to a string', () => {
  const buffer = new ArrayBufferConverter();
  const getBufferString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const bufResult = getBuffer();
  buffer.load(bufResult);

  expect(buffer.toString()).toBe(getBufferString);
});
