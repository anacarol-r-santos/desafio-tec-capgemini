const { validadorSenha } = require('../desafio2')


describe('Desafio 2', () => {

    describe('Verifica se o campo senha está nulo ou vazio', () => {
        test('Se o campo senha estiver nulo', () => {
            expect(validadorSenha()).toBe('O campo senha é obrigatório');
          });
        test('Se o campo senha estiver vazio', () => {
            expect(validadorSenha('')).toBe('O campo senha é obrigatório');
          });
        });

    describe('Retorna a quantidade de caracteres que faltam caso a senha for menor que 6', () => {
        test('Retorna 3 quando o comprimento da senha for 3', () => {
            expect(validadorSenha('cap')).toBe(`Falta(m) 3 caracter(es) para que sua senha seja segura.`);
          });
        test('Retorna 1 quando o comprimento da senha for 5', () => {
            expect(validadorSenha('capge')).toBe(`Falta(m) 1 caracter(es) para que sua senha seja segura.`);
          });
        test('Retorna 2 quando o comprimento da senha for 4', () => {
            expect(validadorSenha('C@p1')).toBe(`Falta(m) 2 caracter(es) para que sua senha seja segura.`);
          });
        });

    describe('Verifica se a senha respeita os requisitos de segurança', () => {
        test('Retorna erro quando a senha não tiver um dígito numérico', () => {
            expect(validadorSenha('c@pGemini')).toBe(`Consulte os critérios para criar uma senha forte.`);
          });
        test('Retorna erro quando a senha não tiver uma letra maiúscula', () => {
            expect(validadorSenha('c@pgem1ni')).toBe(`Consulte os critérios para criar uma senha forte.`);
          });
        test('Retorna erro quando a senha não tiver uma letra minúscula', () => {
            expect(validadorSenha('C@PGEM1N1')).toBe(`Consulte os critérios para criar uma senha forte.`);
          });
        test('Retorna erro quando a senha não tiver um caracter especial', () => {
            expect(validadorSenha('Capgem1ni')).toBe(`Consulte os critérios para criar uma senha forte.`);
          });
        });

    describe('verifica se retorna a mensagem de sucesso caso a senha seja segura', () => {
        test('Retorna "senha forte" caso a senha atenda a todos os critérios de segurança', () => {
            expect(validadorSenha('C@pGem1ni')).toBe(`Senha forte`);
        });
    })
})
