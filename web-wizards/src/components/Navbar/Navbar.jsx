import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    const toggleMenuOpen = () => document.body.classList.toggle("open");
    const navigate = useNavigate();

  return (
    <div>
        <nav className="navbar">
        <div className="navbar-overlay" onClick={toggleMenuOpen}></div>
  
        <button type="button" className="navbar-burger" onClick={toggleMenuOpen()}>
            <i className="fa-solid fa-bars"></i>
        </button>
        <h1 className="navbar-title">Job-arena</h1>
        <nav className="navbar-menu">
      
          <button type="button" onClick={()=>navigate('/jobs')}>Job</button>
          <button type="button" onClick={()=>navigate('/jobpost')}>Company</button>
          <button type="button">Services </button>
            
           <button  className="login-button"   type="button" onClick={()=>navigate('/login')}>Login</button>
          <button  className="login-button"  type="button" onClick={()=>navigate('/register')}>Register</button>  
        </nav>
      </nav>      
    </div>
  )
}

export default Navbar