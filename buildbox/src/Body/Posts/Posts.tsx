import React from 'react';
import deleteImage from '../../assets/delete.png';
import './Posts.css';

interface Post {
    image: string;
    image2x: string;
    image3x: string;
    message: string;
    author: string;
    onDelete: () => void;
}

function Posts({ posts }: { posts: Post[] }) {
    const handleDeleteClick = (index: number) => {
        posts[index].onDelete();
    };

    return (
        <div className="BodyPosts">
            <div className="FeedBody">
                <span className="FeedTitle Text-Style-3 mb-3">Feed</span>
                {posts.map((post, index) => (
                    <div className="PostCardFeed" key={index}>
                        <img
                            src={deleteImage}
                            alt="Delete arquivo"
                            className="imageFeedDelete"
                            onClick={() => handleDeleteClick(index)}
                        />
                        <img
                            src={post.image}
                            alt="Upload de arquivo"
                            className="imageFeed"
                        />
                        <div className='FeedMessageBox'>
                            <div className='FeedMessageText'>{post.message}</div>
                            <div>
                                <p className='EnviadoPorFeed'>Enviado por</p>
                                <p className='AutorPostFeed'>{post.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;
