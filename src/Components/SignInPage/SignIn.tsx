import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoBlack from '../../Assets/LogoBlack.png';
import ArrowIcon from '../../Assets/arrow-icon.png';
import usersData from '../../Users.json';

export function SignIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        /*const user = usersData.find((user) => user.userName === username);

        if (user) {
        console.log('Username is correct. Proceed to enter password.');*/
        navigate('/signin2', { state: { username } });
        /*} else {
        console.log('Invalid username');
        }*/
    };


    return (
        <div className="main-page">
            <a href='/' className="logo">
                <img src={LogoBlack} alt="" width="103px" />
            </a>

            <div className="signin-box">
                <div className="box-contents">
                    <h1>Sign in</h1>
                    <div>
                        <label htmlFor='email-input'>Email or mobile phone number</label>
                        <input type="text" id="username-input" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <button className="continue" onClick={handleLogin}>
                        <a href={`/signin2?username=${encodeURIComponent(username)}`}>Continue</a>
                    </button>
                    <span className='text-sign'>
                        By continuing, you agree to Amazon's
                        <a href="#">Conditions of Use</a>
                        and <a href="#">Privacy Notice</a>.
                    </span>
                    <div className="help">
                        <img src={ArrowIcon} alt="" width="7px" height="7px" />
                        <a href="#">Need help?</a>
                    </div>
                </div>
            </div>

            <div className="divider">
                <div className="line"></div>
                <p>New to Amazon?</p>
                <div className="line"></div>
            </div>

            <div>
                <a href="/signup"><button className="create-account">Create your Amazon account</button></a>
            </div>

            <div className="footer">
                <div className="divider2"></div>
                <div className="footer-links">
                    <a href="#">Conditions of Use</a>
                    <a href="#">Privacy Notice </a>
                    <a href="#">Help</a>
                </div>
                <div className="copyright">
                    <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
    )
}