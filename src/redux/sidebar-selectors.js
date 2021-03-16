export const getFriends = (state) => {
    return state.sidebar.friends;
}

export const getFriendsCount = (state) => {
    return state.sidebar.friendsCount;
}


export const getPageSize = (state) => {
    return state.sidebar.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.sidebar.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.sidebar.currentPage;
}

export const getIsFetching = (state) => {
    return state.sidebar.isFetching;
}

