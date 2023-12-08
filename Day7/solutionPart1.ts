export {} 

interface Hands {
    highCards: string[],
    onePairs: string[],
    twoPairs: string[],
    threeOfAKinds: string[],
    fullHouses: string[],
    fourOfAKinds: string[],
    fiveOfAKinds: string[]
}
const cardValueMapping = {'A': 14, 'K': 13, 'Q': 12, 'J': 11, 'T': 10, '9': 9, '8': 8, '7': 7, '6': 6, '5': 5, '4': 4, '3': 3, '2': 2}

let hands: Hands = {highCards: [], onePairs: [], twoPairs: [], threeOfAKinds: [], fullHouses: [], fourOfAKinds: [], fiveOfAKinds: []}
let handBidMap = {}

const inputString = await Bun.file('input.txt').text()
const inputStringArray = inputString.split('\n')

inputStringArray.forEach(handAndBid => {
    let hand = handAndBid.split(' ')[0]
    let bid = parseInt(handAndBid.split(' ')[1])
    handBidMap[hand] = bid

    let handCardsMap: { [id: string] : number} = {}
    for (const char of hand) {
        if (char in handCardsMap) {
            handCardsMap[char] ++
        } else {
            handCardsMap[char] = 1
        }
    }


    if (Object.values(handCardsMap).includes(5)) {
        hands.fiveOfAKinds.push(hand)
    } else if (Object.values(handCardsMap).includes(4)) {
        hands.fourOfAKinds.push(hand)
    } else if (Object.values(handCardsMap).includes(3) && (Object.values(handCardsMap).includes(2))) {
        hands.fullHouses.push(hand)
    } else if (Object.values(handCardsMap).includes(3)) {
        hands.threeOfAKinds.push(hand)
    } else if (2 == Object.values(handCardsMap).filter(card => card == 2).length) {
        hands.twoPairs.push(hand)
    } else if (Object.values(handCardsMap).includes(2)){
        hands.onePairs.push(hand)
    } else {
        hands.highCards.push(hand)
    }

});

hands.highCards.sort(sortHands)
hands.onePairs.sort(sortHands)
hands.twoPairs.sort(sortHands)
hands.threeOfAKinds.sort(sortHands)
hands.fullHouses.sort(sortHands)
hands.fourOfAKinds.sort(sortHands)
hands.fiveOfAKinds.sort(sortHands)

let handCounter = 1
let totalWinnings = 0

hands.highCards.forEach(hand => {
    let handBid = handBidMap[hand]
    totalWinnings += handBid * handCounter
    handCounter ++
});
hands.onePairs.forEach(hand => {
    let handBid = handBidMap[hand]
    totalWinnings += handBid * handCounter
    handCounter ++
});
hands.twoPairs.forEach(hand => {
    let handBid = handBidMap[hand]
    totalWinnings += handBid * handCounter
    handCounter ++
});
hands.threeOfAKinds.forEach(hand => {
    let handBid = handBidMap[hand]
    totalWinnings += handBid * handCounter
    handCounter ++
});
hands.fullHouses.forEach(hand => {
    let handBid = handBidMap[hand]
    totalWinnings += handBid * handCounter
    handCounter ++
});
hands.fourOfAKinds.forEach(hand => {
    let handBid = handBidMap[hand]
    totalWinnings += handBid * handCounter
    handCounter ++
});
hands.fiveOfAKinds.forEach(hand => {
    let handBid = handBidMap[hand]
    totalWinnings += handBid * handCounter
    handCounter ++
});

console.log(hands)
// console.log(handCounter)
console.log(totalWinnings)

function sortHands(a: string, b: string): number {
    for (let i = 0; i < a.length; i++) {
        if (cardValueMapping[a[i]] < cardValueMapping[b[i]]) {
            // console.log(a, "is less than", b)
            return -1
        } else if (cardValueMapping[a[i]] == cardValueMapping[b[i]]) {
            continue
        } else {
            // console.log(a, "is greater than", b)
            return 1
        }
    }

    return 0
}