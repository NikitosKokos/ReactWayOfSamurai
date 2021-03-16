import React from 'react';
import { connect } from 'react-redux';
import { requestFriends } from '../../../redux/sidebar-reducer';
import Friends from './Friends';
import { getPageSize,getFriends,getTotalUsersCount,getIsFetching,getCurrentPage,getFriendsCount } from '../../../redux/sidebar-selectors';


class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.requestFriends(this.props.currentPage,this.props.pageSize,this.props.friends,this.props.friendsCount);
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        for(let i = 2; i <= pagesCount; i++){
            this.props.requestFriends(this.props.currentPage,this.props.pageSize,this.props.friends,this.props.friendsCount);
        }
        console.log(this.props.friends);
    }

    render= () => {
       return <>
        <Friends 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return{
        friends: getFriends(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        friendsCount: getFriendsCount(state),
    }
}


export default connect(mapStateToProps,{
    requestFriends
    })(UsersContainer);

