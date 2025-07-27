import { useState } from 'react'
import Navigation from '../components/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Target,
  Brain,
  Calendar,
  Download,
  RefreshCw,
  PieChart,
  Activity,
  DollarSign,
  Percent,
  Clock,
  AlertTriangle,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Minus,
  Search,
  Lightbulb,
  Zap,
  Eye,
  MessageSquare,
  Share,
  Bookmark,
  Filter,
  LineChart,
  AreaChart,
  Layers,
  Globe,
  Sparkles,
  Bot,
  Rocket,
  Shield,
  Award,
  Users,
  Star,
  ThumbsUp,
  ThumbsDown,
  Play,
  Pause,
  Settings,
  Info,
  ExternalLink,
  ChevronRight,
  TrendingUp as TrendingUpIcon,
  Flame,
  Cpu,
  Database,
  Network
} from 'lucide-react'

const Analytics = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M')
  const [selectedMetric, setSelectedMetric] = useState('pnl')
  const [activeTab, setActiveTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')

  const performanceMetrics = {
    totalReturn: 18.5,
    totalReturnAmount: 18500,
    sharpeRatio: 1.42,
    maxDrawdown: -8.3,
    winRate: 73.2,
    avgWin: 245,
    avgLoss: -125,
    profitFactor: 1.96,
    totalTrades: 156,
    avgHoldTime: 3.2,
    volatility: 12.8,
    beta: 0.85,
    calmarRatio: 2.23,
    sortinoRatio: 1.89,
    informationRatio: 0.67,
    treynorRatio: 21.8
  }

  const strategyPerformance = [
    {
      name: 'AI Iron Condor Master',
      trades: 45,
      winRate: 78.9,
      avgReturn: 2.8,
      totalPnL: 5250,
      sharpe: 1.65,
      maxDD: -5.2,
      status: 'outperforming',
      aiPowered: true,
      riskScore: 3.2,
      consistency: 94.5,
      monthlyVolume: 15600
    },
    {
      name: 'Momentum Breakout AI',
      trades: 28,
      winRate: 71.4,
      avgReturn: 4.2,
      totalPnL: 3890,
      sharpe: 1.48,
      maxDD: -8.8,
      status: 'performing',
      aiPowered: true,
      riskScore: 6.1,
      consistency: 87.3,
      monthlyVolume: 23400
    },
    {
      name: 'Volatility Crush Predictor',
      trades: 52,
      winRate: 82.1,
      avgReturn: 3.1,
      totalPnL: 4420,
      sharpe: 1.35,
      maxDD: -6.1,
      status: 'performing',
      aiPowered: true,
      riskScore: 4.7,
      consistency: 91.2,
      monthlyVolume: 8900
    },
    {
      name: 'Defensive Dividend Shield',
      trades: 31,
      winRate: 91.2,
      avgReturn: 1.9,
      totalPnL: 2890,
      sharpe: 1.85,
      maxDD: -3.2,
      status: 'outperforming',
      aiPowered: false,
      riskScore: 2.1,
      consistency: 96.8,
      monthlyVolume: 12300
    }
  ]

  const monthlyReturns = [
    { month: 'Jan', return: 2.3, trades: 23, sharpe: 1.45, volume: 45600 },
    { month: 'Feb', return: 1.8, trades: 19, sharpe: 1.32, volume: 38900 },
    { month: 'Mar', return: 3.1, trades: 28, sharpe: 1.67, volume: 52300 },
    { month: 'Apr', return: -0.5, trades: 15, sharpe: -0.23, volume: 28700 },
    { month: 'May', return: 2.7, trades: 31, sharpe: 1.54, volume: 61200 },
    { month: 'Jun', return: 1.9, trades: 25, sharpe: 1.38, volume: 47800 },
    { month: 'Jul', return: 3.4, trades: 34, sharpe: 1.72, volume: 68900 },
    { month: 'Aug', return: 2.1, trades: 27, sharpe: 1.41, volume: 51600 },
    { month: 'Sep', return: 1.6, trades: 22, sharpe: 1.29, volume: 42300 },
    { month: 'Oct', return: 2.8, trades: 29, sharpe: 1.58, volume: 57400 },
    { month: 'Nov', return: 1.4, trades: 18, sharpe: 1.21, volume: 35800 },
    { month: 'Dec', return: 2.2, trades: 24, sharpe: 1.43, volume: 48700 }
  ]

  const riskAnalysis = {
    portfolioVaR: -2850,
    expectedShortfall: -4200,
    correlationRisk: 'Medium',
    concentrationRisk: 'High',
    liquidityRisk: 'Low',
    stressTestResults: {
      marketCrash: -15.2,
      volatilitySpike: -8.7,
      interestRateShock: -3.4,
      inflationShock: -5.8,
      liquidityCrisis: -12.1
    },
    riskContribution: [
      { strategy: 'AI Iron Condor Master', contribution: 35.2, risk: 'Medium' },
      { strategy: 'Momentum Breakout AI', contribution: 28.7, risk: 'High' },
      { strategy: 'Volatility Crush Predictor', contribution: 22.1, risk: 'Medium' },
      { strategy: 'Defensive Dividend Shield', contribution: 14.0, risk: 'Low' }
    ]
  }

  const aiInsights = [
    {
      type: 'opportunity',
      title: 'High IV Opportunity in Tech Sector',
      description: 'NVDA, AAPL, and MSFT showing elevated implied volatility (IV rank >85%). Historical analysis suggests premium selling strategies outperform by 23% in similar conditions.',
      confidence: 94,
      impact: 'High',
      timeframe: 'Next 3-5 days',
      category: 'Market Opportunity',
      actionable: true,
      sources: ['Options Flow Data', 'IV Rank Analysis', 'Historical Backtests'],
      relatedStrategies: ['Iron Condor Pro', 'Volatility Crush Master'],
      expectedReturn: '+12-18%',
      riskLevel: 'Medium'
    },
    {
      type: 'risk',
      title: 'Portfolio Concentration Alert',
      description: 'Current portfolio shows 68% exposure to technology sector. Correlation analysis indicates potential for significant drawdown during tech selloffs. Consider diversification across sectors.',
      confidence: 91,
      impact: 'High',
      timeframe: 'Ongoing',
      category: 'Risk Management',
      actionable: true,
      sources: ['Portfolio Analysis', 'Correlation Matrix', 'Sector Exposure'],
      relatedStrategies: ['Defensive Dividend Shield', 'Multi-Sector Rotation'],
      expectedReturn: 'Risk Reduction',
      riskLevel: 'High'
    },
    {
      type: 'performance',
      title: 'AI Strategy Optimization Opportunity',
      description: 'Your AI Iron Condor strategy is consistently outperforming benchmarks with 94.5% consistency score. Machine learning models suggest increasing allocation by 15-20% could improve portfolio Sharpe ratio.',
      confidence: 87,
      impact: 'Medium',
      timeframe: 'Next allocation cycle',
      category: 'Strategy Optimization',
      actionable: true,
      sources: ['Performance Analytics', 'ML Optimization', 'Risk-Return Analysis'],
      relatedStrategies: ['AI Iron Condor Master'],
      expectedReturn: '+3-5% Sharpe improvement',
      riskLevel: 'Low'
    },
    {
      type: 'market',
      title: 'Volatility Regime Shift Detected',
      description: 'Advanced volatility models indicate market transitioning from low to medium volatility regime. Historical data shows volatility strategies outperform by 31% during such transitions.',
      confidence: 83,
      impact: 'High',
      timeframe: 'Next 2-3 weeks',
      category: 'Market Regime',
      actionable: true,
      sources: ['Volatility Models', 'Regime Detection', 'Historical Analysis'],
      relatedStrategies: ['Volatility Crush Predictor', 'VIX Trading System'],
      expectedReturn: '+15-25%',
      riskLevel: 'Medium'
    },
    {
      type: 'insight',
      title: 'Earnings Season Alpha Opportunity',
      description: 'AI analysis of earnings calendar and options flow suggests significant alpha opportunities in 12 upcoming earnings announcements. IV crush strategies showing 89% win rate.',
      confidence: 89,
      impact: 'Medium',
      timeframe: 'Next 2 weeks',
      category: 'Event-Driven',
      actionable: true,
      sources: ['Earnings Calendar', 'Options Flow', 'IV Analysis'],
      relatedStrategies: ['Earnings Volatility Crusher', 'Event-Driven Alpha'],
      expectedReturn: '+8-15%',
      riskLevel: 'Medium'
    }
  ]

  const marketIntelligence = [
    {
      title: 'Options Flow Analysis',
      description: 'Unusual options activity detected in QQQ with 3x normal volume',
      timestamp: '2 minutes ago',
      severity: 'high',
      category: 'Flow'
    },
    {
      title: 'Volatility Surface Shift',
      description: 'SPX volatility surface showing steepening in short-term skew',
      timestamp: '5 minutes ago',
      severity: 'medium',
      category: 'Volatility'
    },
    {
      title: 'Correlation Breakdown',
      description: 'Tech sector correlation dropping below 0.6 threshold',
      timestamp: '8 minutes ago',
      severity: 'medium',
      category: 'Correlation'
    },
    {
      title: 'Momentum Signal',
      description: 'Strong momentum breakout signal in energy sector ETFs',
      timestamp: '12 minutes ago',
      severity: 'high',
      category: 'Momentum'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'outperforming':
        return 'text-green-500'
      case 'performing':
        return 'text-blue-500'
      case 'underperforming':
        return 'text-red-500'
      default:
        return 'text-muted-foreground'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'outperforming':
        return <ArrowUp className="w-4 h-4" />
      case 'performing':
        return <Minus className="w-4 h-4" />
      case 'underperforming':
        return <ArrowDown className="w-4 h-4" />
      default:
        return <Minus className="w-4 h-4" />
    }
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity':
        return <TrendingUp className="w-5 h-5 text-green-500" />
      case 'risk':
        return <AlertTriangle className="w-5 h-5 text-red-500" />
      case 'performance':
        return <BarChart3 className="w-5 h-5 text-blue-500" />
      case 'market':
        return <Activity className="w-5 h-5 text-orange-500" />
      case 'insight':
        return <Lightbulb className="w-5 h-5 text-purple-500" />
      default:
        return <Brain className="w-5 h-5" />
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'border-l-red-500 bg-red-500/5'
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-500/5'
      case 'low':
        return 'border-l-green-500 bg-green-500/5'
      default:
        return 'border-l-gray-500 bg-gray-500/5'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'text-green-500'
      case 'Medium':
        return 'text-yellow-500'
      case 'High':
        return 'text-red-500'
      default:
        return 'text-muted-foreground'
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
                <Brain className="w-8 h-8 mr-3 text-primary" />
                AI Analytics & Insights
              </h1>
              <p className="text-muted-foreground">
                Advanced performance analytics powered by artificial intelligence and machine learning
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
                  <SelectItem value="ALL">All</SelectItem>
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

        {/* Enhanced Key Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="gradient-card border-green-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Return</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                +{performanceMetrics.totalReturn}%
              </div>
              <p className="text-xs text-muted-foreground">
                ${performanceMetrics.totalReturnAmount.toLocaleString()} • +2.3% vs benchmark
              </p>
              <div className="mt-2">
                <Progress value={75} className="h-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-blue-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sharpe Ratio</CardTitle>
              <Target className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-500">{performanceMetrics.sharpeRatio}</div>
              <p className="text-xs text-muted-foreground">
                Risk-adjusted return • Top 15% percentile
              </p>
              <div className="mt-2">
                <Progress value={85} className="h-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
              <Percent className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-500">{performanceMetrics.winRate}%</div>
              <p className="text-xs text-muted-foreground">
                {performanceMetrics.totalTrades} trades • 94.5% consistency
              </p>
              <div className="mt-2">
                <Progress value={73} className="h-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card border-orange-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Max Drawdown</CardTitle>
              <Shield className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">
                {performanceMetrics.maxDrawdown}%
              </div>
              <p className="text-xs text-muted-foreground">
                Better than 78% of strategies
              </p>
              <div className="mt-2">
                <Progress value={65} className="h-1" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview" className="flex items-center">
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="ai-insights" className="flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI Insights
            </TabsTrigger>
            <TabsTrigger value="strategies" className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              Strategies
            </TabsTrigger>
            <TabsTrigger value="risk" className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Risk
            </TabsTrigger>
            <TabsTrigger value="intelligence" className="flex items-center">
              <Cpu className="w-4 h-4 mr-2" />
              Intelligence
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Enhanced Performance Chart */}
              <Card className="glass-effect">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Portfolio Performance</CardTitle>
                    <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pnl">P&L</SelectItem>
                        <SelectItem value="return">Return %</SelectItem>
                        <SelectItem value="drawdown">Drawdown</SelectItem>
                        <SelectItem value="sharpe">Sharpe Ratio</SelectItem>
                        <SelectItem value="volatility">Volatility</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <LineChart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Interactive performance chart</p>
                      <p className="text-sm">Real-time data visualization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Monthly Returns */}
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle>Monthly Performance Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {monthlyReturns.slice(-6).map((month) => (
                      <div key={month.month} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium w-8">{month.month}</span>
                          <div className="flex-1">
                            <Progress 
                              value={Math.abs(month.return) * 10} 
                              className="h-2 w-24"
                            />
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-semibold text-sm ${
                            month.return >= 0 ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {month.return >= 0 ? '+' : ''}{month.return}%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {month.trades} trades • Sharpe: {month.sharpe}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Detailed Metrics */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Advanced Performance Metrics</CardTitle>
                <CardDescription>
                  Comprehensive risk-adjusted performance analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                    <div className="text-lg font-bold text-green-500">
                      ${performanceMetrics.avgWin}
                    </div>
                    <div className="text-sm text-muted-foreground">Avg Win</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-pink-500/10">
                    <div className="text-lg font-bold text-red-500">
                      ${performanceMetrics.avgLoss}
                    </div>
                    <div className="text-sm text-muted-foreground">Avg Loss</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                    <div className="text-lg font-bold text-blue-500">
                      {performanceMetrics.profitFactor}
                    </div>
                    <div className="text-sm text-muted-foreground">Profit Factor</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                    <div className="text-lg font-bold text-purple-500">
                      {performanceMetrics.calmarRatio}
                    </div>
                    <div className="text-sm text-muted-foreground">Calmar Ratio</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10">
                    <div className="text-lg font-bold text-orange-500">
                      {performanceMetrics.sortinoRatio}
                    </div>
                    <div className="text-sm text-muted-foreground">Sortino Ratio</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/10">
                    <div className="text-lg font-bold text-yellow-500">
                      {performanceMetrics.avgHoldTime}d
                    </div>
                    <div className="text-sm text-muted-foreground">Avg Hold Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-insights" className="space-y-6">
            {/* Perplexity-like AI Insights */}
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Brain className="w-6 h-6 mr-3 text-primary" />
                      AI-Powered Market Intelligence
                    </CardTitle>
                    <CardDescription>
                      Real-time insights powered by advanced machine learning and market analysis
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                      <Cpu className="w-3 h-3 mr-1" />
                      AI Active
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {aiInsights.map((insight, index) => (
                    <Card key={index} className="glass-effect border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <div className="mt-1">
                              {getInsightIcon(insight.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="font-semibold text-lg">{insight.title}</h4>
                                <Badge variant={insight.impact === 'High' ? 'destructive' : insight.impact === 'Medium' ? 'default' : 'secondary'}>
                                  {insight.impact} Impact
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  <Target className="w-3 h-3 mr-1" />
                                  {insight.confidence}% confidence
                                </Badge>
                              </div>
                              <p className="text-muted-foreground mb-4 leading-relaxed">
                                {insight.description}
                              </p>
                              
                              {/* Insight Details */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div className="space-y-2">
                                  <div className="text-sm font-medium text-muted-foreground">Expected Return</div>
                                  <div className="text-sm font-semibold text-green-500">{insight.expectedReturn}</div>
                                </div>
                                <div className="space-y-2">
                                  <div className="text-sm font-medium text-muted-foreground">Risk Level</div>
                                  <div className={`text-sm font-semibold ${getRiskColor(insight.riskLevel)}`}>
                                    {insight.riskLevel}
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <div className="text-sm font-medium text-muted-foreground">Timeframe</div>
                                  <div className="text-sm font-semibold">{insight.timeframe}</div>
                                </div>
                              </div>

                              {/* Related Strategies */}
                              <div className="mb-4">
                                <div className="text-sm font-medium text-muted-foreground mb-2">Related Strategies</div>
                                <div className="flex flex-wrap gap-2">
                                  {insight.relatedStrategies.map((strategy) => (
                                    <Badge key={strategy} variant="outline" className="text-xs">
                                      <Bot className="w-3 h-3 mr-1" />
                                      {strategy}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Sources */}
                              <div className="mb-4">
                                <div className="text-sm font-medium text-muted-foreground mb-2">Data Sources</div>
                                <div className="flex flex-wrap gap-2">
                                  {insight.sources.map((source) => (
                                    <Badge key={source} variant="secondary" className="text-xs">
                                      <Database className="w-3 h-3 mr-1" />
                                      {source}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {insight.timeframe}
                                  </span>
                                  <span className="flex items-center">
                                    <Award className="w-4 h-4 mr-1" />
                                    {insight.category}
                                  </span>
                                </div>
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm">
                                    <Eye className="w-4 h-4 mr-2" />
                                    Analyze
                                  </Button>
                                  <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                                    <Rocket className="w-4 h-4 mr-2" />
                                    Take Action
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategies" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-6 h-6 mr-3 text-primary" />
                  Strategy Performance Analysis
                </CardTitle>
                <CardDescription>
                  Detailed performance breakdown of your trading strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-muted">
                        <th className="text-left py-3 px-2">Strategy</th>
                        <th className="text-right py-3 px-2">Trades</th>
                        <th className="text-right py-3 px-2">Win Rate</th>
                        <th className="text-right py-3 px-2">Avg Return</th>
                        <th className="text-right py-3 px-2">Total P&L</th>
                        <th className="text-right py-3 px-2">Sharpe</th>
                        <th className="text-right py-3 px-2">Risk Score</th>
                        <th className="text-right py-3 px-2">Consistency</th>
                        <th className="text-center py-3 px-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {strategyPerformance.map((strategy, index) => (
                        <tr key={index} className="border-b border-muted/50 hover:bg-muted/20">
                          <td className="py-3 px-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{strategy.name}</span>
                              {strategy.aiPowered && (
                                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                                  <Bot className="w-3 h-3 mr-1" />
                                  AI
                                </Badge>
                              )}
                            </div>
                          </td>
                          <td className="text-right py-3 px-2">{strategy.trades}</td>
                          <td className="text-right py-3 px-2">{strategy.winRate}%</td>
                          <td className="text-right py-3 px-2">{strategy.avgReturn}%</td>
                          <td className="text-right py-3 px-2">
                            <span className="text-green-500 font-semibold">
                              ${strategy.totalPnL.toLocaleString()}
                            </span>
                          </td>
                          <td className="text-right py-3 px-2">{strategy.sharpe}</td>
                          <td className="text-right py-3 px-2">
                            <div className="flex items-center justify-end space-x-2">
                              <span className={getRiskColor(strategy.riskScore > 5 ? 'High' : strategy.riskScore > 3 ? 'Medium' : 'Low')}>
                                {strategy.riskScore}
                              </span>
                              <div className="w-12 h-2 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className={`h-full ${strategy.riskScore > 5 ? 'bg-red-500' : strategy.riskScore > 3 ? 'bg-yellow-500' : 'bg-green-500'}`}
                                  style={{ width: `${(strategy.riskScore / 10) * 100}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="text-right py-3 px-2">
                            <div className="flex items-center justify-end space-x-2">
                              <span className="text-sm font-semibold">{strategy.consistency}%</span>
                              <Progress value={strategy.consistency} className="w-12 h-2" />
                            </div>
                          </td>
                          <td className="text-center py-3 px-2">
                            <div className={`flex items-center justify-center ${getStatusColor(strategy.status)}`}>
                              {getStatusIcon(strategy.status)}
                              <span className="ml-1 text-xs capitalize">{strategy.status}</span>
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
                        ${riskAnalysis.portfolioVaR.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">VaR (95%)</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10">
                      <div className="text-lg font-bold text-orange-500">
                        ${riskAnalysis.expectedShortfall.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Expected Shortfall</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Correlation Risk:</span>
                      <Badge variant="outline">{riskAnalysis.correlationRisk}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Concentration Risk:</span>
                      <Badge variant="destructive">{riskAnalysis.concentrationRisk}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Liquidity Risk:</span>
                      <Badge className="bg-green-500">{riskAnalysis.liquidityRisk}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle>Stress Test Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
                      <span className="text-sm font-medium">Market Crash (-20%)</span>
                      <span className="text-red-500 font-semibold">
                        {riskAnalysis.stressTestResults.marketCrash}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
                      <span className="text-sm font-medium">Volatility Spike (+50%)</span>
                      <span className="text-red-500 font-semibold">
                        {riskAnalysis.stressTestResults.volatilitySpike}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
                      <span className="text-sm font-medium">Interest Rate Shock (+2%)</span>
                      <span className="text-red-500 font-semibold">
                        {riskAnalysis.stressTestResults.interestRateShock}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
                      <span className="text-sm font-medium">Inflation Shock (+3%)</span>
                      <span className="text-red-500 font-semibold">
                        {riskAnalysis.stressTestResults.inflationShock}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
                      <span className="text-sm font-medium">Liquidity Crisis</span>
                      <span className="text-red-500 font-semibold">
                        {riskAnalysis.stressTestResults.liquidityCrisis}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Risk Contribution Analysis */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Risk Contribution by Strategy</CardTitle>
                <CardDescription>
                  Understanding how each strategy contributes to overall portfolio risk
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskAnalysis.riskContribution.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                      <div className="flex-1">
                        <div className="font-medium">{item.strategy}</div>
                        <div className="text-sm text-muted-foreground">
                          Risk Level: <span className={getRiskColor(item.risk)}>{item.risk}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-semibold">{item.contribution}%</div>
                          <div className="text-xs text-muted-foreground">Contribution</div>
                        </div>
                        <div className="w-24">
                          <Progress value={item.contribution} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="intelligence" className="space-y-6">
            {/* Real-time Market Intelligence */}
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cpu className="w-6 h-6 mr-3 text-primary" />
                  Real-time Market Intelligence
                </CardTitle>
                <CardDescription>
                  Live market analysis and anomaly detection powered by AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketIntelligence.map((item, index) => (
                    <div key={index} className={`p-4 rounded-lg border-l-4 ${getSeverityColor(item.severity)}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{item.title}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{item.timestamp}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Model Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Network className="w-5 h-5 mr-2" />
                    AI Model Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Prediction Accuracy</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={87} className="w-20 h-2" />
                        <span className="text-sm font-semibold">87%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Model Confidence</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={92} className="w-20 h-2" />
                        <span className="text-sm font-semibold">92%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Signal Quality</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={89} className="w-20 h-2" />
                        <span className="text-sm font-semibold">89%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Data Freshness</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={95} className="w-20 h-2" />
                        <span className="text-sm font-semibold">95%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">API Response Time</span>
                      <span className="text-sm font-semibold text-green-500">45ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Data Processing</span>
                      <span className="text-sm font-semibold text-green-500">Optimal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Model Training</span>
                      <span className="text-sm font-semibold text-blue-500">In Progress</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">System Uptime</span>
                      <span className="text-sm font-semibold text-green-500">99.9%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="w-6 h-6 mr-3 text-primary" />
                  Performance Reports
                </CardTitle>
                <CardDescription>
                  Generate and download detailed performance reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Available Reports</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                        <div>
                          <div className="font-medium">AI Analytics Report</div>
                          <div className="text-sm text-muted-foreground">
                            Comprehensive AI insights and performance analysis
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                        <div>
                          <div className="font-medium">Strategy Performance Report</div>
                          <div className="text-sm text-muted-foreground">
                            Individual strategy performance analysis
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                        <div>
                          <div className="font-medium">Risk Assessment Report</div>
                          <div className="text-sm text-muted-foreground">
                            Comprehensive risk analysis and recommendations
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                        <div>
                          <div className="font-medium">Tax Optimization Report</div>
                          <div className="text-sm text-muted-foreground">
                            Tax-efficient trading recommendations
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Custom Report Builder</h3>
                    <div className="space-y-3">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="performance">Performance Report</SelectItem>
                          <SelectItem value="risk">Risk Report</SelectItem>
                          <SelectItem value="strategy">Strategy Report</SelectItem>
                          <SelectItem value="ai-insights">AI Insights Report</SelectItem>
                          <SelectItem value="tax">Tax Report</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1M">Last Month</SelectItem>
                          <SelectItem value="3M">Last 3 Months</SelectItem>
                          <SelectItem value="6M">Last 6 Months</SelectItem>
                          <SelectItem value="1Y">Last Year</SelectItem>
                          <SelectItem value="ALL">All Time</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="excel">Excel</SelectItem>
                          <SelectItem value="csv">CSV</SelectItem>
                          <SelectItem value="json">JSON</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Custom Report
                      </Button>
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

export default Analytics