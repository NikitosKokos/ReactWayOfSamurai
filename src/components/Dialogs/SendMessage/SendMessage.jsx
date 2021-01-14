import s from './SendMessage.module.css';
import React from 'react';

const SendMessage = (props) => {
    const mesElement = React.createRef();
    const onAddMessage = () => {
        props.addMes();
    }
    const onMesChange = () => {
        const text = mesElement.current.value;
        props.updateNewMesText(text);
    }
    
    return(
            <div className={s.sendBlock}>
                <div className={s.textarea}>
                    <textarea onChange={onMesChange} placeholder='Enter your message' ref={mesElement} value={props.newMesText} ></textarea>
                </div>
                <button onClick={onAddMessage} className={s.btn}><span>Send</span></button>
            </div>
    );
}

export default SendMessage;