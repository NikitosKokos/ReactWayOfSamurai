import React from 'react'
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png'
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount;i++){
            pages.push(i);
        }
    return (
        <div className={s.users}>
            <div className={s.pagination}>
                {pages.map(p => {
                       return <div onClick={() => {props.onPageChanged(p)}} className={`${s.page} ${props.currentPage === p && s.selectedPage}`}>{p}</div>
                    })}
            </div>
            <div className={s.usersCont}>
            {props.users.map(u => <div key={u.id} className={s.user}>
                <div className={s.main} >
                    <div className={s.avatar} >
                        <NavLink to={`/profile/${u.id}`}><img src={u.photos.small != null ? u.photos.small : userPhoto}/></NavLink>
                    </div>
                    {u.followed 
                    ? <button disabled={props.followingIsProgress.some(id => id === u.id)} className={s.btn} onClick={() => {
                        props.toggleFollowingProgress(true,u.id);
                        userAPI.unfollow(u.id).then(response => {
                            if(response.data.resultCode == 0){
                                props.unfollow(u.id);
                            }
                            props.toggleFollowingProgress(false,u.id);
                        });
                    }}><span>unfollow</span></button>                     : <button disabled={props.followingIsProgress.some(id => id === u.id)} className={s.btn} onClick={() => {
                        props.toggleFollowingProgress(true,u.id);
                        userAPI.follow(u.id).then(response => {
                            if(response.data.resultCode == 0){
                                props.follow(u.id);
                            }
                            props.toggleFollowingProgress(false,u.id);
                        });
                        
                    }} ><span>follow</span></button>}
                </div>
                <div className={s.body} >
                <div className={s.info} >
                        <div className={s.name} >
                            {u.name}
                        </div>
                        <div className={s.status} >
                            {u.status}
                        </div>
                    </div>
                </div>
            </div>)}
            </div>
        </div>
    )
}

export default Users;