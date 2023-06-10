function conversao() {
    let input = parseFloat(document.getElementById("input").value);
    let tipo = document.getElementById("tipo").value;
    let resultElement = document.getElementById("result");
    let result;

    if (tipo === "cm") {
      // Conversão de Centímetros para outras unidades
      
      let cm = input/ 100;
      let km = input / 100000;
      let milhas = input * 0.0000062137;

      resultElement.innerHTML =
        input + " cm:<br>" +
        m + " m<br>" +
        km + " km<br>" +
        milhas + " milhas";
    } 
    resultElement.innerHTML =
          cm + " cm<br>" +
          m + " m<br>" +
          km + " km<br>" +
          milhas + " milhas";

      } else if (tipo === "m") {
        // Conversão de Metros para outras unidades
        let cm = input * 100;
        let km = input / 1000;
        let milhas = input * 0.00062137;

        resultElement.innerHTML =
          input + " m:<br>" +
          cm + " cm<br>" +
          km + " km<br>" +
          mile + " mile";
       

      } else if (tipo === "km") {
        // Conversão de Quilômetros para outras unidades
        let cm = input * 100000;
        let m = input * 1000;
        let mile = input * 0.62137;

        resultElement.innerHTML =
          inputValue + " km:<br>" +
          cm + " cm<br>" +
          m + " m<br>" +
          milhas + " milhas";

      } else if (tipo === "milhas") {
        // Conversão de Milhas para outras unidades
        let cm = input * 160934.4;
        let m = input * 1609.34;
        let km = input * 1.60934;

        resultElement.innerHTML =
          input + " mile:<br>" +
          cm + " cm<br>" +
          m + " m<br>" +
          km + " km";
      }
    }
