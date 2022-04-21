/*function dirigirEBeber(Idade) {
    if (Idade >= 18) {
        console.log("Já pode dirigir e beber!");
    } else {
        console.log("Não pode dirigir");
    }

}

function previsaoRodagem(litros, km) {
    return (litros / km)

}*/

function validaEmail(email) {
if (email.indexOf("@") > -1) {
    return document.write("email correto!");
}else{
    return document.write("email incorreto");
}

}

var email = prompt("qual seu email")
validaEmail(email) 


    
