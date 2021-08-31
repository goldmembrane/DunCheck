import React from 'react'
import '../css/Modal/PantsModal.css'

const PantsModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openPantsModal pantsModal' : 'pantsModal'}>
            {open ? (
                <div className = 'pantsInputBox'>
                    <div className = 'pantsInput'>
                        <span>하의 : </span>
                        <input type = 'number' onChange = {handle} />
                        <button className = 'settingPants' onClick = {close}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default PantsModal