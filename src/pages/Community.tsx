import { useState } from 'react'
import Navigation from '../components/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Users, 
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Share,
  Bookmark,
  Trophy,
  Star,
  TrendingUp,
  Clock,
  Search,
  Plus,
  Filter,
  Crown,
  Award,
  Target,
  Zap,
  BarChart3,
  Calendar,
  Eye,
  Heart,
  Reply,
  MoreHorizontal
} from 'lucide-react'

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const discussions = [
    {
      id: 1,
      title: 'Best strategies for navigating high volatility markets?',
      content: 'With VIX spiking above 25, what adjustments are you making to your options strategies? I\'ve been having success with shorter DTE iron condors...',
      author: {
        name: 'TradingPro123',
        avatar: '/api/placeholder/40/40',
        level: 'Expert',
        reputation: 2847,
        verified: true
      },
      category: 'Strategy Discussion',
      replies: 24,
      likes: 18,
      views: 342,
      timeAgo: '2 hours ago',
      tags: ['volatility', 'iron-condor', 'risk-management'],
      pinned: true,
      trending: true
    },
    {
      id: 2,
      title: 'Iron Condor adjustment techniques - when to roll vs close',
      content: 'I\'ve been experimenting with different adjustment techniques for iron condors when they get tested. Here\'s what I\'ve learned...',
      author: {
        name: 'OptionsExpert',
        avatar: '/api/placeholder/40/40',
        level: 'Advanced',
        reputation: 1923,
        verified: true
      },
      category: 'Education',
      replies: 18,
      likes: 31,
      views: 567,
      timeAgo: '4 hours ago',
      tags: ['iron-condor', 'adjustments', 'education'],
      pinned: false,
      trending: true
    },
    {
      id: 3,
      title: 'Platform automation tips and tricks',
      content: 'Sharing some advanced automation techniques I\'ve discovered while using the platform\'s agent system...',
      author: {
        name: 'AutoTrader99',
        avatar: '/api/placeholder/40/40',
        level: 'Intermediate',
        reputation: 1456,
        verified: false
      },
      category: 'Platform Help',
      replies: 31,
      likes: 42,
      views: 789,
      timeAgo: '6 hours ago',
      tags: ['automation', 'agents', 'tips'],
      pinned: false,
      trending: false
    },
    {
      id: 4,
      title: 'Weekly market outlook and strategy recommendations',
      content: 'Looking at the upcoming week with earnings from AAPL, MSFT, and GOOGL. Here are my thoughts on positioning...',
      author: {
        name: 'MarketAnalyst',
        avatar: '/api/placeholder/40/40',
        level: 'Expert',
        reputation: 3241,
        verified: true
      },
      category: 'Market Analysis',
      replies: 15,
      likes: 28,
      views: 445,
      timeAgo: '8 hours ago',
      tags: ['market-outlook', 'earnings', 'weekly'],
      pinned: false,
      trending: false
    }
  ]

  const leaderboard = [
    {
      rank: 1,
      name: 'Sarah Chen',
      avatar: '/api/placeholder/40/40',
      reputation: 4567,
      strategies: 12,
      followers: 1247,
      totalReturn: 24.5,
      badge: 'Strategy Master',
      verified: true
    },
    {
      rank: 2,
      name: 'Mike Rodriguez',
      avatar: '/api/placeholder/40/40',
      reputation: 3892,
      strategies: 8,
      followers: 2103,
      totalReturn: 18.7,
      badge: 'Options Expert',
      verified: true
    },
    {
      rank: 3,
      name: 'Alex Johnson',
      avatar: '/api/placeholder/40/40',
      reputation: 3241,
      strategies: 15,
      followers: 834,
      totalReturn: 21.3,
      badge: 'Risk Manager',
      verified: true
    },
    {
      rank: 4,
      name: 'TradingPro123',
      avatar: '/api/placeholder/40/40',
      reputation: 2847,
      strategies: 6,
      followers: 567,
      totalReturn: 16.8,
      badge: 'Community Leader',
      verified: true
    },
    {
      rank: 5,
      name: 'OptionsExpert',
      avatar: '/api/placeholder/40/40',
      reputation: 1923,
      strategies: 9,
      followers: 423,
      totalReturn: 19.2,
      badge: 'Educator',
      verified: false
    }
  ]

  const events = [
    {
      id: 1,
      title: 'Weekly Strategy Review',
      description: 'Community discussion on the week\'s best performing strategies',
      date: '2024-01-26',
      time: '7:00 PM EST',
      attendees: 156,
      host: 'Sarah Chen',
      type: 'Discussion',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Options Greeks Workshop',
      description: 'Interactive workshop on understanding and using options Greeks',
      date: '2024-01-28',
      time: '2:00 PM EST',
      attendees: 89,
      host: 'Mike Rodriguez',
      type: 'Workshop',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Market Outlook Discussion',
      description: 'Monthly discussion on market trends and opportunities',
      date: '2024-01-30',
      time: '6:00 PM EST',
      attendees: 234,
      host: 'Alex Johnson',
      type: 'Discussion',
      status: 'upcoming'
    }
  ]

  const achievements = [
    {
      id: 1,
      title: 'First Post',
      description: 'Made your first community post',
      icon: MessageCircle,
      rarity: 'Common',
      earned: true
    },
    {
      id: 2,
      title: 'Helpful Member',
      description: 'Received 50+ likes on your posts',
      icon: ThumbsUp,
      rarity: 'Uncommon',
      earned: true
    },
    {
      id: 3,
      title: 'Strategy Sharer',
      description: 'Shared 5 successful strategies',
      icon: Target,
      rarity: 'Rare',
      earned: false
    },
    {
      id: 4,
      title: 'Community Leader',
      description: 'Top 10 in monthly leaderboard',
      icon: Crown,
      rarity: 'Epic',
      earned: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Categories', count: 156 },
    { id: 'strategy', name: 'Strategy Discussion', count: 45 },
    { id: 'education', name: 'Education', count: 32 },
    { id: 'platform', name: 'Platform Help', count: 28 },
    { id: 'market', name: 'Market Analysis', count: 24 },
    { id: 'general', name: 'General', count: 27 }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'text-green-500'
      case 'Intermediate':
        return 'text-yellow-500'
      case 'Advanced':
        return 'text-orange-500'
      case 'Expert':
        return 'text-red-500'
      default:
        return 'text-muted-foreground'
    }
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common':
        return 'border-gray-500'
      case 'Uncommon':
        return 'border-green-500'
      case 'Rare':
        return 'border-blue-500'
      case 'Epic':
        return 'border-purple-500'
      case 'Legendary':
        return 'border-yellow-500'
      default:
        return 'border-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Community</h1>
              <p className="text-muted-foreground">
                Connect with other traders and share strategies
              </p>
            </div>
            <Button className="bg-primary-500 hover:bg-primary-600">
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
          </TabsList>

          <TabsContent value="discussions" className="space-y-6">
            {/* Search and Filters */}
            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search discussions..."
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
                          {category.name} ({category.count})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select defaultValue="recent">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Recent</SelectItem>
                      <SelectItem value="popular">Popular</SelectItem>
                      <SelectItem value="trending">Trending</SelectItem>
                      <SelectItem value="unanswered">Unanswered</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Discussions List */}
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="glass-effect hover:scale-[1.02] transition-transform duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={discussion.author.avatar} />
                        <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            {discussion.pinned && (
                              <Badge className="bg-yellow-500">
                                <Crown className="w-3 h-3 mr-1" />
                                Pinned
                              </Badge>
                            )}
                            {discussion.trending && (
                              <Badge className="bg-orange-500">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                            <Badge variant="outline">{discussion.category}</Badge>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>

                        <h3 className="text-lg font-semibold mb-2 hover:text-primary-500 cursor-pointer">
                          {discussion.title}
                        </h3>

                        <p className="text-muted-foreground mb-3 line-clamp-2">
                          {discussion.content}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {discussion.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">{discussion.author.name}</span>
                              {discussion.author.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  <Star className="w-3 h-3 mr-1" />
                                  Verified
                                </Badge>
                              )}
                              <span className={`text-xs ${getLevelColor(discussion.author.level)}`}>
                                {discussion.author.level}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {discussion.timeAgo}
                            </span>
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{discussion.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{discussion.replies}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{discussion.likes}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-muted">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="w-4 h-4 mr-2" />
                            Like
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Reply className="w-4 h-4 mr-2" />
                            Reply
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Bookmark className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                  Community Leaderboard
                </CardTitle>
                <CardDescription>
                  Top contributors ranked by reputation and community impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((member) => (
                    <div key={member.rank} className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                      <div className="flex items-center space-x-4">
                        <div className={`text-2xl font-bold ${
                          member.rank === 1 ? 'text-yellow-500' :
                          member.rank === 2 ? 'text-gray-400' :
                          member.rank === 3 ? 'text-orange-600' : 'text-muted-foreground'
                        }`}>
                          #{member.rank}
                        </div>
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{member.name}</h3>
                            {member.verified && (
                              <Badge variant="secondary" className="text-xs">
                                <Star className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{member.badge}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-secondary-500">{member.reputation}</div>
                          <div className="text-muted-foreground">Reputation</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold">{member.strategies}</div>
                          <div className="text-muted-foreground">Strategies</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold">{member.followers}</div>
                          <div className="text-muted-foreground">Followers</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-secondary-500">+{member.totalReturn}%</div>
                          <div className="text-muted-foreground">Return</div>
                        </div>
                        <Button variant="outline" size="sm">
                          Follow
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Upcoming Community Events
                </CardTitle>
                <CardDescription>
                  Join live discussions, workshops, and educational sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <Card key={event.id} className="glass-effect">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="text-center">
                              <div className="text-lg font-bold">
                                {new Date(event.date).getDate()}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold">{event.title}</h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {event.description}
                              </p>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span>Hosted by {event.host}</span>
                                <span>{event.time}</span>
                                <Badge variant="outline">{event.type}</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground mb-2">
                              {event.attendees} attending
                            </div>
                            <Button className="bg-primary-500 hover:bg-primary-600">
                              Join Event
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

          <TabsContent value="achievements" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Community Achievements
                </CardTitle>
                <CardDescription>
                  Unlock badges and recognition for your community contributions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className={`p-6 rounded-lg border-2 ${
                        achievement.earned 
                          ? 'border-secondary-500 bg-secondary-500/10' 
                          : `${getRarityColor(achievement.rarity)} bg-muted/20`
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${
                          achievement.earned ? 'bg-secondary-500' : 'bg-muted'
                        }`}>
                          <achievement.icon className={`w-6 h-6 ${
                            achievement.earned ? 'text-white' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{achievement.title}</h3>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${getRarityColor(achievement.rarity)}`}
                            >
                              {achievement.rarity}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                          {achievement.earned && (
                            <div className="flex items-center text-sm text-secondary-500 mt-2">
                              <Trophy className="w-4 h-4 mr-1" />
                              Earned
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="groups" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle>Study Groups</CardTitle>
                  <CardDescription>
                    Join focused learning groups with other traders
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/20">
                    <h4 className="font-medium mb-2">Beginner Options Study Group</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Weekly meetups for new options traders to learn fundamentals
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>47 members</span>
                        <span>Weekly meetings</span>
                      </div>
                      <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                        Join Group
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-muted/20">
                    <h4 className="font-medium mb-2">Advanced Strategy Workshop</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Deep dive into complex options strategies and risk management
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>23 members</span>
                        <span>Bi-weekly meetings</span>
                      </div>
                      <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                        Join Group
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/20">
                    <h4 className="font-medium mb-2">Automation Enthusiasts</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Share and discuss automated trading strategies and bots
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>31 members</span>
                        <span>Monthly meetings</span>
                      </div>
                      <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                        Join Group
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle>Regional Groups</CardTitle>
                  <CardDescription>
                    Connect with traders in your area
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/20">
                    <h4 className="font-medium mb-2">New York Traders</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      NYC-based traders sharing local market insights
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>89 members</span>
                        <span>Monthly meetups</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Join Group
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/20">
                    <h4 className="font-medium mb-2">West Coast Options</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      California traders focused on tech stock options
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>67 members</span>
                        <span>Bi-weekly meetups</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Join Group
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/20">
                    <h4 className="font-medium mb-2">European Traders</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      European market hours trading discussions
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>42 members</span>
                        <span>Weekly discussions</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Join Group
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default Community