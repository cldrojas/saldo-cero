/**
 * createMovement()
 * editMovement()
 * deleteMovement()
 * getMovementsByUser()
 */

// import { defineAction } from 'astro:actions'
// import { z } from 'astro:schema'

// export const movements = {
//   getMovements: defineAction({
//     input: z
//       .object({
//         type: z.enum(['income', 'expense', 'transfer'])
//       })
//       .optional(),
//     handler: async (input) => {
//       // Here you would typically fetch the movements from a database or perform some action
//       // For demonstration, we will just return the current movements
//       console.log(`[actions] Getting movements of type: ${input?.type || 'all'}`)
//       if (input?.type) {
//         return db.movements.filter((m) => m.type === input.type)
//       }
//       return db.movements
//     }
//   })
// }
