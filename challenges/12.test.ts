import { assertEquals } from 'assert'

function checkIsValidCopy(original: string, copy: string) {
  const symbolSequence = '#+:. '

  let isValid = true
  let index = 0

  for (const character of original) {
    const symbolIndex = symbolSequence.indexOf(character)
    const symbols = symbolSequence.substring(symbolIndex)
    const sequence = character + character.toLowerCase() + symbols

    isValid &&= sequence.includes(copy[index++])
  }

  return isValid
}

Deno.test('Reto #12: 📸 ¿Es una copia válida?', () => {
  assertEquals(
    checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#'),
    true,
  )
  assertEquals(
    checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#'),
    false,
  )
  assertEquals(checkIsValidCopy('Santa Claus', 's#+:. c:. s'), true)
  assertEquals(checkIsValidCopy('Santa Claus', 's#+:.#c:. s'), false)
})
