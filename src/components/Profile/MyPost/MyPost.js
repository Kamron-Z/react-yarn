import React from 'react';
import Post from "./Post/Post";
import classes from "./MyPost.module.css";
import MyButton from "../../../UI/MyButton/MyButton";
import MyInput from "../../../UI/MyInput/MyInput";

const MyPost = (props) => {
    let postElements = props.posts.map(post => <Post key={post.id} massege={post.message} img={post.imgUrl}
                                                     count={post.likesCount}/>)

    let newPostElement = (e) => {
        let text = e.target.value
        props.onPostChange(text)
    }

    let addPost = () => {
        props.onAddPost()
    }

    return (
        <div>
            <div>
                <MyInput type='text' onChange={newPostElement} value={props.newPostText}/>
                <MyButton onClick={addPost}>Send</MyButton>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
};

export default MyPost;