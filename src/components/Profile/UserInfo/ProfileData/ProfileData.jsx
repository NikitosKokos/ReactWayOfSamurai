import React from 'react';
import s from './ProfileData.module.css';

const Contact = ({title, value}) => {
    return (<div className={s.item} ><span>{title}</span>: {value}</div>);
}

const ProfileData = ({profile, isOwner, goToEditMode, isOpenData}) => {
    const [isOpenDataLocal, setIsOpenDataLocal] = React.useState(isOpenData);
    const bodyEl = React.useRef(null);

    const toggleOpenData = () => {
        if (isOpenDataLocal) {
            bodyEl.current.style.height = `${ bodyEl.current.scrollHeight }px`;
            window.getComputedStyle(bodyEl.current, null).getPropertyValue("height");
            bodyEl.current.style.height = "0";
        } else {
            bodyEl.current.style.height = `${ bodyEl.current.scrollHeight }px`;
        }
        setIsOpenDataLocal(!isOpenDataLocal);
    }
    
    return (
        <div className={`${s.data} ${isOpenDataLocal ? s.active : ''}`}>
            <div className={`${s.title} ${isOpenDataLocal ? s.active : ''}`} onClick={toggleOpenData}>{ isOwner ? 'Your' : 'User' } info</div>
            <div ref={bodyEl} className={s.body}>
                <div className={s.item}>
                    <span>About</span>: {profile.aboutMe}
                </div>
                <div className={s.item}>
                    <span>Looking for a job</span>: { profile.lookingForAJob ? 'yes' : 'no' }
                </div>
                <div className={s.item}>
                    <span>Professional skills</span>: {profile.lookingForAJobDescription}
                </div>
                {Object.keys(profile.contacts).map(key => <Contact key={key} title={key} value={profile.contacts[key]} />)}
                {isOwner && <div className={s.button}><button onClick={goToEditMode} className='btn'><span>Edit</span></button></div>}
            </div>
        </div>
    )
}

export default ProfileData;