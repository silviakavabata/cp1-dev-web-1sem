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