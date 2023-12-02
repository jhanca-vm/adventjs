import { assertEquals } from 'assert'

function manufacture(gifts: string[], materials: string) {
  const hasMaterials = (gift: string) => {
    return gift.split('').every((material) => materials.includes(material))
  }

  return gifts.filter(hasMaterials)
}

Deno.test('Reto #2: 🏭 Ponemos en marcha la fábrica', () => {
  assertEquals(
    manufacture(['tren', 'oso', 'pelota'], 'tronesa'),
    ['tren', 'oso'],
  )
  assertEquals(manufacture(['juego', 'puzzle'], 'jlepuz'), ['puzzle'])
  assertEquals(manufacture(['libro', 'ps5'], 'psli'), [])
})
