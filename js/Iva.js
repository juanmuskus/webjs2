function Iva(){
var l = true;



var ValorCompra = document.getElementById("Vcompra").value;
var UtilidadoGanancia = document.getElementById("UoG").value;
const Iva = document.getElementById("s").value;
var sumpor=Number(UtilidadoGanancia)+Number(Iva)

var ValorVent_temp = Number(ValorCompra/100 * sumpor);
var ValorVenta= Number(ValorVent_temp)+Number(ValorCompra);
console.log(ValorVenta)

var Ganancia = Number(ValorCompra/100 * UtilidadoGanancia);
console.log(Ganancia)
if(ValorCompra.length==0 || ValorCompra==null ||/^\s+$/.test(ValorCompra) || UtilidadoGanancia.length==0 || UtilidadoGanancia==null ||/^\s+$/.test(UtilidadoGanancia) ){

    l=false
}

if(l==false){

alert("Rellene todos los campos")

}
if(l==true){
document.getElementById("showVV").value=ValorVenta;
document.getElementById("showG").value=Ganancia;}
}