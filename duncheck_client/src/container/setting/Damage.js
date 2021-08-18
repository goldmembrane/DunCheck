import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingPureDamageCut } from '../../action/PureDamageAction'
import { settingSynergyDamageCut } from '../../action/SynergyDamageAction'

const Damage = (props) => {

    const dispatch = useDispatch()

    const [pureDamage, setPureDamage] = useState(0)
    const [synergyDamage, setSynergyDamage] = useState(0)

    const onPureDamageHandler = (e) => {
        setPureDamage(e.currentTarget.value)
    }

    const onSynergyDamageHandler = (e) => {
        setSynergyDamage(e.currentTarget.value)
    }

    const onSubmitDamageHandler = (e) => {
        e.preventDefault()
        let pureDeal = {
            pureDamage: pureDamage,
        }

        let synergyDeal = {
            synergyDamage: synergyDamage,
        }

        dispatch(settingPureDamageCut(pureDeal))
        dispatch(settingSynergyDamageCut(synergyDeal))
    }

    return(
        <>
            <div className = 'deal-cut-title-box'>
                <div className = 'deal-cut-title'>딜러 컷 설정</div>
                <form
                    onSubmit = {onSubmitDamageHandler}>
                    <div className = 'deal-cut-container'>
                        <div className = 'pure-dealer-cut-content'>
                            <span>퓨딜 딜 컷 : </span>
                            <input type = 'number' value = {pureDamage} className = 'pure-dealer-cut' onChange = {onPureDamageHandler}/>
                        </div>
                        <div className = 'synergy-dealer-cut-content'>
                            <span>시너지 딜 컷 : </span>
                            <input type = 'number' value = {synergyDamage} className = 'synergy-dealer-cut' onChange = {onSynergyDamageHandler}/>
                        </div>
                    </div>
                    <button type = 'submit' onClick = {() => props.history.push('/setting/buffscore')}>확인</button>
                </form>
            </div>
        </>
    )
}

export default Damage