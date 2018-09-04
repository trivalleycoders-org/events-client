export const nameFromEmail = (email) => {
  if (email === undefined) {
    return undefined
  }
  const idx = email.indexOf('@')
  return email.slice(0, idx)
}