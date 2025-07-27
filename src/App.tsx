import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { blink } from './blink/client'
import LandingPage from './pages/LandingPage'
import OnboardingQuiz from './pages/OnboardingQuiz'
import Dashboard from './pages/Dashboard'
import StrategyBuilder from './pages/StrategyBuilder'
import StrategyMarketplace from './pages/StrategyMarketplace'
import PortfolioManagement from './pages/PortfolioManagement'
import AgentExecution from './pages/AgentExecution'
import Analytics from './pages/Analytics'
import Education from './pages/Education'
import Community from './pages/Community'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
      
      // Check if user has completed onboarding
      if (state.user) {
        const onboardingStatus = localStorage.getItem(`onboarding_${state.user.id}`)
        setHasCompletedOnboarding(onboardingStatus === 'completed')
      }
    })
    return unsubscribe
  }, [])

  if (loading) {
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
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          {/* Protected routes */}
          {user ? (
            <>
              <Route 
                path="/onboarding" 
                element={
                  hasCompletedOnboarding ? 
                    <Navigate to="/dashboard" replace /> : 
                    <OnboardingQuiz onComplete={() => setHasCompletedOnboarding(true)} />
                } 
              />
              <Route 
                path="/dashboard" 
                element={<Dashboard />} 
              />
              <Route path="/strategy-builder" element={<StrategyBuilder />} />
              <Route path="/marketplace" element={<StrategyMarketplace />} />
              <Route path="/portfolio" element={<PortfolioManagement />} />
              <Route path="/agents" element={<AgentExecution />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/education" element={<Education />} />
              <Route path="/community" element={<Community />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </div>
    </Router>
  )
}

export default App