var max = 100;
var min = 10;

const array1 = ['resultado', 'resultado1', 'resultado2', 'resultado3', 'resultado4'];

array1.forEach(function(elemento){
  let a = Math.random() * (max - min) + min;
  var resultado = ("width: " + a + "% ")
  document.getElementById(elemento).setAttribute("style", resultado)
  console.log(resultado + " " + elemento); 

              
});
    


