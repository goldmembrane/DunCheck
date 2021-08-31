import React from 'react'

const PantsModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openPantsModal pantsModal' : 'pantsModal'}>
            {open ? (
                <div className = 'pantsInputBox'>
                    <span>하의 : </span>
                    <input type = 'number' onChange = {handle} />
                    <button className = 'settingPants' onClick = {close}>닫기</button>
                </div>
            ): null}
        </div>
    )
}

export default PantsModal