import React from 'react'
import '../css/Modal/ShirtModal.css'

const ShirtModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openShirtModal shirtModal' : 'shirtModal'}>
            {open ? (
                <div className = 'shirtInputBox'>
                    <div className = 'shirtInput'>
                        <span>상의 : </span>
                        <input type = 'number' onChange = {handle} />
                        <button className = 'settingShirt' onClick = {close}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default ShirtModal