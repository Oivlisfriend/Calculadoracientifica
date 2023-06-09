
function addChar (entrada, caracter){

    if (entrada.value == null || entrada.value == "0"){
        entrada.value = caracter;
    }else{
        entrada.value += caracter;
    }
}


function sin (angulo){
    angulo.display.value = Math.sin (angulo.display.value);
}

function tan (angulo){
    angulo.display.value = Math.tan (angulo.display.value);
}

function cos (angulo){
    angulo.display.value = Math.cos (angulo.display.value);
}

function raiz(valor){
    form.display.value = Math.sqrt (form.display.value);

}

function ln (valor){
    valor.display.value = Math.log (valor.display.value);
}

function exp (valor){
    valor.display.value = Math.exp (form.display.value);
}

function deleteChar (entrada){
    entrada.value = entrada.value.substring (0, entrada.value.length - 1)
}

let valor = 0.0;

function percent (input){
    valor = input.value;
    input.value = input.value + "%";
}

function compute (form){
    form.display.value = eval (form.display.value);
}

function sqaure (form){
    form.display.value = eval (form.display.value) * eval (form.display.value);
}

function checkNum (string){

    for (let i = 0; i < string.lenth; i++){
        let ch = str.charAt(i);
        if (ch < "0" || ch > "9"){
            if (ch != "/" && ch != "x" && ch != "+" && ch != "-" && ch != "." && ch != "(" && ch != ")" && ch != "%"){
                alert ("Entrada Inválida");
                return false;
            }
        }
    }
    return true;
}