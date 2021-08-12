import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingBuffScoreCut } from '../../action/BuffAction'

const BuffScore = () => {

    const [buffScore, setBuffScore] = useState(0)

    const dispatch = useDispatch()

    const onBuffScoreHandler = (e) => {
        setBuffScore(e.currentTarget.value)
        console.log(buffScore)
    }

    const onSubmitBuffScoreHandler = (e) => {
        e.preventDefault()
        let body = {
            buffScore: buffScore
        }
        dispatch(settingBuffScoreCut(body))
    }


    return(
        <>
            <div className = 'buff-cut-title-box'>
                <div className = 'buff-cut-title'>버프력 컷 설정</div>
                <div className = 'buff-cut-container'>
                    <form
                        onSubmit = {onSubmitBuffScoreHandler}>
                        <span>버프력 : </span>
                        <input type = 'number' value = {buffScore} onChange = {onBuffScoreHandler} />
                        <button type = 'submit'>설정</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BuffScore