const generateId = () => {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz0123456789'

  let id = ''
  for (var i = 0; i < 15; i++) {
    id += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length))
  }
  return 'cj' + id + new Date().getTime().toString(36)
}

module.exports = generateId