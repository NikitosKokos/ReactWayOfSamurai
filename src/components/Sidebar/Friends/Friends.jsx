import s from './Friends.module.css';
import FriendsElement from './FriendsElement/FriendsElement';
import React from 'react';

const Friends = (props) => {

    // let friendsElements = props.friends.map(el => <FriendsElement key={el.id} avatar={el.avatar} name={el.name} />);
    return(
        <div className={s.friends}>
            <div className={s.title}>Friends</div>
            <div className={s.body}>
                {/* {friendsElements} */}
            </div>
        </div>
    );
}

export default Friends;