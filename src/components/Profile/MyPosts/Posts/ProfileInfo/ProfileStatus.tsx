import React, {useState} from 'react';


type ProfileStatusPropsType = {
    status: string,
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    let [status, setSatatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false)

    const acivateMode = () => {
        setEditMode(true)
    }
    const deAcivateMode = () => {
        setEditMode(true)
    }
    return (
        <div>
            {!editMode ?
                <div onDoubleClick={acivateMode}>{props.status}</div>
                : <div>
                    <input value={status} onDoubleClick={deAcivateMode} autoFocus/>
                </div>
            }
        </div>
    );
};

export default ProfileStatus;