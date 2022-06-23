import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8fad767d-9189-48dd-8e32-2ec4faaa594d"
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    },
    getProfile(userID: number) {
        // return instance.get(`profile/` + userID)
        console.warn("ProfileAPI Object")
        return profileAPI.getProfile(userID)
    },
    follow(usedID: number) {
        return instance.post(`follow/${usedID}`)
    },
    unFollow(usedID: number) {
        return instance.delete(`follow/${usedID}`)
    }
}
export const profileAPI = {
    getProfile(userID: number) {
        return instance.get(`profile/` + userID)
    },
    getStatus(userID: number) {
        return instance.get(`profile/status/`+userID)
    },
    updateStatus(status: string){
        return instance.put(`profile/status`,{status})
    }

}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(data: any) {
        return instance.post('/auth/login', data);
    },
    logout(){
        return instance.delete(`/auth/login`)
    }
}
