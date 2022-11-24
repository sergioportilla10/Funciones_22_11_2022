//Funciones anónimas
//Son funciones sin nombre, ya que van alojadas dentro de una variable

addEventListener("DOMContentLoaded", (e)=>{


const saludo = function () {    // A diferencia de la funcion por declaracion, si esta la ejecutamos antres de declarar la variable nos arrojara error
    return "Hola";
  };
  
  saludo; 
  saludo();             //Esta funcion cada vez que la necesitemos la podremos utilizar haciendo referencia a ella

    console.log(saludo());
})