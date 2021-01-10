import Posts from './Posts/Posts';
import s from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';

const Profile = (props) => {
    return(
        <main className={s.main}>
            <UserInfo/>
            <Posts posts={props.state.posts} newPostText={props.state.newPostText} dispatch={props.dispatch} />
      </main>
    );
}

export default Profile;