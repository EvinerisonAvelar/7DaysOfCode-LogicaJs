const area = prompt("Você como desenvolvedor, deseja seguir para a área de Front-end ou Back-end ? Digite 1 para Front-end ou 2 para Back-end !");

if(area == 1){
    let respostaMsgFront = prompt("Quer aprender React ou aprender Vue ? Digite 1 para react ou 2 para Vue !")
}
else if(area == 2){
    let repostaMsgBack = prompt("Quer aprender React ou aprender C# ? Digite 1 para react ou 2 para Java !")
}
else
    alert("Você não digitou um valor valido !")


const especialidadeOuFullstack = prompt("Você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack ? Digite 1 se deseja seguir na área ou 2 para Fullstack !")

if(especialidadeOuFullstack == 1){
    alert("Um otimo caminho, se especialiaze e tornesse um otimo profissional")
}
else if(especialidadeOuFullstack == 2){
    alert("Um otimo caminho, se especialiaze, aprenda o maximo de tecnologias tanto back qunato front e tornesse um otimo profissional")
  }
  else
  alert("Você não digitou um valor valido !")



let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
    while (msg === "ok"){
        let novaTecnologia = prompt("Qual?");
        alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
        msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
    
}





