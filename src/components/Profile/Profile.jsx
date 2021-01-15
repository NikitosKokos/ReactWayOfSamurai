import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';

const Profile = (props) => {
    return(
        <main className={s.main}>
            <UserInfo/>
            <PostsContainer />
      </main>
    );
}

export default Profile;