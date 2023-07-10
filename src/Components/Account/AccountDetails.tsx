import React, { useState } from 'react';
import ArrowIcon from '../../Assets/arrow-icon.png';
import '../Account/AccountDetails.css'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


export default function AccountDetails() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const username = await localStorage.getItem('username');

      axios.put('http://localhost:3001/api/users/update', {
          username,
          password,
        })
        .then((response) => {
          console.log('User details updated successfully');
          alert('User details updated successfully');
          navigate('/');

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