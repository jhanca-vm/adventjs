import { assertEquals } from 'assert'

function drawGift(size: number, symbol: string) {
  if (size < 2) return '#\n'

  const base = '#'.repeat(size)
  const lines = [`${' '.repeat(size - 1)}${base}\n`]

  size -= 2

  for (let index = 0; index < size; index++) {
    const spaces = ' '.repeat(size - index)
    const topSymbols = symbol.repeat(size)
    const rightSymbols = symbol.repeat(index)

    lines.push(`${spaces}#${topSymbols}#${rightSymbols}#\n`)
  }

  const top = lines.join('')
  const center = `${base}${symbol.repeat(size)}#\n`
  const bottom = lines.reverse().join('').trimStart()

  return top + center + bottom.replace(/\n\s+/g, '\n')
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
