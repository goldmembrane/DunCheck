import React from 'react'
import '../css/Modal/NecklaceModal.css'

const NecklaceModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openNecklaceModal necklaceModal' : 'necklaceModal'}>
            {open ? (
                <div className = 'necklaceInputBox'>
                    <div className = 'necklaceInput'>
                        <span>목걸이 : </span>
                        <input type = 'number' onChange = {handle} />
                        <button className = 'settingNecklace' onClick = {close}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default NecklaceModal