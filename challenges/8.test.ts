import { assertEquals } from 'assert'

function organizeGifts(gifts: string) {
  const quantities = gifts.match(/\d+/g)!
  const types = gifts.match(/[a-z]/g)!

  let result = ''

  for (const [index, type] of types.entries()) {
    let quantity = Number(quantities[index])

    const pallets = `[${type}]`.repeat(Math.floor(quantity / 50))

    quantity %= 50

    const boxes = `{${type}}`.repeat(Math.floor(quantity / 10))

    quantity %= 10

    const bags = `(${type.repeat(quantity)})`.repeat(+!!quantity)

    result += pallets + boxes + bags
  }

  return result
}

Deno.test('Reto #8: 🏬 Ordenando el almacén', () => {
  assertEquals(organizeGifts('76a11b'), '[a]{a}{a}(aaaaaa){b}(b)')
})
