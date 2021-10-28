import React, { useCallback, useEffect, useState } from 'react'
import './MainPage.component.css';

export default function MainPage() {

    const [start, setStart] = useState(0);
    const limit = 3;

    const [posts, setPosts] = useState([{
        id: 0,
        title: "",
        imgThumbnail: "",
        detailText: ""
    }]);

    const loadPosts = useCallback(async () => {
        await fetch(`http://localhost:3000/posts?_start=${start}&_limit=${limit}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                if(posts.length > 1) {
                    console.log(posts.length);
                    setPosts(oldData => [...oldData, ...data]);
                } else {
                    setPosts(data);
                }                
            });
    }, [start]);

    const handleLoadMoreButtonClick = async () => {
        setStart(start + limit);
    }

    useEffect(() => {
        loadPosts();
    }, [loadPosts]);

    return (
        <div>
            <div className="main-image-container">
                <span>Lorem ipsum dolor sit <br />
                    amet consectetur.</span>
                <br />
                <button className="contact-btn">cвязаться</button>
            </div>
            <h2 className="posts-title">Title</h2>
            <div className="posts-container">
                {posts.map((post, key) => {
                    return <div key={key} className="post" style={{ backgroundImage: `url(${post.imgThumbnail})` }}>
                        <div className="post-name">POST{post.id + 1}</div>
                    </div>;
                })}
            </div>
            <div className="load-more">
                <button className="load-more-btn" onClick={handleLoadMoreButtonClick}>Заргузить еще</button>
            </div>

        </div>
    )
}
