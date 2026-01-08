const KEY = 'favorites'

export function getFavorites() {
  return JSON.parse(localStorage.getItem(KEY)) || []
}

export function addFavorite(pokemon) {
  const favorites = getFavorites()
  if (!favorites.find(p => p.name === pokemon.name)) {
    favorites.push(pokemon)
    localStorage.setItem(KEY, JSON.stringify(favorites))
  }
}

export function removeFavorite(name) {
  const favorites = getFavorites().filter(p => p.name !== name)
  localStorage.setItem(KEY, JSON.stringify(favorites))
}

export function isFavorite(name) {
  return getFavorites().some(p => p.name === name)
}
