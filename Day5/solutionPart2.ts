export {} 

const inputString = await Bun.file('input.txt').text()
const inputStringArray = inputString.split('\n')
let numberOfCardsPlayed = 0
let stackOfCardPlays = []

inputStringArray.forEach(card => {
    stackOfCardPlays.push(card)
})

while(stackOfCardPlays.length > 0) {
    let card = stackOfCardPlays.pop()
    // console.log("Playing game:", card)
    let numberOfCardWinners = 0
    let gameNumber = parseInt(card.split(':')[0].trim().split(/\s+/)[1])
    let winningNumbersArray = card.split(':')[1].trim().split('|')[0].trim().split(/\s+/)
    let playingNumbersArray = card.split(':')[1].trim().split('|')[1].trim().split(/\s+/)

    playingNumbersArray.forEach(num => {
        if (winningNumbersArray.includes(num)){
            numberOfCardWinners ++
            stackOfCardPlays.push(inputStringArray[gameNumber + numberOfCardWinners - 1])
        }
    });

    numberOfCardsPlayed ++
}

console.log(numberOfCardsPlayed)