import { defineAction } from 'astro:actions'
import type { Account, Movement } from 'src/env'
import { movements } from './movements'
import { accounts } from './accounts'
import { config } from './config'
import { db } from '@data/index'
import { z } from 'astro:content'

export const server = {
  movements,
  accounts,
  config,
  getDailyBalance: defineAction({
    input: z.object({
      accountId: z.string()
    }),
    handler: async () => {
      const account = db.selectedAccount
      if (!account) {
        throw new Error('Account not found')
      }
      return {
        total: account.balance,
        remaining: account.remaining,
        dailyAllowance: account.allowance,
        remainingDays: db.config.remainingDays,
        selectedAccount: db.selectedAccount
      }
    }
  })
}

/**
 * 
 * getMovements: defineAction({
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
 */
