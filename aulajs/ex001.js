//window.alert('minha primeira msg!')
//window.confirm('esta gostando?')
/*var nome = prompt('qual seu nome !')
alert('É um prazer ' + nome + ' !')
*/
/*var n1 = Number(prompt('digite um número'))
var n2 = Number(prompt('digite outro número'))
var s = n1 + n2 
alert('A soma dos valores é ' + s)*/
/*
var nome = prompt('qual seu nome !')
document.write(`Olá, ${nome.toLocaleUpperCase()} seu nome tem ${nome.length} letras `)*/
var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
   let catYears 
   let dogYears
   if (humanYears == 1) {
       catYears = 15
       dogYears = 15
       
   }else if (humanYears == 2) {
       catYears = 24
       dogYears = 24 
   } else {
       let years = 2
       catYears = 24 
       dogYears = 24 
       while ( years < humanYears  ) {
           catYears += 4
           dogYears += 5
           years++
          
       }
       console.log (catYears,dogYears,humanYears)
   }
}

/*} else if(humanYears = 2){
    catYears = 24
    dogYears = 24
    return(humanYears,catYears,dogYears) 
  }else if(humanYears >2){
    var years = 2
    while( years < humanYears )
      catYears = 24 + 4
      dogYears = 24 + 5
    years ++
    return(humanYears,catYears,dogYears) 
  }
    humanYearsCatYearsDogYears(1)
*/
// Criptografia Cifra de César

var entrada = document.getElementById("entrada");
var saida = document.getElementById("saida");
var chavePasso = document.getElementById("chavePasso");
var valueChave;

entrada.addEventListener("keyup", function () {
  if (radioCesar[0].checked) {
    var valueText = entrada.value.split("");
    valueChave = parseInt(chavePasso.value);
    saida.value = codifica(valueText, valueChave);
  } else {
    var valueText = entrada.value.split("");
    valueChave = parseInt(chavePasso.value);
    saida.value = decodifica(valueText, valueChave);
  }
});

function codifica(texto, chavePasso) {
  return (
    texto
      // map é um for que mapeia o array
      .map((str) => {
        // famosa arrow function
        var cripto = str.charCodeAt();
        // limitar o ascii a letras do alfabeto maiusculas e minusculas
        if (cripto >= 65 && cripto <= 90) {
          // retornar em string
          return String.fromCharCode(((cripto - 65 + chavePasso) % 26) + 65);
        } else if (cripto >= 97 && cripto <= 122) {
          return String.fromCharCode(((cripto - 97 + chavePasso) % 26) + 97);
        } else {
          return str;
        }
      })
      // juntar tudo em uma string novamente
      .join("")
  );
}
var estacionamento = [1,1,1,0,1,0,0]
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}





