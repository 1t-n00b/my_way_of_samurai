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
    follow(usedID: number) {
        return instance.post(`follow/${usedID}`)
    },
    unFollow(usedID: number) {
        return instance.delete(`follow/${usedID}`)
    }
}
