import React from 'react'
import '../css/Modal/AuxiliaryModal.css'

const AuxiliaryModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openAuxiliaryModal auxiliaryModal' : 'auxiliaryModal'}>
            {open ? (
                <div className = 'auxiliaryInputBox'>
                    <div className = 'auxiliaryInput'>
                        <span>보조장비 : </span>
                        <input type = 'number' onChange = {handle} />
                        <button className = 'settingAuxiliary' onClick = {close}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default AuxiliaryModal