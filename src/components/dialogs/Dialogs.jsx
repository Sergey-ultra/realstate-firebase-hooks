import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>

    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItems name='Sergey' id='1'/>
                <DialogItems name='Vasya' id='2'/>
                <DialogItems name='Bobik' id='3'/>
                <DialogItems name='Masha' id='4'/>
                <DialogItems name='Sveta' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi!'/>
                <Message message='How are you?'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs;