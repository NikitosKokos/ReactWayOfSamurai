import React from 'react'
import s from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


const Users = ({currentPage, pageSize, totalUsersCount, onPageChanged, users, isFetching, ...props}) => {

    return (
        <div className={s.users}>
            <h2 className={s.title}>Users</h2>
            <Paginator 
                currentPage={currentPage} 
                pageSize={pageSize} 
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount} 
            />
            {isFetching 
            ? <Preloader/> 
            : <div className={s.usersCont}>
                {users.map(user => <User key={user.id} user={user} followingIsProgress={props.followingIsProgress} follow={props.follow} unfollow={props.unfollow} />)}
            </div>
            }
        </div>
    )
}

export default Users;