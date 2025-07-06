import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import type { Movement } from 'src/env'

const accounts = [
  { id: 'rut', name: 'Cta RUT' },
  { id: 'mach', name: 'Mach' },
  { id: 'mercado', name: 'JEJE' },
  { id: 'coopeuch', name: 'Coopeuch vista' }
]

const db = {
  total: 150300, // Initial balance
  remaining: 7300, // Remaining balance
  dailyAllowance: 150300 / 13, // Daily allowance
  remainingDays: 13,
  movements: [
    {
      id: crypto.randomUUID(),
      type: 'income',
      amount: 150300,
      description: 'Initial balance',
      accounts: [{ code: 'rut', name: 'Cta RUT', balance: 150300 }],
      date: new Date('2023-10-01')
    },
    {
      id: crypto.randomUUID(),
      type: 'expense',
      amount: 10000,
      description: 'Groceries',
      date: new Date('2023-10-02')
    },
    {
      id: crypto.randomUUID(),
      type: 'expense',
      amount: 5000,
      description: 'Transport',
      date: new Date('2023-10-03')
    },
    {
      id: crypto.randomUUID(),
      type: 'transfer',
      amount: 2000,
      date: new Date('2023-10-04'),
      description: 'Transfer to Mach',
      accounts: [
        { id: 'rut', name: 'Cta RUT' },
        { id: 'mach', name: 'Mach' }
      ]
    }
  ] as Movement[], // Array to store movements
  accounts: [
    { id: 'rut', name: 'Cta RUT' },
    { id: 'mach', name: 'Mach' },
    { id: 'mercado', name: 'Mercadopago' },
    { id: 'coopeuch', name: 'Coopeuch vista' }
  ] as typeof accounts // Array to store accounts
}

export const server = {
  getBalance: defineAction({
    handler: async () => {
      return {
        ...db
      }
    }
  }),
  getDailyBalance: defineAction({
    handler: async () => {
      return (
        db.total +
        db.movements.reduce((acc, movement) => {
          if (
            movement.date.toDateString() === new Date().toDateString() &&
            movement.type === 'income'
          ) {
            return acc + movement.amount
          }

          return acc
        }, 0) - // Calculate the daily balance by summing today's income movements and removing expenses
        db.movements.reduce((acc, movement) => {
          if (
            movement.date.toDateString() === new Date().toDateString() &&
            movement.type === 'expense'
          ) {
            return acc - movement.amount
          }
          return acc
        }, 0)
      )
    }
  }),
  getMovements: defineAction({
    input: z.object({
      type: z.optional(z.enum(['income', 'expense', 'transfer']))
    }),
    handler: async (input) => {
      // Here you would typically fetch the movements from a database or perform some action
      // For demonstration, we will just return the current movements
      console.log(`[actions] Getting movements of type: ${input.type || 'all'}`)
      if (input.type) {
        return db.movements.filter((m) => m.type === input.type)
      }
      return db.movements
    }
  }),
  getAccounts: defineAction({
    input: z.string().optional(),
    handler: async (input) => {
      // Here you would typically fetch the accounts from a database or perform some action
      // For demonstration, we will just return the current accounts
      console.log(`[actions] Getting accounts`)
      if (input) {
        return db.accounts.filter((account) => account.id === input)
      }
      return db.accounts
    }
  }),
  addIncome: defineAction({
    input: z.object({
      ammount: z.number().min(0, 'Amount must be positive')
    }),
    handler: async (input) => {
      // Here you would typically save the income to a database
      db.total += input.ammount
      const movement: Movement = {
        id: crypto.randomUUID(),
        type: 'income',
        amount: input.ammount,
        date: new Date()
      }
      db.movements.push(movement)
      return `Your money now is, ${db.total}!`
    }
  }),
  addExpense: defineAction({
    input: z.object({
      ammount: z
        .number()
        .max(db.total + 0.1, 'This exceeds your current balance')
        .min(0, 'Amount must be positive')
    }),
    handler: async (input) => {
      if (input.ammount > db.total) {
        throw new Error('Insufficient funds')
      }
      db.total -= input.ammount
      db.movements.push({
        id: crypto.randomUUID(),
        type: 'expense',
        amount: input.ammount,
        date: new Date()
      })
      // Here you would typically save the expense to a database or perform some action
      // For demonstration, we will just return a message
      console.log(`[actions] Adding expense: ${input.ammount}`)
      return `Your money now is, ${db.total - input.ammount}!`
    }
  })
}
