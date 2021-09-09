import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingPureDamageCut, settingSynergyDamageCut } from '../action/DamageAction'
import { settingBuffScoreCut } from '../action/BuffAction'

import '../css/DamageAndBuffModal.css'

const DamageModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [pureDamage, setPureDamage] = useState(0)
    const [synergyDamage, setSynergyDamage] = useState(0)
    const [buffScore, setBuffScore] = useState(0)

    const onHandlerPureDamage = (e) => {
        setPureDamage(e.target.value)
    }

    const onHandlerSynergyDamage = (e) => {
        setSynergyDamage(e.target.value)
    }

    const onHandlerBuffScore = (e) => {
        setBuffScore(e.target.value)
    }

    const onSubmitDamageAndBuff = () => {
        let pureDamageCut = {
            pureDamage: pureDamage
        }

        let synergyDamageCut = {
            synergyDamage: synergyDamage
        }

        let buffScoreCut = {
            buffScore: buffScore
        }

        dispatch(settingPureDamageCut(pureDamageCut))
        dispatch(settingSynergyDamageCut(synergyDamageCut))
        dispatch(settingBuffScoreCut(buffScoreCut))
    }


    return (
        <div className = {open ? 'openDamageAndBuffModal damageAndBuffModal' : 'damageAndBuffModal'}>
            {open ? (
                <div className = 'damageAndBuffInputBox'>
                    <div>
                        <span>퓨딜 컷 : </span>
                        <input type = 'number' onChange = {onHandlerPureDamage} value = {pureDamage} />
                        <span>억</span>
                    </div>
                    <div>
                        <span>시너지 컷 : </span>
                        <input type = 'number' onChange = {onHandlerSynergyDamage} value = {synergyDamage} />
                        <span>억</span>
                    </div>
                    <div>
                        <span>버프력 컷 : </span>
                        <input type = 'number' onChange = {onHandlerBuffScore} value = {buffScore} />
                        <span>만</span>
                    </div>
                    <button className = 'settingDamage' onClick = {() => {onSubmitDamageAndBuff(); close();}}>닫기</button>
                </div>
            ): null}
        </div>
    )
}

export default DamageModal