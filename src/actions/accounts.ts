/*
onboardingInicial()
updatePreferencias()
toggleModoPrivado()
setRecordatorios()
*/

import { z } from 'astro:schema'
import { defineAction } from 'astro:actions'
import { db } from '@data/index'

const today = new Date()
const getRemainingForToday = async () => {
  const allowance = db.selectedAccount.balance / db.config.remainingDays
  console.log(`actions.account:allowance:`, allowance)
  const data = {
    balance: db.selectedAccount.balance,
    remainingDays: db.config.remainingDays,
    allowance
  }
  console.log(`DEBUG:data:`, data)
  const accountMovements = db.movements.filter(
    (move) => move.from === db.selectedAccount.id && move.date === today
  )
  console.log(`DEBUG:accountMovements:`, accountMovements)
  const totalExpensesForToday = 0
  // totalExpenses = reduce(movements.expense)
  // remaining = allowance - totalExpenses
  const actualRemaining = allowance
  console.log('returning remaining for today', actualRemaining)
  return allowance
}

export const accounts = {
  getSelectedAccount: defineAction({
    handler: async () => {
      return db.selectedAccount
    }
  }),
  selectAccount: defineAction({
    accept: 'json',
    input: z.object({
      accountId: z.string()
    }),
    handler: async (input) => {
      console.log(`[actions] Selecting account for id: ${input.accountId}`)
      const accountToSelect = db.accounts.find((a) => a.id === input.accountId)
      console.log(`actions.account:accountToSelect:`, accountToSelect)
      if (!accountToSelect) return
      db.selectedAccount = accountToSelect
      const res = await getRemainingForToday()
      return { ...db.selectedAccount, remainingForToday: res }
    }
  }),
  getAll: defineAction({
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
  getById: defineAction({
    input: z.object({
      accountId: z.string()
    }),
    handler: async (input) => {
      const account = db.accounts.find((a) => a.id === input.accountId)
      if (!account) {
        throw new Error('Account not found')
      }
      return account
    }
  })
}
