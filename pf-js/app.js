/**
 * Prompt:
 * 1. Hay que asignar su uso a una variable para luego poder usar el valor que ingreso el usuario
 * 1.2 Usar el valor inmediatamente
 * 
 * !mportante
 *!  1. No se recomienda su uso en aplicaciones en produccion
 *!  2. Bloquea el código, esto quiere decir que el codigo que este debajo de donde escribimos el uso
 *!     de prompt, no se va a ejecutar hasta que el usuario ingrese algo
 *!  3 No se puede personalizar
 *!  4.Todo lo que ingresa mediante prompt siempre es un String
 * 
 */

 //   const edad = prompt("Ingresa tu edad", "Sin edad");
 //   console.log(edad);
 //   const nm = prompt("Ingresa tu nombre","Sin nombre");
 //   console.log(nm);
 //   console.log("Hola, soy " + nm + " y tengo " + edad + " años");
 //   alert("Hola, soy " + nm + " y tengo " + edad + " años");



 const serie = prompt("¿Cual es tu serie favorita?");
 const char = prompt("¿Cual es tu personaje favorito de esta serie?");
 const desc = prompt("¿Por qué es tu personaje favorito?");
 alert("En la serie " + serie + " aparece el  personaje " + char + " y me gusta por " + desc);