const { anagramas } = require('../desafio3')


describe('Desafio 3', () => {
    test('Retorna quantos anagramas existem na string', () => {
        expect(anagramas('ovo')).toBe(2);
      });
})
