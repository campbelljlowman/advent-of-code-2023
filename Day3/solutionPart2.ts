export {}

const inputString = await Bun.file('input.txt').text()
const inputStringArray = inputString.split('\n')
let sumOfGearRatios = 0

for (let i = 0; i < inputStringArray.length; i++) {
// for (let i = inputStringArray.length - 5; i < inputStringArray.length; i++) {
// for (let i = 0; i < 5; i++) {
    let row = inputStringArray[i]

    for (let j = 0; j < row.length; j++) {
        if (row[j] !== '.' && isNaN(parseInt(row[j]))) {
            let numbersTouching = findNumbersTouching(inputStringArray, i, j)
            if (numbersTouching.length == 2) {
                sumOfGearRatios += (numbersTouching[0] * numbersTouching[1])
                console.log(numbersTouching)
            } 
        }
    };
};

console.log(sumOfGearRatios)

export function findNumbersTouching(input, rowIndex, colIndex): number[] {
    // console.log(rowIndex, start, end)
    const leftSideCheck = colIndex > 0 ? 1 : 0
    const rightSideCheck = colIndex < input[0].length - 1 ? 1 : 0
    let numbersTouching: number[] = []

    // Check row above
    if (rowIndex !== 0) {
        let topLeftNumber = crawlNumber(input, rowIndex - 1, colIndex - leftSideCheck)
        let topMiddleNumber = crawlNumber(input, rowIndex - 1, colIndex)
        let topRightNumber = crawlNumber(input, rowIndex - 1, colIndex + rightSideCheck)
        if (topLeftNumber !== -1) {
            numbersTouching.push(topLeftNumber)
        }
        if (topMiddleNumber !== -1 && topMiddleNumber !== topLeftNumber) {
            numbersTouching.push(topMiddleNumber)
        }
        if (topRightNumber !== -1 && topRightNumber !== topLeftNumber && topRightNumber !== topMiddleNumber) {
            numbersTouching.push(topRightNumber)
        }
    }

    // Check row below
    if (rowIndex !== input.length - 1) {
        let bottomLeftNumber = crawlNumber(input, rowIndex + 1, colIndex - leftSideCheck)
        let bottomMiddleNumber = crawlNumber(input, rowIndex + 1, colIndex)
        let bottomRightNumber = crawlNumber(input, rowIndex + 1, colIndex + rightSideCheck)
        if (bottomLeftNumber !== -1) {
            numbersTouching.push(bottomLeftNumber)
        }
        if (bottomMiddleNumber !== -1 && bottomMiddleNumber !== bottomLeftNumber) {
            numbersTouching.push(bottomMiddleNumber)
        }
        if (bottomRightNumber !== -1 && bottomRightNumber !== bottomLeftNumber && bottomRightNumber !== bottomMiddleNumber) {
            numbersTouching.push(bottomRightNumber)
        }
    }
    
    // Check char left
    if (leftSideCheck != 0) {
        let leftNumber = crawlNumber(input, rowIndex, colIndex - leftSideCheck)
        if (leftNumber !== -1) {
            numbersTouching.push(leftNumber)
        }
    }

    // Check char right
    if (rightSideCheck != 0) {
        let rightNumber = crawlNumber(input, rowIndex, colIndex + rightSideCheck)
        if (rightNumber !== -1) {
            numbersTouching.push(rightNumber)
        }
    }

    return numbersTouching
}

export function crawlNumber(inputArray, rowIndex, colIndex): number {
    let leftIndex = colIndex
    let rightIndex = colIndex
    if (isNaN(parseInt(inputArray[rowIndex][colIndex]))) {
        return -1
    } 

    while (!isNaN(parseInt(inputArray[rowIndex][leftIndex - 1]))) {
        leftIndex --
    }

    while (!isNaN(parseInt(inputArray[rowIndex][rightIndex + 1]))) {
        rightIndex ++
    }

    return parseInt(inputArray[rowIndex].substring(leftIndex, rightIndex + 1))

}