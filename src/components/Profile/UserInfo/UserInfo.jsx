import Preloader from '../../common/Preloader/Preloader';
import s from './UserInfo.module.css';
import userPhoto from '../../../assets/img/user.png'
import ProfileStatus from './ProfileStatus/ProfileStatus';

const UserInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return(
        <div className={s.info}>
            <div className={s.bg}>
              <img src="https://buki.com.ua/data/files/news/15542215853893.jpg"/>
            </div>
            <div className={s.user}>
                <div className={s.photo}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                </div> 
                <div className={s.text}>
                    <div className={s.name}>
                    <div className={s.fullName}>{props.profile.fullName}</div>
                        
                        
                        
                    </div> 
                    <ProfileStatus status={'hello'} />
                    <div className={s.about}>
                        {props.profile.aboutMe}
                    </div>
                </div>
               
          </div> 
      </div>
    );
}

export default UserInfo;