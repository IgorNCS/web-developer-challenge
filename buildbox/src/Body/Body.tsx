// Body.tsx
import React, { useState } from 'react';
import logo from '../assets/bx-logo.png';
import './Body.css';
import PostForm from './PostForm/PostForm';
import Posts from './Posts/Posts';

interface Post {
    image: string;
    image2x: string;
    image3x: string;
    message: string;
    author: string;
}

function Body() {
    const [posts, setPosts] = useState<Post[]>([]);

    const handleAddPost = (newPost: Post) => {
        setPosts([...posts, newPost]);
    };

    return (
        <div className="Body">
            <div className="BodyContent">
                <PostForm onAddPost={handleAddPost} />
                <Posts posts={posts} />
            </div>
        </div>
    );
}

export default Body;
