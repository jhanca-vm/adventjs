import { assertEquals } from 'assert'

function manufacture(gifts: string[], materials: string) {
  const hasAllMaterials = (gift: string) => {
    const set = new Set(gift + materials)

    return set.size === materials.length
  }

  return gifts.filter(hasAllMaterials)
}

Deno.test('Reto #2: 🏭 Ponemos en marcha la fábrica', () => {
  assertEquals(
    manufacture(['tren', 'oso', 'pelota'], 'tronesa'),
    ['tren', 'oso'],
  )
  assertEquals(manufacture(['juego', 'puzzle'], 'jlepuz'), ['puzzle'])
  assertEquals(manufacture(['libro', 'ps5'], 'psli'), [])
})
