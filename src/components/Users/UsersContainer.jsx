import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,setCurrentPage,toggleFollowingProgress,requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getPageSize,getUsers,getTotalUsersCount,getIsFetching,getCurrentPage,getFollowingIsProgress } from '../../redux/users-selectors';
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
       return <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        followingIsProgress={this.props.followingIsProgress}
        isFetching={this.props.isFetching}
        />
    }
}

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

