import * as axios from 'axios';

const intance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8dd2b7a3-aa93-40bf-9359-84d3eb5a1a53'},
})

const news = axios.create({
    baseURL: 'https://newsapi.org/v2/',
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
    login: (email,password,rememberMe = false) => {
        return intance.post('auth/login', {email,password,rememberMe}).then(response => response.data);
    },
    logout: () => {
        return intance.delete('auth/login').then(response => response.data);
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


export const newsAPI = {
    getNews: (country,page,pageSize) => {
        return news.get(`top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=70b45b6b25ec42cfb8bf8d6e7c6dc87d`).then(response => response.data)
    }
}