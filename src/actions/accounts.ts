/*
onboardingInicial()
updatePreferencias()
toggleModoPrivado()
setRecordatorios()
*/

import { z } from 'astro:schema'
import { defineAction } from 'astro:actions'
import { db } from '@data/index'

export const accounts = {
  getAll: defineAction({
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
  })
}
