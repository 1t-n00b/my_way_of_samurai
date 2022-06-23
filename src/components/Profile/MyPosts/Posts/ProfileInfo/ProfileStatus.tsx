import React, {ChangeEvent, useState} from 'react';


type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void,
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    let [status, setStatus] = useState(props.status)
    let [editMode, setEditMode] = useState(false)
    // let { userId } = useParams();
    // console.log(userId)
    const acivateMode = () => {
        setStatus(props.status)
        setEditMode(true)
    }
    const deAcivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>

            <p>STATUS: </p>
            {!editMode ?
                <p onDoubleClick={acivateMode}>{props.status}</p>
                : <div>
                    <input value={status} onBlur={deAcivateMode} autoFocus onChange={onStatusChange}/>
                </div>
            }
        </div>
    );
};

export default ProfileStatus;