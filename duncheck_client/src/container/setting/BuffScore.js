import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BuffScoreModal from '../../modal/BuffScoreModal'

const BuffScore = (props) => {

    const [openBuff, setOpenBuff] = useState(false)

    const buffScore = useSelector(state => state.BuffReducer.buffScore)

    const openBuffModal = () => {
        setOpenBuff(true)
    }

    const closeBuffModal = () => {
        setOpenBuff(false)
    }

    return(
        <>
            <div className = 'buff-cut-title-box'>
                <div className = 'buff-cut-title'>버프력 컷 설정</div>
                <button className = 'open-buff-modal' onClick = {openBuffModal}>버프력 컷 : {buffScore}만</button>
                <BuffScoreModal open = {openBuff} close = {closeBuffModal} />
                <button className = 'go-to-damage' onClick = {() => {props.history.push('/setting/damage')}}>다음</button>
            </div>
        </>
    )
}

export default BuffScore