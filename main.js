//Funcion por Expresion
//En esta funcion es habitual guardar funciones dentro de variables, las cuales le permitiran ejecutarlas mas adelante

addEventListener("DOMContentLoaded", (e)=>{


   const saludo = function saludar () { // Aca el nombre de la funcion se vuelve redundante y se omite ya que la variable saludo, hace de funcion
        
        return "Hola";
    }
    saludo(); // Usamos la variable saludo como funcion y el nombre de la funcion se podria omitir y el codigo funcionara correctamente

    console.log(saludo());
}
)