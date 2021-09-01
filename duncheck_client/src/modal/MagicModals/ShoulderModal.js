import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingShoulderCut } from '../../action/MagicAction'
import '../../css/Modal/ShoulderModal.css'

const ShoulderModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [shoulder, setShoulder] = useState(0)

    const onHandlerShoulder = (e) => {
        setShoulder(e.target.value)
    }

    const onSubmitShoulder = () => {
        let shoulderCut = {
            shoulder: shoulder
        }

        dispatch(settingShoulderCut(shoulderCut))
    }

    return (
        <div className = {open ? 'openShoulderModal shoulderModal' : 'shoulderModal'}>
            {open ? (
                <div className = 'shoulderInputBox'>
                    <div className = 'shoulderInput'>
                        <span>머리어깨 : </span>
                        <input type = 'number' onChange = {onHandlerShoulder} />
                        <button className = 'settingShoulder' onClick = {() => {onSubmitShoulder(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default ShoulderModal