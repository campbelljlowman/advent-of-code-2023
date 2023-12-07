import { expect, test } from "bun:test";
import { isThereASymbol } from "./solutionPart1";

test("Test isThereASymbol no symbols regular position", () => {
    const testInput = ['.....', '.123.', '.....']
    const result = isThereASymbol(testInput, 1, 1, 3)
    expect(result == false)
})

test("Test isThereASymbol all regular symbol positions", () => {
    const testInputTemplate = ['.....', '.123.', '.....']
    let testInputCase = testInputTemplate

    for (let i = 0; i < testInputTemplate.length; i++) {
        for (let j = 0; j < testInputTemplate[0].length; j++) {
            if (testInputTemplate[i].charAt(j) === '.') {
                testInputCase = structuredClone(testInputTemplate)
                testInputCase[i] = testInputCase[i].substring(0, j) + '$' + testInputCase[i].substring(j + 1, testInputTemplate[0].length)
                
                console.log(testInputCase)
                const result = isThereASymbol(testInputCase, 1, 1, 3)
                expect(result == true)
            }
        }
    }
})

test("Test isThereASymbol no symbols no left", () => {
    const testInput = ['....', '123.', '....']
    const result = isThereASymbol(testInput, 1, 1, 3)
    expect(result == false)
})

test("Test isThereASymbol no left", () => {
    const testInputTemplate = ['....', '123.', '....']
    let testInputCase = testInputTemplate

    for (let i = 0; i < testInputTemplate.length; i++) {
        for (let j = 0; j < testInputTemplate[0].length; j++) {
            if (testInputTemplate[i].charAt(j) === '.') {
                testInputCase = structuredClone(testInputTemplate)
                testInputCase[i] = testInputCase[i].substring(0, j) + '$' + testInputCase[i].substring(j + 1, testInputTemplate[0].length)
                
                console.log(testInputCase)
                const result = isThereASymbol(testInputCase, 1, 1, 3)
                expect(result == true)
            }
        }
    }
})

test("Test isThereASymbol no symbols no right", () => {
    const testInput = ['....', '.123', '....']
    const result = isThereASymbol(testInput, 1, 1, 3)
    expect(result == false)
})

test("Test isThereASymbol no right", () => {
    const testInputTemplate = ['....', '.123', '....']
    let testInputCase = testInputTemplate

    for (let i = 0; i < testInputTemplate.length; i++) {
        for (let j = 0; j < testInputTemplate[0].length; j++) {
            if (testInputTemplate[i].charAt(j) === '.') {
                testInputCase = structuredClone(testInputTemplate)
                testInputCase[i] = testInputCase[i].substring(0, j) + '$' + testInputCase[i].substring(j + 1, testInputTemplate[0].length)
                
                console.log(testInputCase)
                const result = isThereASymbol(testInputCase, 1, 1, 3)
                expect(result == true)
            }
        }
    }
})

test("Test isThereASymbol no symbols no top", () => {
    const testInput = ['.123.', '.....']
    const result = isThereASymbol(testInput, 1, 1, 3)
    expect(result == false)
})

test("Test isThereASymbol no top", () => {
    const testInputTemplate = ['.123.', '.....']
    let testInputCase = testInputTemplate

    for (let i = 0; i < testInputTemplate.length; i++) {
        for (let j = 0; j < testInputTemplate[0].length; j++) {
            if (testInputTemplate[i].charAt(j) === '.') {
                testInputCase = structuredClone(testInputTemplate)
                testInputCase[i] = testInputCase[i].substring(0, j) + '$' + testInputCase[i].substring(j + 1, testInputTemplate[0].length)
                
                console.log(testInputCase)
                const result = isThereASymbol(testInputCase, 1, 1, 3)
                expect(result == true)
            }
        }
    }
})

test("Test isThereASymbol no symbols no bottom", () => {
    const testInput = ['.....', '.123.']
    const result = isThereASymbol(testInput, 1, 1, 3)
    expect(result == false)
})

test("Test isThereASymbol no bottom", () => {
    const testInputTemplate = ['.....', '.123.']
    let testInputCase = testInputTemplate

    for (let i = 0; i < testInputTemplate.length; i++) {
        for (let j = 0; j < testInputTemplate[0].length; j++) {
            if (testInputTemplate[i].charAt(j) === '.') {
                testInputCase = structuredClone(testInputTemplate)
                testInputCase[i] = testInputCase[i].substring(0, j) + '$' + testInputCase[i].substring(j + 1, testInputTemplate[0].length)
                
                console.log(testInputCase)
                const result = isThereASymbol(testInputCase, 1, 1, 3)
                expect(result == true)
            }
        }
    }
})