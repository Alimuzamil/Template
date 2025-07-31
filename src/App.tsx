import './App.css'
import ModernSignIn from './pages/auth/ModernSignIn'
import ModernSignUp from './pages/auth/ModernSignUp'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ModernSignIn />} />
      <Route path="/signin" element={<ModernSignIn />} />
      <Route path="/signup" element={<ModernSignUp />} />
    </Routes>
  )
}

export default App
