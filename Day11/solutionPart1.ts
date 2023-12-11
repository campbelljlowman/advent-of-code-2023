export {} 

const inputString = await Bun.file('input.txt').text()
let galaxyMap = inputString.split('\n')
const emptyRowString = '.'.repeat(galaxyMap[0].length)
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

for (const rowToExpand of rowsToExpand.reverse()) {
    galaxyMap = [...galaxyMap.slice(0, rowToExpand), emptyRowString, ...galaxyMap.slice(rowToExpand)]
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

for (let i = 0; i < galaxyMap.length; i++) {
    for (let j = galaxyMap[i].length - 1; j >= 0; j--) {
        if (columnsToExpand.includes(j)) {
            galaxyMap[i] = galaxyMap[i].slice(0, j) + '.' + galaxyMap[i].slice(j)
        }
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
        console.log("distance between ", galaxies[i], galaxies[j], distanceBetween)
    }
}

console.log(sumOfDistances)

function calculateDistanceBetween(galaxy1: Coordinate, galaxy2: Coordinate): number {
    let xDistance = Math.abs(galaxy1.x - galaxy2.x)
    let yDistance = Math.abs(galaxy1.y - galaxy2.y)
    return xDistance + yDistance
}