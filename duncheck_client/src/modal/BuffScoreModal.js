import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingBuffScoreCut } from '../action/BuffAction'

const BuffScoreModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [buffScore, setBuffScore] = useState(0)

    const onHandlerBuffScore = (e) => {
        setBuffScore(e.target.value)
    }

    const onSubmitBuffScore = () => {
        let buffScoreCut = {
            buffscore: buffScore
        }

        dispatch(settingBuffScoreCut(buffScoreCut))
    }

    return (
        <div className = {open ? 'openBuffModal buffModal' : 'buffModal'}>
            {open ? (
                <div className = 'buffInputBox'>
                    <div className = 'buffInput'>
                        <span>버프력 컷 : </span>
                        <input type = 'number' onChange = {onHandlerBuffScore} />
                        <button className = 'settingBuff' onClick = {() => {onSubmitBuffScore(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default BuffScoreModal