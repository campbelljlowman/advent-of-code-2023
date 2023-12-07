import { SlowBuffer } from "buffer"

export {} 

interface RangeMapping {
    destination: number
    source: number
    range: number
}

let seedToSoilMappings: RangeMapping[] = []
let soilToFertilizerMappings: RangeMapping[] = []
let fertilizerToWaterMappings: RangeMapping[] = []
let waterToLightMappings: RangeMapping[] = []
let lightToTemperatureMappings: RangeMapping[] = []
let temperatureToHumidityMappings: RangeMapping[] = []
let humidityToLocationMappings: RangeMapping[] = []
const seeds = [364807853, 408612163, 302918330, 20208251, 1499552892, 200291842, 3284226943, 16030044, 2593569946, 345762334, 3692780593, 17215731, 1207118682, 189983080, 2231594291, 72205975, 3817565407, 443061598, 2313976854, 203929368]
// const seeds = [79, 14, 55, 13]
await parseInputs()

let smallestLocation = -1
seeds.forEach(seed => {
    const soil = getMapping(seedToSoilMappings, seed)
    const fertilizer = getMapping(soilToFertilizerMappings, soil)
    const water = getMapping(fertilizerToWaterMappings, fertilizer)
    const light = getMapping(waterToLightMappings, water)
    const temperature = getMapping(lightToTemperatureMappings, light)
    const humidity = getMapping(temperatureToHumidityMappings, temperature)
    const location = getMapping(humidityToLocationMappings, humidity)
    console.log("seed:", seed, "soil:", soil, "fertilizer", fertilizer, "water", water, "light", light, "temperature", temperature, 'humidity', humidity, 'location', location)

    if (smallestLocation == -1) {
        smallestLocation = location
    }

    smallestLocation = Math.min(smallestLocation, location)
});

console.log(smallestLocation)

function getMapping(mappings: RangeMapping[], value: number): number {
    for (const mapping of mappings) {
        if((value >= mapping.source) && (value < (mapping.source + mapping.range))) {
            return (value + mapping.destination - mapping.source)
        }
    }

    return value
}

async function parseInputs() {
    const seedToSoilInputString = await Bun.file('seed-to-soil.txt').text()
    const seedToSoilInputStringArray = seedToSoilInputString.split('\n')
    seedToSoilInputStringArray.forEach(element => {
        seedToSoilMappings.push({destination: parseInt(element.split(' ')[0]), source:  parseInt(element.split(' ')[1]), range:  parseInt(element.split(' ')[2])})
    });
    
    const soilToFertilizerInputString = await Bun.file('soil-to-fertilizer.txt').text()
    const soilToFertilizerInputStringArray = soilToFertilizerInputString.split('\n')
    soilToFertilizerInputStringArray.forEach(element => {
        soilToFertilizerMappings.push({destination: parseInt(element.split(' ')[0]), source:  parseInt(element.split(' ')[1]), range:  parseInt(element.split(' ')[2])})
    });
    
    const fertilizerToWaterInputString = await Bun.file('fertilizer-to-water.txt').text()
    const fertilizerToWaterInputStringArray = fertilizerToWaterInputString.split('\n')
    fertilizerToWaterInputStringArray.forEach(element => {
        fertilizerToWaterMappings.push({destination: parseInt(element.split(' ')[0]), source:  parseInt(element.split(' ')[1]), range:  parseInt(element.split(' ')[2])})
    });
    
    const waterToLightInputString = await Bun.file('water-to-light.txt').text()
    const waterToLightInputStringArray = waterToLightInputString.split('\n')
    waterToLightInputStringArray.forEach(element => {
        waterToLightMappings.push({destination: parseInt(element.split(' ')[0]), source:  parseInt(element.split(' ')[1]), range:  parseInt(element.split(' ')[2])})
    });

    const lightToTemperatureInputString = await Bun.file('light-to-temperature.txt').text()
    const lightToTemperatureInputStringArray = lightToTemperatureInputString.split('\n')
    lightToTemperatureInputStringArray.forEach(element => {
        lightToTemperatureMappings.push({destination: parseInt(element.split(' ')[0]), source:  parseInt(element.split(' ')[1]), range:  parseInt(element.split(' ')[2])})
    });

    const temperatureToHumidityInputString = await Bun.file('temperature-to-humidity.txt').text()
    const temperatureToHumidityInputStringArray = temperatureToHumidityInputString.split('\n')
    temperatureToHumidityInputStringArray.forEach(element => {
        temperatureToHumidityMappings.push({destination: parseInt(element.split(' ')[0]), source:  parseInt(element.split(' ')[1]), range:  parseInt(element.split(' ')[2])})
    });

    const humidityToLocationInputString = await Bun.file('humidity-to-location.txt').text()
    const humidityToLocationInputStringArray = humidityToLocationInputString.split('\n')
    humidityToLocationInputStringArray.forEach(element => {
        humidityToLocationMappings.push({destination: parseInt(element.split(' ')[0]), source:  parseInt(element.split(' ')[1]), range:  parseInt(element.split(' ')[2])})
    });
}