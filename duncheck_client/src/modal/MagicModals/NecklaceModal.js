import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingNecklaceCut } from '../../action/MagicAction'
import styled from 'styled-components'

import '../../css/MagicModal/NecklaceModal.css'

let MagicCutBox = styled.div`
                    width: 90%;
                    max-width: 450px;
                    height: 400px;
                    margin: 0 auto;
                    border-radius: 3px;
                    background-color: #fff;
                    overflow: hidden;`

let MagicInput = styled.div`
                    width: 80%;
                    max-width: 250px;
                    height: 100px;
                    margin: 125px auto;`

let MagicCutLabel = styled.p`
                    font-size: 18px;
                    font-weight: bold;
                    display: inline-block;`

let MagicCutValue = styled.input`
                    width: 180px;
                    height: 30px;
                    text-align: center;
                    margin-left: 20px;`

let SettingMagicButton = styled.button`
                    display: block;
                    width: 50px;
                    height: 25px;
                    line-height: 25px;
                    border: none;
                    background-color: #00f;
                    color: #fff;
                    font-size: 20px;
                    border-radius: 3px;
                    margin: 100px auto;`

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
                <MagicCutBox>
                    <MagicInput>
                        <MagicCutLabel>목걸이 : </MagicCutLabel>
                        <MagicCutValue type = 'number' onChange = {onHandlerNecklace} value = {necklace}/>
                        <SettingMagicButton className = 'settingNecklace' onClick = {() => {onSubmitNecklace(); close();}}>닫기</SettingMagicButton>
                    </MagicInput>
                </MagicCutBox>
            ): null}
        </div>
    )
}

export default NecklaceModal