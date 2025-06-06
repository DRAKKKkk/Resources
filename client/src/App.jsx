import SignUp from './pages/signUp'
import './index.css'
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import ResourceDetail from './pages/ResourceDetail'
import ResourcesList from './pages/ResourcesList'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {


  return (
    <div>
     <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigate to="/signup" replace />} />
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/home' element ={<Home />}></Route>
          <Route path="/resource/:name" element={<ResourceDetail />} />
          <Route path="/resources" element={<ResourcesList />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
