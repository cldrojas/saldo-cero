/**
 * createMovement()
 * editMovement()
 * deleteMovement()
 * getMovementsByUser()
 */

import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'
import { db } from '@data/index'

export const movements = {
  getAll: defineAction({
    input: z
      .object({
        type: z.enum(['income', 'expense', 'transfer']).optional()
      })
      .optional(),
    handler: async (input) => {
      // Here you would typically fetch the movements from a database or perform some action
      // For demonstration, we will just return the current movements
      if (input?.type) {
        return db.movements.filter((m) => m.type === input.type)
      }
      return db.movements
    }
  }),
  create: defineAction({
    accept: 'form',
    input: z.object({
      type: z.enum(['income', 'expense', 'transfer']),
      amount: z.number(),
      date: z.string().optional(),
      description: z.string().optional(),
      accounts: z.object({
        from: z.string(),
        to: z.string().optional()
      })
    }),
    handler: async (input) => {
      const newMovement = {
        id: crypto.randomUUID(),
        ...input,
        date: input.date ? new Date(input.date) : new Date()
      }
      console.log(`saving movement`, newMovement)
      db.movements.push(newMovement)
      return newMovement
    }
  })
}
