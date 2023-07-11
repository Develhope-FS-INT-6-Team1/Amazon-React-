import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Address/Address.css";
import axios from 'axios';

export function Address(): JSX.Element {
    const navigate = useNavigate();
    const [content, setContent] = useState('');

    useEffect(()=>{

        let fetchUsers = async ()=>{
            const value = await localStorage.getItem('userId');
            try{
              const response = await axios.post("http://localhost:3001/api/users/getAddress", {
                'userId': value
              });  
              
              console.log(response.data);
              setContent(response.data);
        
            }
            catch(error){
                console.log(error);
            }
        }

        fetchUsers();


    },[])


    const handleRemoveAddress = async () => {
        try {
          await axios.delete('http://localhost:3001/api/address');
          setContent({});
        } catch (error) {
          console.error('Failed to remove address:', error);
        }
      };
      

    return(
        <div className='addresscontainer'>
        <h6 className='h1-address'><a href="/account">Your Account</a>➮<a href="/address">Your Addresses</a></h6>
        <h2 className='h1-address'>Your Addresses</h2>
        <div className='addAddress'>
        <a href='/InsertAddress' className='addressgrid'><p>➕</p><p>Add Address</p></a>
        </div>
        <div className='oldAddress'>
        <a> Default </a>
        <hr></hr>
        <span>Name:{content.name}</span>
        <span>Address:{content.address}</span>
        <span>City:{content.city}</span>
        <span>Country:{content.country}</span>
        <span>Phone number:{content.phonenumber}</span>
        <hr></hr>
        <button className='remove-address' onClick={handleRemoveAddress}>Remove</button>
        </div>



        </div>
    )
};
