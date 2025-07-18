import type { Account, Movement } from 'src/env'

export const db = {
  config: {
    endDate: new Date('05/08/2025'),
    remainingDays: new Date(new Date('05/08/2025').getTime() - Date.now()).getDay() // need to calculate this
  },
  selectedAccount: {} as Account, // Default selected account
  movements: [
    {
      id: crypto.randomUUID(),
      type: 'income',
      amount: 150300,
      description: 'Initial balance',
      from: 'rut', // account.id
      date: new Date('2023-10-01')
    },
    {
      id: crypto.randomUUID(),
      type: 'expense',
      amount: 10000,
      description: 'Groceries',
      from: 'mercado',
      date: new Date('2023-10-02')
    },
    {
      id: crypto.randomUUID(),
      type: 'expense',
      amount: 5000,
      description: 'Transport',
      from: 'rut',
      date: new Date('2023-10-03')
    },
    {
      id: crypto.randomUUID(),
      type: 'transfer',
      amount: 2000,
      date: new Date('2023-10-04'),
      description: 'Transfer to Coopeuch',

      from: 'mach', // account.id
      to: 'coopeuch' // account.id
    }
  ] as Movement[], // Array to store movements
  accounts: [
    { id: 'rut', name: 'Cta RUT', balance: 7200 },
    { id: 'mach', name: 'Mach', balance: 35720 },
    { id: 'mercado', name: 'Mercadopago', balance: 128350 },
    { id: 'coopeuch', name: 'Coopeuch', balance: 375 }
  ] as Account[] // Array to store accounts
}
