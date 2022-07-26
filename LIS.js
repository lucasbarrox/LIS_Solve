
function LongestIncreasingSequence(sequencia) { 

    // code goes here  
    const tamanhoArray = Array(sequencia.length).fill(1);
  
    let elementoAnterior = 0;
    let elementoAtual = 1;
  
    while(elementoAtual < sequencia.length){
      if(sequencia[elementoAnterior] < sequencia[elementoAtual]){
        const novoTamanho = tamanhoArray[elementoAnterior] + 1;
  
        if(novoTamanho > tamanhoArray[elementoAtual]){
          tamanhoArray[elementoAtual] = novoTamanho;
        }
      }
      
      elementoAnterior += 1;
  
      if(elementoAnterior === elementoAtual){
        elementoAtual +=1;
        elementoAnterior = 0;
      }
    }
  
    let maiorSequencia = 0;
  
    for(let i = 0; i < tamanhoArray.length; i += 1){
      if(tamanhoArray[i] > maiorSequencia){
        maiorSequencia = tamanhoArray[i];
      }
    }
  
    return maiorSequencia; 
  
  }
     
  // keep this function call here 
  console.log(LongestIncreasingSequence(readline()));