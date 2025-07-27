import { useState } from 'react'
import Navigation from '../components/Navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  GraduationCap, 
  Play, 
  BookOpen,
  Video,
  FileText,
  Users,
  Star,
  Clock,
  CheckCircle,
  Search,
  Filter,
  TrendingUp,
  Brain,
  Target,
  Shield,
  Lightbulb,
  Award,
  Calendar,
  MessageCircle,
  Download
} from 'lucide-react'

const Education = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeTab, setActiveTab] = useState('courses')

  const courses = [
    {
      id: 1,
      title: 'Options Trading Fundamentals',
      description: 'Master the basics of options trading, from calls and puts to complex strategies',
      instructor: 'Sarah Chen',
      instructorAvatar: '/api/placeholder/40/40',
      duration: '4.5 hours',
      lessons: 12,
      level: 'Beginner',
      rating: 4.8,
      students: 2847,
      price: 'Free',
      category: 'Fundamentals',
      progress: 0,
      topics: ['Call Options', 'Put Options', 'Greeks', 'Basic Strategies'],
      featured: true
    },
    {
      id: 2,
      title: 'Advanced Options Strategies',
      description: 'Learn complex multi-leg strategies like iron condors, butterflies, and straddles',
      instructor: 'Mike Rodriguez',
      instructorAvatar: '/api/placeholder/40/40',
      duration: '6.2 hours',
      lessons: 18,
      level: 'Advanced',
      rating: 4.9,
      students: 1523,
      price: '$49',
      category: 'Strategies',
      progress: 0,
      topics: ['Iron Condor', 'Butterfly Spreads', 'Straddles', 'Risk Management'],
      featured: true
    },
    {
      id: 3,
      title: 'Risk Management Mastery',
      description: 'Essential risk management techniques for consistent profitability',
      instructor: 'Alex Johnson',
      instructorAvatar: '/api/placeholder/40/40',
      duration: '3.8 hours',
      lessons: 10,
      level: 'Intermediate',
      rating: 4.7,
      students: 1892,
      price: '$29',
      category: 'Risk Management',
      progress: 45,
      topics: ['Position Sizing', 'Stop Losses', 'Portfolio Management', 'Psychology'],
      featured: false
    },
    {
      id: 4,
      title: 'Automated Trading Systems',
      description: 'Build and deploy automated trading bots using our platform',
      instructor: 'David Kim',
      instructorAvatar: '/api/placeholder/40/40',
      duration: '5.5 hours',
      lessons: 15,
      level: 'Advanced',
      rating: 4.6,
      students: 967,
      price: '$79',
      category: 'Automation',
      progress: 0,
      topics: ['Strategy Building', 'Backtesting', 'Agent Deployment', 'Monitoring'],
      featured: false
    }
  ]

  const tutorials = [
    {
      id: 1,
      title: 'How to Build Your First Iron Condor Strategy',
      type: 'video',
      duration: '12 min',
      views: 15420,
      category: 'Strategy Building',
      difficulty: 'Beginner',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Setting Up Risk Controls for Your Portfolio',
      type: 'article',
      readTime: '8 min',
      views: 8934,
      category: 'Risk Management',
      difficulty: 'Intermediate',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Understanding Options Greeks in Practice',
      type: 'video',
      duration: '18 min',
      views: 12567,
      category: 'Fundamentals',
      difficulty: 'Intermediate',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'Backtesting Your Trading Strategies',
      type: 'interactive',
      duration: '25 min',
      views: 6789,
      category: 'Analysis',
      difficulty: 'Advanced',
      thumbnail: '/api/placeholder/300/200'
    }
  ]

  const webinars = [
    {
      id: 1,
      title: 'Market Outlook: Navigating High Volatility',
      presenter: 'Sarah Chen',
      date: '2024-01-25',
      time: '2:00 PM EST',
      duration: '60 min',
      attendees: 1247,
      status: 'upcoming',
      description: 'Learn how to adapt your strategies during volatile market conditions'
    },
    {
      id: 2,
      title: 'Building Consistent Income with Options',
      presenter: 'Mike Rodriguez',
      date: '2024-01-18',
      time: '1:00 PM EST',
      duration: '45 min',
      attendees: 892,
      status: 'completed',
      description: 'Strategies for generating steady monthly income through options trading'
    },
    {
      id: 3,
      title: 'AI-Powered Trading: The Future is Here',
      presenter: 'Alex Johnson',
      date: '2024-01-30',
      time: '3:00 PM EST',
      duration: '50 min',
      attendees: 0,
      status: 'upcoming',
      description: 'Discover how AI can enhance your trading performance and decision making'
    }
  ]

  const achievements = [
    {
      id: 1,
      title: 'Options Fundamentals',
      description: 'Completed the options trading basics course',
      icon: GraduationCap,
      earned: true,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Strategy Builder',
      description: 'Built and deployed your first trading strategy',
      icon: Brain,
      earned: true,
      date: '2024-01-20'
    },
    {
      id: 3,
      title: 'Risk Manager',
      description: 'Completed advanced risk management course',
      icon: Shield,
      earned: false,
      date: null
    },
    {
      id: 4,
      title: 'Automation Expert',
      description: 'Successfully deployed 5 automated trading agents',
      icon: Target,
      earned: false,
      date: null
    }
  ]

  const learningPath = {
    currentLevel: 'Intermediate',
    progress: 65,
    nextMilestone: 'Advanced Strategies Certification',
    completedCourses: 3,
    totalCourses: 8,
    estimatedTimeToComplete: '2 weeks'
  }

  const categories = [
    { id: 'all', name: 'All Categories', count: 24 },
    { id: 'fundamentals', name: 'Fundamentals', count: 8 },
    { id: 'strategies', name: 'Strategies', count: 6 },
    { id: 'risk', name: 'Risk Management', count: 4 },
    { id: 'automation', name: 'Automation', count: 3 },
    { id: 'analysis', name: 'Analysis', count: 3 }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500'
      case 'Intermediate':
        return 'bg-yellow-500'
      case 'Advanced':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />
      case 'article':
        return <FileText className="w-4 h-4" />
      case 'interactive':
        return <Brain className="w-4 h-4" />
      default:
        return <BookOpen className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Education Hub</h1>
          <p className="text-muted-foreground">
            Learn options trading strategies and platform features
          </p>
        </div>

        {/* Learning Progress */}
        <Card className="glass-effect mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Your Learning Journey</h3>
                <p className="text-sm text-muted-foreground">
                  Current Level: <Badge className={getLevelColor(learningPath.currentLevel)}>
                    {learningPath.currentLevel}
                  </Badge>
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-secondary-500">
                  {learningPath.progress}%
                </div>
                <div className="text-sm text-muted-foreground">Complete</div>
              </div>
            </div>
            <Progress value={learningPath.progress} className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Completed:</span>
                <span className="ml-2 font-semibold">
                  {learningPath.completedCourses}/{learningPath.totalCourses} courses
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Next Milestone:</span>
                <span className="ml-2 font-semibold">{learningPath.nextMilestone}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Est. Time:</span>
                <span className="ml-2 font-semibold">{learningPath.estimatedTimeToComplete}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            {/* Search and Filters */}
            <Card className="glass-effect">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex space-x-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className={selectedCategory === category.id ? 'bg-primary-500' : ''}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Courses */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Featured Courses</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {courses.filter(c => c.featured).map((course) => (
                  <Card key={course.id} className="glass-effect hover:scale-105 transition-transform duration-200">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={course.instructorAvatar} />
                            <AvatarFallback>{course.instructor[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-secondary-500">{course.price}</div>
                          <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        {course.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold">{course.duration}</div>
                          <div className="text-muted-foreground">Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold">{course.lessons}</div>
                          <div className="text-muted-foreground">Lessons</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold">{course.students}</div>
                          <div className="text-muted-foreground">Students</div>
                        </div>
                      </div>

                      {course.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">Progress</span>
                            <span className="text-sm font-semibold">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            {course.rating}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {course.students}
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          className={course.progress > 0 ? 'bg-secondary-500 hover:bg-secondary-600' : 'bg-primary-500 hover:bg-primary-600'}
                        >
                          {course.progress > 0 ? (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Continue
                            </>
                          ) : (
                            <>
                              <BookOpen className="w-4 h-4 mr-2" />
                              Start Course
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Courses */}
            <div>
              <h2 className="text-xl font-semibold mb-4">All Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="glass-effect hover:scale-105 transition-transform duration-200">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-sm line-clamp-2">{course.title}</h3>
                        <Badge className={getLevelColor(course.level)} variant="secondary">
                          {course.level}
                        </Badge>
                      </div>

                      <div className="flex items-center space-x-2 mb-3">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={course.instructorAvatar} />
                          <AvatarFallback>{course.instructor[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">{course.instructor}</span>
                      </div>

                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {course.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                        <div>
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="ml-1 font-semibold">{course.duration}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Lessons:</span>
                          <span className="ml-1 font-semibold">{course.lessons}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Star className="w-3 h-3 text-yellow-500 mr-1" />
                          {course.rating}
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-secondary-500">{course.price}</div>
                          <Button size="sm" className="mt-1 bg-primary-500 hover:bg-primary-600">
                            Enroll
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial) => (
                <Card key={tutorial.id} className="glass-effect hover:scale-105 transition-transform duration-200">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={tutorial.thumbnail} 
                        alt={tutorial.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-black/70 text-white">
                          {getTypeIcon(tutorial.type)}
                          <span className="ml-1 capitalize">{tutorial.type}</span>
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <Badge variant="secondary">
                          <Clock className="w-3 h-3 mr-1" />
                          {tutorial.duration || tutorial.readTime}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{tutorial.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span>{tutorial.category}</span>
                        <Badge variant="outline" className="text-xs">
                          {tutorial.difficulty}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {tutorial.views.toLocaleString()} views
                        </span>
                        <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                          <Play className="w-4 h-4 mr-2" />
                          Watch
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="webinars" className="space-y-6">
            <div className="space-y-4">
              {webinars.map((webinar) => (
                <Card key={webinar.id} className="glass-effect">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-lg font-bold">
                            {new Date(webinar.date).getDate()}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(webinar.date).toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold">{webinar.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {webinar.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>by {webinar.presenter}</span>
                            <span>{webinar.time}</span>
                            <span>{webinar.duration}</span>
                            {webinar.status === 'completed' && (
                              <span>{webinar.attendees} attended</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}
                          className={webinar.status === 'upcoming' ? 'bg-secondary-500' : ''}
                        >
                          {webinar.status === 'upcoming' ? (
                            <>
                              <Calendar className="w-3 h-3 mr-1" />
                              Upcoming
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Completed
                            </>
                          )}
                        </Badge>
                        <div className="mt-2">
                          <Button 
                            size="sm" 
                            className={webinar.status === 'upcoming' ? 'bg-primary-500 hover:bg-primary-600' : 'bg-secondary-500 hover:bg-secondary-600'}
                          >
                            {webinar.status === 'upcoming' ? 'Register' : 'Watch Recording'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Community Forum
                </CardTitle>
                <CardDescription>
                  Connect with other traders and share knowledge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Popular Discussions</h3>
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg bg-muted/20">
                        <h4 className="font-medium mb-2">Best strategies for high volatility markets?</h4>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>by TradingPro123</span>
                          <div className="flex items-center space-x-2">
                            <MessageCircle className="w-4 h-4" />
                            <span>24 replies</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/20">
                        <h4 className="font-medium mb-2">Iron Condor adjustment techniques</h4>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>by OptionsExpert</span>
                          <div className="flex items-center space-x-2">
                            <MessageCircle className="w-4 h-4" />
                            <span>18 replies</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/20">
                        <h4 className="font-medium mb-2">Platform automation tips and tricks</h4>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>by AutoTrader99</span>
                          <div className="flex items-center space-x-2">
                            <MessageCircle className="w-4 h-4" />
                            <span>31 replies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Study Groups</h3>
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg bg-muted/20">
                        <h4 className="font-medium mb-2">Beginner Options Study Group</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Weekly meetups for new options traders
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">47 members</span>
                          <Button size="sm" variant="outline">Join Group</Button>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/20">
                        <h4 className="font-medium mb-2">Advanced Strategy Workshop</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Deep dive into complex options strategies
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">23 members</span>
                          <Button size="sm" variant="outline">Join Group</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Your Achievements
                </CardTitle>
                <CardDescription>
                  Track your learning progress and unlock badges
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
                          : 'border-muted bg-muted/20'
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
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {achievement.description}
                          </p>
                          {achievement.earned ? (
                            <div className="flex items-center text-sm text-secondary-500">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Earned on {achievement.date}
                            </div>
                          ) : (
                            <div className="text-sm text-muted-foreground">
                              Not yet earned
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
        </Tabs>
      </main>
    </div>
  )
}

export default Education