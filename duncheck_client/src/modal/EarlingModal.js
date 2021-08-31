import React from 'react'
import '../css/Modal/EarlingModal.css'

const EarlingModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openEarlingModal earlingModal' : 'earlingModal'}>
            {open ? (
                <div className = 'earlingInputBox'>
                    <div className = 'earlingInput'>
                        <span>귀걸이 : </span>
                        <input type = 'number' onChange = {handle} />
                        <button className = 'settingEarling' onClick = {close}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default EarlingModal