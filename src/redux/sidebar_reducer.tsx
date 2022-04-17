import {FriendType} from "../App";

 type initialStateType = {
    friends:FriendType[]
}

let initialState:initialStateType =  {
    friends: [
        {
            id: 1,
            firstName: "Ilona",
            secondName: "Mask",
            ava: "https://avatars.mds.yandex.net/get-zen_doc/1671806/pub_5e422bfaabb5074fff3a4747_5e422c255e0d7416b977d7a7/scale_1200"
        },
        {
            id: 2,
            firstName: "Pashtet",
            secondName: "Durov",
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGN0cnVY_Af9mV4l1vI6kmjnCBlho78TMuA&usqp=CAU"
        },
        {
            id: 3,
            firstName: "Cuker",
            secondName: "Cuker",
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvFENTFoaxFujBsq6O0DV9jIas_oPSTcgZ-wM601oc1ufBiVfp5o5G_WdQ0LbsBOloJY&usqp=CAU"
        }
    ]
}

const sidebarReducer = (state = initialState) => {
    return state
    }


export default sidebarReducer