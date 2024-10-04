import {Routes,Route} from 'react-router-dom'

import Signup from './pages/signup/Signup.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'

function App() {


  return (
    <div className='p-4 h-screen flex items-center justify-center' >

      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/signup' element={<Signup/>} />
      </Routes>
      
    
    </div>
  )
}

export default App
