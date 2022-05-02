function linhaAsteristico(num){
    var asteristico = ""
    for (var i = 0; i < num; i++) {
        asteristico += "*"
               
    }
    
    console.log(asteristico); 
}
function trianguloAsteristico(num) {
    var asteristico = ""
    for (var j = 0; j < num; j++){
        asteristico +='*'  
        console.log(asteristico);
    }
}
linhaAsteristico(10)
trianguloAsteristico(10)