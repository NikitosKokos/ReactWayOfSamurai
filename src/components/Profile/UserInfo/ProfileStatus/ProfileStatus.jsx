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
                <div className={s.about}><span  className={s.text}>
                        {status ? status: 'Missing status'}
                </span>
            <div onClick={activateEditMode} className={s.edit}>
                <svg 
                        viewBox="0 0 383.947 383.947">
                    <g>
                        <g>
                            <g>
                                <polygon fill="#393e46" points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893 			"/>
                                <path fill="#393e46" d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04
                                    C386.027,77.92,386.027,64.373,377.707,56.053z"/>
                            </g>
                        </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
            </div>
            </div>}
            {editMode && 
            <div className={s.input}>
                <input onChange={(e) => setStatus(e.currentTarget.value)} autoFocus onBlur={deactivateEditMode} value={status} />
            </div>
            }
            </div>


)}

export default ProfileStatus;