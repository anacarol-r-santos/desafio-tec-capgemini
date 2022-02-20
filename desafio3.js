// Este desafio foi realizado com base na resolucão do desenvolvedor Mihail Gaberov
// em seu blog no link:
// https://www.freecodecamp.org/news/how-to-solve-the-sherlock-and-anagrams-coding-challenge-in-javascript-a80baa908637/

function encontrarSubstrings(string) {
    let array = [];
      
   for (let i = 0; i < string.length; i++) {
       for (let j = i + 1; j < string.length + 1; j++) {
           const substring = string.substring(i, j) ;
           array.push(substring);
       }
   }
   return array;
}

function encontrarAnagramas(str1, str2) {
    const map = {}; // objeto com função de hashmap 

    for (let i = 0; i < str1.length; i++) {
        // Nessa primeira iteração adicionamos os elementos da string 1 como chave do objeto e 
        // como valor adicionamos a quantidade encontrada dos elementos parecidos.
        const element = str1[i];
        if (map[element]) {
            map[element]++
        } else {
            map[element] = 1
        }        
    };

    for (let j = 0; j < str2.length; j++) {
        // Aqui verificamos se os elementos já estão adicionados ao objeto, se sim diminuimos seu valor,
        // caso contrario, significa que as duas strings não são um par anagramático, por isso retornamos false.
        const element2 = str2[j];
        if (map[element2]) {
            map[element2]--
        } else {
            return false
        }    
    };

    // Se ambos os loops forem concluídos, retornamos true, significando que as strings que estão sendo analisadas
    // são um par anagramático.
    return true;
}

function contarAnagramas(indexAtual, array) {
    const elementoAtual = array[indexAtual];
    // Iteramos sobre o array contendo todas as substrings da string original e 
    // ao obtermos o elemento correto o removemos do array;
    const novoArray = array.slice(indexAtual + 1); 
    let contador = 0;
    
    for (let index = 0; index < novoArray.length; index++) {
    // Iteramos sobre esse array e contamos caso exista um anagrama do elemento atual
       if (elementoAtual.length === novoArray[index].length && encontrarAnagramas(elementoAtual, novoArray[index])) { 
            contador++;
        }        
    };

    return contador; // caso não exista um anagrama retornamos 0;    
}

function resultadoAnagrama(string) {
    const duplicatas = string.split('').filter((v, i) => string.indexOf(v) !== i).length;

    if (!duplicatas) {
        return 0 // Caso não haja duplicatas, não existe anagramas
    }

    let contadorAnagramas = 0;
    const array = encontrarSubstrings(string);

    for (let index = 0; index < array.length; index++) {
        contadorAnagramas += contarAnagramas(index, array)        
    }

    console.log(contadorAnagramas);
    return contadorAnagramas;    
}

module.exports = { resultadoAnagrama };