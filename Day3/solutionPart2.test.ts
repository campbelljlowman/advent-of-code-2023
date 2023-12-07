import { expect, test } from "bun:test";
import { crawlNumber, findNumbersTouching } from './solutionPart2'


test("findNumbersTouching combinations", () => {
    let testInputs = [
        ['567.234', '...*...', '.......'],
        ['567....', '234*...', '.......'],
        ['567....', '...*234', '.......'],
        ['567....', '...*...', '234....'],
        ['567....', '...*...', '.234...'],
        ['567....', '...*...', '..234..'],
        ['567....', '...*...', '...234.'],
        ['567....', '...*...', '....234']
    ]
    testInputs.forEach(testInput => {
        let result = findNumbersTouching(testInput, 1, 3)
        expect(result[0] * result[1]).toBe(132678)  
    });

    testInputs = [
        ['567.234', '...*...', '.......'],
        ['....234', '567*...', '.......'],
        ['....234', '...*567', '.......'],
        ['....234', '...*...', '567....'],
        ['....234', '...*...', '.567...'],
        ['....234', '...*...', '..567..'],
        ['....234', '...*...', '...567.'],
        ['....234', '...*...', '....567']
    ]
    testInputs.forEach(testInput => {
        let result = findNumbersTouching(testInput, 1, 3)
        expect(result[0] * result[1]).toBe(132678)  
    });

    testInputs = [
        ['567....', '234*...', '.......'],
        ['.567...', '234*...', '.......'],
        ['..567..', '234*...', '.......'],
        ['...567.', '234*...', '.......'],
        ['....567', '234*...', '.......'],
        ['.......', '234*567', '.......'],
        ['.......', '234*...', '567....'],
        ['.......', '234*...', '.567...'],
        ['.......', '234*...', '..567..'],
        ['.......', '234*...', '...567.'],
        ['.......', '234*...', '....567']
    ]

    testInputs.forEach(testInput => {
        let result = findNumbersTouching(testInput, 1, 3)
        expect(result[0] * result[1]).toBe(132678)  
    });

    testInputs = [
        ['567....', '...*234', '.......'],
        ['.567...', '...*234', '.......'],
        ['..567..', '...*234', '.......'],
        ['...567.', '...*234', '.......'],
        ['....567', '...*234', '.......'],
        ['.......', '567*234', '.......'],
        ['.......', '...*234', '567....'],
        ['.......', '...*234', '.567...'],
        ['.......', '...*234', '..567..'],
        ['.......', '...*234', '...567.'],
        ['.......', '...*234', '....567']
    ]
    testInputs.forEach(testInput => {
        let result = findNumbersTouching(testInput, 1, 3)
        expect(result[0] * result[1]).toBe(132678)  
    });

    testInputs = [
        ['.......', '...*...', '567.234'],
        ['.......', '234*...', '567....'],
        ['.......', '...*234', '567....'],
        ['234....', '...*...', '567....'],
        ['.234...', '...*...', '567....'],
        ['..234..', '...*...', '567....'],
        ['...234.', '...*...', '567....'],
        ['....234', '...*...', '567....']
    ]
    testInputs.forEach(testInput => {
        let result = findNumbersTouching(testInput, 1, 3)
        expect(result[0] * result[1]).toBe(132678)  
    });

    testInputs = [
        ['.......', '...*...', '567.234'],
        ['.......', '567*...', '....234'],
        ['.......', '...*567', '....234'],
        ['567....', '...*...', '....234'],
        ['.567...', '...*...', '....234'],
        ['..567..', '...*...', '....234'],
        ['...567.', '...*...', '....234'],
        ['....567', '...*...', '....234']
    ]
    testInputs.forEach(testInput => {
        let result = findNumbersTouching(testInput, 1, 3)
        expect(result[0] * result[1]).toBe(132678)  
    });

})

test("findNumbersTouching above", () => {
    let testInput = ['.234.', '..*..', '.....']
    let result = findNumbersTouching(testInput, 1, 2)
    expect(result).toEqual([234])

    testInput = ['234.567', '...*...', '.......']
    result = findNumbersTouching(testInput, 1, 3)
    expect(result).toEqual([234, 567])

    testInput = ['234.', '*...', '....']
    result = findNumbersTouching(testInput, 1, 0)
    expect(result).toEqual([234])

    testInput = ['234.', '...*', '....']
    result = findNumbersTouching(testInput, 1, 3)
    expect(result).toEqual([234])

    testInput = ['.567', '...*', '....']
    result = findNumbersTouching(testInput, 1, 3)
    expect(result).toEqual([567])

    testInput = ['.567', '*...', '....']
    result = findNumbersTouching(testInput, 1, 0)
    expect(result).toEqual([567])
})

test("findNumbersTouching below", () => {
    let testInput = ['.....', '..*..', '.234.']
    let result = findNumbersTouching(testInput, 1, 2)
    expect(result).toEqual([234])

    testInput = ['.......', '...*...', '234.567']
    result = findNumbersTouching(testInput, 1, 3)
    expect(result).toEqual([234, 567])

    testInput = ['....', '*...', '234.']
    result = findNumbersTouching(testInput, 1, 0)
    expect(result).toEqual([234])

    testInput = ['....', '...*', '234.']
    result = findNumbersTouching(testInput, 1, 3)
    expect(result).toEqual([234])

    testInput = ['....', '...*', '.567']
    result = findNumbersTouching(testInput, 1, 3)
    expect(result).toEqual([567])

    testInput = ['....', '*...', '.567']
    result = findNumbersTouching(testInput, 1, 0)
    expect(result).toEqual([567])
})

test("findNumbersTouching right", () => {
    let testInput = ['.....', '..*234', '.....']
    let result = findNumbersTouching(testInput, 1, 2)
    expect(result).toEqual([234])

    testInput = ['.....', '*234', '.....']
    result = findNumbersTouching(testInput, 1, 0)
    expect(result).toEqual([234])
})

test("findNumbersTouching left", () => {
    let testInput = ['.....', '234*..', '.....']
    let result = findNumbersTouching(testInput, 1, 3)
    expect(result).toEqual([234])

    testInput = ['.....', '234*', '.....']
    result = findNumbersTouching(testInput, 1, 3)
    expect(result).toEqual([234])
})

test("crawlNumber middle small", () => {
    let testInput = ['.23.']
    let result = crawlNumber(testInput, 0, 0)
    expect(result).toBe(-1)

    result = crawlNumber(testInput, 0, 1)
    expect(result).toBe(23)

    testInput = ['.2.']
    result = crawlNumber(testInput, 0, 0)
    expect(result).toBe(-1)

    result = crawlNumber(testInput, 0, 1)
    expect(result).toBe(2)
})

test("crawlNumber middle", () => {
    const testInput = ['.234.']
    let result = crawlNumber(testInput, 0, 0)
    expect(result).toBe(-1)

    result = crawlNumber(testInput, 0, 1)
    expect(result).toBe(234)

    result = crawlNumber(testInput, 0, 2)
    expect(result).toBe(234)

    result = crawlNumber(testInput, 0, 3)
    expect(result).toBe(234)

    result = crawlNumber(testInput, 0, 4)
    expect(result).toBe(-1)    
})

test("crawlNumber no left", () => {
    const testInput = ['234.']
    let result = crawlNumber(testInput, 0, 0)
    expect(result).toBe(234)

    result = crawlNumber(testInput, 0, 1)
    expect(result).toBe(234)

    result = crawlNumber(testInput, 0, 2)
    expect(result).toBe(234)

    result = crawlNumber(testInput, 0, 3)
    expect(result).toBe(-1)    
})

test("crawlNumber no right", () => {
    const testInput = ['.234']
    let result = crawlNumber(testInput, 0, 0)
    expect(result).toBe(-1)

    result = crawlNumber(testInput, 0, 1)
    expect(result).toBe(234)

    result = crawlNumber(testInput, 0, 2)
    expect(result).toBe(234)

    result = crawlNumber(testInput, 0, 3)
    expect(result).toBe(234)
})