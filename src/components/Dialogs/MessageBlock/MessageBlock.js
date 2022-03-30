import React from 'react';
import classes from "./MessageBlock.module.css";

const MessageBlock = ({message}) => {


    return (
        <div className={classes.messageBlock}>
            <div className={classes.dialogsImg}>
                <img src={message.imgUrl} />
            </div>
            <div className={classes.messageBody}>
                <p className={classes.messageText}>{message.message}</p>
                <p className={classes.messageUser}>{message.name}</p>
            </div>
        </div>
    );
};

export default MessageBlock;