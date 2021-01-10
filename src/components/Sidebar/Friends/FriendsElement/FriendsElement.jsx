import s from './FriendsElement.module.css';

const FriendsElement = (props) => {
    return(
        <div className={s.item}>
            <div className={s.img}><img src={props.avatar} alt="avatar"/></div>
            <div className={s.name}>{props.name}</div>
        </div>
    );
}

export default FriendsElement;