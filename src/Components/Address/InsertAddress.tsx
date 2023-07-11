import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Address/InsertAddress.css";

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New address:", address);
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
      <select name="United States" className="dropdown">
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
          name="street"
          value={address.street}
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
