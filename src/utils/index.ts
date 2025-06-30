import type { Movement } from 'src/env'

export const movementColor = (type: Movement['type']) => {
  switch (type) {
    case 'income':
      return 'text-green-500'
    case 'expense':
      return 'text-red-400'
    case 'transfer':
      return 'text-blue-300'
    default:
      return 'text-gray-400'
  }
}
