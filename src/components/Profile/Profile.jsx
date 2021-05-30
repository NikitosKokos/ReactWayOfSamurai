import Preloader from '../common/Preloader/Preloader';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    
    if(!profile){
        return <div className='preloader-container'><Preloader /></div>
    }

    return(
        <main className={s.main}>
            <UserInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} />
            <PostsContainer />
      </main>
    );
}

export default Profile;