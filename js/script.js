let valorEnPantalla = "";
let operando1 = null;
let operando2 = null;
let operador = ""; 

function resetearCalculadora() {
    resetearVariables();
    actualizarDisplay();
}

function resetearVariables() {
    valorEnPantalla = "";
    operando1 = null;
    operando2 = null;
    operador = ""; 
}
function actualizarDisplay() {
    document.getElementById("display").value=valorEnPantalla;
}

function agregarNumero(symbol) {
    valorEnPantalla = valorEnPantalla + symbol;
    actualizarDisplay();
    
}


function operadorPulsado(symbol) {
    operando1 = parseInt(valorEnPantalla);
    operador = symbol;
    valorEnPantalla = "";
   
}
function calcular() {
    if (operando1 !== null) {
        operando2 =parseInt(valorEnPantalla);
        switch (operador) {
            case "+":
               valorEnPantalla = operando1 + operando2;
               break;
            case "-":
                valorEnPantalla = operando1 + operando2;
                break;
            case "*":
                valorEnPantalla = operando1 + operando2;
                break;
            case "/":
               if (operando2 === 0) {
                  valorEnPantalla = "¡No se puede dividir entre 0!";
                 }
                 else{
                    valorEnPantalla = operando1 / operando2;
                 }
                  break;
        }  
       actualizarDisplay();
       resetearVariables();
    }
}