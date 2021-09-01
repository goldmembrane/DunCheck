import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingPantsCut } from '../../action/MagicAction'
import '../../css/Modal/PantsModal.css'

const PantsModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [pants, setPants] = useState(0)

    const onHandlerPants = (e) => {
        setPants(e.target.value)
    }

    const onSubmitPants = () => {
        let pantsCut = {
            pants: pants
        }

        dispatch(settingPantsCut(pantsCut))
    }

    return (
        <div className = {open ? 'openPantsModal pantsModal' : 'pantsModal'}>
            {open ? (
                <div className = 'pantsInputBox'>
                    <div className = 'pantsInput'>
                        <span>하의 : </span>
                        <input type = 'number' onChange = {onHandlerPants} />
                        <button className = 'settingPants' onClick = {() => {onSubmitPants(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default PantsModal