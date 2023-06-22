const firstPlayer = Array()
const secondPlayer = Array()

for(i = 0, j = 0; i < 3, j < 3; ++i, ++j){
    const firstPlayerRolls = Math.floor(Math.random() * 6) + 1
    const secondPlayerRolls = Math.floor(Math.random() * 6) + 1
    firstPlayer.push(firstPlayerRolls)
    secondPlayer.push(secondPlayerRolls)
    console.log('First player rolls: ' + firstPlayerRolls)
    console.log('Second player rolls: ' + secondPlayerRolls)
}
console.log('Rolls of first player: ' + firstPlayer)
console.log('Rolls of second player: ' + secondPlayer)

if (firstPlayer > secondPlayer) {
    console.log('First player wins!')
}
    else if(firstPlayer < secondPlayer){
        console.log('Second player wins!')

    }
     else {
    console.log("Draw!")
}