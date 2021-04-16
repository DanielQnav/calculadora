//Declaración de variables
var operandoa;
var operandob;
var operandon;

//Obtención de datos de HTML
function init(){
	var resultado = document.getElementById("resultado");
    var porcentaje = document.getElementById("porcentaje");
    var raiz = document.getElementById("raiz");
    var potencia = document.getElementById("potencia");
    //var negativo = document.getElementById("negativo");
	var siete = document.getElementById("siete");
	var ocho = document.getElementById("ocho");
	var nueve = document.getElementById("nueve");
	var sume = document.getElementById("suma");
	var cuatro = document.getElementById("cuatro");
	var cinco = document.getElementById("cinco");
	var seis = document.getElementById("seis");
	var resta = document.getElementById("resta");
	var tres = document.getElementById("tres");
	var dos = document.getElementById("dos");
	var uno = document.getElementById("uno");
	var multiplicacion = document.getElementById("multiplicacion");
	var reset = document.getElementById("reset");
	var cero = document.getElementById("cero");
	var igual = document.getElementById("igual");
	var division = document.getElementById("division");

	//Ejecución de funciones al dar click
	uno.onclick = function(e){
		resultado.textContent = resultado.textContent + "1";
	}
	dos.onclick = function(e){
		resultado.textContent = resultado.textContent + "2";
	}
	tres.onclick = function(e){
		resultado.textContent = resultado.textContent + "3";
	}
	cuatro.onclick = function(e){
		resultado.textContent = resultado.textContent + "4";
	}
	cinco.onclick = function(e){
		resultado.textContent = resultado.textContent + "5";
	}
	seis.onclick = function(e){
		resultado.textContent = resultado.textContent + "6";
	}
	siete.onclick = function(e){
		resultado.textContent = resultado.textContent + "7";
	}
	ocho.onclick = function(e){
		resultado.textContent = resultado.textContent + "8";
	}
	nueve.onclick = function(e){
		resultado.textContent = resultado.textContent + "9";
	}
	cero.onclick = function(e){
		resultado.textContent = resultado.textContent + "0";
	}
	reset.onclick = function(e){
		resetear();
	}
	suma.onclick = function(e){
		operandoa = resultado.textContent;
		operandon = "+";
		limpiar();
	}
	resta.onclick = function(e){
		operandoa = resultado.textContent;
		operandon = "-";
		limpiar();
	}
	multiplicacion.onclick = function(e){
		operandoa = resultado.textContent;
		operandon = "*";
		limpiar();
	}
	division.onclick = function(e){
		operandoa = resultado.textContent;
		operandon = "/";
		limpiar();
	}
    porcentaje.onclick = function(e){
        operandoa = resultado.textContent;
        operandon = "%";
        limpiar();
    }
    raiz.onclick = function(e){
        operandoa = resultado.textContent;
        operandon = "r2";
        limpiar();
    }
    potencia.onclick = function(e){
        operandoa = resultado.textContent;
        operandon = "pow";
        limpiar();
    }
    /*negativo.onclick = function(e){
        operandoa = resultado.textContent;
        operandon = "neg";
        limpiar();
    }*/
	igual.onclick = function(e){
		operandob = resultado.textContent;
		resolver();
	}
}
function limpiar(){
	resultado.textContent = "";
}
function resetear(){
	resultado.textContent = "";
	operandoa = 0;
	operandob = 0;
	operandon = "";
}

//Funcionalidades para obtener las operaciones matematicas
function resolver(){
	var res = 0;
	switch(operandon){
		case "+":											//Suma
		res = parseInt(operandoa) + parseInt(operandob);
		break;
		case "-":											//Resta
		res = parseInt(operandoa) - parseInt(operandob);
		break;
		case "*":											//Multiplicación
		res = parseInt(operandoa) * parseInt(operandob);
		break;
		case "/":											//División
		res = parseInt(operandoa) / parseInt(operandob);
		break;
        case "%":											//Porcentaje
        res = (parseInt(operandoa) / parseInt(operandob)*(100));
        break;
        case "r2":											//Raíz Cuadrada
        res = Math.sqrt(parseInt(operandoa));
        break;
        case "pow":											//Potencias
        res = Math.pow(parseInt(operandoa), parseInt(operandob));
        break;
        /*case "neg":										//Negativo (deshabilitado)
        res = parseInt(operandoa) = (- parseInt(operandoa));
        break;*/
	}
	resetear();
	resultado.textContent = res;

}

