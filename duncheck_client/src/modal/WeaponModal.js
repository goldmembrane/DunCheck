import React from 'react'
import '../css/Modal/WeaponModal.css'

const WeaponModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openWeaponModal weaponModal' : 'weaponModal'}>
            {open ? (
                <div className = 'weaponInputBox'>
                    <div className = 'weaponInput'>
                        <span>무기 : </span>
                        <input type = 'number' onChange = {handle} />
                        <button className = 'settingWeapon' onClick = {close}>닫기</button>
                    </div>
                </div>
            ):null}
        </div>
    )
}

export default WeaponModal