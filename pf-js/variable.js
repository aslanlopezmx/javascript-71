console.log("Hola Mundo")
/**
 * En javascript hay 3 formas de declarar variables
 * !Existe una forma que ya no se recomienda su uso
 * !var
 * Al proces de crear una variable y darle un valor se le llama asignacion
 * 
 * A las variables que pueden ser asignadas (pueden cambiar en un furo el valor que tienen) se declaran:
 * ? let nombreVariable = valor; (asigna el valor x a la variable y)
 * 
 * *el operador = se conoce como operador de asignación
 * Una vez usada una variable, podemos usarla en otros lugares dell codigo utilizando su nombre,
 * las variables al ser utilizadas no van entre comillas
 * 
 * Las variables que no pueden ser reasignadas (su valor no puede cambiar)
 * se declaran
 * !   const nombreVariable = valor;
 * 
 * Notas: 
 * Palabras reservadas: palabras que utilizan el lenguaje de programacion y si
 * intemntamos usarlas en otros lados pueden generar errores.
 * 
 * 
 */

let nombre = "aslan";
let name = "aslan";
console.log(nombre)  //tipo String

const birthYear = 1998; //tipo numero
console.log(birthYear)

/*Reasignando una variable (cambiando el valor que tiene)
*Cuando reasignamos una variale (una variable ya creada)
*! Ya no es necesario poner let
*/

nombre = "Juan";
console.log(nombre);

/**seccion de prueba
birthYear = 1995;**/

/**Concantenar: Nos permite pegar el valor de una variable  a un texto
**/
console.log("Hola soy " + nombre + " y estoy con " + name)





























