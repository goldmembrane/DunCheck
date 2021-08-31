import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingMagicstoneCut } from '../action/MagicAction'
import '../css/Modal/MagicstoneModal.css'

const MagicstoneModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [magicstone, setMagicstone] = useState(0)

    const onHandlerMagicstone = (e) => {
        setMagicstone(e.target.value)
    }

    const onSubmitMagicstone = () => {
        let magicstoneCut = {
            magicstone: magicstone
        }

        dispatch(settingMagicstoneCut(magicstoneCut))
    }

    return (
        <div className = {open ? 'openMagicstoneModal magicstoneModal' : 'magicstoneModal'}>
            {open ? (
                <div className = 'magicstoneInputBox'>
                    <div className = 'magicstoneInput'>
                        <span>마법석 : </span>
                        <input type = 'number' onChange = {onHandlerMagicstone} />
                        <button className = 'settingMagicstone' onClick = {() => {onSubmitMagicstone(); close();}}>닫기</button>
                    </div>
                </div>
            ): null}
        </div>
    )
}

export default MagicstoneModal