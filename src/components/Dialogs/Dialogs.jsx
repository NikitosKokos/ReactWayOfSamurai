import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';
import React from 'react';


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message text={m.text} key={m.id} avatar={m.avatar} />);
    let newMesText = state.newMesText;
    return(
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.dialog}>
                    <div className={s.messages}>
                        <div className={s.body}>
                            {messagesElements}
                        </div>
                    </div>
                    <SendMessage newMesText={newMesText} updateNewMesText={props.updateNewMesText} addMes={props.addMes} />
                </div>
            </div>
        </>
    );
}

export default Dialogs;