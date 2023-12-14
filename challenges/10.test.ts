import { assertEquals } from 'assert'

function createChristmasTree(ornaments: string, height: number) {
  const quantity = height * (height + 1) / 2
  const length = Math.ceil(quantity / ornaments.length)
  const spaces = ' '.repeat(height - 1)

  let canopy = ''
  let indexStart = 0

  ornaments = [...ornaments.repeat(length)].join(' ')

  for (const index of new Array(height).keys()) {
    const indexEnd = (index + 1) * (index + 2)
    const layer = ornaments.slice(indexStart, indexEnd - 1)

    canopy += `${spaces.slice(index)}${layer}\n`
    indexStart = indexEnd
  }

  return `${canopy}${spaces}|\n`
}

Deno.test('Reto #10: 🎄 Crea tu propio árbol de navidad', () => {
  assertEquals(
    createChristmasTree('123', 4),
    '   1\n  2 3\n 1 2 3\n1 2 3 1\n   |\n',
  )
  assertEquals(
    createChristmasTree('*@o', 3),
    '  *\n @ o\n* @ o\n  |\n',
  )
})
