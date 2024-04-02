import React, { useState, ChangeEvent, useRef } from 'react';
import logo from '../../assets/bx-logo.png';
import image from '../../assets/image.png';
import image2x from '../../assets/image@2x.png';
import image3x from '../../assets/image@3x.png';
import trash from '../../assets/trash.png';
import trash2x from '../../assets/trash@2x.png';
import trash3x from '../../assets/trash@3x.png';
import './Posts.css';
import { Form, Button } from 'react-bootstrap';

interface FormData {
    name: string;
    message: string;
    image: string | null;
}

function Posts() {
    

    return (
        <div className="Body">

            <span className="FeedTitle Text-Style-3">Feed</span>
           
        </div>
    );
}

export default Posts;
