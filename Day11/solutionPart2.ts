export {} 

const inputString = await Bun.file('input.txt').text()
let galaxyMap = inputString.split('\n')
const emptyRowString = '.'.repeat(galaxyMap[0].length)
const emptyGapMultiplyer = 1000000
let rowsToExpand = []
let columnsToExpand = []
let galaxies: Coordinate[] = []
let sumOfDistances = 0

interface Coordinate {
    x: number,
    y: number
}

for (let i = 0; i < galaxyMap.length; i++) {
    let seenAGalaxy = false
    for (let j = 0; j < galaxyMap[i].length; j++) {
        if (galaxyMap[i][j] == '#') {
            seenAGalaxy = true
        }
    }
    if(!seenAGalaxy) {
        rowsToExpand.push(i)
    }
}


for (let i = 0; i < galaxyMap[0].length; i++) {
    let seenAGalaxy = false
    for (let j = 0; j < galaxyMap.length; j++) {
        if (galaxyMap[j][i] == '#') {
            seenAGalaxy = true
        }
    }
    if(!seenAGalaxy) {
        columnsToExpand.push(i)
    }
}


// console.log(rowsToExpand)
// console.log(columnsToExpand)

// console.log(galaxyMap)

for (let i = 0; i < galaxyMap.length; i++) {
    for (let j = 0; j < galaxyMap[i].length; j++) {
        if (galaxyMap[i][j] == '#') {
            galaxies.push({x: i, y: j})
        }
    }
}

for (let i = 0; i < galaxies.length; i++) {
    for (let j = i + 1; j < galaxies.length; j++) {
        let distanceBetween = calculateDistanceBetween(galaxies[i], galaxies[j])
        sumOfDistances += distanceBetween
        // console.log("distance between ", galaxies[i], galaxies[j], distanceBetween)
    }
}

console.log(sumOfDistances)

function calculateDistanceBetween(galaxy1: Coordinate, galaxy2: Coordinate): number {
    let greaterXCoordinate = galaxy1.x - galaxy2.x > 0 ? galaxy1.x : galaxy2.x
    let lesserXCoordinate = galaxy1.x - galaxy2.x < 0 ? galaxy1.x : galaxy2.x
    // console.log(lesserXCoordinate, greaterXCoordinate)
    let emptyRowsInBetweenX = rowsToExpand.filter((value) => value > lesserXCoordinate && value < greaterXCoordinate).length
    // console.log(emptyRowsInBetween)
    let xDistance = greaterXCoordinate - lesserXCoordinate + (emptyGapMultiplyer-1) * emptyRowsInBetweenX

    let greaterYCoordinate = galaxy1.y - galaxy2.y > 0 ? galaxy1.y : galaxy2.y
    let lesserYCoordinate = galaxy1.y - galaxy2.y < 0 ? galaxy1.y : galaxy2.y
    // console.log(lesserXCoordinate, greaterXCoordinate)
    let emptyRowsInBetweenY = columnsToExpand.filter((value) => value > lesserYCoordinate && value < greaterYCoordinate).length
    // console.log(emptyRowsInBetweenY)
    let yDistance = greaterYCoordinate - lesserYCoordinate + (emptyGapMultiplyer-1) * emptyRowsInBetweenY
    return xDistance + yDistance
}