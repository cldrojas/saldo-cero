import type { Account, Movement } from 'src/env'

export const db = {
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
  ] as Account[] // Array to store accounts
}
