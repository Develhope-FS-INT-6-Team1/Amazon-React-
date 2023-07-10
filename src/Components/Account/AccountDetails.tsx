import React, { useState } from 'react';
import ArrowIcon from '../../Assets/arrow-icon.png';
import '../Account/AccountDetails.css'
import axios from 'axios';

export default function AccountDetails() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      axios.put('/api/users/update', {
          username,
          password,
        })
        .then((response) => {
          console.log('User details updated successfully');
        })
        .catch((error) => {
          console.error('Error occurred while updating user details:', error);
        });
    };


    return (
        <div className="main-page">

            <div className="signin-box">
                <div className="box-contents">
                    <h1>Edit your account</h1>
                    <form onSubmit={handleFormSubmit}>
                        <div className='label-input'>
                            <label htmlFor='username'>Edit username</label>
                            <input
                                type="text"
                                id="username-input"
                                value={username}
                                onChange={handleUsernameChange}
                            />                        </div>
                        <div className='label-input'>
                            <label htmlFor='password'>Edit password</label>
                            <input
                                type="password"
                                id="password-input"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <button className="confirm" >
                            <a>Confirm</a>
                        </button>
                    </form>
                    <div className="help">
                        <img src={ArrowIcon} alt="" width="7px" height="7px" />
                        <a href="#">Need help?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}