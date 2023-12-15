import { assertEquals } from 'assert'

function calculateTime(deliveries: string[]) {
  let count = -25200

  for (const delivery of deliveries) {
    const [hours, minutes, seconds] = delivery.split(':')
    count += (+hours * 3600) + (+minutes * 60) + (+seconds)
  }

  const sign = ['', '-'][+(count < 0)]

  count = Math.abs(count)

  const hours = Math.floor(count / 3600).toString().padStart(2, '0')

  count %= 3600

  const minutes = Math.floor(count / 60).toString().padStart(2, '0')

  count %= 60

  const seconds = count.toString().padStart(2, '0')

  return `${sign}${hours}:${minutes}:${seconds}`
}

Deno.test('Reto #13: ⌚ Calculando el tiempo', () => {
  assertEquals(calculateTime(['00:10:00', '01:00:00', '03:30:00']), '-02:20:00')
  assertEquals(calculateTime(['02:00:00', '05:00:00', '00:30:00']), '00:30:00')
  assertEquals(
    calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']),
    '-05:29:00',
  )
})
