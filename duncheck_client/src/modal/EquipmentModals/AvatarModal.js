import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingAvatarCut } from '../../action/AvatarAction'
import '../../css/Modal/EquipmentModal/AvatarModal.css'

const AvatarModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [avatar, setAvatar] = useState(false)

    const onHandlerAvatar = () => {
        setAvatar(!avatar)
    }

    const onSubmitAvatar = () => {
        let avatarCut = {
            avatar: avatar
        }

        dispatch(settingAvatarCut(avatarCut))
    }
    return (
        <div className = {open ? 'openAvatarModal avatarModal' : 'avatarModal'}>
            {open ? (
                <div className = 'avatarCheckBox'>
                <div className = 'avatarCheck'>
                    <span>딜 플티 체크 : </span>
                    <input type = 'checkbox' onChange = {onHandlerAvatar} />
                    <button className = 'settingAvatar' onClick = {() => {onSubmitAvatar(); close();}}>닫기</button>
                </div>
            </div>
            ): null}
        </div>
    )
}

export default AvatarModal