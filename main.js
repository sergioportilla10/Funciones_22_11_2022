//Funcion como Objetos
//Esta funcion no se suele usar mucho en producion, pero podemos ver que se puede usar una funcion y obejto al tiempo

addEventListener("DOMContentLoaded", (e)=>{


    const saludar = new Function("return 'Hola';"); //Aca vemos un ejemplo de como se usa, es interesante ver que se puede hacer

    saludar(); 

    console.log(saludar());
})