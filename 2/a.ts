import input from './input.txt'

const lines = input.split('\n')
/**
 * maxGame = [r,g,b]
 */
const maxGame = [12, 13, 14]

let sum = 0

/**
 * [ "8 green", "6 blue", "20 red" ]
 */
const parseSet = (set: string[]) => {
  const trimmedSet = set.map((item) => item?.trim())
  const red = trimmedSet.find((item) => item?.includes('red'))
  const green = trimmedSet.find((item) => item?.includes('green'))
  const blue = trimmedSet.find((item) => item?.includes('blue'))

  const parsedRed = parseInt(red?.split(' ')[0] || '0')
  const parsedGreen = parseInt(green?.split(' ')[0] || '0')
  const parsedBlue = parseInt(blue?.split(' ')[0] || '0')

  return [parsedRed, parsedGreen, parsedBlue]
}

for (let line of lines) {
  const [gameNumber, parsedSets] = line.split(': ')
  const parsedGameNumber = parseInt(gameNumber.replaceAll('Game ', ''))
  const unifiedSets = parsedSets.split(';')
  const sets = unifiedSets
    .map((unifiedSet) => unifiedSet.split(', '))
    .map((set) => parseSet(set))

  const parsedGames = sets.map((set) => {
    const [red, green, blue] = set
    const [maxRed, maxGreen, maxBlue] = maxGame

    return maxRed >= red && maxGreen >= green && maxBlue >= blue ? set : null
  })

  const isSetValid = parsedGames.find((set) => set === null) === undefined

  if (isSetValid) {
    sum += parsedGameNumber
  }
}

console.log('sum', sum)
