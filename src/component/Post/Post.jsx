import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    const { id, title, body } = post;

    return (
        <div className='post'>
            <h3>Id: {id}</h3>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;