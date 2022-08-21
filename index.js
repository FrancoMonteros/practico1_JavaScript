//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert ("hola a todos");
//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write ("hello word" + "<br/>"); 
//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
let numero1= 3; let numero2= 5; let suma; suma= numero1 +  numero2; document.write("la suma es =" +  suma + "<br/>");
//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
 let nombre_usuario = prompt("nombre de usuario" );
document.write("hola " + nombre_usuario + "<br/>")
//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//Nota: Tener en cuenta la siguiente función: parseInt
let n1=parseInt ( prompt("n1"));
let n2=parseInt ( prompt("n2"));
 document.write(n1 + n2 + "<br/>");
//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = parseInt (prompt("num1"));
let num2 = parseInt (prompt("num2"));
if (num1<num2) {
document.write((num1) + "<br/>")    
} else {
    document.write((num2) + "<br/>")
}
//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let number1 =parseInt(prompt ("number1"));
let number2 =parseInt(prompt ("number2"));
let number3 =parseInt(prompt ("number3"));
if (number1>number2 && number1>number3) {
    document.write((number1) + "<br/>")    
}
if (number1<number2 && number2>number3) {
    document.write((number2) + "<br/>")  
} 
if (number1<number3 && number2<number3) {
    document.write((number3) + "<br/>")   
}
//8.- Escribe un programa que pida un número y diga si es divisible por 2
let nume1= parseInt(prompt("nume1"));
if (nume1 % 2 === 0) {
    document.write(("es divisible por 2") + "<br/>")
} else {
    document.write(("no es divisible por 2") + "<br/>")
}
//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
let text = prompt("ingresa una frase");
let ntext = text.length;
let i
for(i= 0; i < ntext ; i++) {
    if (text.substr(i,1) === "a" || text.substr (i,1) === "e" || text.substr (i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
        document.write(((text.substr(i,1))+ "\n") + "<br/>")
    } 
}
//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let numeros1 = parseInt (prompt ("numeros1"));
if (numeros1 % 2 === 0 || numeros1 % 3 === 0 || numeros1 % 5 === 0 || numeros1 % 7 === 0) {
   document.write(("es divisible por 2, 3, 5, 7") + "<br/>") 
} else {
    document.write(("no es divisible por 2, 3, 5, 7") + "<br/>")
}
//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let numeros2 = parseInt (prompt ("numeros2"));
if (numeros1 % 2 === 0 || numeros1 % 3 === 0 || numeros1 % 5 === 0 || numeros1 % 7 === 0)
if (numeros2 % 2 === 0) {
    document.write(("es divisible por 2") + "<br/>");
}
if (numeros2 % 3 === 0) {
    document.write(("es divisible por 3") + "<br/>");
}
if (numeros2 % 5 === 0) {
    document.write(("es divisible por 5") + "<br/>");
}
if (numeros2 % 7 === 0) {
    document.write(("es divisible por 7") + "<br/>");
} 