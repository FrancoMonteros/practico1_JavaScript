alert ("hola a todos");


document.write ("hello word" + "<br/>"); 


let numero1= 3; let numero2= 5; let suma; suma= numero1 +  numero2; document.write("la suma es =" +  suma + "<br/>");


 let nombre_usuario = prompt("nombre de usuario" );
document.write("hola " + nombre_usuario + "<br/>")


let n1=parseInt ( prompt("n1"));
let n2=parseInt ( prompt("n2"));
 document.write(n1 + n2 + "<br/>");


let num1 = parseInt (prompt("num1"));
let num2 = parseInt (prompt("num2"));
if (num1<num2) {
document.write((num1) + "<br/>")    
} else {
    document.write((num2) + "<br/>")
}


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


let nume1= parseInt(prompt("nume1"));
if (nume1 % 2 === 0) {
    document.write(("es divisible por 2") + "<br/>")
} else {
    document.write(("no es divisible por 2") + "<br/>")
}


let text = prompt("ingresa una frase");
let ntext = text.length;
let i
for(i= 0; i < ntext ; i++) {
    if (text.substr(i,1) === "a" || text.substr (i,1) === "e" || text.substr (i,1) === "i" || text.substr(i,1) === "o" || text.substr(i,1) === "u") {
        document.write(((text.substr(i,1))+ "\n") + "<br/>")
    } 
}


let numeros1 = parseInt (prompt ("numeros1"));
if (numeros1 % 2 === 0 || numeros1 % 3 === 0 || numeros1 % 5 === 0 || numeros1 % 7 === 0) {
   document.write(("es divisible por 2, 3, 5, 7") + "<br/>") 
} else {
    document.write(("no es divisible por 2, 3, 5, 7") + "<br/>")
}

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