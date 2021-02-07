import * as axios from 'axios';

const intance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '90c5fdc2-5b27-4cac-abce-fb9643091c2b'},
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
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {
    getProfile: (userId) => {
        return intance.get(`profile/${userId}`)
    },
    getStatus: (userId) => {
        return intance.get(`profile/status/${userId}`)
    },
    updateStatus: (status) => {
        return intance.put('profile/status', {status: status})
    }

}
