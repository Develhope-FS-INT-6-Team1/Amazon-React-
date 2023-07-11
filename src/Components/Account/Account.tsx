import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Account/Account.css";

export function Account(): JSX.Element {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');



return(
    <div className='container'>
    <h1 className='h1-account'>Your Account</h1>
    <div className='allBoxes'>
    <a href='/orders' className='grid'><img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/order._CB660668735_.png'></img><b>Your Orders</b><p>Track, return, cancel an order, download invoice or buy again</p></a>
    <a href='/account-details' className='grid'><img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/security._CB659600413_.png'></img><b>Login&Security</b><p>Edit account, name, and password</p></a>
    <button className='grid'><img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime._CB433666831_.png'></img><b>Prime</b><p>Manage your memebership, view benefits, and payment settings</p></button>
    <a href='/address' className='grid'><img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_address_book._CB613924977_.png'></img><b>Your addresses</b><p>Edit, remove or set default address</p></a>
    <button className='grid'><img src='https://m.media-amazon.com/images/G/01/x-locale/cs/contact-us/GiftCard_icon_01._CB660349069_.png'></img><b>Gift cards</b><p>View balance or redeem a card, and purchase a new Gift Card</p></button>
    <button className='grid'><img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/payment._CB660668735_.png'></img><b>Your Payments</b><p>View all transactions, manage payment methods and settings</p></button>
    <button className='grid'><img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/account._CB660668669_.png'></img><b>Your Profiles</b><p>Manage, add, or remove user profiles for personalized expreiences</p></button>
    <button className='grid'><img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/digital_devices._CB660668735_.png'></img><b>Digital Services and Device Support</b><p>Troubleshoot device issues, manage or cancel digital subscriptions</p></button>
    <button className='grid'><img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/10_archived_orders._CB654640573_.png'></img><b>Archived orders</b><p>View and manage your archived orders</p></button>
    <button className='grid'><img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/11_lists._CB654640573_.png'></img><b>Your Lists</b><p>View, modify, and share your lists, or create new ones</p></button>
    <button className='grid'><img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/contact_us._CB659962323_.png'></img><b>Customer Service</b><p>Browse self service options, help articles or contact us</p></button>
    <button className='grid'><img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/9_messages._CB654640573_.jpg'></img><b>Your Messages</b><p>View or respond to messages from Amazon, Seller and Buyers</p></button>
    </div>
    </div>
)
};
