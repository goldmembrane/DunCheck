import React from 'react'
import '../css/Modal/ArmletModal.css'

const ArmletModal = (props) => {

    const { open, close, handle } = props

    return(
        <div className = { open ? 'openArmletModal armletModal' : 'armletModal'}>
            {open ? (
                <div className = 'armletInputBox'>
                    <div className = 'armletInput'>
                        <span>팔찌 : </span>
                        <input type = 'number' onChange = {handle} />
                        <button className = 'settingArmlet' onClick = {close} >닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}


export default ArmletModal