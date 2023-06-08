import React from 'react';
import '../SignUp/SignUp.css';
import LogoBlack from '../../Assets/LogoBlack.png';
import AlertSing from '../../Assets/alertSing.png';

export function SignUp() {
  return (
    <div className="signup-main">
      <a href="/" className="logo">
        <img src={LogoBlack} alt="" width="103px" />
      </a>

      <div className="signup-box">
        <div className="box-contents">
          <h1>Create account</h1>
          <div>
            <label htmlFor="name-input">Your name</label>
            <input id="name-input" className="email-input" placeholder="First and last name" />
          </div>
          <div>
            <label htmlFor="email-input">Mobile number or email</label>
            <input id="email-input" className="email-input" />
          </div>
          <div>
            <label htmlFor="password-input">Password</label>
            <input id="password-input" className="email-input" placeholder="At least 6 characters" />
            <p>
              <img src={AlertSing} height="16px" alt="" /> Passwords must be at least 6 characters.
            </p>
          </div>
          <div>
            <label htmlFor="reenter-input">Re-enter password</label>
            <input id="reenter-input" className="email-input" />
          </div>
          <br />
          <button className="continue">Continue</button>
          <br />
          <span>
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
