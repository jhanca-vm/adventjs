import { assertEquals } from 'assert'

function maxGifts(houses: number[]) {
  const [first, second] = houses
  const count = [first, houses[+(second > first)]]

  for (const next of houses.slice(2)) {
    const last = count.at(-1)!
    const penultimate = count.at(-2)!

    count.push(Math.max(last, penultimate + next))
  }

  return count.at(-1)!
}

Deno.test('Reto #14: 🚨 Evita la alarma', () => {
  assertEquals(maxGifts([2, 4, 2]), 4)
  assertEquals(maxGifts([5, 1, 1, 5]), 10)
  assertEquals(maxGifts([4, 1, 1, 4, 2, 1]), 9)
  assertEquals(maxGifts([1, 3, 1, 3, 100]), 103)
})
