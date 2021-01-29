import s from './ProfileStatus.module.css';
import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    render(){
        return <div className={s.status}>
                {!this.state.editMode ? 
                    <div onDoubleClick={this.activateEditMode} className={s.text}>
                            {this.props.status}
                    </div>
                    : <div className={s.input}>
                        <input autoFocus onBlur={this.deactivateEditMode} value={this.props.status} />
                     </div>
                }
                </div>
    }
       

}

export default ProfileStatus;