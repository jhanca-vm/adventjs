import { assertEquals } from 'assert'

function cyberReindeer(road: string, time: number) {
  const indices = [...new Array(time).keys()]
  const result = [road]

  road = road.replace('S', '.')

  for (const index of indices.slice(1)) {
    const isOpening = index === 5

    let previous = result.at(-1)!

    previous = [previous, previous.replaceAll('|', '*')][+isOpening]
    road = [road, previous.replace('S', '.')][+isOpening]

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
