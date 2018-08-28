import { yellow } from 'logger'

export const getSearchText = (state) => {
  const a = state.searchText
  yellow('a', a)
  return a
}