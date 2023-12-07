export {} 

const inputString = await Bun.file('input.txt').text()
const inputStringArray = inputString.split('\n')
let sumOfWinnings = 0

inputStringArray.forEach(card => {
    let cardTotal = 0
    let winningNumbersArray = card.split(':')[1].trim().split('|')[0].trim().split(/\s+/)
    let playingNumbersArray = card.split(':')[1].trim().split('|')[1].trim().split(/\s+/)

    playingNumbersArray.forEach(num => {
        if (winningNumbersArray.includes(num)){
            if (cardTotal == 0) {
                cardTotal ++
            } else {
                cardTotal *= 2
            }
        }
    });

    sumOfWinnings += cardTotal
});

console.log(sumOfWinnings)