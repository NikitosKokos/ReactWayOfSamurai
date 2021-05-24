import s from './UserInfo.module.css';
import userPhoto from '../../../assets/img/user.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const UserInfo = ({profile, updateStatus, status}) => {

    return(
        <div className={s.info}>
            <div className={s.user}>
                <div className={s.photo}>
                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto}/>
                </div> 
                <div className={s.text}>
                    <div className={s.name}>
                    <div className={s.fullName}>{profile.fullName}</div>
                    </div> 
                    <ProfileStatus status={status} updateStatus={updateStatus} />
                    {/* <div className={s.about}>
                        {profile.aboutMe}
                    </div> */}
                </div>
               
          </div> 
      </div>
    );
}

export default UserInfo;