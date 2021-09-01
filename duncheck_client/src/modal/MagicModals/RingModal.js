import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingRingCut } from '../../action/MagicAction'
import '../../css/Modal/MagicModal/RingModal.css'

const RingModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [ring, setRing] = useState(0)

    const onHandlerRing = (e) => {
        setRing(e.target.value)
    }

    const onSubmitRing = () => {
        let ringCut = {
            ring: ring
        }

        dispatch(settingRingCut(ringCut))
    }

    return (
        <div className = {open ? 'openRingModal ringModal' : 'ringModal'}>
            {open ? (
                <div className = 'ringInputBox'>
                    <div className = 'ringInput'>
                        <span>반지 : </span>
                        <input type = 'number' onChange = {onHandlerRing} />
                        <button className = 'settingRing' onClick = {() => {onSubmitRing(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default RingModal