import React from 'react'

const AuxiliaryModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openAuxiliaryModal auxiliaryModal' : 'auxiliaryModal'}>
            {open ? (
                <div className = 'auxiliaryInputBox'>
                    <span>보조장비 : </span>
                    <input type = 'number' onChange = {handle} />
                    <button className = 'settingAuxiliary' onClick = {close}>닫기</button>
                </div>
            ): null}
        </div>
    )
}

export default AuxiliaryModal