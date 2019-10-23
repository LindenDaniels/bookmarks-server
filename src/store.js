const uuid = require('uuid/v4')

const bookmarks = [
  { id: uuid(),
    title: 'Facebook',
    url: 'https://www.facebook.com',
    description: 'Social networking website',
    rating: 5 },
  { id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Where we find everything else',
    rating: 4 },
  { id: uuid(),
    title: 'MDN',
    url: 'https://developer.mozilla.org',
    description: 'The only place to find web documentation',
    rating: 5 },
]

module.exports = { bookmarks }