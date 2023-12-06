export {}

const inputStrings = await Bun.file('input.txt').text()
const inputStringArray = inputStrings.split('\n')
const digitsSpelledOut: [string, string][] = [['one', '1'], ['two', '2'], ['three', '3'], ['four', '4'], ['five', '5'], 
    ['six', '6'], ['seven', '7'], ['eight', '8'], ['nine', '9']]
let totalSum = 0

inputStringArray.forEach(inputString => {
    // console.log(inputString)
    digitsSpelledOut.forEach(digitTuple => {
        let indexOfDigitString = inputString.indexOf(digitTuple[0])
        while (indexOfDigitString !== -1) {
            inputString = inputString.slice(0, indexOfDigitString + 1) + digitTuple[1] + inputString.slice(indexOfDigitString + 1);
            indexOfDigitString = inputString.indexOf(digitTuple[0])
        }
    });
    // console.log(inputString)

    let firstNumber: string
    let lastNumber: string

    for (let i = 0; i < inputString.length; i++) {
        if (!Number.isNaN(parseInt(inputString.charAt(i)))) {
            firstNumber = inputString.charAt(i)
            break
        }
    }
    for (let i = inputString.length; i >= 0; i--) {
        if (!Number.isNaN(parseInt(inputString.charAt(i)))) {
            lastNumber = inputString.charAt(i)
            break
        }
    }

    const lineSumString = firstNumber + lastNumber
    const lineSumNumber = parseInt(lineSumString)

    totalSum += lineSumNumber
    // console.log(inputString)
    // console.log(firstNumber)
    // console.log(lastNumber)
    // console.log(lineSumNumber)
});

console.log(totalSum)