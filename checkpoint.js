//Exercício 3
let pesoa = prompt("quanto vc pesa?")
let alturaa = prompt("qual sua altura (em metros, ex 1.70)?")
let pesob = parseFloat(pesoa)
let alturab = parseFloat(alturaa)

let imc = pesob / (alturab*alturab)

if(imc<18.5){
document.write("você esta abaixo do peso");
}else if(imc>=18.5 && imc<=24.9){
document.write("você esta no peso ideal ");
}else{
document.write("você esta acima do peso");
}

document.write("<br><br>");

//Exercício 4
let idade = prompt("qual sua idade?")
if(idade<=12){
document.write("criança")
}else if(idade>=13 && idade<=18){
document.write("adolescente")
}else if(idade<=60){
document.write("adulto")
}else{
document.write("idoso")
}

document.write("<br><br>");

//Exercício 5
let user="admin"
let password="1234"

let usuario=prompt("Digite seu nome de usuário:");
let senha=prompt("Digite sua senha:");

if(usuario!=user || senha!=password){
alert("Falha na autenticação. Usuário e/ou senha incorretos.");
}
else{
alert("Login realizado com sucesso!");
}

//Exercício 8
let txt="O LUGAR VIRA TECNOLOGIA"
document.write(txt + "<br>");
document.write(txt.replace("LUGAR","MUNDO"));

document.write("<br><br>");