import s from './Friends.module.css';
import FriendsElement from './FriendsElement/FriendsElement';

const Friends = (props) => {
    let friendsElements = props.friends.map(el => <FriendsElement avatar={el.avatar} name={el.name} />);
    return(
        <div className={s.friends}>
            <h4 className={s.title}>
               <span>Friends</span>
            </h4>
            <div className={s.body}>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friends;