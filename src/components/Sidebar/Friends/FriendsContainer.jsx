import React from 'react';
import { connect } from 'react-redux';
import { requestFriends } from '../../../redux/sidebar-reducer';
import Friends from './Friends';
import { getPageSize,getFriends,getIsFetching } from '../../../redux/sidebar-selectors';


class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.requestFriends(this.props.pageSize);
    }

    render= () => {
       return <Friends 
            friends={this.props.friends}
            isFetching={this.props.isFetching}
        />
    }
}

const mapStateToProps = (state) => {
    return{
        friends: getFriends(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
    }
}


export default connect(mapStateToProps,{
    requestFriends
    })(UsersContainer);

