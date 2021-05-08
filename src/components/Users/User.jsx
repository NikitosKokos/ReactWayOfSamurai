import React from 'react'
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png'
import { NavLink } from 'react-router-dom';


const User = ({user: {id, photos, name, status, followed}, followingIsProgress, unfollow, follow }) => {

    return (
        <div className={s.user}>
            <div className={s.body}>
                <div className={s.main}>
                <NavLink to={`/profile/${id}`} className={s.avatar}>
                    <img src={photos.small != null ? photos.small : userPhoto}/>
                </NavLink>
                    <div className={s.text}>
                        <div className={s.name}>
                            {name}
                        </div>
                        <div className={s.status}>
                            {status}
                        </div>
                    </div>
                </div>
                {followed 
                ? <button 
                    disabled={followingIsProgress.some(itemId => itemId === id)} 
                    className={s.btn} 
                    onClick={() => {unfollow(id)}}
                ><span>unfollow</span></button> 
                : <button 
                    disabled={followingIsProgress.some(itemId => itemId === id)} 
                    className={s.btn} 
                    onClick={() => {follow(id)}} 
                ><span>follow</span></button>}
            </div>
        </div>
    )
}

export default User;