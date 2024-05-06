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


