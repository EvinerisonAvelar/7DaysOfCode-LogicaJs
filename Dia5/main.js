let categoria = "";
let comida = ""; 
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];


    let adicionar = "sim"

    while(adicionar == "sim" || adicionar == 1){
      
        adicionar = prompt("Você deseja adicionar uma comida na sua lista de compras ? Digite 1 para SIM e 2 para NÃO")
       
        if(adicionar == 1){
            comida = prompt("Qual comida você deseja adicionar ?")
        }
    
        else if(adicionar == 2){
            alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n `);
            break
        }

        categoria = prompt("a comida se encaixa em qual categoria (Digite o numero correspondente) 1 - Frutas // 2 - Laticinios // 3 - Doces // 4 - Congelados")
    

        if(categoria == 1){
            frutas.push(comida);
            continue
        }
    
        if(categoria == 2){
            laticinios.push(comida);
            continue
        }

        if(categoria == 3){
            doces.push(comida);
            continue
        }

        if(categoria == 4){
            congelados.push(comida);
            continue
        }
    

    }
