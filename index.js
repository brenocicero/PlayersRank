// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo 
//(vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal
//## Saída
//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
let player = "Nanadaime Hokage"
const ranks = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

function playerStats(victories, defeats){
    let playerScore = victories - defeats
    return playerScore
}

let performance = playerStats(200, 19)

if(performance < 10){
    console.log("O Herói " + player + " tem saldo de " + performance + " vitórias, e está no nível " + ranks[0])
}
else if((performance >= 11) && (performance <= 20)){
    console.log("O Herói " + player + " tem saldo de " + performance + " vitórias, e está no nível " + ranks[1])
}
else if((performance >= 21) && (performance <= 50)){
    console.log("O Herói " + player + " tem saldo de " + performance + " vitórias, e está no nível " + ranks[2])
}
else if((performance >= 51) && (performance <= 80)){
    console.log("O Herói " + player + " tem saldo de " + performance + " vitórias, e está no nível " + ranks[3])
}
else if((performance >= 81) && (performance <= 90)){
    console.log("O Herói " + player + " tem saldo de " + performance + " vitórias, e está no nível " + ranks[4])
}
else if((performance >= 91) && (performance <= 100)){
    console.log("O Herói " + player + " tem saldo de " + performance + " vitórias, e está no nível " + ranks[5])
}
else{
    console.log("O Herói " + player + " tem saldo de " + performance + " vitórias, e está no nível " + ranks[6])
}


