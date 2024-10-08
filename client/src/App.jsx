import {Routes,Route, Navigate} from 'react-router-dom'

import {Toaster} from "react-hot-toast"

import Signup from './pages/signup/Signup.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import { useAuthContext } from './context/AuthContext.jsx'

function App() {
  const {authUser}  = useAuthContext()

  return (
    <div className='p-4 h-screen flex items-center justify-center' >

      <Routes>
        <Route path ='/' element={ authUser ?  <Home/> : <Navigate to ="/login" />} />
        <Route path = '/login' element={ authUser ? <Navigate to ='/' />: <Login/>}/>
        <Route path = '/signup' element={authUser ? <Navigate to ='/' />: <Signup/>} />
      </Routes>
      <Toaster/>
      
    
    </div>
  )
}

export default App
