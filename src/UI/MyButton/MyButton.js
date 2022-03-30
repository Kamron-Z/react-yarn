import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children, ...props}) => {
    return (
        <div className={classes.btnBlock}>
            <button {...props} >{children}</button>
        </div>
    );
};

export default MyButton;