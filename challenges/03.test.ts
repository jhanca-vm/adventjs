import { assertEquals } from 'assert'

function findNaughtyStep(original: string, modified: string) {
  let result = ''
  let index = 0

  for (const modifiedValue of [modified, ''][+(modified === original)]) {
    const originalValue = original[index]
    const nextOriginalValue = original[index + 1]
    const isDeleted = modifiedValue === nextOriginalValue
    const step = [modifiedValue, originalValue][+isDeleted]

    if (modifiedValue !== originalValue) return step

    result = nextOriginalValue
    index++
  }

  return result
}

Deno.test('Reto #3: 😏 El elfo travieso', () => {
  assertEquals(findNaughtyStep('abcd', 'abcde'), 'e')
  assertEquals(findNaughtyStep('stepfor', 'stepor'), 'f')
  assertEquals(findNaughtyStep('abcde', 'abcde'), '')
})
