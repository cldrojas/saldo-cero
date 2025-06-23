import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

let money = 10
let movements = []

export const server = {
  addIncome: defineAction({
    input: z.object({
      ammount: z.number().min(0, 'Amount must be positive')
    }),
    handler: async (input) => {
      // Here you would typically save the income to a database or perform some action
      // For demonstration, we will just return a message
      console.log(`[actions] Adding income: ${input.ammount}`)
      return `Your money now is, ${money + input.ammount}!`
    }
  }),
  getBalance: defineAction({
    input: z.object({}),
    handler: async () => {
      // Here you would typically fetch the balance from a database or perform some action
      // For demonstration, we will just return the current balance
      console.log('[actions] Getting balance')
      return money
    }
  })
}
