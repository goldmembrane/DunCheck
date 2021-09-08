import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingNecklaceCut } from '../../action/MagicAction'
import '../../css/MagicModal/NecklaceModal.css'

const NecklaceModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [necklace, setNecklace] = useState(0)

    const onHandlerNecklace = (e) => {
        setNecklace(e.target.value)
    }

    const onSubmitNecklace = () => {
        let necklaceCut = {
            necklace: necklace
        }

        dispatch(settingNecklaceCut(necklaceCut))
    }

    return (
        <div className = {open ? 'openNecklaceModal necklaceModal' : 'necklaceModal'}>
            {open ? (
                <div className = 'necklaceInputBox'>
                    <div className = 'necklaceInput'>
                        <span>목걸이 : </span>
                        <input type = 'number' onChange = {onHandlerNecklace} value = {necklace}/>
                        <button className = 'settingNecklace' onClick = {() => {onSubmitNecklace(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default NecklaceModal