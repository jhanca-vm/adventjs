import { assertEquals } from 'assert'

function getIndexsForPalindrome(word: string) {
  const isPalindrome = [...word].reverse().join('') === word
  const indexEnd = [word.length - 1, 0][+isPalindrome]

  let result: number[] | null = [null, []][+isPalindrome]
  let index = 0

  for (const letter of word.slice(0, indexEnd)) {
    const hasResult = result !== null

    let nextIndex = 1

    for (const nextLetter of [word.slice(nextIndex), ''][+hasResult]) {
      const copy = [...word]

      copy[index] = nextLetter
      copy[nextIndex] = letter

      const isPalindrome = copy.join('') === copy.reverse().join('')

      result = [result, [index, nextIndex]][+isPalindrome]
      nextIndex++
    }

    index++
  }

  return result
}

Deno.test('Reto #11: 📖 Los elfos estudiosos', () => {
  assertEquals(getIndexsForPalindrome('anna'), [])
  assertEquals(getIndexsForPalindrome('abab'), [0, 1])
  assertEquals(getIndexsForPalindrome('abac'), null)
  assertEquals(getIndexsForPalindrome('aaaaaaaa'), [])
  assertEquals(getIndexsForPalindrome('aaababa'), [1, 3])
  assertEquals(getIndexsForPalindrome('caababa'), null)
})
