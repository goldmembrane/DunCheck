import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingWeaponCut } from '../../action/MagicAction'
import '../../css/MagicModal/WeaponModal.css'

const WeaponModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [weapon, setWeapon] = useState(0)

    const onHandlerWeapon = (e) => {
        setWeapon(e.target.value)
    }

    const onSubmitWeapon = () => {
        let weaponCut = {
            weapon: weapon
        }

        dispatch(settingWeaponCut(weaponCut))
    }

    return (
        <div className = {open ? 'openWeaponModal weaponModal' : 'weaponModal'}>
            {open ? (
                <div className = 'weaponInputBox'>
                    <div className = 'weaponInput'>
                        <span>무기 : </span>
                        <input type = 'number' onChange = {onHandlerWeapon} value = {weapon}/>
                        <button className = 'settingWeapon' onClick = {() => {onSubmitWeapon(); close();}}>닫기</button>
                    </div>
                </div>
            ):null}
        </div>
    )
}

export default WeaponModal