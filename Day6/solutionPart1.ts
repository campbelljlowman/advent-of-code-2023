export {} 

interface Race {
    totalTime: number,
    targetDistance: number
}

const inputString = await Bun.file('input.txt').text()
const inputStringArray = inputString.split('\n')
const times = inputStringArray[0].split(':')[1].trim().split(/\s+/)
const distances = inputStringArray[1].split(':')[1].trim().split(/\s+/)
let races: Race[] = []
let result = 1

for (let i = 0; i < times.length; i++) {
    races.push({totalTime: parseInt(times[i]), targetDistance: parseInt(distances[i])+1})
}

for (const race of races) {
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
    result *= totalSecondsCanHold
    console.log(race, minimumTimeHolding, maximumTimeHolding)
}

console.log(result)
function solveQuadratic(a, b, c): [number, number] {
    let result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)      
    let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)

    return [result1, result2]
}