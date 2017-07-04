//Ejercicio 2: triangulo de numeros
function ejercicio(n) {
  for (var i = 0; i < n; i++) {
      var string = "";
      for (var j = 1; j < n+1-i; j++) {
        string += j;
      }
   console.log(string);
  }
}

//Ejercicio 4: Circulo de asteriscos
function quiz4 (r) {
  var x = 0;
  var circulo = [];
  var espacios =[];
  while (x <= r) {
    var y = Math.sqrt ( r * r - x*x);
    x++;
    var j = 0;
    var str = "";
    while ( j < y) {
      str += "**";
      j++;
    }
    var e = "";
    for (var i = 0; i <= r-y; i++) {
       e += "  ";
    }
    espacios.push (e);
    circulo.push(str);
  }
  for (var i = circulo.length -1; i >=0 ; i--) {
    console.log (espacios[i]+circulo[i]+circulo[i]);
  }
  for (var i = 0; i < circulo.length; i++) {
    console.log (espacios[i]+circulo[i]+circulo[i]);
  }
}
quiz4(20);
