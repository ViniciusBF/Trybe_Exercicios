// Verifique se a importação do arquivo correto está sendo feita.
const { expect, it, describe } = require("@jest/globals");
const { getPokemonDetails } = require("./exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expected = new Error('Não temos esse pokémon para você :(');
    function testando(err, res) {
      try {
        expect(err).toEqual(expected);
        done();
      } catch(err) {
        done(err);
      }
    }
    getPokemonDetails('Blastoise', testando);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expected = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';
    function testando(err, res) {
      try {
        expect(res).toEqual(expected);
        done();
      } catch(err) {
        done(err);
      }
    }
    getPokemonDetails('Squirtle', testando);
  });
});