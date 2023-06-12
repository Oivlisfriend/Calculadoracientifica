
    function converter() {
      var valorInput = document.getElementById('valor');
      var unidadeInicial = document.getElementById('unidade-inicial').value;
      var unidadeDestino = document.getElementById('unidade-destino').value;
      var resultado = document.getElementById('resultado');
      
      if (valorInput.value === '') {
        resultado.textContent = 'Por favor, digite um valor.';
        return;
      }
      
      var valor = parseFloat(valorInput.value);
      var resultadoConversao;
      
      if (unidadeInicial === 'cm' && unidadeDestino === 'm') {
        resultadoConversao = valor * 1000;
      } else if (unidadeInicial === 'cm' && unidadeDestino === 'km') {
        resultadoConversao = valor / 100000;
      } else if (unidadeInicial === 'cm' && unidadeDestino === 'mi'){
        resultadoConversao = valor * 0.0000062137;
      }
      else if (unidadeInicial === 'm' && unidadeDestino === 'cm') {
        resultadoConversao = valor * 100;
      } else if (unidadeInicial === 'm' && unidadeDestino === 'km'){
        resultadoConversao = valor / 1000;
      }
      else if (unidadeInicial === 'm' && unidadeDestino === 'mi') {
        resultadoConversao = valor *  0.00062137;

      }
      else if (unidadeInicial === 'km' && unidadeDestino === 'cm') {
        resultadoConversao = valor * 100000;
      } else if (unidadeInicial === 'km' && unidadeDestino === 'm'){
          resultadoConversao = valor * 1000;
          
      } else if (unidadeInicial === 'km' && unidadeDestino === 'mi'){
        resultadoConversao = valor * 0.62137;
      }
      else if (unidadeInicial === 'mi' && unidadeDestino === 'cm') {
        resultadoConversao = valor *  160934.4;
      } else if (unidadeInicial === 'mi' && unidadeDestino === 'm'){
        resultadoConversao = valor * 1609.34;
        
    } else if (unidadeInicial === 'mi' && unidadeDestino === 'km'){
      resultadoConversao = valor *  1.60934;
    }

       else {
        resultadoConversao = valor; // Caso as unidades sejam iguais, não há conversão necessária
      }
      
      resultado.textContent = valor + ' ' + unidadeInicial + ' são equivalentes a ' + resultadoConversao.toFixed(2) + ' ' + unidadeDestino + '.';
    }