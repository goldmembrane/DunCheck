import React from 'react'

const ShoesModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openShoesModal shoesModal' : 'shoesModal'}>
            {open ? (
                <div className = 'shoesInputBox'>
                    <span>신발 : </span>
                    <input type = 'number' onChange = {handle} />
                    <button className = 'settingShoes' onClick = {close}>닫기</button>
                </div>
            ): null}
        </div>
    )
}

export default ShoesModal