String.prototype.shuffle = function () {
  const a = this.split(''), n = a.length

  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
  }
  return a.join('')
}

export function generateUniqueId() {
  let id = Date.now().toString(36)
  id = id + Math.random().toString(36)
  id = id.replace(/\./gmi, '')
  // id = id.shuffle()

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length
  const randomChar = characters.charAt(Math.floor(Math.random() * charactersLength))
  id = randomChar + id

  return id
}
