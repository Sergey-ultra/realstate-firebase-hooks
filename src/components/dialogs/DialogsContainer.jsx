import React from "react";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {
            (store) => {
                let OnSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                let OnMessageChange = (newText) => {
                    store.dispatch(updateNewMessageBodyCreator(newText));
                }
                return (
                    <Dialogs dialogsPage={store.getState().dialogsPage}
                             sendMessage={OnSendMessageClick}
                             updateNewMessageBody={OnMessageChange}
                    />
                )
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;