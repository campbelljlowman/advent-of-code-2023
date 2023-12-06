export {}

const inputStrings = await Bun.file('input.txt').text()
const inputStringArray = inputStrings.split('\n')
const numberOfColorsAllowedMap = {'red': 12, 'green': 13, 'blue': 14}
let sumOfGameIDs = 0

inputStringArray.forEach(gameString => {
    let isGameValid = true
    const gameID = gameString.split(':')[0].split(' ')[1]
    const gamesArray = gameString.split(':')[1].trim().split(';')

    // console.log(gamesArray)
    gamesArray.forEach(game => {
        const colorsArray = game.trim().split(',')
        colorsArray.forEach(colorString => {
            const numberOfColor = colorString.trim().split(' ')[0]
            const color = colorString.trim().split(' ')[1]

            if (numberOfColor > numberOfColorsAllowedMap[color]){
                isGameValid = false
            }
        });
    });

    if (isGameValid === true) {
        sumOfGameIDs += parseInt(gameID)
    }
});

console.log(sumOfGameIDs)