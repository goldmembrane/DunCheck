import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import RestCutModal from '../../modal/EquipmentModals/RestCutModal'

const RestCut = () => {

    const [openRest, setOpenRest] = useState(false)

    const avatar = useSelector(state => state.AvatarReducer.avatar)
    const creature = useSelector(state => state.CreatureReducer.creature)
    const talisman = useSelector(state => state.TalismanReducer.talisman)

    const openRestModal = () => {
        setOpenRest(true)
    }

    const closeRestModal = () => {
        setOpenRest(false)
    }


    return (
        <>
            <div>
                <button onClick = {openRestModal}>나머지 컷 설정</button>
                <RestCutModal open = {openRest} close = {closeRestModal} />
            </div>
            <div className = 'avatar-cut-box'>
                <div className = 'avatar-cut-title'>아바타 컷</div>
                <span>딜 플티 체크 여부 : </span>
                <div>{avatar ? `O` : `X`}</div>
            </div>
            <div>
                <div>크리쳐 컷</div>
                <span>선택된 크리쳐 수치 : </span>
                <div>{creature}%</div>
            </div>
            <div>
                <div>탈리스만 컷</div>
                <span>올 카펠라 체크 여부 : </span>
                <div>{talisman ? `O` : `X`}</div>
            </div>
        </>
    )
}

export default RestCut