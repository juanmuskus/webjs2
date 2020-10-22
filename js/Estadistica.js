

function Estadistica() {
var l = true;
var k=document.getElementById("Resistencia").value;
if(k.length==0 || k==null ||/^\s+$/.test(k) ){
    

    l=false;

}
var k=document.getElementById("Nucleo").value;
if(k.length==0 || k==null ||/^\s+$/.test(k) ){
    

    l=false;

}
var k=document.getElementById("Disparadores").value;
if(k.length==0 || k==null ||/^\s+$/.test(k) ){
    

    l=false;

}
var k=document.getElementById("Rieles").value;
if(k.length==0 || k==null ||/^\s+$/.test(k) ){
    

    l=false;

}
var k=document.getElementById("Chips").value;
if(k.length==0 || k==null ||/^\s+$/.test(k) ){
    

    l=false;

}
var k=document.getElementById("Fuentes").value;
if(k.length==0 || k==null ||/^\s+$/.test(k) ){
    

    l=false;

}




    if(l==false){

        alert("Rellene todos los campos")
        console.log("Falso")
        document.getElementById("Resistencia").value="";
        document.getElementById("Nucleo").value="";
        document.getElementById("Disparadores").value="";
        document.getElementById("Rieles").value="";
        document.getElementById("Chips").value="";
        document.getElementById("Fuentes").value="";
        document.getElementById('Muestra').innerHTML="";
    }
    
       
    
    if(l==true){
    var data = google.visualization.arrayToDataTable([
      ['Articulo', 'Cantidad'],
      ['Resistencia',    Number(document.getElementById("Resistencia").value)],
      ['Nucleos',      Number(document.getElementById("Nucleo").value)],
      ['Disparadores',  Number(document.getElementById("Disparadores").value)],
      ['Rieles', Number(document.getElementById("Rieles").value)],
      ['Chips',    Number(document.getElementById("Chips").value)],
      ['Fuentes',    Number(document.getElementById("Fuentes").value)]
    ]);

    var options = {
      title: 'Sumario total'
    };

    var chart = new google.visualization.PieChart(document.getElementById('Muestra'));

    chart.draw(data, options);

}
  }
