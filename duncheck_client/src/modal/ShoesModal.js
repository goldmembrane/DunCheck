import React from 'react'
import '../css/Modal/ShoesModal.css'

const ShoesModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openShoesModal shoesModal' : 'shoesModal'}>
            {open ? (
                <div className = 'shoesInputBox'>
                    <div className = 'shoesInput'>
                        <span>신발 : </span>
                        <input type = 'number' onChange = {handle} />
                        <button className = 'settingShoes' onClick = {close}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default ShoesModal