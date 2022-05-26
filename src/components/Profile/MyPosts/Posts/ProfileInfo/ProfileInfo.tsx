import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../../../common/Preloader/Preloader";
import {ProfileType} from "../../../../../redux/profile_reducer";

type ProfileInfoPropsType = {
    profile: ProfileType
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.prof_img}
                     src="https://www.watchthetitles.com/app/uploads/2009/11/Community-titles-title-sequence-1920x720.jpg    "
                     alt=""/>
            </div>
            <div className={s.description_block}>
                Ava + description
            </div>
            <img src={props.profile.photos.small} alt=""/>
        </div>
    )
}

export default ProfileInfo