import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./dialogItems/DialogItems";
import Message from "./message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message message={m.message}/>);
    let messageBody = state.newMessageBody;

    let OnSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let OnMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));

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