import s from './FriendsElement.module.css';
import userPhoto from '../../../../assets/img/user.png';
import { NavLink } from 'react-router-dom';

const FriendsElement = ({id, photo, name}) => {
    return(
        <NavLink to={`/profile/${id}`} className={s.item}>
            <div className={s.img}> <img src={photo != null ? photo : userPhoto} alt="avatar"/></div>
            <div className={s.name}>{name}</div>
        </NavLink>
    );
}

export default FriendsElement;