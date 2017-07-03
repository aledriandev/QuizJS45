//Ejercicio 1: Forma 1
function maxMin(n1,n2,n3){
  var max="Maximo = ";
  var min="Minimo = ";
  if(n1 > n2 && n1 > n3){
    max += n1;
    if(n2 > n3)
      min += n3;
    else
      min+= n2;
  }
  else if(n2 > n1 && n2 > n3){
    max += n2;
    if (n1 > n3)
      min += n3;
    else
      min += n1;
  }else{
    max += n3;
    if(n1 > n2)
      min += n2;
    else
      min += n1;
  }
  return max + "\n" + min;
}

//Ejercicio 3: Forma 2
function max_Min(n1,n2,n3){
  var max = "Maximo = " + Math.max(n1,n2,n3);
  var min = "Minimo = " + Math.min(n1,n2,n3);
  return max + "\n" + min;
}

//Ejercicio 2
function parImpar(array){
  var par = [];
  var impar = [];
  for (var i in array){
    if(i%2==0)
      par.push(array[i]);
    else
      impar.push(array[i])
  }
  return "Elementos en posicion par = " + par.join(" ") + "\n" + "Elementos en posicion par = " + impar.join(" ");
}

//Ejercicio 3
function alreves(array){
  var reves=[];
  for (var i=(array.length-1);i>=0;i--){
    reves.push(array[i]);
  }
  return reves.join(" ");
}

//Ejercicio 4 *solo corre del 1 al 5 (:c) rayos
//funcion que realiza el dibujo
function dibuja(n){
  var array = [];
  var string = "";
  //llenamos un array con los elementos de la base del tringulo y lo transformamos en string
  for (var i=1 ; i < n*2 ; i++){
    array.push(i);
  }
  array=array.join("");
  // agregamos espacios segun el numero ingresado y quitamos los elementos del string array creado
  for(var i=0 ; i < n ; i++){
    string += espacios(n-i) + array.substr(0,array[i*2]) + "\n";
  }
  //para la parte de abajo
  for(var i=n-2 ; i>=0 ; i--){
    string += espacios(n-i) + array.substr(0,array[i*2]) + "\n";
  }
  return string;
}
//funcion para determinar los espacios
var espacios=function(n){
  var espacio="";
  for(var i=0; i<n;i++){
  espacio+=" ";
  }
  return espacio;
}
