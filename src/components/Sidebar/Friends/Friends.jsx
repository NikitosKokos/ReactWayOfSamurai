import s from './Friends.module.css';
import FriendsElement from './FriendsElement/FriendsElement';
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';

const Friends = (props) => {

    let friendsElements = props.friends.map(friend => <FriendsElement key={friend.id} id={friend.id} photo={friend.photo} name={friend.name} />);
    return(
        <div className={s.friends}>
            <div className={s.title}>Friends</div>
            <div className={s.body}>
                {props.isFetching ? <div className={s.preloader}><Preloader white={true} /></div> : friendsElements }
            </div>
        </div>
    );
}

export default Friends;