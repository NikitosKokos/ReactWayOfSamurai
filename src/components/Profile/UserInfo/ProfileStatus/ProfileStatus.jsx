import s from './ProfileStatus.module.css';
import React from 'react';
import Edit from '../../../../assets/img/edit.svg';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = React.useState(false);
    const [status, setStatus] = React.useState(props.status);

    React.useEffect(() => {
        setStatus(props.status);
    },[props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }


        return (
            <div className={s.status}>
            {!editMode && 
                <div onClick={activateEditMode} className={s.about}><span  className={s.text}>
                        {status}
                </span>
            {status && <div className={s.edit}><img  src={Edit} /></div>}
            </div>}
            {editMode && 
            <div className={s.input}>
                <input onChange={(e) => setStatus(e.currentTarget.value)} autoFocus onBlur={deactivateEditMode} value={status} />
            </div>
            }
            </div>


)}

export default ProfileStatus;