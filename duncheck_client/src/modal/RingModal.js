import React from 'react'
import '../css/Modal/RingModal.css'

const RingModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openRingModal ringModal' : 'ringModal'}>
            {open ? (
                <div className = 'ringInputBox'>
                    <div className = 'ringInput'>
                        <span>반지 : </span>
                        <input type = 'number' onChange = {handle} />
                        <button className = 'settingRing' onClick = {close}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default RingModal