import React from 'react';
import s from './UserInfo.module.css';
import userPhoto from '../../../assets/img/user.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const UserInfo = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfile, isOpenData }) => {
    const [editMode, setEditMode] = React.useState(false);

    const onUserPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    }

    return(
        <div className={s.info}>
            <div className={s.user}>
                <div className={s.photo}>
                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto}/>
                    {isOwner && <>
                    <input className={s.inputFile} id="userPhoto" type='file' onChange={onUserPhotoSelected} />
                    <label
                        htmlFor='userPhoto'
                        className={s.addPhoto}>
                        <svg height="426.66667pt" viewBox="0 0 426.66667 426.66667" width="426.66667pt"><path fill='#eee' d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/></svg>
                    </label>
                    </>}
                </div>
                <div className={s.text}>
                    <div className={s.name}>
                    <div className={s.fullName}>{profile.fullName}</div>
                    </div> 
                    <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus} />
                </div>
          </div>
          {editMode 
          ? <ProfileDataForm  onSubmit={onSubmit} initialValues={profile} /> 
          : <ProfileData isOpenData={isOpenData} profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />}     
      </div>
    );
}

export default UserInfo;