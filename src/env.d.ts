type Runtime = import('@astrojs/cloudflare').Runtime<Env>

declare namespace App {
  interface Locals extends Runtime {}
}

export type Movement = {
  amount: number
  date: Date
  description?: string
  from: string
  id: `${string}-${string}-${string}-${string}-${string}` | undefined
  to?: string
  type: 'income' | 'expense' | 'transfer'
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
  balance: number
  remaining: number
  allowance: number
}
// export type Env = {
// 	MOVEMENTS: KVNamespace
// 	ACCOUNTS: KVNamespace
// }
