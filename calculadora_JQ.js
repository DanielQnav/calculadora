//Declaración de variables
var operandoa;
var operandob;
var operacion;
 //declaracion de IDs para obtener datos
$(document).ready(function(){
 $("#uno").on("click",function(){
 $("#resultado").append("1");
 });
 $("#dos").on("click",function(){
 $("#resultado").append("2");
 });
 $("#tres").on("click",function(){
 $("#resultado").append("3");
 });
 $("#cuatro").on("click",function(){
 $("#resultado").append("4");
 });
 $("#cinco").on("click",function(){
 $("#resultado").append("5");
 });
 $("#seis").on("click",function(){
 $("#resultado").append("6");
 });
 $("#siete").on("click",function(){
 $("#resultado").append("7");
 });
 $("#ocho").on("click",function(){
 $("#resultado").append("8");
 });
 $("#nueve").on("click",function(){
 $("#resultado").append("9");
 });
 $("#cero").on("click",function(){
 $("#resultado").append("0");
 });
 /*$("#punto").on("click",function(){
  $("#resultado").append(".");
  });*/
 
 $("#reset").on("click",function(){
 resetear();
 });
 $("#suma").on("click",function(){
 operandoa = $("#resultado").html();
   operacion = "+";
   limpiar();
 });
 $("#resta").on("click",function(){
 operandoa = $("#resultado").html();
   operacion = "-";
   limpiar();
 });
 $("#multiplicacion").on("click",function(){
 operandoa = $("#resultado").html();
   operacion = "*";
   limpiar();
 });
 $("#division").on("click",function(){
 operandoa = $("#resultado").html();
   operacion = "/";
   limpiar();
 });
 $("#porcentaje").on("click",function(){
 operandoa = $("#resultado").html();
	operacion = "%";
	limpiar();
	});
 $("#raiz").on("click",function(){
 operandoa = $("#resultado").html();
	operacion = "√";
	limpiar();
 });
 $("#potencia").on("click",function(){
 operandoa = $("#resultado").html();
	operacion = "p";
	limpiar();
 });
 /*$("#masmenos").on("click", function() {
  $("#resultado").html = (("#resultado").html * -1);
});
 $("#coma").on("click",function(){
  operandoa = $("#resultado").html();
   operacion = "";
   limpiar();
  });*/
 $("#igual").on("click",function(){
 operandob = $("#resultado").html();
   resolver(); 
 });
});
 
//Operaciones
function limpiar(){
 $("#resultado").html("");
}
 
function resetear(){
 $("#resultado").html("");
 operandoa = 0;
 operandob = 0;
 operacion = "";
}
 
function resolver(){
 var res = 0;
 switch(operacion){
 case "+":                                            //Suma
 res = parseFloat(operandoa) + parseFloat(operandob);
 break;
 
 case "-":                                            //Resta
 res = parseFloat(operandoa) - parseFloat(operandob);
 break;
 
 case "*":                                            //Multiplicación
 res = parseFloat(operandoa) * parseFloat(operandob);
 break;
 
 case "/":                                            //División
 res = parseFloat(operandoa) / parseFloat(operandob);
 break;

 case "%":                                            //Porcentaje
 res = (parseInt(operandoa) / parseInt(operandob)*(100));
 break;
 case "√":                                            //Raíz cuadrada
 res = Math.sqrt(parseInt(operandoa));
 break;
 case "p":                                            //Potencia
 res = Math.pow(parseInt(operandoa), parseInt(operandob));
 break;
 
 }
 resetear();
 $("#resultado").html(res);
}