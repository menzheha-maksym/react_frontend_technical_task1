import React, { useEffect, useState } from 'react'
import './PostDetailsPage.component.css';

const PostDetailsPage = (props) => {

    const postId = props.match.params.postId;
    const [detailText, setDetailText] = useState();
    const [postData, setPostData] = useState({
        id: 0,
        title: "",
        imgThumbnail: "",
        detailText: ""
    });

    const addP = (text) => {
        return text.split('<br>').map(str => <p>{str}</p>);
    }


    useEffect(() => {
        const loadPosts = async () => {
            await fetch(`http://localhost:3000/posts?id=${postId}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data[0]);
                    setDetailText(addP(data[0].detailText));
                    setPostData(data[0]);
                });
        }

        loadPosts();
    }, [postId]);

    return (
        <div className="cont">
            <img src={postData.imgThumbnail} alt="imgthumbnuil" />

            <div className="post-title">{postData.title}</div>
            <div className="detail-text">{detailText}</div>
        </div>
    )
}

export default PostDetailsPage;