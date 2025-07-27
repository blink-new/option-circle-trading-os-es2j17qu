import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Search,
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Activity, 
  Users, 
  Brain,
  Target,
  Shield,
  Zap,
  BarChart3,
  Plus,
  Play,
  Pause,
  Settings,
  Home,
  Bookmark,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Filter,
  Share,
  Bell,
  User,
  Menu,
  ChevronRight,
  Sparkles,
  TrendingUp as TrendingUpIcon,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react'
import { blink } from '../blink/client'
import AddToWatchlistModal from '../components/AddToWatchlistModal'

const Dashboard = () => {
  const [user, setUser] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [marketInsights, setMarketInsights] = useState<any[]>([])
  const [strategies, setStrategies] = useState<any[]>([])
  const [positions, setPositions] = useState<any[]>([])
  const [watchlist, setWatchlist] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [showAddToWatchlist, setShowAddToWatchlist] = useState(false)

  const loadDashboardData = async (userId: string) => {
    try {
      // Load market insights
      const insightsData = await blink.db.marketInsights.list({
        orderBy: { createdAt: 'desc' },
        limit: 5
      })
      setMarketInsights(insightsData)

      // Load featured strategies
      const strategiesData = await blink.db.strategies.list({
        where: { isFeatured: "1" },
        orderBy: { subscribersCount: 'desc' },
        limit: 3
      })
      setStrategies(strategiesData)

      // Load user positions
      const positionsData = await blink.db.positions.list({
        where: { userId: userId },
        orderBy: { updatedAt: 'desc' },
        limit: 5
      })
      setPositions(positionsData)

      // Load watchlist
      const watchlistData = await blink.db.watchlist.list({
        where: { userId: userId },
        orderBy: { addedAt: 'desc' },
        limit: 10
      })
      setWatchlist(watchlistData)

    } catch (error) {
      console.error('Failed to load dashboard data:', error)
    }
  }

  const refreshData = async () => {
    if (!user) return
    setRefreshing(true)
    await loadDashboardData(user.id)
    setRefreshing(false)
  }

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await blink.auth.me()
        setUser(userData)
        await loadDashboardData(userData.id)
      } catch (error) {
        console.error('Failed to load user data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadUserData()
  }, [])

  // Market data
  const marketIndices = [
    { name: 'SPY', price: '$428.50', change: '+2.34', changePercent: '+0.55%', isUp: true },
    { name: 'QQQ', price: '$367.82', change: '+4.12', changePercent: '+1.13%', isUp: true },
    { name: 'IWM', price: '$198.45', change: '-1.23', changePercent: '-0.62%', isUp: false },
    { name: 'VIX', price: '$16.78', change: '-0.45', changePercent: '-2.61%', isUp: false }
  ]



  // Get insight icon based on type
  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity': return <Target className="w-5 h-5 text-green-500" />
      case 'alert': return <AlertTriangle className="w-5 h-5 text-orange-500" />
      case 'insight': return <Info className="w-5 h-5 text-blue-500" />
      default: return <Sparkles className="w-5 h-5 text-primary" />
    }
  }

  // Static watchlist data for demo (replaced by database data)
  const staticWatchlistData = [
    { symbol: 'AAPL', price: '$189.50', change: '+1.2%', iv: '28%' },
    { symbol: 'NVDA', price: '$875.30', change: '+2.8%', iv: '45%' },
    { symbol: 'TSLA', price: '$248.90', change: '-0.8%', iv: '52%' },
    { symbol: 'SPY', price: '$428.50', change: '+0.6%', iv: '18%' },
    { symbol: 'QQQ', price: '$367.82', change: '+1.1%', iv: '22%' }
  ]



  if (loading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Option Circle...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="flex h-14 items-center px-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Option Circle</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#" className="text-foreground font-medium">Finance</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Strategies</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Education</a>
            </nav>
          </div>
          
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search for strategies, symbols, and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Share className="w-4 h-4" />
              Share
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-[calc(100vh-3.5rem)] sticky top-14">
          <div className="p-4 space-y-6">
            {/* Navigation */}
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start bg-muted">
                <Home className="w-4 h-4 mr-3" />
                Home
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <BarChart3 className="w-4 h-4 mr-3" />
                Portfolio
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Target className="w-4 h-4 mr-3" />
                Strategies
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Zap className="w-4 h-4 mr-3" />
                Agents
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="w-4 h-4 mr-3" />
                Community
              </Button>
            </nav>

            {/* Quick Tools */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Quick Tools</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Brain className="w-4 h-4 mr-3" />
                  Strategy Builder
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Activity className="w-4 h-4 mr-3" />
                  Options Scanner
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Shield className="w-4 h-4 mr-3" />
                  Risk Analyzer
                </Button>
              </div>
            </div>

            {/* Market Indices */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Market Overview</h3>
              <div className="space-y-2">
                {marketIndices.map((index) => (
                  <div key={index.name} className="flex items-center justify-between text-sm">
                    <span className="font-medium">{index.name}</span>
                    <div className="text-right">
                      <div className="font-medium">{index.price}</div>
                      <div className={`text-xs ${index.isUp ? 'text-green-500' : 'text-red-500'}`}>
                        {index.change} {index.changePercent}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-bold">Options Trading Dashboard</h1>
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={refreshData}
                    disabled={refreshing}
                  >
                    <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                    {refreshing ? 'Refreshing...' : 'Refresh'}
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    {new Date().toLocaleDateString()} • Live Data
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Real-time market insights and strategy recommendations powered by AI
              </p>
            </div>

            {/* Market Summary */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Market Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {marketIndices.map((index) => (
                    <div key={index.name} className="text-center">
                      <div className="font-semibold text-lg">{index.name}</div>
                      <div className="text-2xl font-bold">{index.price}</div>
                      <div className={`flex items-center justify-center text-sm ${
                        index.isUp ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {index.isUp ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {index.change} ({index.changePercent})
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Market Insights */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-primary" />
                  AI Market Insights
                </CardTitle>
                <CardDescription>
                  Real-time analysis and opportunities in the options market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketInsights.length > 0 ? marketInsights.map((insight, index) => (
                    <div key={insight.id || index} className="border-l-4 border-primary/20 pl-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          {getInsightIcon(insight.type)}
                          <div className="flex-1">
                            <h4 className="font-medium mb-1">{insight.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs capitalize">
                                {insight.type}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {insight.confidence}% confidence
                              </Badge>
                              <span className="text-xs text-muted-foreground">{insight.timeframe}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Brain className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="mb-2">AI is analyzing market conditions</p>
                      <p className="text-sm">New insights will appear here shortly</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Top Strategies Marketplace */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Top Performing Strategies</CardTitle>
                    <CardDescription>
                      Discover and subscribe to proven trading strategies
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {strategies.length > 0 ? strategies.map((strategy, index) => {
                    const performanceData = strategy.performanceData ? JSON.parse(strategy.performanceData) : {}
                    const tags = strategy.tags ? JSON.parse(strategy.tags) : []
                    
                    return (
                      <div key={strategy.id || index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-medium">{strategy.name}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {strategy.category}
                            </Badge>
                            {strategy.isAiPowered === "1" && (
                              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-xs">
                                <Brain className="w-3 h-3 mr-1" />
                                AI
                              </Badge>
                            )}
                            <div className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                              <span className="text-xs">{strategy.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>Return: <span className="text-green-500 font-medium">+{performanceData.return || 0}%</span></span>
                            <span>Win Rate: <span className="font-medium">{performanceData.winRate || 0}%</span></span>
                            <span>{strategy.subscribersCount || 0} subscribers</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {tags.slice(0, 3).map((tag: string) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <div className="font-medium">${strategy.price}/mo</div>
                            <div className="text-xs text-muted-foreground">
                              Min: ${(strategy.minCapital || 0).toLocaleString()}
                            </div>
                          </div>
                          <Button size="sm">Subscribe</Button>
                        </div>
                      </div>
                    )
                  }) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Target className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="mb-2">No strategies available</p>
                      <p className="text-sm">Check back later for new strategies</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Your Active Positions */}
            <Card>
              <CardHeader>
                <CardTitle>Your Active Positions</CardTitle>
                <CardDescription>
                  Monitor your current options positions and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {positions.length > 0 ? positions.map((position, index) => (
                    <div key={position.id || index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="font-medium">{position.strategyName}</div>
                          <div className="text-sm text-muted-foreground">
                            {position.underlying} • Exp: {position.expiry}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className={`font-medium ${
                            position.status === 'winning' ? 'text-green-500' : 'text-red-500'
                          }`}>
                            ${position.pnl > 0 ? '+' : ''}${position.pnl}
                          </div>
                          <div className={`text-sm ${
                            position.status === 'winning' ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {position.pnlPercent > 0 ? '+' : ''}{position.pnlPercent}%
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="mb-2">No active positions</p>
                      <p className="text-sm">Your positions will appear here once you start trading</p>
                      <Button className="mt-4" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Start Trading
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 border-l border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-[calc(100vh-3.5rem)] sticky top-14 p-4 space-y-6">
          {/* Watchlist */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Watchlist</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowAddToWatchlist(true)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {watchlist.length > 0 ? watchlist.map((item) => (
                <div key={item.id || item.symbol} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{item.symbol}</div>
                    <div className="text-xs text-muted-foreground">Added {new Date(item.addedAt).toLocaleDateString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">--</div>
                    <div className="text-xs text-muted-foreground">
                      Live data
                    </div>
                  </div>
                </div>
              )) : (
                <div className="text-center py-6 text-muted-foreground">
                  <Star className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm mb-2">No symbols in watchlist</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowAddToWatchlist(true)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Symbol
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Build Strategy
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Scan Options
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analyze Risk
              </Button>
            </CardContent>
          </Card>

          {/* Market Movers */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">High IV Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">NVDA</span>
                  <span className="text-orange-500">IV: 52%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">TSLA</span>
                  <span className="text-orange-500">IV: 48%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">AMD</span>
                  <span className="text-orange-500">IV: 45%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">AAPL</span>
                  <span className="text-yellow-500">IV: 32%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Add to Watchlist Modal */}
      <AddToWatchlistModal
        isOpen={showAddToWatchlist}
        onClose={() => setShowAddToWatchlist(false)}
        onSuccess={() => {
          if (user) {
            loadDashboardData(user.id)
          }
        }}
      />
    </div>
  )
}

export default Dashboard