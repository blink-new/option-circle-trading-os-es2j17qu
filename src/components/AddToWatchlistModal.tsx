import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Plus, Loader2 } from 'lucide-react'
import { addToWatchlist } from '../utils/watchlist'

interface AddToWatchlistModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function AddToWatchlistModal({ isOpen, onClose, onSuccess }: AddToWatchlistModalProps) {
  const [symbol, setSymbol] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!symbol.trim()) {
      setError('Please enter a symbol')
      return
    }

    setLoading(true)
    setError('')

    try {
      await addToWatchlist(symbol.trim())
      setSymbol('')
      onSuccess()
      onClose()
    } catch (err: any) {
      setError(err.message || 'Failed to add symbol')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setSymbol('')
    setError('')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Add to Watchlist
          </DialogTitle>
          <DialogDescription>
            Add a stock or ETF symbol to your watchlist for quick monitoring.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="symbol">Symbol</Label>
              <Input
                id="symbol"
                placeholder="e.g., AAPL, SPY, NVDA"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                className="uppercase"
                maxLength={10}
              />
              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Adding...
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Symbol
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}