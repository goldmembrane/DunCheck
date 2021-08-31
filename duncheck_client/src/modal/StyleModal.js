import React from 'react'

const StyleModal = (props) => {

    const { open, close, handle } = props

    return (
        <div className = {open ? 'openStyleModal styleModal' : 'styleModal'}>
            {open ? (
                <div className = 'styleInputBox'>
                    <span>칭호 : </span>
                    <input type = 'number' onChange = {handle} />
                    <button className = 'settingStyle' onClick = {close}>닫기</button>
                </div>
            ): null}
        </div>
    )
}

export default StyleModal