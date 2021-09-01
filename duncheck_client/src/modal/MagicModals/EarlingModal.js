import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingEarlingCut } from '../../action/MagicAction'
import '../../css/Modal/MagicModal/EarlingModal.css'

const EarlingModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [earling, setEarling] = useState(0)

    const onHandlerEarling = (e) => {
        setEarling(e.target.value)
    }

    const onSubmitEarling = () => {
        let earlingCut = {
            earling: earling
        }

        dispatch(settingEarlingCut(earlingCut))
    }



    return (
        <div className = {open ? 'openEarlingModal earlingModal' : 'earlingModal'}>
            {open ? (
                <div className = 'earlingInputBox'>
                    <div className = 'earlingInput'>
                        <span>귀걸이 : </span>
                        <input type = 'number' onChange = {onHandlerEarling} />
                        <button className = 'settingEarling' onClick = {() => {onSubmitEarling(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default EarlingModal