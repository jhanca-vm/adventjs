import { assertEquals } from 'assert'

function findNaughtyStep(original: string, modified: string) {
  if (modified === original) return ''

  let index = 0

  for (const modifiedValue of modified) {
    const originalValue = original[index]

    if (modifiedValue !== originalValue) {
      const nextOriginalValue = original[index + 1]

      return nextOriginalValue === modifiedValue ? originalValue : modifiedValue
    }

    index++
  }
}

Deno.test('Reto #3: 😏 El elfo travieso', () => {
  assertEquals(findNaughtyStep('abcd', 'abcde'), 'e')
  assertEquals(findNaughtyStep('stepfor', 'stepor'), 'f')
  assertEquals(findNaughtyStep('abcde', 'abcde'), '')
})
