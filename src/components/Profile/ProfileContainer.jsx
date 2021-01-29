
import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { userAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 14102;
        }
        this.props.getUserProfile(userId);
    }

    render(){
        return <Profile {...this.props} profile={this.props.profile} />
    }
}


const mapStateToProps = (state) => (
    {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
)

export default compose(
    connect(mapStateToProps,{
        getUserProfile,
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);