import input from './input.txt'

const lines = input.split('\n')

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
  const unifiedSets = parsedSets.split(';')
  const sets = unifiedSets
    .map((unifiedSet) => unifiedSet.split(', '))
    .map((set) => parseSet(set))

  const biggestRed = Math.max(...sets.map((set) => set[0]))
  const biggestGreen = Math.max(...sets.map((set) => set[1]))
  const biggestBlue = Math.max(...sets.map((set) => set[2]))

  const powerOfBiggestColors = biggestRed * biggestGreen * biggestBlue

  sum += powerOfBiggestColors
}

console.log('sum', sum)
