/*function generarArray(){*/
   var Bombo=[];
    for(var i=1;i<=99;i++){
        Bombo.push(i); 
    }

Bombo.sort(function() {return Math.random() - 0.5});

Bombo.current = 0;

Bombo.next = function(){
  return this.current===this.length-1
    ? null
    : this[++this.current];
}

function mostrar() {
  document.getElementById("MostrarNumeros").innerHTML = Bombo[Bombo.current];
}

window.onload = mostrar;

function next() {
  document.getElementById("MostrarNumeros").innerHTML = Bombo.next();
  var bola = new Audio("sonidoNumero.wav"); 
        bola.play();
}