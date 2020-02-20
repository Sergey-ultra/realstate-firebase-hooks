import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./dialogItems/DialogItems";
import Message from "./message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);
    let messageElements = props.state.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;