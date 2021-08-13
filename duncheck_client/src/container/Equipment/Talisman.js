import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingTalismanCut } from '../../action/TalismanAction'

const Talisman = () => {

    const [checkAllTalisman, setCheckAllTalisman] = useState(false)

    const dispatch = useDispatch()

    const onTalismanCheckHandler = () => {
        setCheckAllTalisman(!checkAllTalisman)
    }

    const onSubmitTalismanCheckHandler = (e) => {
        e.preventDefault()
        let checkTalisman = {
            talisman: checkAllTalisman
        }
        dispatch(settingTalismanCut(checkTalisman))
    }
    return (
        <>
            <div className = 'talisman-cut-box'>
                <div className = 'talisman-cut-title'>탈리스만 컷 설정</div>
                <form
                    onSubmit = {onSubmitTalismanCheckHandler}>
                    <span>올 카펠라 체크 여부 : </span>
                    <input type = 'checkbox' className = 'talisman-cut-check' onChange = {onTalismanCheckHandler}/>
                    <button type = 'submit'>설정</button>
                </form>
            </div>
        </>
    )
}

export default Talisman