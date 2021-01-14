import Posts from './Posts/Posts';
import s from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';

const Profile = (props) => {
    return(
        <main className={s.main}>
            <UserInfo/>
            <Posts />
      </main>
    );
}

export default Profile;