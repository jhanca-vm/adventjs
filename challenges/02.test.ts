import { assertEquals } from 'assert'

function manufacture(gifts: string[], materials: string) {
  let result: string[] = []

  for (const gift of gifts) {
    const set = new Set(gift + materials)
    const hasAllMaterials = set.size === materials.length

    result = result.concat([[], gift][+hasAllMaterials])
  }

  return result
}

Deno.test('Reto #2: 🏭 Ponemos en marcha la fábrica', () => {
  assertEquals(
    manufacture(['tren', 'oso', 'pelota'], 'tronesa'),
    ['tren', 'oso'],
  )
  assertEquals(manufacture(['juego', 'puzzle'], 'jlepuz'), ['puzzle'])
  assertEquals(manufacture(['libro', 'ps5'], 'psli'), [])
})
