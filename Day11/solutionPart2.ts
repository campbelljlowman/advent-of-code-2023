export {} 

const pipesGoingNorth = ['|', '7', 'F']
const pipesGoingSouth = ['|', 'L', 'J']
const pipesGoingEast = ['-', '7', 'J']
const pipesGoingWest = ['-', 'L', 'F']
const pipesDirectionsMap: {[id: string]: [string, string]} = {'|': ['North', 'South'], '-': ['East', 'West'], 'L': ['North', 'East'], 'J': ['North', 'West'], '7': ['West', 'South'], 'F': ['East', 'South']}
const inputString = await Bun.file('input.txt').text()
const pipeMap = inputString.split('\n')
let cameFromThe: 'North' | 'South' | 'East' | 'West' = 'North'
let insideOutsideArray: string[][] = []

for (let i = 0; i < pipeMap.length; i++) {
    let newArrayLine = []
    for (let j = 0; j < pipeMap[i].length; j++) {
        newArrayLine.push('U')
    }
    insideOutsideArray.push(newArrayLine)
}

interface Coordinate {
    x: number,
    y: number
}
let currentIndex:Coordinate = {x: 0, y:0}

for (let i = 0; i < pipeMap.length; i++) {
    for (let j = 0; j < pipeMap[i].length; j++) {
        if (pipeMap[i][j] == 'S') {
            currentIndex = {x: i, y: j}
            insideOutsideArray[i][j] = 'P'
        }
    }
}

// console.log(insideOutsideArray)

// console.log(pipeMap[currentIndex.x-1].slice(currentIndex.y-1, currentIndex.y+2))
// console.log(pipeMap[currentIndex.x].slice(currentIndex.y-1, currentIndex.y+2))
// console.log(pipeMap[currentIndex.x+1].slice(currentIndex.y-1, currentIndex.y+2))

if (pipesGoingNorth.includes(pipeMap[currentIndex.x-1][currentIndex.y])) {
    currentIndex.x --
    cameFromThe = 'South'
} else if (pipesGoingSouth.includes(pipeMap[currentIndex.x+1][currentIndex.y])) {
    currentIndex.x ++
    cameFromThe = 'North'
} else if (pipesGoingEast.includes(pipeMap[currentIndex.x][currentIndex.y+1])) {
    currentIndex.x ++
    cameFromThe = 'West'
} else if (pipesGoingWest.includes(pipeMap[currentIndex.x][currentIndex.y-1])) {
    currentIndex.x --
    cameFromThe = 'East'
}


// console.log(pipeMap[currentIndex.x][currentIndex.y])
// console.log(cameFromThe)

let numberOfMoves = 1

while(pipeMap[currentIndex.x][currentIndex.y] !== 'S') {
    insideOutsideArray[currentIndex.x][currentIndex.y] = 'P'
    // console.log(insideOutsideArray)

    // console.log(pipeMap[currentIndex.x][currentIndex.y])
    let nextDirection = getNextDirection(pipeMap[currentIndex.x][currentIndex.y], cameFromThe)

    if (nextDirection == 'North') {
        currentIndex.x--
        cameFromThe = 'South'
    } else if (nextDirection == 'South') {
        currentIndex.x++
        cameFromThe = 'North'
    } else if (nextDirection == 'East') {
        currentIndex.y++
        cameFromThe = 'West'
    } else if (nextDirection == 'West') {
        currentIndex.y--
        cameFromThe = 'East'
    }
    numberOfMoves ++
}

let numberOfInsideTiles = 0
let isInside = false

for (let i = 0; i < pipeMap.length; i++) {
    let numberOfPipesSeen = 0
    for (let j = 0; j < pipeMap[i].length; j++) {
        if (isInside && insideOutsideArray[i][j] == 'U') {
            numberOfInsideTiles++
        }
        if (insideOutsideArray[i][j] == 'P' && [...pipesGoingSouth, ...pipesGoingSouth].includes(pipeMap[i][j])) {
            isInside = !isInside
            numberOfPipesSeen++
        }   
    }

} 

console.log(numberOfInsideTiles)

function getNextDirection(pipeShape, cameFromThe) {
    let pipeDirections = pipesDirectionsMap[pipeShape]
    return pipeDirections.filter(vaule => vaule !== cameFromThe)[0]
}