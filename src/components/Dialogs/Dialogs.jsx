import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message text={m.text} avatar={m.avatar} />);
    
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
                    <SendMessage newMesText={props.state.newMesText} dispatch={props.dispatch} />
                </div>
            </div>
        </>
    );
}

export default Dialogs;