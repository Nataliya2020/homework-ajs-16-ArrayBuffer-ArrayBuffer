export default class ArrayBufferConverter {
  load(value) {
    this.buffer = value;
  }

  toString() {
    this.buffer = new Uint16Array(this.buffer);

    return [...this.buffer].reduce((acc, item) => {
      let str = acc;
      str += String.fromCharCode(item);
      return str;
    }, '');
  }
}
