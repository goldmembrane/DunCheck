import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DamageModal from '../../modal/DamageModal'


const Damage = (props) => {

    const [openDamage, setOpenDamage] = useState(false)

    const pureDamage = useSelector(state => state.DamageReducer.pureDamage)
    const synergyDamage = useSelector(state => state.DamageReducer.synergyDamage)

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
                <button className = 'open-damage-modal' onClick = {openDamageModal}>퓨딜 컷 : {pureDamage}억 시너지 컷 : {synergyDamage}억</button>
                <DamageModal open = {openDamage} close = {closeDamageModal} />
                <button className = 'go-to-equipment' onClick = {() => {props.history.push('/setting/equipment')}}>다음</button>
            </div>
        </>
    )
}

export default Damage