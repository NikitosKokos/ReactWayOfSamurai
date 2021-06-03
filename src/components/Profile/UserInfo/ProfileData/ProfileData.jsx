import React from 'react';
import s from './ProfileData.module.css';

const Contact = ({title, value}) => {
    return (<div className={s.item} ><span>{title}</span>: {value}</div>);
}

const ProfileData = ({profile, isOwner, goToEditMode, isOpenDataDefault = false}) => {
    const [isOpenData, setIsOpenData] = React.useState(isOpenDataDefault);
    const bodyEl = React.useRef(null);

    const toggleOpenData = () => {
        if (isOpenData) {
            bodyEl.current.style.height = `${ bodyEl.current.scrollHeight }px`;
            window.getComputedStyle(bodyEl.current, null).getPropertyValue("height");
            bodyEl.current.style.height = "0";
        } else {
            bodyEl.current.style.height = `${ bodyEl.current.scrollHeight }px`;
        }
        setIsOpenData(!isOpenData);
    }
    
    return (
        <div className={`${s.data} ${isOpenData ? s.active : ''}`}>
            <div className={`${s.title} ${isOpenData ? s.active : ''}`} onClick={toggleOpenData}>{ isOwner ? 'Your' : 'User' } info</div>
            <div ref={bodyEl} className={s.body}>
                {profile.aboutMe && <div className={s.item}>
                    <span>About</span>: {profile.aboutMe}
                </div>}
                {profile.lookingForAJob && <div className={s.item}>
                    <span>Job</span>: {profile.lookingForAJobDescription}
                </div>}
                {Object.keys(profile.contacts).map(key => <Contact key={key} title={key} value={profile.contacts[key]} />)}
                {isOwner && <div className={s.button}><button onClick={goToEditMode} className='btn'><span>Edit</span></button></div>}
            </div>
        </div>
    )
}

export default ProfileData;