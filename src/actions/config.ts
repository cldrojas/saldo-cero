/*
setPresupuesto()
getPresupuesto()
updatePresupuesto()
resetPresupuesto()
*/

import { defineAction } from 'astro:actions'
import { db } from '@data/index'

export const config = {
  remaininDays: defineAction({
    handler: () => {
      const daysRemaining = db.config.endDate.getTime() - Date.now()
      console.log(`actions.config:daysRemaining:`, daysRemaining)
    }
  })
}
