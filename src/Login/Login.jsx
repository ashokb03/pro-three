import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Login = () => {

    const [action, setAction] = useState('');

    const signupLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

  return (

    <div className='bg'>

        <div className={`box${action}`}>

            <div className='form-box login'>

                <form action="">

                    <h1>Apple</h1>

                    <div className='ip'>
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon'/>
                    </div>

                    <div className='ip'>
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>

                    <div className='fp'>
                        <label><input type="checkbox"/>Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>


                    <Link to='/Landingpage'>
                        <button type='submit'>Login</button>
                    </Link>
                    

                    <div className='su'>

                        <p> Don't have an account? 

                            <a href="#" onClick={signupLink} > Signup </a>

                        </p>
                    </div>

                </form>

            </div>



            <div className='form-box signup'>

                <form action="">

                    <h1>Apple</h1>

                    <div className='ip'>
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon'/>
                    </div>

                    <div className='ip'>
                        <input type="email" placeholder='Email' required />
                        <FaEnvelope className='icon'/>
                    </div>

                    <div className='ip'>
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon'/>
                    </div>

                    <div className='fp'>
                        <label><input type="checkbox"/> I agree </label>
                    </div>

                    <button type='submit'> Signup </button>

                    <div className='su'>

                        <p>Already have an account? 

                            <a href="#" onClick={loginLink} > Login</a>

                        </p>
                    </div>

                </form>

            </div>

        </div>

    </div>

    
  );
}

export default Login;
