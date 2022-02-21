function criarTriangulo(n) {
    let simbolo = '*';
    let linha = '';
    let posicao = n;
     
    for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
      for (let indexColuna = 0; indexColuna < n + 1; indexColuna += 1) {
        if (indexColuna < posicao) {
          linha = linha + ' ';
        } else {
          linha = linha + simbolo;
        }
      }
      console.log(linha);
      linha = '';
      posicao -= 1;
    };
     return linha;
  };

  function printarTriangulo(n) {
    if (typeof(n) !== 'number') {
      return console.log(`É necessário informar um valor numérico`)
    };
    return criarTriangulo(n);    
  }

  printarTriangulo(5);

module.exports = { printarTriangulo };