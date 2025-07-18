import type { Account } from 'src/env'

export const AccountCard = ({ account: Account }: { account: Account }) => {
  const { balance, name, id } = Account
  if (!balance || !name || !id) {
    return <div class="text-xs text-gray-500">No account data available</div>
  }
  return (
    <div class="text-xs border p-4">
      <h3 class="font-semibold text-gray-700">{name}</h3>
      <p class="text-gray-500">ID: {id}</p>
      <p class="text-lg font-bold text-gray-300">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'CLP',
          localeMatcher: "best fit"
        }).format(balance)}
      </p>
      <p class="text-sm text-gray-500">Balance</p>
    </div>
  )
}
