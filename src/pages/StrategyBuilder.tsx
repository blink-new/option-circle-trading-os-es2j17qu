import { useState } from 'react'
import Navigation from '../components/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import { 
  Bot, 
  Plus, 
  Trash2, 
  Play, 
  Pause, 
  Save, 
  Download,
  Upload,
  Settings,
  Brain,
  Target,
  Shield,
  Zap,
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Percent,
  Clock,
  AlertTriangle,
  CheckCircle,
  Info,
  Lightbulb,
  Rocket,
  Layers,
  Code,
  Eye,
  Share,
  Copy,
  Edit,
  Trash,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Cpu,
  Database,
  Network,
  Activity,
  Filter,
  Search,
  Calendar,
  Globe,
  Users,
  Star,
  Award,
  Flame,
  ChevronDown,
  ChevronRight,
  X,
  Check
} from 'lucide-react'

const StrategyBuilder = () => {
  const [activeTab, setActiveTab] = useState('builder')
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [strategyName, setStrategyName] = useState('')
  const [strategyDescription, setStrategyDescription] = useState('')
  const [isAiAssisted, setIsAiAssisted] = useState(true)
  const [rules, setRules] = useState([])
  const [backtestResults, setBacktestResults] = useState(null)
  const [isBuilding, setIsBuilding] = useState(false)

  const strategyTemplates = [
    {
      id: 'iron-condor',
      name: 'Iron Condor',
      description: 'Profit from low volatility with defined risk spreads',
      category: 'Income',
      difficulty: 'Intermediate',
      expectedReturn: '12-18%',
      riskLevel: 'Medium',
      timeframe: 'Weekly',
      aiOptimized: true,
      rules: 4,
      popularity: 89,
      icon: Target,
      tags: ['Options', 'Neutral', 'Income', 'Defined Risk']
    },
    {
      id: 'covered-call',
      name: 'Covered Call',
      description: 'Generate income from stock holdings with call options',
      category: 'Income',
      difficulty: 'Beginner',
      expectedReturn: '8-15%',
      riskLevel: 'Low',
      timeframe: 'Monthly',
      aiOptimized: true,
      rules: 3,
      popularity: 95,
      icon: Shield,
      tags: ['Stocks', 'Income', 'Conservative', 'Bullish']
    },
    {
      id: 'momentum-breakout',
      name: 'Momentum Breakout',
      description: 'Capture explosive moves with technical indicators',
      category: 'Growth',
      difficulty: 'Advanced',
      expectedReturn: '25-40%',
      riskLevel: 'High',
      timeframe: 'Daily',
      aiOptimized: true,
      rules: 6,
      popularity: 76,
      icon: Rocket,
      tags: ['Momentum', 'Technical', 'Growth', 'Active']
    },
    {
      id: 'volatility-crush',
      name: 'Volatility Crush',
      description: 'Profit from IV collapse after earnings',
      category: 'Event-Driven',
      difficulty: 'Advanced',
      expectedReturn: '20-35%',
      riskLevel: 'Medium',
      timeframe: 'Event-Based',
      aiOptimized: true,
      rules: 5,
      popularity: 82,
      icon: Zap,
      tags: ['Earnings', 'Volatility', 'Event', 'Short-term']
    },
    {
      id: 'ai-adaptive',
      name: 'AI Adaptive Strategy',
      description: 'Machine learning powered adaptive trading system',
      category: 'AI-Powered',
      difficulty: 'Expert',
      expectedReturn: '30-50%',
      riskLevel: 'Variable',
      timeframe: 'Dynamic',
      aiOptimized: true,
      rules: 8,
      popularity: 67,
      icon: Brain,
      tags: ['AI', 'Machine Learning', 'Adaptive', 'Advanced']
    },
    {
      id: 'custom',
      name: 'Build from Scratch',
      description: 'Create your own strategy with full customization',
      category: 'Custom',
      difficulty: 'Variable',
      expectedReturn: 'Variable',
      riskLevel: 'Variable',
      timeframe: 'Variable',
      aiOptimized: false,
      rules: 0,
      popularity: 100,
      icon: Code,
      tags: ['Custom', 'Flexible', 'Advanced', 'Personalized']
    }
  ]

  const ruleTypes = [
    {
      category: 'Entry Conditions',
      rules: [
        { id: 'price-above-ma', name: 'Price Above Moving Average', description: 'Enter when price is above specified MA' },
        { id: 'rsi-oversold', name: 'RSI Oversold', description: 'Enter when RSI is below threshold' },
        { id: 'volume-spike', name: 'Volume Spike', description: 'Enter on unusual volume activity' },
        { id: 'iv-rank-high', name: 'High IV Rank', description: 'Enter when implied volatility is elevated' },
        { id: 'earnings-approach', name: 'Earnings Approaching', description: 'Enter before earnings announcement' }
      ]
    },
    {
      category: 'Exit Conditions',
      rules: [
        { id: 'profit-target', name: 'Profit Target', description: 'Exit at specified profit percentage' },
        { id: 'stop-loss', name: 'Stop Loss', description: 'Exit at specified loss percentage' },
        { id: 'time-decay', name: 'Time Decay', description: 'Exit based on time to expiration' },
        { id: 'volatility-crush', name: 'Volatility Crush', description: 'Exit after IV collapse' },
        { id: 'technical-signal', name: 'Technical Signal', description: 'Exit on technical indicator signal' }
      ]
    },
    {
      category: 'Risk Management',
      rules: [
        { id: 'position-size', name: 'Position Sizing', description: 'Limit position size based on portfolio' },
        { id: 'max-loss', name: 'Maximum Loss', description: 'Maximum loss per trade' },
        { id: 'correlation-limit', name: 'Correlation Limit', description: 'Limit correlated positions' },
        { id: 'sector-exposure', name: 'Sector Exposure', description: 'Limit exposure to single sector' },
        { id: 'drawdown-limit', name: 'Drawdown Limit', description: 'Stop trading on drawdown threshold' }
      ]
    },
    {
      category: 'AI Enhancement',
      rules: [
        { id: 'ml-signal', name: 'ML Signal Confirmation', description: 'Use ML model for signal validation' },
        { id: 'sentiment-analysis', name: 'Sentiment Analysis', description: 'Factor in market sentiment' },
        { id: 'regime-detection', name: 'Market Regime Detection', description: 'Adapt to market conditions' },
        { id: 'adaptive-sizing', name: 'Adaptive Position Sizing', description: 'AI-driven position sizing' },
        { id: 'dynamic-exit', name: 'Dynamic Exit Timing', description: 'AI-optimized exit timing' }
      ]
    }
  ]

  const aiSuggestions = [
    {
      type: 'optimization',
      title: 'Improve Win Rate',
      description: 'Add RSI confirmation to reduce false signals',
      impact: '+5.2% win rate',
      confidence: 87
    },
    {
      type: 'risk',
      title: 'Reduce Drawdown',
      description: 'Implement volatility-based position sizing',
      impact: '-23% max drawdown',
      confidence: 92
    },
    {
      type: 'performance',
      title: 'Enhance Returns',
      description: 'Add momentum filter for better entries',
      impact: '+12% annual return',
      confidence: 78
    }
  ]

  const backtestMetrics = {
    totalReturn: 24.5,
    sharpeRatio: 1.62,
    maxDrawdown: -8.3,
    winRate: 73.2,
    profitFactor: 1.96,
    totalTrades: 156,
    avgWin: 2.8,
    avgLoss: -1.4,
    calmarRatio: 2.95,
    sortinoRatio: 2.14
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/10 text-green-500'
      case 'Intermediate': return 'bg-yellow-500/10 text-yellow-500'
      case 'Advanced': return 'bg-orange-500/10 text-orange-500'
      case 'Expert': return 'bg-red-500/10 text-red-500'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-green-500'
      case 'Medium': return 'text-yellow-500'
      case 'High': return 'text-red-500'
      case 'Variable': return 'text-purple-500'
      default: return 'text-muted-foreground'
    }
  }

  const addRule = (ruleId) => {
    const newRule = {
      id: Date.now(),
      type: ruleId,
      parameters: {},
      enabled: true
    }
    setRules([...rules, newRule])
  }

  const removeRule = (ruleId) => {
    setRules(rules.filter(rule => rule.id !== ruleId))
  }

  const runBacktest = async () => {
    setIsBuilding(true)
    // Simulate backtest
    setTimeout(() => {
      setBacktestResults(backtestMetrics)
      setIsBuilding(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <Bot className="w-8 h-8 mr-3 text-primary" />
            AI Strategy Builder
          </h1>
          <p className="text-muted-foreground">
            Build, test, and deploy sophisticated trading strategies with our no-code AI platform
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="builder" className="flex items-center">
              <Bot className="w-4 h-4 mr-2" />
              Builder
            </TabsTrigger>
            <TabsTrigger value="templates" className="flex items-center">
              <Layers className="w-4 h-4 mr-2" />
              Templates
            </TabsTrigger>
            <TabsTrigger value="backtest" className="flex items-center">
              <BarChart3 className="w-4 h-4 mr-2" />
              Backtest
            </TabsTrigger>
            <TabsTrigger value="deploy" className="flex items-center">
              <Rocket className="w-4 h-4 mr-2" />
              Deploy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Layers className="w-6 h-6 mr-3 text-primary" />
                  Strategy Templates
                </CardTitle>
                <CardDescription>
                  Choose from proven strategy templates or build from scratch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {strategyTemplates.map((template) => (
                    <Card 
                      key={template.id} 
                      className={`glass-effect hover:scale-[1.02] transition-all duration-300 cursor-pointer ${
                        selectedTemplate?.id === template.id ? 'border-primary' : ''
                      }`}
                      onClick={() => setSelectedTemplate(template)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                              <template.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold flex items-center">
                                {template.name}
                                {template.aiOptimized && (
                                  <Badge className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500">
                                    <Brain className="w-3 h-3 mr-1" />
                                    AI
                                  </Badge>
                                )}
                              </h3>
                              <p className="text-sm text-muted-foreground">{template.category}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Star className="w-3 h-3 mr-1 text-yellow-500" />
                              {template.popularity}%
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">
                          {template.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Return:</span>
                            <span className="ml-1 text-green-500 font-semibold">
                              {template.expectedReturn}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Risk:</span>
                            <span className={`ml-1 font-semibold ${getRiskColor(template.riskLevel)}`}>
                              {template.riskLevel}
                            </span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Timeframe:</span>
                            <span className="ml-1 font-semibold">{template.timeframe}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Rules:</span>
                            <span className="ml-1 font-semibold">{template.rules}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <Badge className={getDifficultyColor(template.difficulty)}>
                            {template.difficulty}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {template.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {template.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{template.tags.length - 3}
                            </Badge>
                          )}
                        </div>

                        <Button 
                          className="w-full" 
                          onClick={() => {
                            setSelectedTemplate(template)
                            setActiveTab('builder')
                          }}
                        >
                          {template.id === 'custom' ? 'Start Building' : 'Use Template'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="builder" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Strategy Configuration */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Strategy Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="strategy-name">Strategy Name</Label>
                        <Input
                          id="strategy-name"
                          placeholder="My Awesome Strategy"
                          value={strategyName}
                          onChange={(e) => setStrategyName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="strategy-category">Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="income">Income Generation</SelectItem>
                            <SelectItem value="growth">Growth</SelectItem>
                            <SelectItem value="volatility">Volatility Trading</SelectItem>
                            <SelectItem value="defensive">Defensive</SelectItem>
                            <SelectItem value="ai-powered">AI-Powered</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="strategy-description">Description</Label>
                      <Textarea
                        id="strategy-description"
                        placeholder="Describe your strategy..."
                        value={strategyDescription}
                        onChange={(e) => setStrategyDescription(e.target.value)}
                        rows={3}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="ai-assisted"
                        checked={isAiAssisted}
                        onCheckedChange={setIsAiAssisted}
                      />
                      <Label htmlFor="ai-assisted" className="flex items-center">
                        <Brain className="w-4 h-4 mr-2 text-primary" />
                        Enable AI Assistance
                      </Label>
                    </div>
                  </CardContent>
                </Card>

                {/* Strategy Rules */}
                <Card className="glass-effect">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Code className="w-5 h-5 mr-2" />
                        Strategy Rules ({rules.length})
                      </CardTitle>
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Rule
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {rules.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="mb-2">No rules added yet</p>
                        <p className="text-sm">Start by adding entry and exit conditions</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {rules.map((rule, index) => (
                          <Card key={rule.id} className="glass-effect">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <span className="text-sm font-semibold">{index + 1}</span>
                                  </div>
                                  <div>
                                    <div className="font-medium">Rule {index + 1}</div>
                                    <div className="text-sm text-muted-foreground">
                                      {rule.type}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Switch checked={rule.enabled} />
                                  <Button variant="ghost" size="sm">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => removeRule(rule.id)}
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Rule Library */}
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="w-5 h-5 mr-2" />
                      Rule Library
                    </CardTitle>
                    <CardDescription>
                      Drag and drop rules to build your strategy
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {ruleTypes.map((category) => (
                        <div key={category.category}>
                          <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                            {category.category}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {category.rules.map((rule) => (
                              <Card 
                                key={rule.id} 
                                className="glass-effect hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                                onClick={() => addRule(rule.id)}
                              >
                                <CardContent className="p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-medium text-sm">{rule.name}</h5>
                                    <Plus className="w-4 h-4 text-muted-foreground" />
                                  </div>
                                  <p className="text-xs text-muted-foreground">
                                    {rule.description}
                                  </p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* AI Assistant Sidebar */}
              <div className="space-y-6">
                {isAiAssisted && (
                  <Card className="glass-effect border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Brain className="w-5 h-5 mr-2 text-primary" />
                        AI Assistant
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                        <Sparkles className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium">AI is analyzing your strategy</p>
                        <p className="text-xs text-muted-foreground">
                          Real-time optimization suggestions
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">Suggestions</h4>
                        {aiSuggestions.map((suggestion, index) => (
                          <Card key={index} className="glass-effect">
                            <CardContent className="p-3">
                              <div className="flex items-start space-x-3">
                                <Lightbulb className="w-4 h-4 mt-0.5 text-yellow-500" />
                                <div className="flex-1">
                                  <h5 className="font-medium text-sm">{suggestion.title}</h5>
                                  <p className="text-xs text-muted-foreground mb-2">
                                    {suggestion.description}
                                  </p>
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs text-green-500 font-semibold">
                                      {suggestion.impact}
                                    </span>
                                    <Badge variant="outline" className="text-xs">
                                      {suggestion.confidence}% confidence
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Quick Actions */}
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Save className="w-4 h-4 mr-2" />
                      Save Strategy
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview Code
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Share className="w-4 h-4 mr-2" />
                      Share Strategy
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Copy className="w-4 h-4 mr-2" />
                      Clone Strategy
                    </Button>
                  </CardContent>
                </Card>

                {/* Strategy Stats */}
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Strategy Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Complexity:</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={rules.length * 10} className="w-16 h-2" />
                        <span className="font-medium">{rules.length}/10</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Completeness:</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={strategyName ? 60 : 20} className="w-16 h-2" />
                        <span className="font-medium">{strategyName ? '60%' : '20%'}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">AI Score:</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={isAiAssisted ? 85 : 45} className="w-16 h-2" />
                        <span className="font-medium">{isAiAssisted ? '85%' : '45%'}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="backtest" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card className="glass-effect">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <BarChart3 className="w-6 h-6 mr-3 text-primary" />
                        Backtest Results
                      </CardTitle>
                      <Button 
                        onClick={runBacktest}
                        disabled={isBuilding}
                        className="bg-gradient-to-r from-primary to-secondary"
                      >
                        {isBuilding ? (
                          <>
                            <Cpu className="w-4 h-4 mr-2 animate-spin" />
                            Running...
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Run Backtest
                          </>
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {!backtestResults && !isBuilding ? (
                      <div className="text-center py-12 text-muted-foreground">
                        <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="mb-2">No backtest results yet</p>
                        <p className="text-sm">Run a backtest to see performance metrics</p>
                      </div>
                    ) : isBuilding ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="font-medium">Running backtest...</p>
                        <p className="text-sm text-muted-foreground">Analyzing 3 years of historical data</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {/* Performance Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                            <div className="text-2xl font-bold text-green-500">
                              +{backtestResults.totalReturn}%
                            </div>
                            <div className="text-sm text-muted-foreground">Total Return</div>
                          </div>
                          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                            <div className="text-2xl font-bold text-blue-500">
                              {backtestResults.sharpeRatio}
                            </div>
                            <div className="text-sm text-muted-foreground">Sharpe Ratio</div>
                          </div>
                          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                            <div className="text-2xl font-bold text-purple-500">
                              {backtestResults.winRate}%
                            </div>
                            <div className="text-sm text-muted-foreground">Win Rate</div>
                          </div>
                          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10">
                            <div className="text-2xl font-bold text-orange-500">
                              {backtestResults.maxDrawdown}%
                            </div>
                            <div className="text-sm text-muted-foreground">Max Drawdown</div>
                          </div>
                        </div>

                        {/* Performance Chart Placeholder */}
                        <div className="h-64 flex items-center justify-center text-muted-foreground border-2 border-dashed border-muted rounded-lg">
                          <div className="text-center">
                            <Activity className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p>Performance chart will be displayed here</p>
                          </div>
                        </div>

                        {/* Detailed Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div className="text-center p-3 rounded-lg bg-muted/20">
                            <div className="font-bold">{backtestResults.profitFactor}</div>
                            <div className="text-sm text-muted-foreground">Profit Factor</div>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-muted/20">
                            <div className="font-bold">{backtestResults.totalTrades}</div>
                            <div className="text-sm text-muted-foreground">Total Trades</div>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-muted/20">
                            <div className="font-bold">{backtestResults.avgWin}%</div>
                            <div className="text-sm text-muted-foreground">Avg Win</div>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-muted/20">
                            <div className="font-bold">{backtestResults.avgLoss}%</div>
                            <div className="text-sm text-muted-foreground">Avg Loss</div>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-muted/20">
                            <div className="font-bold">{backtestResults.calmarRatio}</div>
                            <div className="text-sm text-muted-foreground">Calmar Ratio</div>
                          </div>
                          <div className="text-center p-3 rounded-lg bg-muted/20">
                            <div className="font-bold">{backtestResults.sortinoRatio}</div>
                            <div className="text-sm text-muted-foreground">Sortino Ratio</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Backtest Configuration */}
              <div className="space-y-6">
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Backtest Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Time Period</Label>
                      <Select defaultValue="3y">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1y">1 Year</SelectItem>
                          <SelectItem value="2y">2 Years</SelectItem>
                          <SelectItem value="3y">3 Years</SelectItem>
                          <SelectItem value="5y">5 Years</SelectItem>
                          <SelectItem value="10y">10 Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Initial Capital</Label>
                      <Input placeholder="$100,000" />
                    </div>

                    <div className="space-y-2">
                      <Label>Commission per Trade</Label>
                      <Input placeholder="$1.00" />
                    </div>

                    <div className="space-y-2">
                      <Label>Slippage (%)</Label>
                      <Slider defaultValue={[0.1]} max={1} step={0.1} />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="compound" defaultChecked />
                      <Label htmlFor="compound">Compound Returns</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="reinvest" defaultChecked />
                      <Label htmlFor="reinvest">Reinvest Profits</Label>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Benchmark
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Select defaultValue="spy">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spy">SPY (S&P 500)</SelectItem>
                        <SelectItem value="qqq">QQQ (NASDAQ 100)</SelectItem>
                        <SelectItem value="iwm">IWM (Russell 2000)</SelectItem>
                        <SelectItem value="vti">VTI (Total Stock Market)</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">SPY Return:</span>
                        <span className="text-green-500 font-semibold">+12.3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Alpha:</span>
                        <span className="text-green-500 font-semibold">+12.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Beta:</span>
                        <span className="font-semibold">0.85</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="deploy" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Rocket className="w-6 h-6 mr-3 text-primary" />
                  Deploy Strategy
                </CardTitle>
                <CardDescription>
                  Deploy your strategy to live trading or share with the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <Card className="glass-effect border-green-500/20">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                            <Play className="w-6 h-6 text-green-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Live Trading</h3>
                            <p className="text-sm text-muted-foreground">
                              Deploy to your connected broker account
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Broker Account</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select broker" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="tasty">TastyTrade</SelectItem>
                                <SelectItem value="ib">Interactive Brokers</SelectItem>
                                <SelectItem value="td">TD Ameritrade</SelectItem>
                                <SelectItem value="schwab">Charles Schwab</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label>Initial Capital</Label>
                            <Input placeholder="$10,000" />
                          </div>

                          <div className="space-y-2">
                            <Label>Risk Limit (%)</Label>
                            <Slider defaultValue={[5]} max={20} step={1} />
                          </div>

                          <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500">
                            <Play className="w-4 h-4 mr-2" />
                            Deploy to Live Trading
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-6">
                    <Card className="glass-effect border-blue-500/20">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                            <Share className="w-6 h-6 text-blue-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Share with Community</h3>
                            <p className="text-sm text-muted-foreground">
                              Publish to the strategy marketplace
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Pricing Model</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select pricing" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="free">Free</SelectItem>
                                <SelectItem value="subscription">Monthly Subscription</SelectItem>
                                <SelectItem value="revenue">Revenue Share</SelectItem>
                                <SelectItem value="one-time">One-time Purchase</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label>Monthly Price</Label>
                            <Input placeholder="$49" />
                          </div>

                          <div className="flex items-center space-x-2">
                            <Switch id="verified" />
                            <Label htmlFor="verified">Request verification</Label>
                          </div>

                          <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500">
                            <Share className="w-4 h-4 mr-2" />
                            Publish to Marketplace
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
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

export default StrategyBuilder