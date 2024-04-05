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

    const handleDeletePost = (index: number) => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
    };

    const postsWithDeleteCallback = posts.map((post, index) => ({
        ...post,
        onDelete: () => handleDeletePost(index),
    }));

    return (
        <div className="Body">
            <div className="BodyContent">
                <PostForm onAddPost={handleAddPost} />
                <Posts posts={postsWithDeleteCallback} />
            </div>
        </div>
    );
}

export default Body;