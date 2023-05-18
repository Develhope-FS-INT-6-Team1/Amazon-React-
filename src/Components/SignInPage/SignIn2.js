import '../SignInPage/SignIn.css'
import LogoBlack from '../../Assets/LogoBlack.png'
import ArrowIcon from '../../Assets/arrow-icon.png'
import { useState } from 'react';
import usersData from '../../Users.json';

export function SignIn2() {

    return (
        <div className="main-page">
            <a href='/' className="logo">
                <img src={LogoBlack} alt="" width="103px" />
            </a>

            <div className="signin-box">
                <div className="box-contents">
                    <h1>Sign in</h1>
                    <div className='keep-me'>
                        <p>/////////////////////</p>
                        <a href="/signin">Change</a>
                    </div>
                    <div className='password-input'>
                        <div className='forgot-password'>
                            <label for="password-input">Password</label>
                            <a href="#">Forgot your password?</a>
                        </div>
                        <input type="password" id="password-input" />
                    </div>
                    <button className="continue">Sign In</button>
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