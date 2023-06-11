let screen = document.getElementById("screen");
let screenx =  document.getElementById("screenx");
let screena =  document.getElementById("screena");
let screeny =  document.getElementById("screeny");
let fundocolor =  document.getElementById("fundo");
let letracolor =  document.getElementById("letra");
let calcCient = document.getElementById("calcCient");
let calcEqua = document.getElementById("calcEqua");
calcCient.addEventListener("click",()=>{
    document.getElementById("cientifica").classList.remove('none');
    document.getElementById('equacao').classList.add('none');
});
calcEqua.addEventListener("click",()=>{
    document.getElementById("cientifica").classList.add('none');
    document.getElementById('equacao').classList.remove('none');
});
fundocolor.addEventListener("input",()=>{
    document.body.style.background=fundocolor.value;
});
letracolor.addEventListener("input",()=>{
    let span = document.getElementsByTagName('label');
    span[0].style.color=letracolor.value ;
   for(let i=0;i<span.length;i++){
        span[i].style.color=letracolor.value;
    }
     span = document.getElementsByTagName('label');
    for(let i=0;i<span.length;i++){
        span[i].style.color=letracolor.value;
    }
});
document.onkeydown = function(e) {
    if(e.key === 'Escape') {
        screen.value = "0";
    }
   else if(e.key === 'Backspace') {
        deleteChar();    
    }
  }
function cls(){
    screen.value="0";
}
function euler(){
    screen.value = Math.exp(1);
}
function eulerx(){
    if(isNaN(screen.value)){
        alert("Digite apenas números");
        return;
    };
    screen.value = Math.exp(screen.value);
}
function press (numValue){
    if (screen.value === null || screen.value === "0")
    {
        screen.value ='';
    }
    screen.value += numValue;
}
function addHHistoric(valor){
    let ul= document.getElementById('historic');
    let li=document.createElement('li');
    li.innerHTML=valor;
    ul.appendChild(li);
}

function sqrt(){
    if(isNaN(screen.value)){
        alert("Digite apenas números");
        return;
    };
    screen.value = Math.sqrt (screen.value);
    addHHistoric(screen.value);


}
function linear(){
    
  let valor=eval((screena.value+"+"+screeny.value*(-1)));
  valor=eval(valor/screenx.value);
  let result = document.getElementById("result");
  console.log(result);
    result.innerHTML="x = "+valor;

}

function sqr(){
    screen.value += "^2";
    compute ();
}
function tqr(){
    screen.value += "^3";
    compute ();
}
function ln (){
    if(isNaN(screen.value)){
        alert("Digite apenas números");
        return;
    };
   screen.value = Math.log (screen.value);
   addHHistoric(screen.value);

}

function exp (){
    if(isNaN(screen.value)){
        alert("Digite apenas números");
        return;
    };
   screen.value = Math.exp (screen.value);
   addHHistoric(screen.value);

}

function deleteChar (){
    screen.value= screen.value.substring (0, screen.value.length - 1);
}


function compute (){
   let calc=screen.value;
    if(calc.includes('x'))
        calc = calc.replace(/x/g, '*');
    else if(calc.includes('^'))
        calc = calc.replace(/\^/g, "**");
   
    screen.value = eval (calc);
    addHHistoric(screen.value);

   // linear();
}
function tan(){
    if(isNaN(screen.value)){
        alert("Digite apenas números");
        return;
    };
    screen.value = Math.tan(screen.value*(Math.PI/180));
    addHHistoric(screen.value);

}
function cos(){
    if(isNaN(screen.value)){
        alert("Digite apenas números");
        return;
    };
    screen.value = Math.cos (screen.value*(Math.PI/180));
    addHHistoric(screen.value);

}
function sen(){
    if(isNaN(screen.value)){
        alert("Digite apenas números");
        return;
    };
    screen.value = Math.sin (screen.value*(Math.PI/180));
    addHHistoric(screen.value);

}

//Function to calcule asin, acos and atan

function arcsen(){
    if(isNaN(screen.value)){
        alert("Digite apenas números");
        return;
    };
    screen.value = Math.asin(screen.value) *( 180 /Math.PI);
    addHHistoric(screen.value);

}

function arccos(){
    if(isNaN(screen.value)){
        alert("Digite apenas números");
        return;
    };
    screen.value = Math.acos(screen.value) *( 180 /Math.PI);
    addHHistoric(screen.value);

}
function log(){
    if(isNaN(screen.value)){
        alert("Digite apenas números");
        return;
    }; 
    screen.value =Math.log10(screen.value);
    addHHistoric(screen.value);
}

function invcosine(){
    if(isNaN(screen.value)){
        alert("Digite apenas números");
        return;
    };
    screen.value = Math.ceil(Math.acos(screen.value)*(180 / Math.PI))
}

function invtan(){
    if(isNaN(screen.value)){
        alert("Digite apenas números");
        return;
    };
    screen.value = Math.atan(screen.value) * (180 / Math.PI)
}
