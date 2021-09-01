import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingArmletCut } from '../../action/MagicAction'
import '../../css/Modal/MagicModal/ArmletModal.css'

const ArmletModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [armlet, setArmlet] = useState(0)

    const onHandlerArmlet = (e) => {
       setArmlet(e.target.value)
    }

    const onSubmitArmlet = () => {
        let armletCut = {
            armlet: armlet
        }

        dispatch(settingArmletCut(armletCut))
    }
    return(
        <div className = { open ? 'openArmletModal armletModal' : 'armletModal'}>
            {open ? (
                <div className = 'armletInputBox'>
                    <div className = 'armletInput'>
                        <span>팔찌 : </span>
                        <input type = 'number' onChange = {onHandlerArmlet} value = {armlet}/>
                        <button className = 'settingArmlet' onClick = {() => {onSubmitArmlet(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}


export default ArmletModal