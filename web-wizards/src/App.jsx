import './App.css'
import { light } from './themes/theme'

function App() {
  return (
    <div style={{height:'100vh',background:light.background}}>
      <h1 style={{color:light.color}}>
        Web Wizards
      </h1>
      <button>Toggle Theme</button>
    </div>
  )
}

export default App

