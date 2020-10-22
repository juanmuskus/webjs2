function Resistencia(){
    var l = true;
var Primerabanda= document.getElementById("pr").value;
var Segundabanda = document.getElementById("seg").value;
var Union = Primerabanda+Segundabanda;

var multiplicador = document.getElementById("mul").value;

var ValorResistencia = Number(Union)*Number(multiplicador);
if ( Primerabanda=="Seleccione valor" ||  Segundabanda=="Seleccione valor" ||multiplicador=="Seleccione valor"){
l=false

}

if(l==false){
alert("Rellene todos los campos")
console.log("falso")

}
if(l==true){
document.getElementById("showR").value=ValorResistencia;
console.log(Primerabanda);
console.log(Segundabanda);
console.log(multiplicador);}
}