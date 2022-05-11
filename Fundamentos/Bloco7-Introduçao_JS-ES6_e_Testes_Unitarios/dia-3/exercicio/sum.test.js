const {sum, myRemove, myFizzBuzz, searchEmployee} = require('./sum');

describe('Testando função sum', () => {
  test('testando se a soma de 4 + 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  test('testando se a soma de 0 + 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  test('testando se a soma de 4 + "5" resulta em erro', () => {
    expect(() => sum(4, '5')).toThrow();
  })
  test('testando se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => sum()).toThrow('parameters must be numbers');
  })
});

describe('Testando função myRemove', () => {
  test('Testando se inserir um array retorna o array - o item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  test('Testando se inserir um array não retorna o array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  test('Testando se inserir um array retorna o array - o item', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});

describe('Testando função myFizzBuzz', () => {
  test('Testando se inserir 15 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  test('Testando se inserir 3 retorna fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })
  test('Testando se inserir 5 retorna buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })
  test('Testando se inserir 7 retorna o mesmo', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })
  test('Testando se inserir "3" retorna falso', () => {
    expect(myFizzBuzz("3")).toBeFalsy();
  })
});

describe('Testando função searchEmployee', () => {
  test('testando se informações estão certas', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
  })
  test('testando com id errado', () => {
    expect(searchEmployee('8579-0', 'lastName')).toBe('ID não identificada');
  })
  test('testando com informação indisponivel', () => {
    expect(searchEmployee('8579-6', 'filmeFavorito')).toBe('Informação indisponível');
  })
});