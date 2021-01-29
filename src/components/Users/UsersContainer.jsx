import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,setCurrentPage,toggleFollowingProgress,getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }
    
    onPageChanged = (p) => {
        this.props.getUsers(p,this.props.pageSize);
        this.props.setCurrentPage(p);
    }

    render= () => {
       return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        followingIsProgress={this.props.followingIsProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress,
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    })
)(UsersContainer);

