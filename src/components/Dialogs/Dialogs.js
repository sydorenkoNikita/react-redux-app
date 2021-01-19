import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let messageElements = state.messages.map(message => <Message message={message.message} key={message.id} />);
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id}/>);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div>
                <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='send message'></textarea>
                <button onClick={onSendMessageClick}>push</button>
            </div>
        </div>

    )
};

export default Dialogs;