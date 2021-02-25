import s from './ProfileStatus.module.css';
import React from 'react';
import Edit from '../../../../assets/img/edit.svg';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
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
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render(){
        return <div className={s.status}>
                {!this.state.editMode && 
                    <div onDoubleClick={this.activateEditMode} className={s.about}><div  className={s.text}>
                            {this.props.status}
                    </div>
                {this.props.status && <div className={s.edit}><img  src={Edit} /></div>}
                </div>}
                {this.state.editMode && 
                <div className={s.input}>
                    <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status} />
                </div>
                }
                </div>
    }
       

}

export default ProfileStatus;