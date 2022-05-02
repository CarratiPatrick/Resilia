function verificarAberto () {
      

        var verificar = document.querySelector('#verificar');
       

        tagP.innerText = 'Estamos abertos!' 
        
       
        var tagP = document.createElement('p'); 
        verificar.append(tagP)
     
    } 
    

   
function verificarFechado (){
    var tagP = document.querySelector('p')
        
    tagP.innerText = 'Estamos fechados !'
    verificar.append(tagP)
}