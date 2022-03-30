import React from 'react';
import classes from "./Aside.module.css";
import {NavLink} from "react-router-dom";

const Aside = () => {
    let isActive = ({isActive}) => isActive ? classes.active : ''

    return (
        <aside className={classes.aside}>
            <div>
                <div className={classes.link}>
                    <NavLink to='/profile' className={isActive}>Profile</NavLink>
                </div>
                <div className={classes.link}>
                    <NavLink to='/dialogs' className={isActive}>Dialogs</NavLink>
                </div>
                <div className={classes.link}>
                    <NavLink to='/news' className={isActive}>News</NavLink>
                </div>
                <div className={classes.link}>
                    <NavLink to='/music' className={isActive}>Music</NavLink>
                </div>
                <div className={classes.link}>
                    <NavLink to='/users' className={isActive}>Users</NavLink>
                </div>
                <div className={classes.link}>
                    <NavLink to='/settings' className={isActive}>Settings</NavLink>
                </div>
            </div>
        </aside>
    );
};

export default Aside;