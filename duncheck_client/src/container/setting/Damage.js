import React, { useState } from 'react'
import DamageModal from '../../modal/DamageModal'


const Damage = (props) => {

    const [openDamage, setOpenDamage] = useState(false)

    const openDamageModal = () => {
        setOpenDamage(true)
    }

    const closeDamageModal = () => {
        setOpenDamage(false)
    }
    
    return(
        <>
            <div className = 'deal-cut-title-box'>
                <div className = 'deal-cut-title'>딜러 컷 설정</div>
                <button className = 'open-damage-modal' onClick = {openDamageModal}>딜표 컷 : </button>
                <DamageModal open = {openDamage} close = {closeDamageModal} />
                <button className = 'go-to-equipment' onClick = {() => {props.history.push('/setting/equipment')}}>다음</button>
            </div>
        </>
    )
}

export default Damage