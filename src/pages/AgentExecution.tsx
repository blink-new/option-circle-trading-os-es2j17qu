import { useState } from 'react'
import Navigation from '../components/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Zap, 
  Play, 
  Pause, 
  Square,
  Settings,
  Activity,
  Brain,
  Target,
  Shield,
  Clock,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Plus,
  Eye,
  BarChart3,
  Cpu,
  Wifi,
  WifiOff
} from 'lucide-react'

const AgentExecution = () => {
  const [activeTab, setActiveTab] = useState('agents')

  const agents = [
    {
      id: 1,
      name: 'Iron Condor Bot',
      strategy: 'Weekly Iron Condor',
      status: 'active',
      uptime: '99.8%',
      lastAction: '2 minutes ago',
      performance: {
        totalTrades: 156,
        winRate: 73.2,
        avgReturn: 2.1,
        totalPnL: 4250
      },
      settings: {
        maxPositions: 5,
        riskPerTrade: 2,
        autoAdjust: true,
        paperTrading: false
      },
      nextAction: 'Scanning for opportunities',
      health: 95
    },
    {
      id: 2,
      name: 'Momentum Hunter',
      strategy: 'Breakout Scanner',
      status: 'paused',
      uptime: '97.2%',
      lastAction: '1 hour ago',
      performance: {
        totalTrades: 89,
        winRate: 68.5,
        avgReturn: 3.4,
        totalPnL: 2890
      },
      settings: {
        maxPositions: 3,
        riskPerTrade: 3,
        autoAdjust: false,
        paperTrading: false
      },
      nextAction: 'Paused by user',
      health: 88
    },
    {
      id: 3,
      name: 'Volatility Crusher',
      strategy: 'IV Crush Strategy',
      status: 'active',
      uptime: '98.5%',
      lastAction: '15 minutes ago',
      performance: {
        totalTrades: 67,
        winRate: 71.8,
        avgReturn: 2.8,
        totalPnL: 1670
      },
      settings: {
        maxPositions: 4,
        riskPerTrade: 2.5,
        autoAdjust: true,
        paperTrading: true
      },
      nextAction: 'Waiting for earnings events',
      health: 92
    },
    {
      id: 4,
      name: 'Dividend Shield',
      strategy: 'Covered Call Generator',
      status: 'error',
      uptime: '94.1%',
      lastAction: '3 hours ago',
      performance: {
        totalTrades: 234,
        winRate: 78.9,
        avgReturn: 1.8,
        totalPnL: 3420
      },
      settings: {
        maxPositions: 8,
        riskPerTrade: 1.5,
        autoAdjust: true,
        paperTrading: false
      },
      nextAction: 'Connection error - retrying',
      health: 45
    }
  ]

  const recentExecutions = [
    {
      id: 1,
      agent: 'Iron Condor Bot',
      action: 'Opened Position',
      symbol: 'SPY',
      details: 'Iron Condor 480/485/495/500',
      time: '2 minutes ago',
      result: 'Success',
      pnl: null
    },
    {
      id: 2,
      agent: 'Volatility Crusher',
      action: 'Closed Position',
      symbol: 'AAPL',
      details: 'Short Straddle 185/185',
      time: '15 minutes ago',
      result: 'Success',
      pnl: 125
    },
    {
      id: 3,
      agent: 'Momentum Hunter',
      action: 'Adjusted Position',
      symbol: 'TSLA',
      details: 'Rolled call option',
      time: '1 hour ago',
      result: 'Success',
      pnl: -45
    },
    {
      id: 4,
      agent: 'Dividend Shield',
      action: 'Failed to Execute',
      symbol: 'MSFT',
      details: 'Covered call order',
      time: '3 hours ago',
      result: 'Error',
      pnl: null
    }
  ]

  const systemMetrics = {
    totalAgents: 4,
    activeAgents: 2,
    totalExecutions: 1456,
    successRate: 97.8,
    avgLatency: 45,
    systemHealth: 94
  }

  const marketConditions = {
    vix: 18.5,
    spyIV: 22.3,
    marketTrend: 'Bullish',
    volatilityRegime: 'Low',
    recommendedStrategies: ['Iron Condor', 'Covered Calls', 'Cash Secured Puts']
  }

  const toggleAgent = (agentId: number) => {
    // Toggle agent status logic would go here
    console.log(`Toggling agent ${agentId}`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-secondary-500'
      case 'paused':
        return 'bg-yellow-500'
      case 'error':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getHealthColor = (health: number) => {
    if (health >= 90) return 'text-secondary-500'
    if (health >= 70) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Agent Execution Center</h1>
              <p className="text-muted-foreground">
                Deploy and monitor automated trading agents
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                System Settings
              </Button>
              <Button className="bg-primary-500 hover:bg-primary-600">
                <Plus className="w-4 h-4 mr-2" />
                Deploy Agent
              </Button>
            </div>
          </div>
        </div>

        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {systemMetrics.activeAgents}/{systemMetrics.totalAgents}
              </div>
              <p className="text-xs text-muted-foreground">
                {systemMetrics.activeAgents} running
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary-500">
                {systemMetrics.successRate}%
              </div>
              <p className="text-xs text-muted-foreground">
                {systemMetrics.totalExecutions} total executions
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Latency</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{systemMetrics.avgLatency}ms</div>
              <p className="text-xs text-muted-foreground">
                Execution speed
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getHealthColor(systemMetrics.systemHealth)}`}>
                {systemMetrics.systemHealth}%
              </div>
              <p className="text-xs text-muted-foreground">
                All systems operational
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="agents">Active Agents</TabsTrigger>
            <TabsTrigger value="executions">Recent Executions</TabsTrigger>
            <TabsTrigger value="market">Market Conditions</TabsTrigger>
            <TabsTrigger value="logs">System Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {agents.map((agent) => (
                <Card key={agent.id} className="glass-effect">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(agent.status)}`} />
                        <div>
                          <CardTitle className="text-lg">{agent.name}</CardTitle>
                          <CardDescription>{agent.strategy}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="capitalize">
                          {agent.status}
                        </Badge>
                        <Switch
                          checked={agent.status === 'active'}
                          onCheckedChange={() => toggleAgent(agent.id)}
                          disabled={agent.status === 'error'}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 rounded-lg bg-muted/20">
                        <div className="text-lg font-bold text-secondary-500">
                          {agent.performance.winRate}%
                        </div>
                        <div className="text-xs text-muted-foreground">Win Rate</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-muted/20">
                        <div className="text-lg font-bold">
                          ${agent.performance.totalPnL}
                        </div>
                        <div className="text-xs text-muted-foreground">Total P&L</div>
                      </div>
                    </div>

                    {/* Health and Status */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Agent Health</span>
                        <span className={`text-sm font-semibold ${getHealthColor(agent.health)}`}>
                          {agent.health}%
                        </span>
                      </div>
                      <Progress value={agent.health} className="h-2" />
                    </div>

                    {/* Current Status */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Status:</span>
                      <span>{agent.nextAction}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Last Action:</span>
                      <span>{agent.lastAction}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Uptime:</span>
                      <span>{agent.uptime}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Settings className="w-4 h-4 mr-2" />
                        Configure
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="executions" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Recent Executions</CardTitle>
                <CardDescription>
                  Latest trading actions performed by your agents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentExecutions.map((execution) => (
                    <div key={execution.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                      <div className="flex items-center space-x-4">
                        <div className={`w-2 h-2 rounded-full ${
                          execution.result === 'Success' ? 'bg-secondary-500' : 'bg-red-500'
                        }`} />
                        <div>
                          <div className="font-medium text-sm">
                            {execution.agent} - {execution.action}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {execution.symbol}: {execution.details}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-3">
                          {execution.pnl && (
                            <span className={`font-semibold text-sm ${
                              execution.pnl >= 0 ? 'text-secondary-500' : 'text-red-500'
                            }`}>
                              {execution.pnl >= 0 ? '+' : ''}${execution.pnl}
                            </span>
                          )}
                          <Badge 
                            variant={execution.result === 'Success' ? 'default' : 'destructive'}
                            className={execution.result === 'Success' ? 'bg-secondary-500' : ''}
                          >
                            {execution.result === 'Success' ? (
                              <CheckCircle className="w-3 h-3 mr-1" />
                            ) : (
                              <AlertTriangle className="w-3 h-3 mr-1" />
                            )}
                            {execution.result}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {execution.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="market" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Market Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-muted/20">
                      <div className="text-2xl font-bold">{marketConditions.vix}</div>
                      <div className="text-sm text-muted-foreground">VIX</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/20">
                      <div className="text-2xl font-bold">{marketConditions.spyIV}%</div>
                      <div className="text-sm text-muted-foreground">SPY IV</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Market Trend:</span>
                      <Badge className="bg-secondary-500">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {marketConditions.marketTrend}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Volatility Regime:</span>
                      <Badge variant="outline">{marketConditions.volatilityRegime}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    AI Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground mb-4">
                      Based on current market conditions, these strategies are recommended:
                    </p>
                    {marketConditions.recommendedStrategies.map((strategy, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                        <span className="text-sm font-medium">{strategy}</span>
                        <Badge variant="outline" className="text-xs">
                          Recommended
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="logs" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center">
                    <Cpu className="w-5 h-5 mr-2" />
                    System Logs
                  </CardTitle>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Logs</SelectItem>
                      <SelectItem value="errors">Errors Only</SelectItem>
                      <SelectItem value="warnings">Warnings</SelectItem>
                      <SelectItem value="info">Info</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-mono text-sm bg-black/20 p-4 rounded-lg max-h-96 overflow-y-auto">
                  <div className="text-secondary-500">[2024-01-15 14:30:25] INFO: Iron Condor Bot - Position opened successfully</div>
                  <div className="text-blue-400">[2024-01-15 14:28:12] DEBUG: Market scanner detected opportunity in SPY</div>
                  <div className="text-secondary-500">[2024-01-15 14:25:45] INFO: Volatility Crusher - Monitoring earnings calendar</div>
                  <div className="text-yellow-400">[2024-01-15 14:20:33] WARN: Momentum Hunter - High volatility detected, pausing execution</div>
                  <div className="text-red-400">[2024-01-15 14:15:22] ERROR: Dividend Shield - Connection timeout to broker API</div>
                  <div className="text-blue-400">[2024-01-15 14:10:15] DEBUG: System health check completed - All agents operational</div>
                  <div className="text-secondary-500">[2024-01-15 14:05:08] INFO: Risk management system - Portfolio within limits</div>
                  <div className="text-blue-400">[2024-01-15 14:00:01] DEBUG: Market data feed connected successfully</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default AgentExecution