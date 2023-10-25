import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import JobPost from './components/JobPost/JobPost'
import Jobs from './components/Jobs/Jobs'
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path="/jobpost" element={<JobPost/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
    </Routes>
    </div>
  )
}

export default App