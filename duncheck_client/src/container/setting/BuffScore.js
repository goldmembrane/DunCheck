import React, { useState } from 'react'
import BuffScoreModal from '../../modal/BuffScoreModal'

const BuffScore = (props) => {

    const [openBuff, setOpenBuff] = useState(false)

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
                <button className = 'open-buff-modal' onClick = {openBuffModal}>버프력 컷 : </button>
                <BuffScoreModal open = {openBuff} close = {closeBuffModal} />
                <button className = 'go-to-damage' onClick = {() => {props.history.push('/setting/damage')}}>다음</button>
            </div>
        </>
    )
}

export default BuffScore