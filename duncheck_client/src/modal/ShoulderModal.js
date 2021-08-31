import React from 'react'
import '../css/Modal/ShoulderModal.css'

const ShoulderModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openShoulderModal shoulderModal' : 'shoulderModal'}>
            {open ? (
                <div className = 'shoulderInputBox'>
                    <div className = 'shoulderInput'>
                        <span>머리어깨 : </span>
                        <input type = 'number' onChange = {handle} />
                        <button className = 'settingShoulder' onClick = {close}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default ShoulderModal