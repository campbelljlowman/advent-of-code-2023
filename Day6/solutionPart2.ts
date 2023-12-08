export {} 

interface Race {
    totalTime: number,
    targetDistance: number
}

const inputString = await Bun.file('input.txt').text()
const inputStringArray = inputString.split('\n')
const time = parseInt(inputStringArray[0].split(':')[1].replace(/\s/g,''))
const distance = parseInt(inputStringArray[1].split(':')[1].replace(/\s/g,''))
let race: Race = {totalTime: time, targetDistance: distance}


// distance = timeHolding * timeRacing
// totalTime = timeHolding + timeRacing
// totalTime - timeHolding = timeRacing
// distance = timeHolding * (totalTime - timeHolding)
// distance = timeHolding * totalTime - timeHolding ^2
// 0 = timeHolding ^2 + -totalTime * timeHolding  distance

let [result1, result2] = solveQuadratic(-1, race.totalTime, -race.targetDistance)

let minimumTimeHolding = Math.ceil(result1)
let maximumTimeHolding = Math.floor(result2)

let totalSecondsCanHold = maximumTimeHolding - minimumTimeHolding + 1

console.log(totalSecondsCanHold)

function solveQuadratic(a, b, c): [number, number] {
    let result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)      
    let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)

    return [result1, result2]
}