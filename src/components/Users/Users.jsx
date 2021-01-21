import React from 'react'
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


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
                    ? <button className={s.btn} onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                            withCredentials: true,
                            headers: {
                              'API-KEY': 'cab77a4f-56ff-4ac1-961e-6454b63eced2'},
                          }).then(response => {
                            if(response.data.resultCode === 0){
                                props.unfollow(u.id);
                            }
                        });
                    }}><span>unfollow</span></button> 
                    : <button className={s.btn} onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                            withCredentials: true,
                            headers: {
                                'API-KEY': 'cab77a4f-56ff-4ac1-961e-6454b63eced2'},
                          }).then(response => {
                            if(response.data.resultCode === 0){
                                props.follow(u.id);
                            }
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