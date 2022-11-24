//Funcion por declaracion
//Es la fubncion mas comun y mas usada ya que estara declarada para usarla en cuaklquier momento en el codigo

addEventListener("DOMContentLoaded", (e)=>{


    function saludar () {
        
        return "Hola"
    }
    saludar(); //Podemos ejecutar la funcion saludar() incluso antes de crearla y va a funcionar ya que javascript primero busca las declaraciones de funciones y despues el resto del codigo

    console.log(saludar());
}
)