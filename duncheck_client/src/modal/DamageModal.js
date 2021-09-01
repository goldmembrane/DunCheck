import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingPureDamageCut } from '../action/PureDamageAction'
import { settingSynergyDamageCut } from '../action/SynergyDamageAction'
import '../css/Modal/DamageModal.css'

const DamageModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [pureDamage, setPureDamage] = useState(0)
    const [synergyDamage, setSynergyDamage] = useState(0)

    const onHandlerPureDamage = (e) => {
        setPureDamage(e.target.value)
    }

    const onHandlerSynergyDamage = (e) => {
        setSynergyDamage(e.target.value)
    }

    const onSubmitDamage = () => {
        let pureDamageCut = {
            pureDamage: pureDamage
        }

        let synergyDamageCut = {
            synergyDamage: synergyDamage
        }

        dispatch(settingPureDamageCut(pureDamageCut))
        dispatch(settingSynergyDamageCut(synergyDamageCut))
    }


    return (
        <div className = {open ? 'openDamageModal damageModal' : 'damageModal'}>
            {open ? (
                <div className = 'damageInputBox'>
                <div className = 'pureDamageInput'>
                    <span>퓨딜 컷 : </span>
                    <input type = 'number' onChange = {onHandlerPureDamage} />
                </div>
                <div className = 'synergyDamageInput'>
                    <span>시너지딜 컷 :</span>
                    <input type = 'number' onChange = {onHandlerSynergyDamage} />
                </div>
                <button className = 'settingDamage' onClick = {() => {onSubmitDamage(); close();}}>닫기</button>
            </div>
            ): null}
        </div>
    )
}

export default DamageModal