import { assertEquals } from 'assert'

function organizeGifts(gifts: string) {
  const quantities = gifts.match(/\d+/g)!
  const types = gifts.match(/[a-z]/g)!

  let result = ''

  for (const type of types) {
    let quantity = +quantities[types.indexOf(type)]

    result += `[${type}]`.repeat(quantity / 50)
    quantity %= 50
    result += `{${type}}`.repeat(quantity / 10)
    quantity %= 10
    result += `(${type.repeat(quantity)})`.repeat(+!!quantity)
  }

  return result
}

Deno.test('Reto #8: 🏬 Ordenando el almacén', () => {
  assertEquals(organizeGifts('76a11b'), '[a]{a}{a}(aaaaaa){b}(b)')
})
