import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,setCurrentPage,toggleFollowingProgress,requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getPageSize,getUsers,getTotalUsersCount,getIsFetching,getCurrentPage,getFollowingIsProgress } from '../../redux/user-selectors';
import { withRouter } from 'react-router-dom';


class UsersContainer extends React.Component {
    
    componentDidMount() {
        let page = this.props.match.params.page;
        if(page === undefined){
            page = this.props.currentPage;
        }
        this.props.requestUsers(Number(page),this.props.pageSize);
    }
    
    onPageChanged = (p) => {
        this.props.requestUsers(p,this.props.pageSize);
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

// const mapStateToProps = (state) => {
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingIsProgress: state.usersPage.followingIsProgress,
//     }
// }

const mapStateToProps = (state) => {
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgress: getFollowingIsProgress(state),
    }
}


export default compose(
    
    connect(mapStateToProps,{
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers
    }),
    withRouter,
    withAuthRedirect,
)(UsersContainer);

