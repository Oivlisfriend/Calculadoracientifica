
//screen

let screen = document.getElementById("screen");

//type to the screen
function press (numValue){
    if (screen.value == 0)
    {
        screen.value ='';
    }
    screen.value += numValue;
}

//clear screen
function clearScreen (val){
    screen.value = val;
}

//delete key

function backspace (){
    const space = screen;
    screen.value = space.value.substring(0, space.value.length - 1)
}

//calculate function
function calculate (){
    if (screen.value !=''){
        try{
            clearScreen(eval(screen.value))
        }catch(err){
            clearScreen("Bad expression")
        }
    }
}

function tan(){
    screen.value = Math.tan (screen.value*(Math.PI/180))
}

//Function to calcule asin, acos and atan

function invsine(){
    screen.value = Math.asin(screen.value) *( 180 /Math.PI)
}

function invcosine(){
    screen.value = Math.ceil(Math.acos(screen.value)*(180 / Math.PI))
}

function invtan(){
    screen.value = Math.atan(screen.value) * (180 / Math.PI)
}
