import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingAvatarCut } from '../action/AvatarAction'
import { settingCreatureCut } from '../action/CreatureAction'
import { settingTalismanCut } from '../action/TalismanAction'

import '../css/RestCutModal.css'

const AvatarModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [avatar, setAvatar] = useState(false)
    const [creature, setCreature] = useState(0)
    const [talisman, setTalisman] = useState(false)

    const onHandlerAvatar = (e) => {
        setAvatar(e.target.checked)
    }

    const onHandlerCreature = (e) => {
        setCreature(e.target.value)
    }

    const onHandlerTalisman = (e) => {
        setTalisman(e.target.checked)
    }

    const onSubmitRestCut = () => {
        let avatarCut = {
            avatar: avatar
        }

        let creatureCut = {
            creature: creature
        }

        let talismanCut = {
            talisman: talisman
        }

        dispatch(settingAvatarCut(avatarCut))
        dispatch(settingCreatureCut(creatureCut))
        dispatch(settingTalismanCut(talismanCut))
    }
    return (
        <div className = {open ? 'openRestCutModal restCutModal' : 'restCutModal'}>
            {open ? (
            <div className = 'restCutCheckBox'>
                <div className = 'restCutCheck'>
                    <div>
                        <span>딜 플티 체크 여부 : </span>
                        <input type = 'checkbox' onChange = {onHandlerAvatar} checked = {avatar}/>
                    </div>
                    <div>
                        <span>선택된 크리쳐 수치 : </span>
                        <input type = 'number' onChange = {onHandlerCreature} value = {creature}/>
                        <span>%</span>
                    </div>
                    <div>
                        <span>올 카펠라 체크 여부 : </span>
                        <input type = 'checkbox' onChange = {onHandlerTalisman} checked = {talisman} />
                    </div>
                    <button className = 'settingAvatar' onClick = {() => {onSubmitRestCut(); close();}}>닫기</button>
                </div>
            </div>
            ): null}
        </div>
    )
}

export default AvatarModal