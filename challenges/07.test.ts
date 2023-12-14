import { assertEquals } from 'assert'

function drawGift(size: number, symbol: string) {
  const base = `${'#'.repeat(size)}\n`
  const length = Math.max(size - 2, 0)
  const center = `${'#'.repeat(size)}${symbol.repeat(length)}#\n`

  let top = ''
  let bottom = ''

  for (const index of Array.from({ length }).keys()) {
    const line = `#${symbol.repeat(length)}#${symbol.repeat(index)}#\n`

    top += ' '.repeat(length - index) + line
    bottom = line + bottom
  }

  const rest = top + center + bottom + base

  return ' '.repeat(size - 1) + base + rest.repeat(+!!(size - 1))
}

Deno.test('Reto #7: 📦 Las cajas en 3D', () => {
  assertEquals(
    drawGift(4, '+'),
    '   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n',
  )
  assertEquals(
    drawGift(5, '*'),
    '    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n' +
      '#***#*#\n#***##\n#####\n',
  )
  assertEquals(drawGift(1, '^'), '#\n')
})
