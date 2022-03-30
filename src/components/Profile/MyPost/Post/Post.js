import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.imgBlock}>
                <img src={props.img}/>
            </div>
            <div>
                <p>{props.massege}</p>
                <strong>like {props.count}</strong>
            </div>
        </div>
    );
};

export default Post;