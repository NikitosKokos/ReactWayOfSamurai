import Preloader from '../../common/Preloader/Preloader';
import s from './UserInfo.module.css';
import userPhoto from '../../../assets/img/user.png'

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
                        {props.profile.lookingForAJob ? 
                        <div className={s.job} >
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-briefcase fa-w-16 fa-7x"><path fill="#222831" d="M464 128h-80V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM176 80h160v48H176V80zM54 176h404c3.31 0 6 2.69 6 6v74H48v-74c0-3.31 2.69-6 6-6zm404 256H54c-3.31 0-6-2.69-6-6V304h144v24c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-24h144v122c0 3.31-2.69 6-6 6z" class=""></path></svg>
                            <div className={s.jobdescr} >{props.profile.lookingForAJobDescription}</div>
                        </div> : ''
                        }
                        
                    </div> 
                    <div className={s.about}>
                        {props.profile.aboutMe}
                    </div>
                </div>
               
          </div> 
      </div>
    );
}

export default UserInfo;