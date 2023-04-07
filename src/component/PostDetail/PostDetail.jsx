import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>All about this post</h2>
            <div className='postDetail'>
                <h3>Id: {id}</h3>
                <p>{title}</p>
                <p>{body}</p>
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
};

export default PostDetail;