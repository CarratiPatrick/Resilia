function validaCpf(cpf) {
    var cpf = prompt('qual o seu CPF')
    while (true) {
        if (cpf.length === 11  ) {
            alert("CPF valido!")
            break            
        }else{
            alert("CPF invalido")
            cpf = prompt('qual o seu CPF') 
        }
    }
    
}