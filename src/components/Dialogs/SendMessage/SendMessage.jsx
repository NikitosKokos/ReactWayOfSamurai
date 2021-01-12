import s from './SendMessage.module.css';
import React from 'react';
import {addMesActionCreator,updateNewMesTextActionCreator} from '../../../redux/dialogs-reducer';

const SendMessage = (props) => {
    const mesElement = React.createRef();
    const addMessage = () => {
        props.dispatch(addMesActionCreator());
    }
    const onMesChange = () => {
        const text = mesElement.current.value;
        props.dispatch(updateNewMesTextActionCreator(text));
    }
    
    return(
            <div className={s.sendBlock}>
                <div className={s.textarea}>
                    <textarea onChange={onMesChange} placeholder='Enter your message' ref={mesElement} value={props.newMesText} ></textarea>
                </div>
                <button onClick={addMessage} className={s.btn}>Send</button>
            </div>
    );
}

export default SendMessage;