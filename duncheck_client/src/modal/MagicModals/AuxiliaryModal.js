import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingAuxiliaryCut } from '../../action/MagicAction'
import '../../css/Modal/MagicModal/AuxiliaryModal.css'

const AuxiliaryModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [auxiliary, setAuxiliary] = useState(0)

    const onHandlerAuxiliary = (e) => {
        setAuxiliary(e.target.value)
    }

    const onSubmitAuxiliary = () => {
        let auxiliaryCut = {
            auxiliary: auxiliary
        }

        dispatch(settingAuxiliaryCut(auxiliaryCut))
    }

    return (
        <div className = {open ? 'openAuxiliaryModal auxiliaryModal' : 'auxiliaryModal'}>
            {open ? (
                <div className = 'auxiliaryInputBox'>
                    <div className = 'auxiliaryInput'>
                        <span>보조장비 : </span>
                        <input type = 'number' onChange = {onHandlerAuxiliary} value = {auxiliary}/>
                        <button className = 'settingAuxiliary' onClick = {() => {onSubmitAuxiliary(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default AuxiliaryModal