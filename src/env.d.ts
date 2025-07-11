type Runtime = import('@astrojs/cloudflare').Runtime<Env>

declare namespace App {
  interface Locals extends Runtime {}
}

export type Movement = {
  id: `${string}-${string}-${string}-${string}-${string}` | undefined
  description?: string
  accounts?: { from: Account; to?: Account }[]
  amount: number
  type: 'income' | 'expense' | 'transfer'
  date: Date
}

export type Expense = Movement & {
  type: 'expense'
}
export type Income = Movement & {
  type: 'income'
}
export type Transfer = Movement & {
  type: 'transfer'
}

export type Account = {
  id?: `${string}-${string}-${string}-${string}-${string}` | string
  name: string
  balance: number | undefined
}
// export type Env = {
// 	MOVEMENTS: KVNamespace
// 	ACCOUNTS: KVNamespace
// }
