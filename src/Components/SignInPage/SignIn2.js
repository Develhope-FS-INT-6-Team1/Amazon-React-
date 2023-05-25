import '../SignInPage/SignIn.css'
import LogoBlack from '../../Assets/LogoBlack.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import usersData from '../../Users.json';


export function SignIn2() {
    const navigate = useNavigate();
    const location = useLocation();
    const { username } = location.state || '';
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = usersData.find((user) => user.userName === username && user.password === password);

        if (user) {
            console.log('Login successful');
            localStorage.setItem('userId', user.userID);
            navigate('/', { state: { username: user.userName, preferedLanguage: user.preferedLanguage, preferedCurrency: user.preferedCurrency } });
        } 
        else {
            console.log('Invalid username or password');
        }
    };

    return (
        <div className="main-page">
            <a href='/' className="logo">
                <img src={LogoBlack} alt="" width="103px" />
            </a>

            <div className="signin-box">
                <div className="box-contents">
                    <h1>Sign in</h1>
                    <div className='keep-me'>
                        <p>{username}</p>
                        <a href="/signin">Change</a>
                    </div>
                    <div className='password-input'>
                        <div className='forgot-password'>
                            <label htmlFor="password-input">Password</label>
                            <a href="#">Forgot your password?</a>
                        </div>
                        <input type="password" id="password-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="continue" onClick={handleLogin}>Sign In</button>
                    <div className='keep-me'>
                        <input type='checkbox'/>
                        Keep me signed in.
                        <a href="#">Details</a>
                    </div>
                </div>
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