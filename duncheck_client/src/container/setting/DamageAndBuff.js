import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import DamageAndBuffModal from '../../modal/DamageAndBuffModal'

let DamageAndBuffContainer = styled.div`
                                height: 300px;
                                background-color: #A8BFFF;`

let DamageAndBuffCutBox = styled.div`
                                width: 700px;
                                height: 60px;
                                background-color: #F578DC;
                                margin: 0 auto;
                                padding-top: 20px;`

let DamageAndBuffCutButton = styled.button`
                                width: 100%;
                                height: 100%;
                                background-color: #fff;
                                border: none;
                                cursor: pointer;
                                font-size: 30px;
                                text-align: center;
                                font-weight: bold;`
                            
let ShowDamageAndBuffCutContainer = styled.div`
                                width: 400px;
                                height: 200px;
                                margin: 10px auto;
                                background-color: #D7FFFE;`

let ShowScoreCutBox = styled.div`
                                width: 300px;
                                height: 40px;
                                margin: 0 auto;
                                background-color: #50A7C2;
                                padding-top: 10px;
                                margin-bottom: 20px;
                                display: flex;
                                align-items: center`
    
let ScoreCutLabel = styled.div`  
                                font-size: 17px;
                                font-weight: bold;
                                width: 100px;
                                margin: 0 auto;`
    
let ScoreCutValue = styled.div`
                                width: 50px;
                                font-size: 17px;
                                font-weight: bold;`

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
            <DamageAndBuffContainer>
                <DamageAndBuffCutBox>
                    <DamageAndBuffCutButton onClick = {openDamageAndBuffModal}>딜표 &#38; 버프력 컷 설정</DamageAndBuffCutButton>
                    <DamageAndBuffModal open = {openDamageAndBuff} close = {closeDamageAndBuffModal}/>
                </DamageAndBuffCutBox>
                <ShowDamageAndBuffCutContainer>
                    <ShowScoreCutBox>
                        <ScoreCutLabel>퓨딜 컷 : </ScoreCutLabel>
                        <ScoreCutValue>{pureDamage}억</ScoreCutValue>
                    </ShowScoreCutBox>
                    <ShowScoreCutBox>
                        <ScoreCutLabel>시너지 컷 : </ScoreCutLabel>
                        <ScoreCutValue>{synergyDamage}억</ScoreCutValue>
                    </ShowScoreCutBox>
                    <ShowScoreCutBox>
                        <ScoreCutLabel>버프력 컷 : </ScoreCutLabel>
                        <ScoreCutValue>{buffScore}만</ScoreCutValue>
                    </ShowScoreCutBox>
                </ShowDamageAndBuffCutContainer>
            </DamageAndBuffContainer>
        </>
    )
}

export default DamageAndBuff