import input from './input.txt'

const lines = input.split('\n')

let sum = 0

for (let line of lines) {
  const numbers = line.match(/\d/g)

  const firstNumber = numbers?.[0] ?? '0'
  const lastNumber = numbers?.[numbers.length - 1] ?? '0'

  const fullNumber = parseInt(`${firstNumber}${lastNumber}`)
  console.log(line, fullNumber)

  sum += fullNumber
}

console.log('sum', sum)
