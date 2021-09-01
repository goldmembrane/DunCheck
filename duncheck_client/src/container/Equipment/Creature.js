import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CreatureModal from '../../modal/EquipmentModals/CreatureModal'

const Creature = (props) => {

    const [openCreature, setOpenCreature] = useState(false)

    const creature = useSelector(state => state.CreatureReducer.creature)

    const openCreartureModal = () => {
        setOpenCreature(true)
    }

    const closeCreatureModal = () => {
        setOpenCreature(false)
    }

    return (
        <>
            <div className = 'creature-cut-box'>
                <div className = 'creature-title'>크리쳐 컷 설정</div>
                <button className = 'open-creature-modal' onClick = {openCreartureModal}>선택된 크리쳐 수치 : {creature}%</button>
                <CreatureModal open = {openCreature} close = {closeCreatureModal} />
                <button className = 'go-to-talisman-tab' onClick = {() => {props.history.push('/setting/equipment/talisman')}}>다음</button>
            </div>
        </>
    )
}

export default Creature