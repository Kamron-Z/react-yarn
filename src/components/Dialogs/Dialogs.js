import React from 'react';
import classes from "./Dialogs.module.css";
import DialogsBlock from "./DialogsBlock/DialogsBlock";
import MessageBlock from "./MessageBlock/MessageBlock";
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";



const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogsBlock key={dialog.id} dialog={dialog}/>)
    let messagesElements = props.dialogsPage.messages.map(message => <MessageBlock key={message.id} message={message}/>)

    let newMessageElement = (e) => {
        let text = e.target.value
        props.onMessageChange(text)
    }

    let addMessage = () => {
        props.onAddMessage()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsInner}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>
                <div className={classes.messageInner}>

                    {messagesElements}

                    <MyInput type='text' onChange={newMessageElement} value={props.dialogsPage.newMessageText}/>
                    <MyButton onClick={addMessage}>Send</MyButton>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;