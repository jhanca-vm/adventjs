import { assertEquals } from 'assert'

function findFirstRepeated(gifts: number[]) {
  const set = new Set<number>()

  for (const gift of gifts) {
    if (set.has(gift)) return gift

    set.add(gift)
  }

  return -1
}

Deno.test('Reto #1: 🎁 ¡Primer regalo repetido!', () => {
  assertEquals(findFirstRepeated([2, 1, 3, 5, 3, 2]), 3)
  assertEquals(findFirstRepeated([1, 2, 3, 4]), -1)
  assertEquals(findFirstRepeated([5, 1, 5, 1]), 5)
})
