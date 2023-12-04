import { assertEquals } from 'assert'

function decode(message: string): string {
  return message.replace(/\(((?:[^()]+|\([^()]*\))+)\)/g, (match) => {
    const content = match.slice(1, -1)

    return decode(content).split('').reverse().join('')
  })
}

Deno.test('Reto #4: 😵‍💫 Dale la vuelta a los paréntesis', () => {
  assertEquals(decode('hola (odnum)'), 'hola mundo')
  assertEquals(decode('(olleh) (dlrow)!'), 'hello world!')
  assertEquals(decode('sa(u(cla)atn)s'), 'santaclaus')
})
