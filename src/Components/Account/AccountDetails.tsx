import React, { useState } from 'react';
import ArrowIcon from '../../Assets/arrow-icon.png';
import '../Account/AccountDetails.css'

export default function AccountDetails() {



    return (
        <div className="main-page">

            <div className="signin-box">
                <div className="box-contents">
                    <h1>Edit your account</h1>
                    <div className='label-input'>
                        <label htmlFor='username'>Edit username</label>
                        <input type="text" id="username-input"  />
                    </div>
                    <div className='label-input'>
                        <label htmlFor='password'>Edit password</label>
                        <input type="password" id="password-input"  />
                    </div>
                    <button className="confirm" >
                        <a>Confirm</a>
                    </button>
    
                    <div className="help">
                        <img src={ArrowIcon} alt="" width="7px" height="7px" />
                        <a href="#">Need help?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}