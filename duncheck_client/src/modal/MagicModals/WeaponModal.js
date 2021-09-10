import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingWeaponCut } from '../../action/MagicAction'
import styled from 'styled-components'

import '../../css/MagicModal/WeaponModal.css'

let MagicCutBox = styled.div`
                    width: 90%;
                    max-width: 450px;
                    height: 400px;
                    margin: 0 auto;
                    border-radius: 3px;
                    background-color: #fff;
                    overflow: hidden;`

let MagicInput = styled.div`
                    width: 80%;
                    max-width: 250px;
                    height: 100px;
                    margin: 125px auto;`

let MagicCutLabel = styled.p`
                    font-size: 18px;
                    font-weight: bold;
                    display: inline-block;`

let MagicCutValue = styled.input`
                    width: 180px;
                    height: 30px;
                    text-align: center;
                    margin-left: 20px;`

let SettingMagicButton = styled.button`
                    display: block;
                    width: 50px;
                    height: 25px;
                    line-height: 25px;
                    border: none;
                    background-color: #00f;
                    color: #fff;
                    font-size: 20px;
                    border-radius: 3px;
                    margin: 100px auto;`

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
        localStorage.setItem('weapon', weapon)
    }

    return (
        <div className = {open ? 'openWeaponModal weaponModal' : 'weaponModal'}>
            {open ? (
                <MagicCutBox>
                    <MagicInput>
                        <MagicCutLabel>무기 : </MagicCutLabel>
                        <MagicCutValue type = 'number' onChange = {onHandlerWeapon} value = {weapon}/>
                        <SettingMagicButton className = 'settingWeapon' onClick = {() => {onSubmitWeapon(); close();}}>닫기</SettingMagicButton>
                    </MagicInput>
                </MagicCutBox>
            ):null}
        </div>
    )
}

export default WeaponModal