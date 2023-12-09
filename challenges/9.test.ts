import { assertEquals } from 'assert'

function adjustLights(lights: string[]) {
  let count = 0
  let previous = ''

  for (const light of lights) {
    count += +(light === previous)
    previous = [light, ''][+(light === previous)]
  }

  return count
}

Deno.test('Reto #9: 🚦 Alterna las luces', () => {
  assertEquals(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']), 1)
  assertEquals(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']), 2)
  assertEquals(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']), 0)
  assertEquals(adjustLights(['🔴', '🔴', '🔴']), 1)
})
