import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingTalismanCut } from '../../action/TalismanAction'

const TalismanModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [talisman, setTalisman] = useState(false)

    const onHandlerTalisman = () => {
        setTalisman(!talisman)
    }

    const onSubmitTalisman = () => {
        let talismanCut = {
            talisman: talisman
        }

        dispatch(settingTalismanCut(talismanCut))
    }

    return (
        <div className = {open ? 'openTalismanModal talismanModal' : 'talismanModal'}>
            {open ? (
                <div className = 'talismanCheckBox'>
                    <div className = 'talismanCheck'>
                        <span>올 카펠라 체크 여부 : </span>
                        <input type = 'checkbox' onChange = {onHandlerTalisman} />
                        <button className = 'settingTalisman' onClick = {() => {onSubmitTalisman(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default TalismanModal