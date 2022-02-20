function validadorSenha(senha) {

    const senhaString = senha.toString();
    

    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()-+])(?=.*[0-9])(?=.*[a-z]).{6,}$/

    const senhaForte = regex.test(senhaString);

    if (senhaForte) {
        console.log('senha forte');        
    } else if (senhaString.length === 6) {
        console.log(`faltam ${6 - senhaString.length} caracteres, mas é necessário cumprir as regras para uma senha forte`);

    } else {
        console.log(`faltam ${6 - senhaString.length} caracteres para que a senha seja forte`);
    } 
};


validadorSenha('123');