import React from 'react'

const RingModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openRingModal ringModal' : 'ringModal'}>
            {open ? (
                <div className = 'ringInputBox'>
                    <span>반지 : </span>
                    <input type = 'number' onChange = {handle} />
                    <button className = 'settingRing' onClick = {close}>닫기</button>
                </div>
            ): null}
        </div>
    )
}

export default RingModal