import * as axios from 'axios';

const intance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'cab77a4f-56ff-4ac1-961e-6454b63eced2'},
})

export const userAPI = {
    getUsers: (currentPage,pageSize) => {
    return intance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollow: (id) => {
        return intance.delete(`follow/${id}`).then(response => response.data);
    },
    follow: (id) => {
        return intance.post(`follow/${id}`).then(response => response.data);
    },
    auth: () => {
        return intance.get('auth/me').then(response => response.data);
    },
    getProfile: (userId) => {
        return intance.get(`profile/${userId}`)
    }

}
