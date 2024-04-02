import React from 'react';
import logo from '../assets/bx-logo.png';
import './Body.css';
import PostForm from './PostForm/PostForm';
import Posts from './Posts/Posts';


function Body() {
    return (
        <div className="Body">
            <div className="BodyContent">
                <PostForm></PostForm>
                <Posts></Posts>
            </div>
        </div>
    );
}

export default Body;
