class userPost {
    id : number;
    message : string;
    likes : number
    constructor(id : number, message: string, likes : number) {
        this.id = id;
        this.message = message;
        this.likes = likes;
    }
}
export default userPost