import { blink } from '../blink/client'

export const addToWatchlist = async (symbol: string) => {
  try {
    const user = await blink.auth.me()
    
    // Check if symbol already exists in watchlist
    const existing = await blink.db.watchlist.list({
      where: { 
        AND: [
          { userId: user.id },
          { symbol: symbol.toUpperCase() }
        ]
      }
    })

    if (existing.length > 0) {
      throw new Error('Symbol already in watchlist')
    }

    // Add to watchlist
    const newWatchlistItem = await blink.db.watchlist.create({
      id: `watch_${Date.now()}`,
      userId: user.id,
      symbol: symbol.toUpperCase(),
      addedAt: new Date().toISOString()
    })

    return newWatchlistItem
  } catch (error) {
    console.error('Failed to add to watchlist:', error)
    throw error
  }
}

export const removeFromWatchlist = async (watchlistId: string) => {
  try {
    await blink.db.watchlist.delete(watchlistId)
  } catch (error) {
    console.error('Failed to remove from watchlist:', error)
    throw error
  }
}