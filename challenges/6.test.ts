import { assertEquals } from 'assert'

function maxDistance(movements: string) {
  const left = movements.match(/</g)?.length ?? 0
  const rigth = movements.match(/>/g)?.length ?? 0
  const both = movements.match(/\*/g)?.length ?? 0

  return Math.max(left, rigth) + both - Math.min(left, rigth)
}

Deno.test('Reto #6: 🦌 Los renos a prueba', () => {
  assertEquals(maxDistance('>>*<'), 2)
  assertEquals(maxDistance('<<<>'), 2)
  assertEquals(maxDistance('>***>'), 5)
})
