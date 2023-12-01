import input from './input.txt'

const lines = input.split('\n')

const NUMBERS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]

const regex = new RegExp(
  /(?=(zero|one|two|three|four|five|six|seven|eight|nine|\d))/g,
  'g'
)

let sum = 0

for (let line of lines) {
  const numbers = [...line.matchAll(regex)].flat().filter(Boolean)

  const firstNumber = numbers?.[0] ?? '0'
  const lastNumber = numbers?.[numbers.length - 1] ?? '0'

  const parsedFirstNumber =
    NUMBERS.indexOf(firstNumber) !== -1
      ? NUMBERS.indexOf(firstNumber)
      : firstNumber

  const parsedLastNumber =
    NUMBERS.indexOf(lastNumber) !== -1
      ? NUMBERS.indexOf(lastNumber)
      : lastNumber

  const fullNumber = parseInt(`${parsedFirstNumber}${parsedLastNumber}`)

  console.log(line, fullNumber)

  sum += fullNumber
}

console.log('sum', sum)
