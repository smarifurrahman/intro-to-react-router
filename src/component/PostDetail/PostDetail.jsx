import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () => {
    const post = useLoaderData();
    const { id, title, body } = post;

    return (
        <div>
            <h2>All about this post</h2>
            <div className='postDetail'>
                <h3>Id: {id}</h3>
                <p>{title}</p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default PostDetail;