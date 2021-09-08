import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingShirtCut } from '../../action/MagicAction'
import '../../css/MagicModal/ShirtModal.css'

const ShirtModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [shirt, setShirt] = useState(0)

    const onHandlerShirt = (e) => {
        setShirt(e.target.value)
    }

    const onSubmitShirt = () => {
        let shirtCut = {
            shirt: shirt
        }

        dispatch(settingShirtCut(shirtCut))
    }

    return (
        <div className = {open ? 'openShirtModal shirtModal' : 'shirtModal'}>
            {open ? (
                <div className = 'shirtInputBox'>
                    <div className = 'shirtInput'>
                        <span>상의 : </span>
                        <input type = 'number' onChange = {onHandlerShirt} value = {shirt}/>
                        <button className = 'settingShirt' onClick = {() => {onSubmitShirt(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default ShirtModal