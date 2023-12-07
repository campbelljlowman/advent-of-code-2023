export {}

const inputString = await Bun.file('input.txt').text()
const inputStringArray = inputString.split('\n')
let sumOfPartNumbers = 0

console.log(parseInt('987.'))
// for (let i = 0; i < inputStringArray.length; i++) {
for (let i = inputStringArray.length - 5; i < inputStringArray.length; i++) {
// for (let i = 0; i < 5; i++) {
    let row = inputStringArray[i]

    // console.log(row)
    let startOfNumberRowIndex = 0
    let inNumber = false
    let numberToCheck = null

    for (let j = 0; j < row.length; j++) {
        if (!isNaN(parseInt(row[j])) && !inNumber) {
            inNumber = true
            startOfNumberRowIndex = j
        } 
        if ((isNaN(parseInt(row[j])) || (j == (row.length - 1))) && inNumber) {
            inNumber = false
            if (j == (row.length - 1)) {
                numberToCheck = row.substring(startOfNumberRowIndex, j + 1)
            } else {
                numberToCheck = row.substring(startOfNumberRowIndex, j)
            }
            // console.log(numberToCheck)
            // console.log(isThereASymbol(i, startOfNumberRowIndex, j - 1))
            // if (parseInt(numberToCheck) == 65) {
            //     console.log("!!!", i, startOfNumberRowIndex, j - 1)
            // }
            if (isThereASymbol(inputStringArray, i, startOfNumberRowIndex, j - 1)) {
                console.log(numberToCheck)
                sumOfPartNumbers += parseInt(numberToCheck)
            }
        }
    };
};

console.log(sumOfPartNumbers)

export function isThereASymbol(input, rowIndex, start, end): boolean {
    if (start > end) {
        throw(`End must be greater than start when checking for symbols: start ${start}, end ${end}`)
    }
    console.log(rowIndex, start, end)
    const leftSideCheck = start > 0 ? 1 : 0
    const rightSideCheck = end < input[0].length - 1 ? 1 : 0

    // Check row above
    if (rowIndex !== 0) {
        for (let i = start - leftSideCheck; i <= end + rightSideCheck; i++) {
            if (input[rowIndex - 1].charAt(i) !== '.') {
                console.log(input[rowIndex - 1].charAt(i))
                return true
            }
        }
    }

    // Check row below
    if (rowIndex !== input.length - 1) {
        for (let i = start - leftSideCheck; i <= end + rightSideCheck; i++) {
            if (input[rowIndex + 1].charAt(i) !== '.') {
                console.log(input[rowIndex + 1].charAt(i))
                return true
            }
        }
    }
    
    // Check char left
    if (leftSideCheck != 0) {
        if (input[rowIndex].charAt(start - 1) !== '.') {
            console.log(input[rowIndex].charAt(start - 1))
            return true
        } 
    }

    // Check char right
    if (rightSideCheck != 0) {
        if (input[rowIndex].charAt(end + 1) !== '.') {
            console.log(input[rowIndex].charAt(end + 1))
            return true
        } 
    }

    return false
}

// console.log(isThereASymbol(0, 15, 15))