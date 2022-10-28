const numeroParaAdvinhar = Math.floor(Math.random() * 10 + 1);
let chute = "";
let acertou = false;

verificaAcerouOuErrou();
mostraNumeroCorreto();


function verificaAcerouOuErrou(){
    for(let contador = 4; contador > 1; contador--){

        chute = prompt("De 0 a 10, Digite o valor que deseja chutar!")
        if(chute == numeroParaAdvinhar){
           alert("Você chutou o número " + chute )
           alert("Você acertou, parabens !")
           acertou = true
           break
        }
   
        alert("Você chutou o número " + chute )
   
        if(!acertou && chute > numeroParaAdvinhar){
           alert ("Você errou, seu chute foi acima do numero correto, voce tem " + [contador-2] + " tentativas") 
           continue
        }
   
        if(!acertou && chute < numeroParaAdvinhar){
           alert ("Você errou, seu chute foi abaixo do numero correto, voce tem " + [contador-2] + " tentativas") 
           continue
       }
   
      
    }
    //alert("Infelizmente, você não acertou. O número era " + numeroParaAdvinhar + " quase //!"); (Podia deixar aqui a linha que mostra o numero, mas preferi fazer uma função, mesmo que não necessario mas deixando o codigo mais legivel pra outras pessoas)
    
}

function mostraNumeroCorreto(){
   alert("Infelizmente, você não acertou. O número era " + numeroParaAdvinhar + " quase!");
}