import { assertEquals } from 'assert'

function maxDistance(movements: string) {
  const left = movements.match(/</g)?.length ?? 0
  const right = movements.match(/>/g)?.length ?? 0
  const both = movements.length - left - right

  return Math.max(left, right) + both - Math.min(left, right)
}

Deno.test('Reto #6: 🦌 Los renos a prueba', () => {
  assertEquals(maxDistance('>>*<'), 2)
  assertEquals(maxDistance('<<<>'), 2)
  assertEquals(maxDistance('>***>'), 5)
})
