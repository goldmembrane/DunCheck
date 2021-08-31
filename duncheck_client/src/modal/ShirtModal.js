import React from 'react'

const ShirtModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openShirtModal shirtModal' : 'shirtModal'}>
            {open ? (
                <div className = 'shirtInputBox'>
                    <span>상의 : </span>
                    <input type = 'number' onChange = {handle} />
                    <button className = 'settingShirt' onClick = {close}>닫기</button>
                </div>
            ): null}
        </div>
    )
}

export default ShirtModal