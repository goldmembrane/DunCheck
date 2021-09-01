import React, { useState } from 'react'
import TalismanModal from '../../modal/EquipmentModals/TalismanModal'

const Talisman = () => {

    const [openTalisman, setOpenTalisman] = useState(false)

    const openTalismanModal = () => {
        setOpenTalisman(true)
    }

    const closeTalismanModal = () => {
        setOpenTalisman(false)
    }
    
    return (
        <>
            <div className = 'talisman-cut-box'>
                <div className = 'talisman-cut-title'>탈리스만 컷 설정</div>
                <button className = 'open-talisman-modal' onClick = {openTalismanModal}>올 카펠라 체크 여부 : </button>
                <TalismanModal open = {openTalisman} close = {closeTalismanModal} />
            </div>
        </>
    )
}

export default Talisman