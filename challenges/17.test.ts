import { assertEquals } from 'assert'

function optimizeIntervals(intervals: number[][]) {
  const [first, ...rest] = intervals.sort(([a], [b]) => a - b)

  let result = [first]

  for (const [start, end] of rest) {
    const lastStart = result.at(-1)![0]
    const lastEnd = result.at(-1)![1]
    const isInRange = (+(start >= lastStart) + +(start <= lastEnd)) === 2

    result.at(-1)![1] = [lastEnd, Math.max(lastEnd, end)][+isInRange]
    result = result.concat([[], [[start, end]]][+!isInRange])
  }

  return result
}

Deno.test('Reto #17: 🛷 Optimizando el alquiler', () => {
  assertEquals(optimizeIntervals([[5, 8], [2, 7], [3, 4]]), [[2, 8]])
  assertEquals(optimizeIntervals([[1, 3], [8, 10], [2, 6]]), [[1, 6], [8, 10]])
  assertEquals(
    optimizeIntervals([[3, 4], [1, 2], [5, 6]]),
    [[1, 2], [3, 4], [5, 6]],
  )
})
