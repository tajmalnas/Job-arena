import { useState } from "react";
import './Register.css'
const Register = () => {
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
  return (
    <div className="flex flex-col justify-center items-center">
        <h1>Register Your Self</h1>
        <div className="d-flex ">
            <div className="box">
                <span className="borderLine"></span>
                <form>
                    <h2>Register</h2>
                    <div className="inputBox">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required="required" />
                        <span>Name</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="email" value={email} required="required" onChange={(e) => setEmail(e.target.value)} />
                        <span>email</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required="required" />
                        <span>Contact Number</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required="required" />
                        <span>set password</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required="required" />
                        <span>confirm password</span>
                        <i></i>
                    </div>
                    <input type="submit" value="Register" onClick={(e) => Register(e)} className='center' />
                </form>

            </div>
            {/* <img src={LoginImage} alt="" className='w-200'/> */}
        </div>
    </div>
  )
}

export default Register