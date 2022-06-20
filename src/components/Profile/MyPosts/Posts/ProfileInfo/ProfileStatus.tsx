import React, {useState} from 'react';


type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void,
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    let [status, setStatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false)

    const acivateMode = () => {
        setEditMode(true)
    }
    const deAcivateMode = () => {
        setEditMode(false)
    }
    return (
        <div>
            {!editMode ?
                <div onDoubleClick={acivateMode}>{props.status}</div>
                : <div>
                    <input value={status} onBlur={deAcivateMode} autoFocus/>
                </div>
            }
        </div>
    );
};

export default ProfileStatus;