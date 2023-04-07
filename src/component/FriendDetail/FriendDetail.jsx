import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetail.css';

const FriendDetail = () => {
    const friend = useLoaderData();
    const {id, name, email, phone, website, company} = friend;

    return (
        <div>
            <h2>Everything about this person is here:</h2>
            <div className='friendDetail'>
                <p>Id: {id}</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <p>Company: {company.name}</p>
            </div>
        </div>
    );
};

export default FriendDetail;