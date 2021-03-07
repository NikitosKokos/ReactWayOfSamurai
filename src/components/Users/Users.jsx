import React from 'react'
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png'
import { NavLink } from 'react-router-dom';


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
                       return <NavLink to={`/users/${p}`} onClick={() => {props.onPageChanged(p)}} className={`${s.page} ${props.currentPage === p && s.selectedPage}`} key={p} >{p}</NavLink>
                })}
            </div>
            <div className={s.usersCont}>
            {props.users.map(u => <div key={u.id} className={s.user}>
                <div className={s.main} >
                    <div className={s.avatar} >
                        <NavLink to={`/profile/${u.id}`}><img src={u.photos.small != null ? u.photos.small : userPhoto}/></NavLink>
                    </div>
                    {u.followed 
                    ? <button disabled={props.followingIsProgress.some(id => id === u.id)} className={s.btn} onClick={() => {props.unfollow(u.id)}}><span>unfollow</span></button> : <button disabled={props.followingIsProgress.some(id => id === u.id)} className={s.btn} onClick={() => {props.follow(u.id)}} ><span>follow</span></button>}
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