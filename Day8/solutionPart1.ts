export {} 

const leftRightInstructions = 'LRLRLLRLRLRRLRLRLRRLRLRLLRRLRRLRLRLRLLRRRLRRRLLRRLRLRLRRRLRRLRRRLRLRLRRLRLLRLRLRRLRRRLRLRRLRRRLLRLRLRRRLRRRLRLRRRLRLRRRLLRRLLLRRRLLRRRLRRRLRRRLRLRLRLLRLRRLRLRLLLRRLRRLRRLRLRRLRRLLRRLRLRRRLRLRLLRRRLRRRLRRRLLLRRRLRLRLRRLRRRLRRRLRLRRRLRRLRRRLRLRRLLRRRLRRRLLLRRLRLRLRRLRRRLRRLRRLRLRRRR'

const inputString = await Bun.file('input.txt').text()
const inputStringArray = inputString.split('\n')

let directionsMap: { [id: string]: [string, string] } = {}
let numberOfSteps = 0
let currentLocation = 'AAA'
inputStringArray.forEach(directionLine => {
    const location = directionLine.split('=')[0].trim()
    const leftDirection = directionLine.split('=')[1].trim().split(',')[0].trim().substring(1)
    const rightDirection = directionLine.split('=')[1].trim().split(',')[1].trim().substring(0, 3)

    directionsMap[location] = [leftDirection, rightDirection]
});

console.log(directionsMap)

while(currentLocation !== 'ZZZ') {
    let nextLocationPair = directionsMap[currentLocation]
    let rightOrLeft = leftRightInstructions[numberOfSteps % leftRightInstructions.length]
    if (rightOrLeft === 'L') {
        currentLocation = nextLocationPair[0]
    } else if (rightOrLeft === 'R') {
        currentLocation = nextLocationPair[1]
    } else {
        throw("right or left isn't R or L")
    }
    numberOfSteps++
    // console.log(nextLocationPair, rightOrLeft, currentLocation)
}

console.log(numberOfSteps)