import { assertEquals } from 'assert'

function autonomousDrive(store: string[], movements: string[]) {
  const y = store.findIndex((xAxis) => xAxis.includes('!'))
  const xAxis = store[y]

  let position: Record<string, number> = { x: xAxis.indexOf('!'), y }

  store[y] = xAxis.replace('!', '.')

  for (const movement of movements) {
    const state = { ...position }
    const axis = ['x', 'y'][+('UD'.includes(movement))]
    const value = [-1, 1][+('RD'.includes(movement))]

    state[axis] += value

    position = [position, state][+(store[state.y]?.[state.x] === '.')]
  }

  const xValues = [...store[position.y]]

  xValues[position.x] = '!'
  store[position.y] = xValues.join('')

  return store
}

Deno.test('Reto #15: ↔️ Robot autónomo', () => {
  assertEquals(autonomousDrive(['..!....', '...*.*.'], ['R', 'R', 'D', 'L']), [
    '.......',
    '...*!*.',
  ])
})
