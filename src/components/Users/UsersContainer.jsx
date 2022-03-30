import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUserAC, unFollowAC} from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapStateToDispatch = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapStateToDispatch)(Users)

export default UsersContainer;