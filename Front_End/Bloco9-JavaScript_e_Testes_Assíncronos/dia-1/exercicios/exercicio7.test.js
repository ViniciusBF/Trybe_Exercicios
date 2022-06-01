const { describe, it, expect } = require('@jest/globals');

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('testando função uppercase', () => {
  it('palavra "carta" retorna "CARTA"', (done) => {
    const expected = 'CARTA';
    function testando(para) {
      try {
        expect(para).toBe(expected);
        done();
      } catch(err) {
        done(err);
      }
    }

    uppercase('carta', testando);
  })
});