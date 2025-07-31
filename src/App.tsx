import './App.css'
import LandingPage from './pages/LandingPage'
import ModernSignIn from './pages/auth/ModernSignIn'
import ModernSignUp from './pages/auth/ModernSignUp'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from '@/components/ui/Toaster'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<ModernSignIn />} />
        <Route path="/signup" element={<ModernSignUp />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
