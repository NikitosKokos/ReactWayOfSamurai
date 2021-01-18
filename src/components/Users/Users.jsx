import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png'

class Users extends React.Component {

    componentDidMount() {
        if(this.props.users.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }   
        
    }
    
    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render= () => {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount;i++){
            pages.push(i);
        } 
       return <div className={s.users}>
            <div className={s.pagination}>
                {pages.map(p => {
                       return <div onClick={() => {this.onPageChanged(p)}} className={`${s.page} ${this.props.currentPage === p && s.selectedPage}`}>{p}</div>
                    })}
            </div>
            {this.props.users.map(u => <div key={u.id} className={s.user}>
                <div className={s.main} >
                    <div className={s.avatar} >
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    {u.followed ? <button className={s.btn} onClick={() => this.props.unfollow(u.id)}><span>unfollow</span></button> : <button className={s.btn} onClick={() => this.props.follow(u.id)} ><span>follow</span></button>}
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
    }
}

export default Users;