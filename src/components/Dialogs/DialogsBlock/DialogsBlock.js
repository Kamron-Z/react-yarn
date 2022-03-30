import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./DialogsBlock.module.css";

const DialogsBlock = ({dialog}) => {
    let isActive = ({isActive}) => isActive ? [classes.dialogsBlock, classes.active].join(' ') : classes.dialogsBlock

    return (
        <NavLink to={'/dialogs/' + dialog.id} className={isActive}>
            <div className={classes.dialogsImg}>
                <img src={dialog.imgUrl}/>
            </div>
            <p className={classes.dialogsName}>
                {dialog.name}
            </p>
            <p className={classes.dialogsCount}>{dialog.newMessage}</p>
        </NavLink>
    );
};

export default DialogsBlock;