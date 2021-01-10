import s from './Message.module.css';

const Message = (props) => {
    return <div className={s.message}>
                <div className={s.img} ><img src={props.avatar} alt="avatar"/></div>
                <div className={s.body} >
                    <div className={s.text} >{props.text}</div>
                </div>
            </div>
}

export default Message;