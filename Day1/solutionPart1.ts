export {}

const inputStrings = await Bun.file('input.txt').text()
const inputStringArray = inputStrings.split('\n')
let totalSum = 0

inputStringArray.forEach(inputString => {
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