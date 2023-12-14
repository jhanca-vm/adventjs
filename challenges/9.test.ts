import { assertEquals } from 'assert'

function adjustLights(lights: string[]) {
  const colors = ['🟢', '🔴']

  colors[1] = colors[+(lights[0] === '🟢')]
  colors[0] = lights[0]

  let index = 0
  let count = 0

  for (const light of lights) {
    count += +(light !== colors[+(index++ % 2)])
  }

  return Math.min(lights.length - count, count)
}

Deno.test('Reto #9: 🚦 Alterna las luces', () => {
  assertEquals(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']), 1)
  assertEquals(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']), 2)
  assertEquals(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']), 0)
  assertEquals(adjustLights(['🔴', '🔴', '🔴']), 1)
})
