import { useState } from 'react';
import './Login.css'

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="box">
                <span className="borderLine"></span>
                <form>
                    <h2> Log In</h2>
                    <div className="inputBox">
                        <input type="email" value={email} required="required" onChange={(e) => setEmail(e.target.value)} />
                        <span>email</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required="required" />
                        <span>password</span>
                        <i></i>
                    </div>
                    <input type="submit" value="Log In" onClick={(e) => Login(e)}  />
                </form>

            </div>
        </div>

    );
};

export default Login;