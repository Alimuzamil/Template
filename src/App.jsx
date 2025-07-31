import './App.css'
import SignUp from './Signup'
import SignIn from './auth/SignIn'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    
  )
}

export default App
