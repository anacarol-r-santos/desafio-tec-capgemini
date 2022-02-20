const { resultadoAnagrama } = require('../desafio3')


describe('Desafio 3', () => {
    test('Retorna 2 anagramas para a string "ovo"', () => {
        expect(resultadoAnagrama('ovo')).toBe(2);
      });
    test('Retorna 3 anagramas para a string "ifailuhkqq"', () => {
        expect(resultadoAnagrama('ifailuhkqq')).toBe(3);
      });
    test('Retorna 0 anagramas para a string "abc"', () => {
        expect(resultadoAnagrama('abc')).toBe(0);
      });
})
