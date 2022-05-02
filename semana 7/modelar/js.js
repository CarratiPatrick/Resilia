
var dog ={
    nome : "",
    idade : "",
    raça : "Labradoodle",
    cor : "caramelo",
    porte : "grande",
    pelagem : "curta",
    sexo : "macho",
    peso : "40kg",
    ehCastrado : "sim",
    //metodos
    latir: function(){
    return   alert("AU!AU!")
    },
    comer: function(){
        return   alert("humm!!")
       },
    andar: function(){},
    fazerCoco: function(){},
    fazerXixi: function(){},
    rolar: function(){},
    rasgarOLixo: function(){},
    dormir: function(){},
    verDog: function(){
        console.log(dog)
    }
}
var bntCriar = document.querySelector("#criar")
bntCriar.addEventListener("click", function(e){
    var nome = document.querySelector("#nome").value
    console.log(nome)
    dog.nome =nome

})
var nome = document.querySelector("#nome")

    


  