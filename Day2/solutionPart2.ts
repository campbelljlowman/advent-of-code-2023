export {}

const inputStrings = await Bun.file('input.txt').text()
const inputStringArray = inputStrings.split('\n')
let sumOfGamePowers = 0

inputStringArray.forEach(gameString => {
    const minimumNumberOfColorsMap = {'red': 0, 'green': 0, 'blue': 0}
    const gamesArray = gameString.split(':')[1].trim().split(';')

    // console.log(gamesArray)
    gamesArray.forEach(game => {
        const colorsArray = game.trim().split(',')
        colorsArray.forEach(colorString => {
            const numberOfColor = colorString.trim().split(' ')[0]
            const color = colorString.trim().split(' ')[1]

            minimumNumberOfColorsMap[color] = Math.max(minimumNumberOfColorsMap[color], parseInt(numberOfColor))
        });
    });

    const gamePower = Object.values(minimumNumberOfColorsMap).reduce((gamePower, n) => gamePower * n)
    sumOfGamePowers += gamePower
});

console.log(sumOfGamePowers)