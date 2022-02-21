const { printarTriangulo } = require('../desafio1');

describe('Desafio 1', () => {
    test('Verifica se o parâmetro é um valor numérico', () => {
        expect(printarTriangulo('5')).toBe('É necessário informar um valor numérico');
    });
    test('Verifica se a função retorna uma string', () => {
        expect(typeof printarTriangulo(5)).toBe('string');
    });
});