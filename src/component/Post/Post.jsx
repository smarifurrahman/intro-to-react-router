import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <div className='post'>
            <h3>Id: {id}</h3>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>Show Details</Link>
            <button>
                <Link to={`/posts/${id}`}>Show Details Button</Link>
            </button>
            <button onClick={handleNavigation}>With button handler</button>
        </div>
    );
};

export default Post;