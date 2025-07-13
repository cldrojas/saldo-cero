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
      accounts: {
        from: 'Cta RUT' // account.name
      },
      date: new Date('2023-10-01')
    },
    {
      id: crypto.randomUUID(),
      type: 'expense',
      amount: 10000,
      description: 'Groceries',
      accounts: {
        from: 'MercadoPago' // account.name
      },
      date: new Date('2023-10-02')
    },
    {
      id: crypto.randomUUID(),
      type: 'expense',
      amount: 5000,
      description: 'Transport',
      accounts: {
        from: 'Cta RUT' // account.name
      },
      date: new Date('2023-10-03')
    },
    {
      id: crypto.randomUUID(),
      type: 'transfer',
      amount: 2000,
      date: new Date('2023-10-04'),
      description: 'Transfer to Coopeuch',
      accounts: {
        from: 'Mach', // account.name
        to: 'Coopeuch' // account.name
      }
    }
  ] as Movement[], // Array to store movements
  accounts: [
    { id: 'rut', name: 'Cta RUT', balance: 7200 },
    { id: 'mach', name: 'Mach', balance: 35720 },
    { id: 'mercado', name: 'Mercadopago', balance: 128350 },
    { id: 'coopeuch', name: 'Coopeuch', balance: 375 }
  ] as Account[] // Array to store accounts
}
