import React from 'react'

const NecklaceModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openNecklaceModal necklaceModal' : 'necklaceModal'}>
            {open ? (
                <div className = 'necklaceInputBox'>
                    <span>목걸이 : </span>
                    <input type = 'number' onChange = {handle} />
                    <button className = 'settingNecklace' onClick = {close}>닫기</button>
                </div>
            ): null}
        </div>
    )
}

export default NecklaceModal