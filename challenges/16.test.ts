import { assertEquals } from 'assert'

function transformTree(tree: (number | null)[]) {
  const nodes: (Record<string, any> | null)[] = []

  let index = 0

  for (const value of tree) {
    const side = ['right', 'left'][index % 2]
    const node = { value, left: null, right: null }
    const child = [null, { [side]: node }][+(value !== null)]
    const parent = nodes[index - Math.floor(index / 2) - 1]

    Object.assign(parent ?? {}, child)

    nodes.push(node)

    index++
  }

  return nodes[0] ?? null
}

Deno.test('Reto #16: ❌ Despliegue en viernes', () => {
  assertEquals(transformTree([3, 1, 0, 8, 12, null, 1]), {
    value: 3,
    left: {
      value: 1,
      left: {
        value: 8,
        left: null,
        right: null,
      },
      right: {
        value: 12,
        left: null,
        right: null,
      },
    },
    right: {
      value: 0,
      left: null,
      right: {
        value: 1,
        left: null,
        right: null,
      },
    },
  })
})
