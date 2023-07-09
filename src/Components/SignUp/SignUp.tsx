import React, { useState } from 'react';
import '../SignUp/SignUp.css';
import LogoBlack from '../../Assets/LogoBlack.png';
import AlertSing from '../../Assets/alertSing.png';
import { async } from 'q';
import { userInfo } from 'os';

export function SignUp() {

  const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [confirmpassword, setConfirmPassword] = useState('')

  
  const registerUser = async () => {
    const userInfo = {
      username: name,
      password:password
    }
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
  
      if (response.ok) {
        alert('Registration successful')
      } else {
        alert('User not registered')
      }
    } catch (error) {
      // Handle network errors or exceptions
    }
  };
  

  const handleSubmit = () => {
    if (name.trim() === ''  || password.trim()==='') {
      return('Fill all the fields')
    }

    // if (password !== confirmpassword){
    //   return('Passwords do not match')
    // }

    registerUser({name, password})
  }

  return (
    <div className="signup-main">
      <a href="/" className="logo">
        <img src={LogoBlack} alt="" width="103px" />
      </a>

      <div className="signup-box">
        <div className="box-contents">
          <h4 className='header-h4'>Create account</h4>
          <div>
            <label htmlFor="name-input">Your name</label>
            <input 
            id="name-input" 
            className="email-input" 
            placeholder="First and last name"
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email-input">Mobile number or email</label>
            <input
            id="email-input" 
            className="email-input" 
            // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password-input">Password</label>
            <input 
            id="password-input" 
            type='password'
            className="email-input" 
            placeholder="At least 6 characters" 
            onChange={(e) => setPassword(e.target.value) }
            />
            <p>
              <img src={AlertSing} height="16px" alt="" /> Passwords must be at least 6 characters.
            </p>
          </div>
          <div>
            <label htmlFor="reenter-input">Re-enter password</label>
            <input 
            id="reenter-input" 
            className="email-input" 
            type='password'
            // onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <br />
          <button className="continue" onClick={handleSubmit}>Continue</button>
          <br />
          <span className='text-sign'>
            By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
          </span>
          <br />
          <div className="divider3"></div>
          <p>
            Already have an account? <a href="/signin">Sign in</a> <a href="">&#9656;</a>
          </p>
          <p>
            Buying for work? <a href="">Create a free business account</a> <a href="">&#9656;</a>
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="divider2"></div>
        <div className="footer-links">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Help</a>
        </div>
        <div className="copyright">
          <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}
