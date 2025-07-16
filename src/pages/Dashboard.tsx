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
  TrendingUp as TrendingUpIcon
} from 'lucide-react'
import { blink } from '../blink/client'

const Dashboard = () => {
  const [user, setUser] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await blink.auth.me()
        setUser(userData)
      } catch (error) {
        console.error('Failed to load user data:', error)
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

  // Top strategies from marketplace
  const topStrategies = [
    { 
      name: 'Iron Condor Pro', 
      creator: 'QuantMaster', 
      return: '+24.5%', 
      winRate: '78%', 
      subscribers: 1247,
      price: '$49/mo',
      rating: 4.8
    },
    { 
      name: 'Covered Call Elite', 
      creator: 'DividendKing', 
      return: '+18.2%', 
      winRate: '82%', 
      subscribers: 892,
      price: '$39/mo',
      rating: 4.9
    },
    { 
      name: 'Put Credit Spreads', 
      creator: 'ThetaGang', 
      return: '+31.7%', 
      winRate: '71%', 
      subscribers: 2156,
      price: '$59/mo',
      rating: 4.7
    }
  ]

  // Market insights
  const marketInsights = [
    {
      title: 'High IV Opportunity in Tech',
      description: 'NVDA, AAPL, and MSFT showing elevated implied volatility. Consider premium selling strategies.',
      time: '2 hours ago',
      type: 'opportunity'
    },
    {
      title: 'Earnings Season Alert',
      description: '47 S&P 500 companies reporting this week. Review your positions for potential volatility.',
      time: '4 hours ago',
      type: 'alert'
    },
    {
      title: 'VIX Contango Structure',
      description: 'VIX futures in steep contango. Favorable environment for volatility selling strategies.',
      time: '6 hours ago',
      type: 'insight'
    }
  ]

  // Watchlist
  const watchlist = [
    { symbol: 'AAPL', price: '$189.50', change: '+1.2%', iv: '28%' },
    { symbol: 'NVDA', price: '$875.30', change: '+2.8%', iv: '45%' },
    { symbol: 'TSLA', price: '$248.90', change: '-0.8%', iv: '52%' },
    { symbol: 'SPY', price: '$428.50', change: '+0.6%', iv: '18%' },
    { symbol: 'QQQ', price: '$367.82', change: '+1.1%', iv: '22%' }
  ]

  // Active positions
  const activePositions = [
    {
      strategy: 'Iron Condor',
      underlying: 'SPY',
      expiry: '12/20',
      pnl: '+$340',
      pnlPercent: '+12.5%',
      status: 'winning'
    },
    {
      strategy: 'Covered Call',
      underlying: 'AAPL',
      expiry: '12/15',
      pnl: '-$85',
      pnlPercent: '-3.2%',
      status: 'losing'
    },
    {
      strategy: 'Put Credit Spread',
      underlying: 'NVDA',
      expiry: '12/22',
      pnl: '+$125',
      pnlPercent: '+8.9%',
      status: 'winning'
    }
  ]

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
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
                <div className="text-sm text-muted-foreground">
                  Jul 16, 2024 • After Hours
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
                  {marketInsights.map((insight, index) => (
                    <div key={index} className="border-l-4 border-primary/20 pl-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{insight.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {insight.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{insight.time}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
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
                  {topStrategies.map((strategy, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-medium">{strategy.name}</h4>
                          <Badge variant="secondary" className="text-xs">
                            by {strategy.creator}
                          </Badge>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
                            <span className="text-xs">{strategy.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Return: <span className="text-green-500 font-medium">{strategy.return}</span></span>
                          <span>Win Rate: <span className="font-medium">{strategy.winRate}</span></span>
                          <span>{strategy.subscribers} subscribers</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="font-medium">{strategy.price}</div>
                        </div>
                        <Button size="sm">Subscribe</Button>
                      </div>
                    </div>
                  ))}
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
                  {activePositions.map((position, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="font-medium">{position.strategy}</div>
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
                            {position.pnl}
                          </div>
                          <div className={`text-sm ${
                            position.status === 'winning' ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {position.pnlPercent}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
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
                <Button variant="ghost" size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {watchlist.map((item) => (
                <div key={item.symbol} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{item.symbol}</div>
                    <div className="text-xs text-muted-foreground">IV: {item.iv}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{item.price}</div>
                    <div className={`text-xs ${
                      item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {item.change}
                    </div>
                  </div>
                </div>
              ))}
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
    </div>
  )
}

export default Dashboard