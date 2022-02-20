function validadorSenha(senha) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/

    const minLengthSenha = 6

    const senhaForte = regex.test(senha);

    if (!senha || senha === undefined) {
       return 'O campo senha é obrigatório'; 
    }
    if (senha.length < minLengthSenha) {
        return `Falta(m) ${minLengthSenha - senha.length} caracter(es) para que sua senha seja segura.`
    }
    if (!senhaForte) {
        return `Consulte os critérios para criar uma senha forte.`;
    }
    return `Senha forte`;
};

module.exports = { validadorSenha };