//Exercício 1
let variavel
document.write(variavel);

document.write("<br><br>");

//Exercício 2
//Para exemplificar o % irei mostrar se o número digitado é par ou ímpar
let num = (prompt("Digite um número: "))
if(num%2==0){
    document.write("É par")
}
else{
    document.write("É impar")
}

document.write("<br><br>");


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


//Exercício 6
// Criando as notas do aluno
let nota1 = 7;
let nota2 = 5.5;
let nota3 = 8;
let nota4 = 6;
let nota5 = 9;
let nota6 = 7.5;
let nota7 = 6.5;

// Calculando a média das notas
let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;

// Exibindo a média calculada
console.log(`A média do aluno é ${media}`);

// Verificando se o aluno foi aprovado ou reprovado
if (media >= 6) {
  console.log("O aluno foi aprovado!");
} else {
  console.log("O aluno foi reprovado!");
}


//Exercício 7
let nome = prompt("Digite seu nome: ")
document.write (nome + "<br>")

let idade2 = prompt("Digite seu idade:")
document.write (idade2 + "<br>")

let curso = prompt("Digite seu curso: ")
document.write (curso + "<br>")

let ano = prompt("Digite seu ano: ")
document.write (ano + "<br>")

document.write("<br><br>");

//Exercício 8
let txt="O LUGAR VIRA TECNOLOGIA"
document.write(txt + "<br>");
document.write(txt.replace("LUGAR","MUNDO"));

document.write("<br><br>");


//Exercício 9
let numstring = "957.24575";

numfloat = parseFloat(numstring);

let num2v = numfloat.toFixed(2);

console.log(num2v);