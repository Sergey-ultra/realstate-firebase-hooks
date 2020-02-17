import React from "react";
import s from './Dialogs.module.css';
import DialogItems from "./dialogItems/DialogItems";
import Message from "./message/Message";


const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Vasay'},
        {id: 3, name: 'Bobik'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Sveta'}
    ]


    let dialogsElements = dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'you'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let messageElements = messages.map(m => <Message message={m.message}/>);

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