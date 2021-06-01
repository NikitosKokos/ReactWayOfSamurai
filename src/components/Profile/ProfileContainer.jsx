
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    getNewUserProfile = () => {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.autorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.getNewUserProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.getNewUserProfile();
        }
    }
    render(){
        return <Profile 
                    {...this.props} 
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile} 
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto} />
    }
}


const mapStateToProps = (state) => (
    {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        autorizedUserId: state.auth.id
    }
)

export default compose(
    connect(mapStateToProps,{
        getUserProfile, getStatus, updateStatus, savePhoto
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);