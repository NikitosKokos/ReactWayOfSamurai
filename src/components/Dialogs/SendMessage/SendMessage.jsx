import s from './SendMessage.module.css';
import React from 'react';


const SendMessage = (props) => {
    const mesElement = React.createRef();
    const addMessage = () => {
        props.dispatch({
            type: 'ADD-MES',
        });
    }
    const onMesChange = () => {
        const text = mesElement.current.value;
        props.dispatch({
            type: 'UPDATE-NEW-MES-TEXT',
            newText: text,
        });
    }

    return(
            <div className={s.sendBlock}>
                <div className={s.textarea}>
                    <textarea onChange={onMesChange} ref={mesElement} value={props.newMesText} ></textarea>
                </div>
                <button onClick={addMessage} className={s.btn}>Send</button>
            </div>
    );
}

export default SendMessage;