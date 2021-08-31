import React from 'react'

const WeaponModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openWeaponModal weaponModal' : 'weaponModal'}>
            {open ? (
                <div className = 'weaponInputBox'>
                    <span>무기 : </span>
                    <input type = 'number' onChange = {handle} />
                    <button className = 'settingWeapon' onClick = {close}>닫기</button>
                </div>
            ):null}
        </div>
    )
}

export default WeaponModal