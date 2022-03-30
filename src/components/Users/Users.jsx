import React from 'react';
import classes from "./Users.module.css";
import MyButton from "../../UI/MyButton/MyButton";
import axios from "axios";

class Users extends React.Component {

    constructor(props) {
        super(props);
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    props.setUsers(res.data.items)
                })
        }
    }

    render() {
        return (
            <div className={classes.usersBlock}>
                {
                    this.props.users.map(user => {
                        return <div key={user.id} className={classes.users}>
                            <div className={classes.block}>
                                <div className={classes.blockLeft}>
                                    <div className={classes.dialogsImg}>
                                        <img src={user.photos.large}/>
                                    </div>
                                    <div>
                                        {user.followed
                                            ? <MyButton onClick={() => this.props.unFollow(user.id)}>Unfollow</MyButton>
                                            : <MyButton onClick={() => this.props.follow(user.id)}>Follow</MyButton>
                                        }
                                    </div>
                                </div>
                                <div className={classes.blockRight}>
                                    <div>
                                        <p>{user.name}</p>
                                        <p>{user.status}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Users;