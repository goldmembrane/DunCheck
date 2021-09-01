import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingShoesCut } from '../../action/MagicAction'
import '../../css/Modal/MagicModal/ShoesModal.css'

const ShoesModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [shoes, setShoes] = useState(0)

    const onHandlerShoes = (e) => {
        setShoes(e.target.value)
    }

    const onSubmitShoes = () => {
        let shoesCut = {
            shoes: shoes
        }

        dispatch(settingShoesCut(shoesCut))
    }

    return (
        <div className = {open ? 'openShoesModal shoesModal' : 'shoesModal'}>
            {open ? (
                <div className = 'shoesInputBox'>
                    <div className = 'shoesInput'>
                        <span>신발 : </span>
                        <input type = 'number' onChange = {onHandlerShoes} value = {shoes}/>
                        <button className = 'settingShoes' onClick = {() => {onSubmitShoes(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default ShoesModal