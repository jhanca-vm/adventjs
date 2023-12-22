import { assertEquals } from 'assert'

function decode(message: string) {
  const result: string[] = ['', '', '']

  let nesting = 0

  for (const character of message) {
    const isOpening = character === '('
    const isClosing = character === ')'
    const value = [character, result[nesting]][+isClosing + +isOpening]

    result[nesting] = [result[nesting], ''][+isClosing]
    nesting -= +isClosing

    const current = [result[nesting], ''][+isOpening]

    result[nesting] = [current + value, value + current][+(nesting === 1)]
    nesting += +isOpening
  }

  return result[0]
}

Deno.test('Reto #4: 😵‍💫 Dale la vuelta a los paréntesis', () => {
  assertEquals(decode('hola (odnum)'), 'hola mundo')
  assertEquals(decode('(olleh) (dlrow)!'), 'hello world!')
  assertEquals(decode('sa(u(cla)atn)s'), 'santaclaus')
})
