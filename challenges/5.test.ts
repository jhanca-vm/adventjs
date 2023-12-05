import { assertEquals } from 'assert'

function cyberReindeer(road: string, time: number) {
  let position = 0

  road = `.${road.slice(1)}`

  return Array.from({ length: time }, (_, index) => {
    const value = road.slice(0, position) + 'S' + road.slice(position + 1)

    if (index === 4) road = road.replaceAll('|', '*')
    if (road[position + 1] !== '|') position++

    return value
  })
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
