import React, { useState } from 'react'
import AvatarModal from '../../modal/EquipmentModals/AvatarModal'

const Avatar = (props) => {

    const [openAvatar, setOpenAvatar] = useState(false)

    const openAvatarModal = () => {
        setOpenAvatar(true)
    }

    const closeAvatarModal = () => {
        setOpenAvatar(false)
    }

    return (
        <>
            <div className = 'avatar-cut-box'>
                <div className = 'avatar-cut-title'>아바타 컷 설정</div>
                <button className = 'open-avatar-modal' onClick = {openAvatarModal}>딜 플티 체크 여부 : </button>
                <AvatarModal close = {closeAvatarModal} open = {openAvatar}/>
                <button className = 'go-to-creature-tab' onClick = {() => {props.history.push('/setting/equipment/creature')}}>다음</button>
            </div>
        </>
    )
}

export default Avatar