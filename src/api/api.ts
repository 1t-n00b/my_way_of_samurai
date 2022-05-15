import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8fad767d-9189-48dd-8e32-2ec4faaa594d"
    }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }).then(response => response.data)
}