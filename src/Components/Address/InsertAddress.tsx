import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Address/InsertAddress.css";
import axios from "axios";

export function InsertAddress(): JSX.Element {
  const [address, setAddress] = useState({
    name: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const navigate = useNavigate();

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("New address:", address);
    const value = await localStorage.getItem('userId');
    try{
      const response = await axios.post("http://localhost:3001/api/users/addAddress", {
        'userId': value,
        "name":address.name, 
        "country":selectedCountry, 
        "city":address.city, 
        "phoneNumber":address.phone, 
        "address":address.apartment
      });

      navigate('/');


    }
    catch(error){

    }
    

    




    setAddress({
      name: "",
      street: "",
      apartment: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    });







  };

  return (
    <div className="inAddresscontainer">
    <form onSubmit={handleSubmit} className="address-form">
      <h6 className="h1-inAddress">
        <a href="/account">Your Account</a>➮<a href="/address">Your Addresses</a>➮New Addresses
      </h6>
      <h2 className="h1-inAddress">Add a new address</h2>
      <b>Country/Region</b>
      <select
        name="country"
        className="dropdown"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="Albania">Albania</option>
        <option value="United States">United States</option>
        <option value="Italy">Italy</option>
        <option value="Turkey">Turkey</option>
      </select>

      <label>
      Full name (First and Last name)
        <input
          type="text"
          name="name"
          value={address.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
      Phone number
        <input
          type="number"
          name="phone"
          value={address.phone}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Address
        <input
          type="text"
          name="apartment"
          value={address.apartment}
          onChange={handleInputChange}
        />

      </label>
      <div className="CSZ">
      <div className="column">
      <label>
        City
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleInputChange}
        />
      </label>
      </div>
      <div className="column">
      <label>
        State
        <br></br>
        <select name="United States" className="dropdown2">
        <option value="Albania">Albania</option>
        <option value="United States">United States</option>
        <option value="Italy">Italy</option>
        <option value="Turkey">Turkey</option>
      </select>
      </label>
      </div>
      <div className="column">
      <label>
        ZIP Code
        <input
          type="text"
          name="zip"
          value={address.zip}
          onChange={handleInputChange}
        />
      </label>
      </div>
      </div>
        <label className="checkbox">
      <input type="checkbox"/>Make this my default address</label>
      <button type="submit" className="add-address-button">
        Add Address
      </button>
    </form>
    </div>
  );
}
