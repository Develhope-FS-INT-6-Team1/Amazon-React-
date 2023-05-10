import '../SignInPage/SignIn.css'
import LogoBlack from '../../Assets/LogoBlack.png'
import ArrowIcon from '../../Assets/arrow-icon.png'

export function SingIn() {
    return (
        <div className="main-page">
            <a href='/' className="logo">
                <img src={LogoBlack} alt="" width="103px" />
            </a>

            <div className="signin-box">
                <div className="box-contents">
                    <h1>Sign in</h1>
                    <div>
                        <label for="email-input">Email or mobile phone number</label>
                        <input type="email" id="email-input" />
                    </div>
                    <button className="continue">Continue</button>
                    <span>
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