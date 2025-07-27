import { useState } from 'react'
import Navigation from '../components/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { 
  Store, 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  TrendingDown,
  Users,
  DollarSign,
  Shield,
  Clock,
  Download,
  Heart,
  Eye,
  BarChart3,
  Target,
  Zap,
  Brain,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Share,
  Bookmark,
  Play,
  Pause,
  Settings,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Bot,
  Activity,
  PieChart,
  LineChart,
  Layers,
  Globe,
  Lightbulb,
  Rocket,
  Award,
  Flame,
  Cpu,
  Database,
  Network
} from 'lucide-react'

const StrategyMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [activeTab, setActiveTab] = useState('discover')
  const [selectedStrategy, setSelectedStrategy] = useState(null)

  const categories = [
    { id: 'all', name: 'All Strategies', count: 247, icon: Globe },
    { id: 'income', name: 'Income Generation', count: 89, icon: DollarSign },
    { id: 'growth', name: 'Growth', count: 76, icon: TrendingUp },
    { id: 'volatility', name: 'Volatility Trading', count: 45, icon: Activity },
    { id: 'defensive', name: 'Defensive', count: 37, icon: Shield },
    { id: 'ai-powered', name: 'AI-Powered', count: 28, icon: Brain },
    { id: 'momentum', name: 'Momentum', count: 34, icon: Rocket },
    { id: 'earnings', name: 'Earnings Plays', count: 22, icon: Target }
  ]

  const strategies = [
    {
      id: 1,
      name: 'AI Iron Condor Master',
      description: 'Advanced AI-driven iron condor strategy with dynamic adjustment algorithms and market regime detection',
      creator: {
        name: 'Alex Chen',
        avatar: '/api/placeholder/32/32',
        verified: true,
        followers: 1247,
        rating: 4.9,
        strategies: 12
      },
      category: 'AI-Powered',
      price: 89,
      rating: 4.8,
      reviews: 156,
      performance: {
        return: 24.5,
        sharpe: 1.62,
        drawdown: -6.3,
        winRate: 78.2,
        calmar: 3.89,
        volatility: 8.4
      },
      stats: {
        subscribers: 1892,
        totalTrades: 2456,
        avgReturn: 2.8,
        avgHoldTime: 4.2,
        successRate: 89.3
      },
      tags: ['AI', 'Options', 'Weekly', 'Low Risk', 'Automated', 'Machine Learning'],
      featured: true,
      trending: true,
      aiPowered: true,
      backtestPeriod: '3 years',
      minCapital: 25000,
      complexity: 'Advanced',
      marketConditions: ['Low Volatility', 'Range-bound'],
      riskLevel: 'Medium',
      timeCommitment: 'Passive',
      brokerCompatibility: ['TastyTrade', 'Interactive Brokers', 'TD Ameritrade'],
      lastUpdated: '2 days ago',
      monthlyVolume: 15600,
      socialMetrics: {
        likes: 234,
        comments: 67,
        shares: 45,
        bookmarks: 123
      }
    },
    {
      id: 2,
      name: 'Momentum Breakout AI',
      description: 'Machine learning powered momentum detection with advanced pattern recognition and risk management',
      creator: {
        name: 'Sarah Johnson',
        avatar: '/api/placeholder/32/32',
        verified: true,
        followers: 2103,
        rating: 4.7,
        strategies: 8
      },
      category: 'Growth',
      price: 129,
      rating: 4.6,
      reviews: 203,
      performance: {
        return: 31.7,
        sharpe: 1.48,
        drawdown: -12.1,
        winRate: 68.5,
        calmar: 2.62,
        volatility: 18.2
      },
      stats: {
        subscribers: 1547,
        totalTrades: 892,
        avgReturn: 4.2,
        avgHoldTime: 8.5,
        successRate: 76.8
      },
      tags: ['AI', 'Momentum', 'High Growth', 'Active', 'Pattern Recognition'],
      featured: true,
      trending: true,
      aiPowered: true,
      backtestPeriod: '5 years',
      minCapital: 50000,
      complexity: 'Expert',
      marketConditions: ['High Volatility', 'Trending'],
      riskLevel: 'High',
      timeCommitment: 'Active',
      brokerCompatibility: ['Interactive Brokers', 'Charles Schwab'],
      lastUpdated: '1 day ago',
      monthlyVolume: 23400,
      socialMetrics: {
        likes: 456,
        comments: 89,
        shares: 67,
        bookmarks: 234
      }
    },
    {
      id: 3,
      name: 'Volatility Crush Predictor',
      description: 'AI-powered earnings volatility prediction with precise IV crush timing and risk controls',
      creator: {
        name: 'Mike Rodriguez',
        avatar: '/api/placeholder/32/32',
        verified: false,
        followers: 567,
        rating: 4.5,
        strategies: 6
      },
      category: 'Volatility Trading',
      price: 65,
      rating: 4.4,
      reviews: 89,
      performance: {
        return: 18.2,
        sharpe: 1.35,
        drawdown: -8.8,
        winRate: 71.8,
        calmar: 2.07,
        volatility: 12.6
      },
      stats: {
        subscribers: 723,
        totalTrades: 234,
        avgReturn: 3.1,
        avgHoldTime: 2.8,
        successRate: 82.1
      },
      tags: ['AI', 'Earnings', 'IV Crush', 'Event-driven', 'Short-term'],
      featured: false,
      trending: true,
      aiPowered: true,
      backtestPeriod: '2 years',
      minCapital: 15000,
      complexity: 'Intermediate',
      marketConditions: ['Earnings Season', 'High IV'],
      riskLevel: 'Medium',
      timeCommitment: 'Semi-Active',
      brokerCompatibility: ['TastyTrade', 'E*TRADE'],
      lastUpdated: '3 days ago',
      monthlyVolume: 8900,
      socialMetrics: {
        likes: 123,
        comments: 34,
        shares: 23,
        bookmarks: 67
      }
    },
    {
      id: 4,
      name: 'Defensive Dividend Shield',
      description: 'AI-enhanced covered call strategy on dividend aristocrats with smart strike selection',
      creator: {
        name: 'Robert Kim',
        avatar: '/api/placeholder/32/32',
        verified: true,
        followers: 834,
        rating: 4.8,
        strategies: 15
      },
      category: 'Defensive',
      price: 45,
      rating: 4.7,
      reviews: 124,
      performance: {
        return: 14.3,
        sharpe: 1.85,
        drawdown: -4.2,
        winRate: 82.9,
        calmar: 3.40,
        volatility: 6.8
      },
      stats: {
        subscribers: 1278,
        totalTrades: 567,
        avgReturn: 1.9,
        avgHoldTime: 28.5,
        successRate: 91.2
      },
      tags: ['Dividends', 'Covered Calls', 'Conservative', 'Long-term', 'Income'],
      featured: true,
      trending: false,
      aiPowered: false,
      backtestPeriod: '7 years',
      minCapital: 100000,
      complexity: 'Beginner',
      marketConditions: ['Any Market', 'Low Volatility'],
      riskLevel: 'Low',
      timeCommitment: 'Passive',
      brokerCompatibility: ['All Major Brokers'],
      lastUpdated: '1 week ago',
      monthlyVolume: 12300,
      socialMetrics: {
        likes: 345,
        comments: 78,
        shares: 56,
        bookmarks: 189
      }
    }
  ]

  const topCreators = [
    {
      name: 'Alex Chen',
      avatar: '/api/placeholder/40/40',
      strategies: 12,
      followers: 1247,
      avgRating: 4.8,
      totalReturn: 24.5,
      verified: true,
      specialties: ['AI Strategies', 'Options', 'Risk Management'],
      joinDate: 'Jan 2023',
      totalSubscribers: 5600,
      monthlyRevenue: 12400
    },
    {
      name: 'Sarah Johnson',
      avatar: '/api/placeholder/40/40',
      strategies: 8,
      followers: 2103,
      avgRating: 4.6,
      totalReturn: 31.7,
      verified: true,
      specialties: ['Momentum Trading', 'Growth Strategies', 'Technical Analysis'],
      joinDate: 'Mar 2023',
      totalSubscribers: 4200,
      monthlyRevenue: 18900
    },
    {
      name: 'Robert Kim',
      avatar: '/api/placeholder/40/40',
      strategies: 15,
      followers: 834,
      avgRating: 4.7,
      totalReturn: 14.3,
      verified: true,
      specialties: ['Income Generation', 'Dividend Strategies', 'Conservative Trading'],
      joinDate: 'Nov 2022',
      totalSubscribers: 3800,
      monthlyRevenue: 8700
    }
  ]

  const marketInsights = [
    {
      title: 'AI Strategies Outperforming',
      description: 'AI-powered strategies showing 23% better risk-adjusted returns this quarter',
      impact: 'High',
      timeframe: 'This Quarter',
      category: 'Performance',
      confidence: 94
    },
    {
      title: 'Volatility Regime Shift',
      description: 'Market transitioning to higher volatility environment. Volatility strategies gaining traction.',
      impact: 'Medium',
      timeframe: 'Next 2 weeks',
      category: 'Market',
      confidence: 87
    },
    {
      title: 'Earnings Season Opportunity',
      description: 'IV crush strategies showing exceptional performance with 89% win rate',
      impact: 'High',
      timeframe: 'Current',
      category: 'Opportunity',
      confidence: 91
    }
  ]

  const filteredStrategies = strategies.filter(strategy => {
    const matchesSearch = strategy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         strategy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         strategy.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || 
                           strategy.category.toLowerCase().includes(selectedCategory) ||
                           (selectedCategory === 'ai-powered' && strategy.aiPowered)
    return matchesSearch && matchesCategory
  })

  const sortedStrategies = [...filteredStrategies].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.stats.subscribers - a.stats.subscribers
      case 'rating':
        return b.rating - a.rating
      case 'return':
        return b.performance.return - a.performance.return
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'newest':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      default:
        return 0
    }
  })

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-green-500'
      case 'Medium': return 'text-yellow-500'
      case 'High': return 'text-red-500'
      default: return 'text-muted-foreground'
    }
  }

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Beginner': return 'bg-green-500/10 text-green-500'
      case 'Intermediate': return 'bg-yellow-500/10 text-yellow-500'
      case 'Advanced': return 'bg-orange-500/10 text-orange-500'
      case 'Expert': return 'bg-red-500/10 text-red-500'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <Store className="w-8 h-8 mr-3 text-primary" />
            Strategy Marketplace
          </h1>
          <p className="text-muted-foreground">
            Discover, analyze, and license proven AI-powered trading strategies from the community
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="discover" className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Discover
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI Insights
            </TabsTrigger>
            <TabsTrigger value="creators" className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Top Creators
            </TabsTrigger>
            <TabsTrigger value="my-licenses" className="flex items-center">
              <Bookmark className="w-4 h-4 mr-2" />
              My Licenses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-6">
            {/* Enhanced Search and Filters */}
            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search strategies, creators, or tags..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            <div className="flex items-center">
                              <category.icon className="w-4 h-4 mr-2" />
                              {category.name} ({category.count})
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                        <SelectItem value="return">Best Performance</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Quick Filter Tags */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                      <Bot className="w-3 h-3 mr-1" />
                      AI-Powered
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                      <Flame className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                      <Star className="w-3 h-3 mr-1" />
                      Top Rated
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                      <Shield className="w-3 h-3 mr-1" />
                      Low Risk
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                      <DollarSign className="w-3 h-3 mr-1" />
                      Income
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Strategies */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-primary" />
                Featured AI-Powered Strategies
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {sortedStrategies.filter(s => s.featured).map((strategy) => (
                  <Card key={strategy.id} className="glass-effect hover:scale-[1.02] transition-all duration-300 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-12 h-12 border-2 border-primary/20">
                            <AvatarImage src={strategy.creator.avatar} />
                            <AvatarFallback>{strategy.creator.name[0]}</AvatarFallback>
                          </Avatar>
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
                            <p className="text-sm text-muted-foreground flex items-center">
                              by {strategy.creator.name}
                              {strategy.creator.verified && (
                                <CheckCircle className="w-4 h-4 ml-1 text-blue-500" />
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {strategy.trending && (
                            <Badge className="bg-gradient-to-r from-orange-500 to-red-500">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                          <div className="text-right">
                            <div className="text-xl font-bold">${strategy.price}/mo</div>
                            <div className="text-xs text-muted-foreground">
                              Min: ${strategy.minCapital.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        {strategy.description}
                      </p>

                      {/* Performance Metrics */}
                      <div className="grid grid-cols-4 gap-4 mb-4">
                        <div className="text-center p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                          <div className="text-lg font-bold text-green-500">
                            +{strategy.performance.return}%
                          </div>
                          <div className="text-xs text-muted-foreground">Annual Return</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                          <div className="text-lg font-bold text-blue-500">
                            {strategy.performance.sharpe}
                          </div>
                          <div className="text-xs text-muted-foreground">Sharpe Ratio</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                          <div className="text-lg font-bold text-purple-500">
                            {strategy.performance.winRate}%
                          </div>
                          <div className="text-xs text-muted-foreground">Win Rate</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10">
                          <div className="text-lg font-bold text-orange-500">
                            {strategy.stats.subscribers}
                          </div>
                          <div className="text-xs text-muted-foreground">Subscribers</div>
                        </div>
                      </div>

                      {/* Strategy Details */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Risk Level:</span>
                            <span className={`font-medium ${getRiskColor(strategy.riskLevel)}`}>
                              {strategy.riskLevel}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Complexity:</span>
                            <Badge className={getComplexityColor(strategy.complexity)}>
                              {strategy.complexity}
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Time:</span>
                            <span className="font-medium">{strategy.timeCommitment}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Backtest:</span>
                            <span className="font-medium">{strategy.backtestPeriod}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {strategy.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {strategy.tags.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{strategy.tags.length - 4} more
                          </Badge>
                        )}
                      </div>

                      {/* Social Metrics */}
                      <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            {strategy.rating} ({strategy.reviews})
                          </div>
                          <div className="flex items-center">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            {strategy.socialMetrics.likes}
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            {strategy.socialMetrics.comments}
                          </div>
                        </div>
                        <div className="text-xs">
                          Updated {strategy.lastUpdated}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button variant="outline" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share className="w-4 h-4" />
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                          <Download className="w-4 h-4 mr-2" />
                          License
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Strategies Grid */}
            <div>
              <h2 className="text-xl font-semibold mb-4">All Strategies ({sortedStrategies.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedStrategies.map((strategy) => (
                  <Card key={strategy.id} className="glass-effect hover:scale-[1.02] transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-sm flex items-center">
                          {strategy.name}
                          {strategy.aiPowered && (
                            <Bot className="w-4 h-4 ml-1 text-purple-500" />
                          )}
                        </h3>
                        <div className="text-right">
                          <div className="font-bold">${strategy.price}/mo</div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Star className="w-3 h-3 text-yellow-500 mr-1" />
                            {strategy.rating}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mb-3">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={strategy.creator.avatar} />
                          <AvatarFallback>{strategy.creator.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">
                          {strategy.creator.name}
                        </span>
                        {strategy.creator.verified && (
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                        )}
                      </div>

                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {strategy.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                        <div>
                          <span className="text-muted-foreground">Return:</span>
                          <span className="ml-1 text-green-500 font-semibold">
                            +{strategy.performance.return}%
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Win Rate:</span>
                          <span className="ml-1 font-semibold">
                            {strategy.performance.winRate}%
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Risk:</span>
                          <span className={`ml-1 font-semibold ${getRiskColor(strategy.riskLevel)}`}>
                            {strategy.riskLevel}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Sharpe:</span>
                          <span className="ml-1 font-semibold">
                            {strategy.performance.sharpe}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Users className="w-3 h-3 mr-1" />
                          {strategy.stats.subscribers}
                        </div>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          License
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            {/* Enhanced Perplexity-like AI Insights */}
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Brain className="w-6 h-6 mr-3 text-primary" />
                      AI Market Intelligence
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
                  {marketInsights.map((insight, index) => (
                    <Card key={index} className="glass-effect border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <div className="mt-1">
                              {insight.category === 'Performance' && <TrendingUp className="w-5 h-5 text-green-500" />}
                              {insight.category === 'Market' && <Activity className="w-5 h-5 text-orange-500" />}
                              {insight.category === 'Opportunity' && <Lightbulb className="w-5 h-5 text-purple-500" />}
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
                              
                              {/* Enhanced Insight Details */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div className="space-y-2">
                                  <div className="text-sm font-medium text-muted-foreground">Expected Impact</div>
                                  <div className="text-sm font-semibold text-green-500">+15-25% strategy performance</div>
                                </div>
                                <div className="space-y-2">
                                  <div className="text-sm font-medium text-muted-foreground">Risk Level</div>
                                  <div className="text-sm font-semibold text-yellow-500">Medium</div>
                                </div>
                                <div className="space-y-2">
                                  <div className="text-sm font-medium text-muted-foreground">Timeframe</div>
                                  <div className="text-sm font-semibold">{insight.timeframe}</div>
                                </div>
                              </div>

                              {/* Related Strategies */}
                              <div className="mb-4">
                                <div className="text-sm font-medium text-muted-foreground mb-2">Recommended Strategies</div>
                                <div className="flex flex-wrap gap-2">
                                  <Badge variant="outline" className="text-xs">
                                    <Bot className="w-3 h-3 mr-1" />
                                    AI Iron Condor Master
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    <Bot className="w-3 h-3 mr-1" />
                                    Volatility Crush Predictor
                                  </Badge>
                                </div>
                              </div>

                              {/* Data Sources */}
                              <div className="mb-4">
                                <div className="text-sm font-medium text-muted-foreground mb-2">Data Sources</div>
                                <div className="flex flex-wrap gap-2">
                                  <Badge variant="secondary" className="text-xs">
                                    <Database className="w-3 h-3 mr-1" />
                                    Options Flow Data
                                  </Badge>
                                  <Badge variant="secondary" className="text-xs">
                                    <Database className="w-3 h-3 mr-1" />
                                    IV Rank Analysis
                                  </Badge>
                                  <Badge variant="secondary" className="text-xs">
                                    <Database className="w-3 h-3 mr-1" />
                                    Historical Backtests
                                  </Badge>
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

            {/* Real-time Market Sentiment Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2" />
                    Real-time Market Sentiment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500 mb-2">Bullish</div>
                      <div className="text-sm text-muted-foreground">
                        AI strategies showing strong performance across all categories
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-500">78%</div>
                        <div className="text-xs text-muted-foreground">Bullish</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-yellow-500">15%</div>
                        <div className="text-xs text-muted-foreground">Neutral</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-500">7%</div>
                        <div className="text-xs text-muted-foreground">Bearish</div>
                      </div>
                    </div>
                    
                    {/* Sentiment Drivers */}
                    <div className="space-y-3 mt-6">
                      <h4 className="font-semibold text-sm">Key Sentiment Drivers</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Options Flow</span>
                          <Badge className="bg-green-500">Bullish</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>VIX Trend</span>
                          <Badge className="bg-green-500">Declining</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Put/Call Ratio</span>
                          <Badge className="bg-yellow-500">Neutral</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Institutional Flow</span>
                          <Badge className="bg-green-500">Buying</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Strategy Performance Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categories.slice(1, 6).map((category) => (
                      <div key={category.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <category.icon className="w-4 h-4 text-primary" />
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Progress value={Math.random() * 100} className="w-20 h-2" />
                          <span className="text-sm font-semibold text-green-500">
                            +{(Math.random() * 30 + 5).toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Trending Insights */}
                  <div className="mt-6 pt-4 border-t border-muted">
                    <h4 className="font-semibold text-sm mb-3">Trending Insights</h4>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-muted/20">
                        <div className="flex items-center space-x-2 mb-1">
                          <Flame className="w-4 h-4 text-orange-500" />
                          <span className="text-sm font-medium">AI Strategies Outperforming</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Machine learning strategies showing 23% better risk-adjusted returns
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/20">
                        <div className="flex items-center space-x-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-medium">Volatility Strategies Rising</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          IV crush strategies gaining 31% more subscribers this week
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI-Powered Strategy Recommendations */}
            <Card className="glass-effect border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 text-green-500" />
                  Personalized AI Recommendations
                </CardTitle>
                <CardDescription>
                  Strategies tailored to your risk profile and market conditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass-effect border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Bot className="w-8 h-8 text-green-500" />
                        <div>
                          <h4 className="font-semibold">Perfect Match for You</h4>
                          <p className="text-sm text-muted-foreground">Based on your profile</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-green-500/10">
                          <div className="font-medium text-sm">AI Iron Condor Master</div>
                          <div className="text-xs text-muted-foreground">97% compatibility match</div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-green-500">+24.5% return</span>
                            <Button size="sm" className="bg-green-500 hover:bg-green-600">
                              View Strategy
                            </Button>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-blue-500/10">
                          <div className="font-medium text-sm">Defensive Dividend Shield</div>
                          <div className="text-xs text-muted-foreground">89% compatibility match</div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-blue-500">+14.3% return</span>
                            <Button size="sm" variant="outline">
                              View Strategy
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-l-4 border-l-orange-500">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <TrendingUp className="w-8 h-8 text-orange-500" />
                        <div>
                          <h4 className="font-semibold">Trending Opportunities</h4>
                          <p className="text-sm text-muted-foreground">Hot strategies right now</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-orange-500/10">
                          <div className="font-medium text-sm">Volatility Crush Predictor</div>
                          <div className="text-xs text-muted-foreground">+156% new subscribers</div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-orange-500">+18.2% return</span>
                            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                              View Strategy
                            </Button>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-purple-500/10">
                          <div className="font-medium text-sm">Momentum Breakout AI</div>
                          <div className="text-xs text-muted-foreground">+89% performance boost</div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-purple-500">+31.7% return</span>
                            <Button size="sm" variant="outline">
                              View Strategy
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Strategy Performance Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Category Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categories.slice(1, 6).map((category) => (
                      <div key={category.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <category.icon className="w-4 h-4 text-primary" />
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Progress value={Math.random() * 100} className="w-20 h-2" />
                          <span className="text-sm font-semibold text-green-500">
                            +{(Math.random() * 30 + 5).toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2" />
                    Market Sentiment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500 mb-2">Bullish</div>
                      <div className="text-sm text-muted-foreground">
                        AI strategies showing strong performance across all categories
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-500">78%</div>
                        <div className="text-xs text-muted-foreground">Bullish</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-yellow-500">15%</div>
                        <div className="text-xs text-muted-foreground">Neutral</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-500">7%</div>
                        <div className="text-xs text-muted-foreground">Bearish</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="creators" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-6 h-6 mr-3 text-primary" />
                  Top Strategy Creators
                </CardTitle>
                <CardDescription>
                  Meet the most successful strategy builders in our community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {topCreators.map((creator, index) => (
                    <Card key={creator.name} className="glass-effect">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="text-2xl font-bold text-muted-foreground">
                              #{index + 1}
                            </div>
                            <Avatar className="w-16 h-16 border-2 border-primary/20">
                              <AvatarImage src={creator.avatar} />
                              <AvatarFallback>{creator.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold text-lg flex items-center">
                                {creator.name}
                                {creator.verified && (
                                  <CheckCircle className="w-5 h-5 ml-2 text-blue-500" />
                                )}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {creator.strategies} strategies • {creator.followers} followers • Joined {creator.joinDate}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {creator.specialties.map((specialty) => (
                                  <Badge key={specialty} variant="outline" className="text-xs">
                                    {specialty}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-8 text-sm">
                            <div className="text-center">
                              <div className="font-bold text-green-500 text-lg">
                                +{creator.totalReturn}%
                              </div>
                              <div className="text-muted-foreground">Avg Return</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-lg">
                                {creator.avgRating}
                              </div>
                              <div className="text-muted-foreground">Rating</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-lg">
                                {creator.totalSubscribers}
                              </div>
                              <div className="text-muted-foreground">Subscribers</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-lg">
                                ${creator.monthlyRevenue.toLocaleString()}
                              </div>
                              <div className="text-muted-foreground">Monthly Revenue</div>
                            </div>
                            <Button variant="outline" size="sm">
                              <Users className="w-4 h-4 mr-2" />
                              Follow
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

          <TabsContent value="my-licenses" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bookmark className="w-6 h-6 mr-3 text-primary" />
                  My Licensed Strategies
                </CardTitle>
                <CardDescription>
                  Manage your strategy subscriptions and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Store className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No strategies licensed yet</h3>
                  <p className="mb-4">Browse the marketplace to find strategies that match your goals.</p>
                  <Button onClick={() => setActiveTab('discover')} className="bg-primary hover:bg-primary/90">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Explore Strategies
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default StrategyMarketplace