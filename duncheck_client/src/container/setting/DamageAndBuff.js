import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import DamageAndBuffModal from '../../modal/DamageAndBuffModal'


const DamageAndBuff = () => {

    const [openDamageAndBuff, setOpenDamageAndBuff] = useState(false)

    const pureDamage = useSelector(state => state.DamageReducer.pureDamage)
    const synergyDamage = useSelector(state => state.DamageReducer.synergyDamage)
    const buffScore = useSelector(state => state.BuffReducer.buffScore)

    const openDamageAndBuffModal = () => {
        setOpenDamageAndBuff(true)
    }

    const closeDamageAndBuffModal = () => {
        setOpenDamageAndBuff(false)
    }
    
    return(
        <>
            <div>
                <div>
                    <button onClick = {openDamageAndBuffModal}>딜표 &#38; 버프력 컷 설정</button>
                    <DamageAndBuffModal open = {openDamageAndBuff} close = {closeDamageAndBuffModal}/>
                </div>
                <div>
                    <div>퓨딜 컷 : </div>
                    <div>{pureDamage}</div>
                    <div>시너지 컷 : </div>
                    <div>{synergyDamage}</div>
                    <div>버프력 컷 : </div>
                    <div>{buffScore}</div>
                </div>
            </div>
        </>
    )
}

export default DamageAndBuff