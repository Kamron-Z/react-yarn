import React from 'react';
import MyPost from "./MyPost/MyPost";
import classes from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.bg}>
                <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpghttps://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg" />
            </div>
            <div className={classes.author}>
                ava + description
            </div>
            <MyPostContainer  />
        </div>
    );
};

export default Profile;