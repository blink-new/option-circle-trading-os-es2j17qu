import { useState } from 'react'
import Navigation from '../components/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { 
  PieChart, 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Target,
  Shield,
  Activity,
  Brain,
  Zap,
  Settings,
  RefreshCw,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  Users,
  Star,
  Award,
  Flame,
  Sparkles,
  Bot,
  Cpu,
  Database,
  Network,
  Globe,
  Layers,
  Filter,
  Search,
  Share,
  Bookmark,
  Info,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  MoreHorizontal,
  Maximize2,
  Minimize2,
  RotateCcw,
  Play,
  Pause,
  StopCircle
} from 'lucide-react'

const PortfolioManagement = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M')
  const [viewMode, setViewMode] = useState('grid')

  const portfolioMetrics = {
    totalValue: 125750,
    totalReturn: 18.5,
    totalReturnAmount: 19650,
    dayChange: 2.3,
    dayChangeAmount: 2890,
    cashBalance: 15420,
    buyingPower: 45680,
    marginUsed: 8920,
    portfolioBeta: 0.87,
    sharpeRatio: 1.42,
    maxDrawdown: -8.3,
    winRate: 73.2
  }

  const positions = [
    {
      id: 1,
      symbol: 'AAPL',
      name: 'Apple Inc.',
      type: 'Stock',
      quantity: 150,
      avgPrice: 185.50,
      currentPrice: 189.25,
      marketValue: 28387.50,
      unrealizedPnL: 562.50,
      unrealizedPnLPercent: 2.02,
      dayChange: 1.25,
      dayChangePercent: 0.66,
      allocation: 22.6,
      sector: 'Technology',
      strategy: 'Core Holdings',
      riskLevel: 'Medium',
      lastUpdated: '2 minutes ago'
    },
    {
      id: 2,
      symbol: 'SPY',
      name: 'SPDR S&P 500 ETF',
      type: 'ETF',
      quantity: 75,
      avgPrice: 425.80,
      currentPrice: 428.50,
      marketValue: 32137.50,
      unrealizedPnL: 202.50,
      unrealizedPnLPercent: 0.63,
      dayChange: 2.34,
      dayChangePercent: 0.55,
      allocation: 25.5,
      sector: 'Diversified',
      strategy: 'Market Exposure',
      riskLevel: 'Low',
      lastUpdated: '1 minute ago'
    },
    {
      id: 3,
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      type: 'Stock',
      quantity: 25,
      avgPrice: 850.00,
      currentPrice: 875.30,
      marketValue: 21882.50,
      unrealizedPnL: 632.50,
      unrealizedPnLPercent: 2.97,
      dayChange: 24.50,
      dayChangePercent: 2.88,
      allocation: 17.4,
      sector: 'Technology',
      strategy: 'AI Growth',
      riskLevel: 'High',
      lastUpdated: '1 minute ago'
    },
    {
      id: 4,
      symbol: 'TSLA',
      name: 'Tesla, Inc.',
      type: 'Stock',
      quantity: 50,
      avgPrice: 255.00,
      currentPrice: 248.90,
      marketValue: 12445.00,
      unrealizedPnL: -305.00,
      unrealizedPnLPercent: -2.39,
      dayChange: -2.10,
      dayChangePercent: -0.84,
      allocation: 9.9,
      sector: 'Consumer Discretionary',
      strategy: 'Growth',
      riskLevel: 'High',
      lastUpdated: '3 minutes ago'
    }
  ]

  const optionsPositions = [
    {
      id: 1,
      underlying: 'SPY',
      strategy: 'Iron Condor',
      expiration: '2024-12-20',
      strikes: '420/425/435/440',
      type: 'Credit Spread',
      quantity: 10,
      premium: 2500,
      currentValue: 1850,
      unrealizedPnL: 650,
      unrealizedPnLPercent: 35.1,
      daysToExpiration: 12,
      delta: -0.15,
      gamma: 0.02,
      theta: 12.5,
      vega: -8.3,
      impliedVolatility: 18.5,
      riskLevel: 'Medium',
      status: 'Winning'
    },
    {
      id: 2,
      underlying: 'AAPL',
      strategy: 'Covered Call',
      expiration: '2024-12-15',
      strikes: '195',
      type: 'Call',
      quantity: -1,
      premium: 450,
      currentValue: 285,
      unrealizedPnL: 165,
      unrealizedPnLPercent: 57.9,
      daysToExpiration: 7,
      delta: -0.35,
      gamma: -0.08,
      theta: 8.2,
      vega: -12.1,
      impliedVolatility: 28.3,
      riskLevel: 'Low',
      status: 'Winning'
    },
    {
      id: 3,
      underlying: 'NVDA',
      strategy: 'Put Credit Spread',
      expiration: '2024-12-22',
      strikes: '850/860',
      type: 'Credit Spread',
      quantity: 5,
      premium: 1250,
      currentValue: 875,
      unrealizedPnL: 375,
      unrealizedPnLPercent: 42.9,
      daysToExpiration: 14,
      delta: 0.25,
      gamma: 0.05,
      theta: 15.8,
      vega: -18.7,
      impliedVolatility: 45.2,
      riskLevel: 'Medium',
      status: 'Winning'
    }
  ]

  const strategies = [
    {
      id: 1,
      name: 'AI Iron Condor Master',
      allocation: 35.2,
      value: 44280,
      return: 24.5,
      returnAmount: 8720,
      sharpe: 1.62,
      maxDD: -6.3,
      winRate: 78.2,
      trades: 45,
      status: 'Active',
      aiPowered: true,
      riskLevel: 'Medium',
      lastTrade: '2 hours ago'
    },
    {
      id: 2,
      name: 'Momentum Breakout AI',
      allocation: 28.7,
      value: 36090,
      return: 31.7,
      returnAmount: 8720,
      sharpe: 1.48,
      maxDD: -12.1,
      winRate: 68.5,
      trades: 28,
      status: 'Active',
      aiPowered: true,
      riskLevel: 'High',
      lastTrade: '1 hour ago'
    },
    {
      id: 3,
      name: 'Defensive Dividend Shield',
      allocation: 22.1,
      value: 27790,
      return: 14.3,
      returnAmount: 3480,
      sharpe: 1.85,
      maxDD: -4.2,
      winRate: 82.9,
      trades: 31,
      status: 'Active',
      aiPowered: false,
      riskLevel: 'Low',
      lastTrade: '4 hours ago'
    },
    {
      id: 4,
      name: 'Volatility Crush Predictor',
      allocation: 14.0,
      value: 17590,
      return: 18.2,
      returnAmount: 2710,
      sharpe: 1.35,
      maxDD: -8.8,
      winRate: 71.8,
      trades: 52,
      status: 'Paused',
      aiPowered: true,
      riskLevel: 'Medium',
      lastTrade: '1 day ago'
    }
  ]

  const riskMetrics = {
    portfolioVaR: -2850,
    expectedShortfall: -4200,
    beta: 0.87,
    correlation: 0.72,
    concentration: {
      topPosition: 25.5,
      top3Positions: 65.5,
      sectorConcentration: 40.0
    },
    exposure: {
      long: 89.2,
      short: 10.8,
      net: 78.4,
      gross: 100.0
    }
  }

  const sectorAllocation = [
    { sector: 'Technology', allocation: 40.0, value: 50300, change: 2.8 },
    { sector: 'Diversified', allocation: 25.5, value: 32137, change: 0.6 },
    { sector: 'Consumer Discretionary', allocation: 9.9, value: 12445, change: -0.8 },
    { sector: 'Healthcare', allocation: 8.2, value: 10312, change: 1.2 },
    { sector: 'Financial Services', allocation: 7.1, value: 8928, change: 0.9 },
    { sector: 'Energy', allocation: 5.8, value: 7294, change: 3.1 },
    { sector: 'Cash', allocation: 3.5, value: 4400, change: 0.0 }
  ]

  const rebalanceRecommendations = [
    {
      type: 'overweight',
      asset: 'Technology Sector',
      current: 40.0,
      target: 35.0,
      action: 'Reduce by $6,290',
      reason: 'Concentration risk above target',
      priority: 'High'
    },
    {
      type: 'underweight',
      asset: 'International Exposure',
      current: 0.0,
      target: 10.0,
      action: 'Add $12,575',
      reason: 'Geographic diversification',
      priority: 'Medium'
    },
    {
      type: 'rebalance',
      asset: 'Cash Position',
      current: 12.3,
      target: 5.0,
      action: 'Deploy $9,180',
      reason: 'Excess cash drag on returns',
      priority: 'Medium'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-500'
      case 'Paused': return 'text-yellow-500'
      case 'Stopped': return 'text-red-500'
      case 'Winning': return 'text-green-500'
      case 'Losing': return 'text-red-500'
      default: return 'text-muted-foreground'
    }
  }

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-green-500'
      case 'Medium': return 'text-yellow-500'
      case 'High': return 'text-red-500'
      default: return 'text-muted-foreground'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-500/10 text-red-500 border-red-500/20'
      case 'Medium': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
      case 'Low': return 'bg-green-500/10 text-green-500 border-green-500/20'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center">
                <PieChart className="w-8 h-8 mr-3 text-primary" />
                Portfolio Management
              </h1>
              <p className="text-muted-foreground">
                Comprehensive portfolio analytics and risk management powered by AI
              </p>
            </div>
            <div className="flex space-x-3">
              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1D">1D</SelectItem>
                  <SelectItem value="1W">1W</SelectItem>
                  <SelectItem value="1M">1M</SelectItem>
                  <SelectItem value="3M">3M</SelectItem>
                  <SelectItem value="1Y">1Y</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Portfolio Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="gradient-card border-green-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                ${portfolioMetrics.totalValue.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+${portfolioMetrics.totalReturnAmount.toLocaleString()}</span> total return
              </p>
              <div className="mt-2">
                <Progress value={75} className="h-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-blue-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Day Change</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-500">
                +{portfolioMetrics.dayChange}%
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-blue-500">+${portfolioMetrics.dayChangeAmount.toLocaleString()}</span> today
              </p>
              <div className="mt-2">
                <Progress value={65} className="h-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Buying Power</CardTitle>
              <Target className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-500">
                ${portfolioMetrics.buyingPower.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Cash: ${portfolioMetrics.cashBalance.toLocaleString()}
              </p>
              <div className="mt-2">
                <Progress value={45} className="h-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-orange-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sharpe Ratio</CardTitle>
              <Award className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">
                {portfolioMetrics.sharpeRatio}
              </div>
              <p className="text-xs text-muted-foreground">
                Risk-adjusted return
              </p>
              <div className="mt-2">
                <Progress value={85} className="h-1" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview" className="flex items-center">
              <PieChart className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="positions" className="flex items-center">
              <BarChart3 className="w-4 h-4 mr-2" />
              Positions
            </TabsTrigger>
            <TabsTrigger value="options" className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Options
            </TabsTrigger>
            <TabsTrigger value="strategies" className="flex items-center">
              <Bot className="w-4 h-4 mr-2" />
              Strategies
            </TabsTrigger>
            <TabsTrigger value="risk" className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Risk
            </TabsTrigger>
            <TabsTrigger value="rebalance" className="flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Rebalance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Portfolio Allocation Chart */}
              <Card className="glass-effect lg:col-span-2">
                <CardHeader>
                  <CardTitle>Portfolio Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <PieChart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Interactive allocation chart</p>
                      <p className="text-sm">Sector and asset breakdown</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sector Breakdown */}
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle>Sector Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sectorAllocation.map((sector) => (
                      <div key={sector.sector} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 rounded-full bg-primary"></div>
                          <span className="text-sm font-medium">{sector.sector}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold">{sector.allocation}%</div>
                          <div className={`text-xs ${
                            sector.change >= 0 ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {sector.change >= 0 ? '+' : ''}{sector.change}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Chart */}
            <Card className="glass-effect">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Portfolio Performance</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-500/10 text-green-500">
                      +{portfolioMetrics.totalReturn}% YTD
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Maximize2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Activity className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Portfolio performance chart</p>
                    <p className="text-sm">Historical returns vs benchmark</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-base">Risk Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Portfolio Beta:</span>
                    <span className="font-semibold">{portfolioMetrics.portfolioBeta}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Max Drawdown:</span>
                    <span className="font-semibold text-red-500">{portfolioMetrics.maxDrawdown}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Win Rate:</span>
                    <span className="font-semibold text-green-500">{portfolioMetrics.winRate}%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-base">Account Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Cash Balance:</span>
                    <span className="font-semibold">${portfolioMetrics.cashBalance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Margin Used:</span>
                    <span className="font-semibold">${portfolioMetrics.marginUsed.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Buying Power:</span>
                    <span className="font-semibold text-green-500">${portfolioMetrics.buyingPower.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-base">AI Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-primary" />
                    <span className="text-sm">Portfolio Score: 87/100</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-sm">3 optimization opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">1 risk alert</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="positions" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Stock & ETF Positions</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Position
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-muted">
                        <th className="text-left py-3 px-2">Symbol</th>
                        <th className="text-right py-3 px-2">Quantity</th>
                        <th className="text-right py-3 px-2">Avg Price</th>
                        <th className="text-right py-3 px-2">Current Price</th>
                        <th className="text-right py-3 px-2">Market Value</th>
                        <th className="text-right py-3 px-2">Unrealized P&L</th>
                        <th className="text-right py-3 px-2">Day Change</th>
                        <th className="text-right py-3 px-2">Allocation</th>
                        <th className="text-center py-3 px-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {positions.map((position) => (
                        <tr key={position.id} className="border-b border-muted/50 hover:bg-muted/20">
                          <td className="py-3 px-2">
                            <div className="flex items-center space-x-3">
                              <div>
                                <div className="font-medium">{position.symbol}</div>
                                <div className="text-sm text-muted-foreground">{position.name}</div>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {position.type}
                              </Badge>
                            </div>
                          </td>
                          <td className="text-right py-3 px-2">{position.quantity}</td>
                          <td className="text-right py-3 px-2">${position.avgPrice.toFixed(2)}</td>
                          <td className="text-right py-3 px-2">${position.currentPrice.toFixed(2)}</td>
                          <td className="text-right py-3 px-2">${position.marketValue.toLocaleString()}</td>
                          <td className="text-right py-3 px-2">
                            <div className={position.unrealizedPnL >= 0 ? 'text-green-500' : 'text-red-500'}>
                              <div className="font-semibold">
                                {position.unrealizedPnL >= 0 ? '+' : ''}${Math.abs(position.unrealizedPnL).toFixed(2)}
                              </div>
                              <div className="text-xs">
                                ({position.unrealizedPnL >= 0 ? '+' : ''}{position.unrealizedPnLPercent.toFixed(2)}%)
                              </div>
                            </div>
                          </td>
                          <td className="text-right py-3 px-2">
                            <div className={position.dayChange >= 0 ? 'text-green-500' : 'text-red-500'}>
                              <div className="font-semibold">
                                {position.dayChange >= 0 ? '+' : ''}${Math.abs(position.dayChange).toFixed(2)}
                              </div>
                              <div className="text-xs">
                                ({position.dayChange >= 0 ? '+' : ''}{position.dayChangePercent.toFixed(2)}%)
                              </div>
                            </div>
                          </td>
                          <td className="text-right py-3 px-2">
                            <div className="flex items-center justify-end space-x-2">
                              <span className="font-semibold">{position.allocation}%</span>
                              <div className="w-12 h-2 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary"
                                  style={{ width: `${(position.allocation / 30) * 100}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="text-center py-3 px-2">
                            <div className="flex items-center justify-center space-x-1">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="options" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Options Positions</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      New Trade
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-muted">
                        <th className="text-left py-3 px-2">Strategy</th>
                        <th className="text-right py-3 px-2">Strikes</th>
                        <th className="text-right py-3 px-2">Expiration</th>
                        <th className="text-right py-3 px-2">Premium</th>
                        <th className="text-right py-3 px-2">Current Value</th>
                        <th className="text-right py-3 px-2">P&L</th>
                        <th className="text-right py-3 px-2">Greeks</th>
                        <th className="text-right py-3 px-2">IV</th>
                        <th className="text-center py-3 px-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {optionsPositions.map((position) => (
                        <tr key={position.id} className="border-b border-muted/50 hover:bg-muted/20">
                          <td className="py-3 px-2">
                            <div className="flex items-center space-x-3">
                              <div>
                                <div className="font-medium">{position.underlying} {position.strategy}</div>
                                <div className="text-sm text-muted-foreground">
                                  {position.type} • Qty: {position.quantity}
                                </div>
                              </div>
                              <Badge className={getRiskColor(position.riskLevel)}>
                                {position.riskLevel}
                              </Badge>
                            </div>
                          </td>
                          <td className="text-right py-3 px-2 font-mono text-sm">{position.strikes}</td>
                          <td className="text-right py-3 px-2">
                            <div>
                              <div className="font-medium">{position.expiration}</div>
                              <div className="text-xs text-muted-foreground">
                                {position.daysToExpiration} days
                              </div>
                            </div>
                          </td>
                          <td className="text-right py-3 px-2">${position.premium}</td>
                          <td className="text-right py-3 px-2">${position.currentValue}</td>
                          <td className="text-right py-3 px-2">
                            <div className={position.unrealizedPnL >= 0 ? 'text-green-500' : 'text-red-500'}>
                              <div className="font-semibold">
                                {position.unrealizedPnL >= 0 ? '+' : ''}${Math.abs(position.unrealizedPnL)}
                              </div>
                              <div className="text-xs">
                                ({position.unrealizedPnL >= 0 ? '+' : ''}{position.unrealizedPnLPercent.toFixed(1)}%)
                              </div>
                            </div>
                          </td>
                          <td className="text-right py-3 px-2">
                            <div className="text-xs space-y-1">
                              <div>Δ: {position.delta.toFixed(2)}</div>
                              <div>Θ: {position.theta.toFixed(1)}</div>
                            </div>
                          </td>
                          <td className="text-right py-3 px-2">
                            <div className="font-medium">{position.impliedVolatility}%</div>
                          </td>
                          <td className="text-center py-3 px-2">
                            <Badge className={getStatusColor(position.status)}>
                              {position.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Options Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-base">Portfolio Greeks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Delta:</span>
                    <span className="font-semibold">-0.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Gamma:</span>
                    <span className="font-semibold">0.08</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Theta:</span>
                    <span className="font-semibold text-green-500">+36.5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Vega:</span>
                    <span className="font-semibold">-39.1</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-base">Expiration Calendar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">This Week:</span>
                    <span className="font-semibold">1 position</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Next Week:</span>
                    <span className="font-semibold">2 positions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">This Month:</span>
                    <span className="font-semibold">3 positions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Beyond:</span>
                    <span className="font-semibold">0 positions</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-base">Options Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Premium:</span>
                    <span className="font-semibold">$4,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Current Value:</span>
                    <span className="font-semibold">$3,010</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Unrealized P&L:</span>
                    <span className="font-semibold text-green-500">+$1,190</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Win Rate:</span>
                    <span className="font-semibold text-green-500">78.3%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="strategies" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                    <Bot className="w-6 h-6 mr-3 text-primary" />
                    Active Strategies
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Strategy
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Manage
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {strategies.map((strategy) => (
                    <Card key={strategy.id} className="glass-effect">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                              {strategy.aiPowered ? (
                                <Brain className="w-6 h-6 text-primary" />
                              ) : (
                                <Target className="w-6 h-6 text-primary" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg flex items-center">
                                {strategy.name}
                                {strategy.aiPowered && (
                                  <Badge className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500">
                                    <Brain className="w-3 h-3 mr-1" />
                                    AI
                                  </Badge>
                                )}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {strategy.trades} trades • Last: {strategy.lastTrade}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Badge className={getStatusColor(strategy.status)}>
                              {strategy.status}
                            </Badge>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                {strategy.status === 'Active' ? (
                                  <Pause className="w-4 h-4" />
                                ) : (
                                  <Play className="w-4 h-4" />
                                )}
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Settings className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-4">
                          <div className="text-center p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                            <div className="text-lg font-bold text-green-500">
                              {strategy.allocation}%
                            </div>
                            <div className="text-xs text-muted-foreground">Allocation</div>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                            <div className="text-lg font-bold text-blue-500">
                              ${strategy.value.toLocaleString()}
                            </div>
                            <div className="text-xs text-muted-foreground">Value</div>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                            <div className="text-lg font-bold text-purple-500">
                              +{strategy.return}%
                            </div>
                            <div className="text-xs text-muted-foreground">Return</div>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10">
                            <div className="text-lg font-bold text-orange-500">
                              {strategy.sharpe}
                            </div>
                            <div className="text-xs text-muted-foreground">Sharpe</div>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/10">
                            <div className="text-lg font-bold text-yellow-500">
                              {strategy.winRate}%
                            </div>
                            <div className="text-xs text-muted-foreground">Win Rate</div>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-gradient-to-br from-red-500/10 to-pink-500/10">
                            <div className="text-lg font-bold text-red-500">
                              {strategy.maxDD}%
                            </div>
                            <div className="text-xs text-muted-foreground">Max DD</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Shield className="w-4 h-4 mr-1" />
                              Risk: <span className={`ml-1 ${getRiskColor(strategy.riskLevel)}`}>{strategy.riskLevel}</span>
                            </span>
                            <span className="flex items-center">
                              <Activity className="w-4 h-4 mr-1" />
                              {strategy.trades} trades
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              Details
                            </Button>
                            <Button variant="outline" size="sm">
                              <BarChart3 className="w-4 h-4 mr-2" />
                              Analytics
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Risk Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-pink-500/10">
                      <div className="text-lg font-bold text-red-500">
                        ${riskMetrics.portfolioVaR.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">VaR (95%)</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10">
                      <div className="text-lg font-bold text-orange-500">
                        ${riskMetrics.expectedShortfall.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Expected Shortfall</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Portfolio Beta:</span>
                      <span className="font-semibold">{riskMetrics.beta}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Correlation:</span>
                      <span className="font-semibold">{riskMetrics.correlation}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Top Position:</span>
                      <span className="font-semibold">{riskMetrics.concentration.topPosition}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Top 3 Positions:</span>
                      <span className="font-semibold">{riskMetrics.concentration.top3Positions}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle>Exposure Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Long Exposure:</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={riskMetrics.exposure.long} className="w-20 h-2" />
                        <span className="font-semibold">{riskMetrics.exposure.long}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Short Exposure:</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={riskMetrics.exposure.short} className="w-20 h-2" />
                        <span className="font-semibold">{riskMetrics.exposure.short}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Net Exposure:</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={riskMetrics.exposure.net} className="w-20 h-2" />
                        <span className="font-semibold">{riskMetrics.exposure.net}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Gross Exposure:</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={riskMetrics.exposure.gross} className="w-20 h-2" />
                        <span className="font-semibold">{riskMetrics.exposure.gross}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Risk Alerts */}
            <Card className="glass-effect border-yellow-500/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
                  Risk Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border-l-4 border-l-yellow-500 bg-yellow-500/5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">High Sector Concentration</h4>
                      <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                        Medium Risk
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Technology sector represents 40% of portfolio, above recommended 35% threshold.
                    </p>
                    <Button variant="outline" size="sm">
                      View Recommendations
                    </Button>
                  </div>
                  
                  <div className="p-4 rounded-lg border-l-4 border-l-blue-500 bg-blue-500/5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Options Expiration Risk</h4>
                      <Badge variant="outline" className="text-blue-500 border-blue-500">
                        Low Risk
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      1 options position expires within 7 days. Consider rolling or closing.
                    </p>
                    <Button variant="outline" size="sm">
                      Manage Positions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rebalance" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-primary" />
                  AI Rebalancing Recommendations
                </CardTitle>
                <CardDescription>
                  Optimize your portfolio allocation based on AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {rebalanceRecommendations.map((rec, index) => (
                    <Card key={index} className="glass-effect">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-lg">{rec.asset}</h4>
                              <Badge className={getPriorityColor(rec.priority)}>
                                {rec.priority} Priority
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{rec.reason}</p>
                            
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center p-3 rounded-lg bg-muted/20">
                                <div className="font-bold">{rec.current}%</div>
                                <div className="text-sm text-muted-foreground">Current</div>
                              </div>
                              <div className="text-center p-3 rounded-lg bg-primary/10">
                                <ArrowRight className="w-6 h-6 mx-auto text-primary" />
                              </div>
                              <div className="text-center p-3 rounded-lg bg-green-500/10">
                                <div className="font-bold text-green-500">{rec.target}%</div>
                                <div className="text-sm text-muted-foreground">Target</div>
                              </div>
                            </div>
                            
                            <div className="text-sm font-medium text-primary">
                              Recommended Action: {rec.action}
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              Details
                            </Button>
                            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                              <Zap className="w-4 h-4 mr-2" />
                              Execute
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-6 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Auto-Rebalancing</h3>
                      <p className="text-muted-foreground">
                        Enable AI-powered automatic rebalancing based on your risk tolerance and goals
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Status</div>
                        <div className="font-semibold">Disabled</div>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default PortfolioManagement