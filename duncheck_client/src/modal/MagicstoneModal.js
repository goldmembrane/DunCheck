import React from 'react'
import '../css/Modal/MagicstoneModal.css'

const MagicstoneModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openMagicstoneModal magicstoneModal' : 'magicstoneModal'}>
            {open ? (
                <div className = 'magicstoneInputBox'>
                    <div className = 'magicstoneInput'>
                        <span>마법석 : </span>
                        <input type = 'number' onChange = {handle} />
                        <button className = 'settingMagicstone' onClick = {close}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default MagicstoneModal