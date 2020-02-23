import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./dialogItems/DialogItems";
import Message from "./message/Message";



const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItems name={d.name} key={d.id} id={d.id}/>);
    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);
    let messageBody = props.dialogsPage.newMessageBody;

    let OnSendMessageClick = () => {
        props.sendMessage();
    }
    let OnMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea onChange={OnMessageChange}
                                   placeholder='Enter your message!'
                                   value={messageBody}
                    ></textarea></div>
                    <div>
                        <button onClick={OnSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;