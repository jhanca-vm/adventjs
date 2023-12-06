import { assertEquals } from 'assert'

function cyberReindeer(road: string, time: number) {
  const result = [road]

  road = road.replace('S', '.')

  for (let index = 1; index < time; index++) {
    let previous = result.at(-1)!

    if (index === 5) {
      previous = previous.replaceAll('|', '*')
      road = previous.replace('S', '.')
    }

    const value = road[previous.indexOf('S')] + 'S'

    result.push(previous.replace(/S[\.\*]/, value))
  }

  return result
}

Deno.test('Reto #5: 🛷 El CyberTruck de Santa', () => {
  assertEquals(cyberReindeer('S..|...|..', 10), [
    'S..|...|..',
    '.S.|...|..',
    '..S|...|..',
    '..S|...|..',
    '..S|...|..',
    '...S...*..',
    '...*S..*..',
    '...*.S.*..',
    '...*..S*..',
    '...*...S..',
  ])
})
