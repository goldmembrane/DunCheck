import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingStyleCut } from '../../action/MagicAction'
import '../../css/Modal/MagicModal/StyleModal.css' 

const StyleModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [style, setStyle] = useState(0)

    const onHandlerStyle = (e) => {
        setStyle(e.target.value)
    }

    const onSubmitStyle = () => {
        let styleCut = {
            style: style
        }

        dispatch(settingStyleCut(styleCut))
    }

    return (
        <div className = {open ? 'openStyleModal styleModal' : 'styleModal'}>
            {open ? (
                <div className = 'styleInputBox'>
                    <div className = 'styleInput'>
                        <span>칭호 : </span>
                        <input type = 'number' onChange = {onHandlerStyle} />
                        <button className = 'settingStyle' onClick = {() => {onSubmitStyle(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default StyleModal