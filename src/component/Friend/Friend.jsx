import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, phone, email} = friend;

    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p><Link to={`/friend/${id}`}>Show Details</Link></p>
        </div>
    );
};

export default Friend;