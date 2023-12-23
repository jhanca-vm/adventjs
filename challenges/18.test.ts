import { assertEquals } from 'assert'

function drawClock(time: string) {
  const screen = []
  const colon = [' ', ' ', '*', ' ', '*', ' ', ' ']
  const left = ['*', ' ', ' ']
  const right = [' ', ' ', '*']
  const both = ['*', ' ', '*']
  const fill = ['*', '*', '*']
  const digits = [
    [fill, right, fill, fill, both, fill, fill, fill, fill, fill],
    [both, right, right, right, both, left, left, right, both, both],
    [both, right, right, right, both, left, left, right, both, both],
    [both, right, fill, fill, fill, fill, fill, right, fill, fill],
    [both, right, left, right, right, right, both, right, both, right],
    [both, right, left, right, right, right, both, right, both, right],
    [fill, right, fill, fill, right, fill, fill, right, fill, fill],
  ]

  for (const index of digits.keys()) {
    const digitRow = digits[index]
    const hour = digitRow[+time[0]].concat(' ', digitRow[+time[1]])
    const minute = digitRow[+time[3]].concat(' ', digitRow[+time[4]])

    screen[index] = hour.concat(' ', colon[index], ' ', minute)
  }

  return screen
}

Deno.test('Reto #18: 🔢 El reloj digital', () => {
  assertEquals(drawClock('01:30'), [
    ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
  ])
})
