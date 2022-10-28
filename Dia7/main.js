    let operacao = prompt("Digite a operação que deseja realizar soma, subtração, divisão ou multiplicação ou digite sair se essa for a intenção !")

while(operacao != 'soma' && operacao != 'subtração' && operacao != 'multiplicação' && operacao != 'divisão' && operacao != 'sair'){

    alert("Digite uma operação valida !")
    operacao = prompt("Digite a operação que deseja realizar soma, subtração, divisão ou multiplicação ou digite sair se essa for a intenção")
    continue

}
    switch(operacao){
        case 'soma':
            let numero1 = parseInt(prompt("Digite o primeiro numero:"))
            let numero2 = parseInt(prompt("Digite o segundo numero:"))
            let resultado = numero1 + numero2
        
            alert(`o resultado da soma entre ${numero1} e ${numero2} é :\n ${resultado}`)
            break
    }

    switch(operacao){
        case 'subtração':
            let numero1 = parseInt(prompt("Digite o primeiro numero:"))
            let numero2 = parseInt(prompt("Digite o segundo numero:"))
            let resultado = numero1 - numero2
        
            alert(`o resultado da subtração entre ${numero1} e ${numero2} é :\n ${resultado}`)
            break
    }
    
    switch(operacao){
        case 'multiplicação':
            let numero1 = parseInt(prompt("Digite o primeiro numero:"))
            let numero2 = parseInt(prompt("Digite o segundo numero:"))
            let resultado = numero1 * numero2
        
            alert(`o resultado da multiplicação entre ${numero1} e ${numero2} é :\n ${resultado}`)
            break
    }
    
    switch(operacao){
        case 'divisão':
            let numero1 = parseInt(prompt("Digite o primeiro numero:"))
            let numero2 = parseInt(prompt("Digite o segundo numero:"))
            let resultado = numero1 / numero2
            
            alert(`o resultado da divisão entre ${numero1} e ${numero2} é :\n ${resultado}`)
            break
    }
    
    switch(operacao){
        case 'sair':
            alert("Até a proxima")
            break
    }




