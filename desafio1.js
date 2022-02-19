function trianguloInvertido(n) {
    let simbolo = '*';
    let linha = '';
    let posicao = n;
    
    for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
      for (let indexColuna = 0; indexColuna <= n; indexColuna += 1) {
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
}


trianguloInvertido(3)
