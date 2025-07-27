import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Users, 
  Target,
  ArrowRight,
  ArrowLeft,
  CheckCircle
} from 'lucide-react'
import { blink } from '../blink/client'

interface OnboardingQuizProps {
  onComplete: () => void
}

const OnboardingQuiz = ({ onComplete }: OnboardingQuizProps) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [userProfile, setUserProfile] = useState<any>(null)

  const questions = [
    {
      id: 'experience',
      title: 'What\'s your trading experience?',
      description: 'Help us understand your background',
      options: [
        { value: 'beginner', label: 'New to trading', description: 'Just getting started' },
        { value: 'intermediate', label: 'Some experience', description: '1-3 years of trading' },
        { value: 'advanced', label: 'Experienced trader', description: '3+ years, familiar with options' },
        { value: 'professional', label: 'Professional trader', description: 'Trading is my profession' }
      ]
    },
    {
      id: 'goals',
      title: 'What\'s your primary trading goal?',
      description: 'This helps us recommend the right strategies',
      options: [
        { value: 'income', label: 'Generate Income', description: 'Consistent monthly returns' },
        { value: 'growth', label: 'Capital Growth', description: 'Long-term wealth building' },
        { value: 'hedge', label: 'Portfolio Protection', description: 'Risk management and hedging' },
        { value: 'speculation', label: 'Active Speculation', description: 'High-risk, high-reward trades' }
      ]
    },
    {
      id: 'risk_tolerance',
      title: 'What\'s your risk tolerance?',
      description: 'This affects strategy recommendations',
      options: [
        { value: 'conservative', label: 'Conservative', description: 'Preserve capital, low volatility' },
        { value: 'moderate', label: 'Moderate', description: 'Balanced risk and reward' },
        { value: 'aggressive', label: 'Aggressive', description: 'Higher risk for higher returns' },
        { value: 'very_aggressive', label: 'Very Aggressive', description: 'Maximum risk tolerance' }
      ]
    },
    {
      id: 'user_type',
      title: 'How do you want to use Option Circle?',
      description: 'This determines your dashboard layout',
      options: [
        { value: 'builder', label: 'Strategy Builder', description: 'Create and monetize strategies', icon: Brain },
        { value: 'manager', label: 'Portfolio Manager', description: 'Deploy and manage strategies', icon: TrendingUp },
        { value: 'follower', label: 'Strategy Follower', description: 'Use proven strategies', icon: Users },
        { value: 'hybrid', label: 'Hybrid Approach', description: 'Mix of building and following', icon: Target }
      ]
    },
    {
      id: 'capital',
      title: 'What\'s your trading capital range?',
      description: 'Helps with position sizing recommendations',
      options: [
        { value: 'small', label: 'Under $10K', description: 'Starting small' },
        { value: 'medium', label: '$10K - $50K', description: 'Building portfolio' },
        { value: 'large', label: '$50K - $250K', description: 'Substantial capital' },
        { value: 'institutional', label: 'Over $250K', description: 'Institutional level' }
      ]
    }
  ]

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentStep].id]: value
    }))
  }

  const completeOnboarding = async () => {
    try {
      const user = await blink.auth.me()
      
      // Create user profile based on answers
      const profile = {
        userId: user.id,
        experience: answers.experience,
        goals: answers.goals,
        riskTolerance: answers.risk_tolerance,
        userType: answers.user_type,
        capital: answers.capital,
        completedAt: new Date().toISOString()
      }

      // Save profile to database (you'll implement this later)
      // await blink.db.userProfiles.create(profile)

      // Mark onboarding as completed
      localStorage.setItem(`onboarding_${user.id}`, 'completed')
      localStorage.setItem(`user_profile_${user.id}`, JSON.stringify(profile))
      
      setUserProfile(profile)
      onComplete()
    } catch (error) {
      console.error('Failed to complete onboarding:', error)
    }
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      completeOnboarding()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100
  const canProceed = answers[currentQuestion.id]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Option Circle
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Let's personalize your experience</h1>
          <p className="text-muted-foreground">
            Answer a few questions to get the most relevant strategies and features
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentStep + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="glass-effect mb-8">
          <CardHeader>
            <CardTitle className="text-xl">{currentQuestion.title}</CardTitle>
            <CardDescription>{currentQuestion.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[currentQuestion.id] || ''}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {currentQuestion.options.map((option) => (
                <div key={option.value} className="flex items-start space-x-3">
                  <RadioGroupItem 
                    value={option.value} 
                    id={option.value}
                    className="mt-1"
                  />
                  <Label 
                    htmlFor={option.value} 
                    className="flex-1 cursor-pointer"
                  >
                    <div className="flex items-start space-x-3">
                      {option.icon && (
                        <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mt-1">
                          <option.icon className="w-5 h-5 text-primary-500" />
                        </div>
                      )}
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm text-muted-foreground">
                          {option.description}
                        </div>
                      </div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="bg-primary-500 hover:bg-primary-600 text-white flex items-center"
          >
            {currentStep === questions.length - 1 ? (
              <>
                Complete Setup
                <CheckCircle className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index <= currentStep ? 'bg-primary-500' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OnboardingQuiz