let ano_Atual = 2023
let ano_Nascimento_Usuario = prompt("Digite o ano de seu nascimento")
let nome_Usuario = prompt("Digite o seu nome")
let idade_Usuario = ano_Atual-ano_Nascimento_Usuario
let informacoes_Usuario = `Olá, seu nome é ${nome_Usuario}, e você tem ${idade_Usuario} anos.`
alert(informacoes_Usuario)