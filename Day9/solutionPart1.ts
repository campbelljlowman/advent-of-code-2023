export {} 

const inputString = await Bun.file('input.txt').text()
const inputStringArray = inputString.split('\n')
let sum = 0

inputStringArray.forEach(valueLine => {
    let valuesArray = valueLine.split(' ').map((value) => {return parseInt(value)})
    let iterationsArrays = [valuesArray]


    while(!iterationsArrays.at(-1).map((value) => {return value == 0}).every(Boolean)) {
        let nextIterationValues = []
        for (let i = 0; i < iterationsArrays.at(-1).length - 1; i++) {
            nextIterationValues.push(iterationsArrays.at(-1)[i+1] - iterationsArrays.at(-1)[i])
        }
        iterationsArrays.push(nextIterationValues)
    }

    if (iterationsArrays.at(-1).reduce((sum, current) => sum + current, 0) == 0) {
        console.log(iterationsArrays.at(-1))
    }


    for (let i = iterationsArrays.length - 2; i >= 0; i--) {
        iterationsArrays[i].push(iterationsArrays[i].at(-1) + iterationsArrays[i+1].at(-1))
    }

    sum += iterationsArrays[0].at(-1)
});

console.log(sum)