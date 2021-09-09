import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingRingCut } from '../../action/MagicAction'
import styled from 'styled-components'

import '../../css/MagicModal/RingModal.css'

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

const RingModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [ring, setRing] = useState(0)

    const onHandlerRing = (e) => {
        setRing(e.target.value)
    }

    const onSubmitRing = () => {
        let ringCut = {
            ring: ring
        }

        dispatch(settingRingCut(ringCut))
    }

    return (
        <div className = {open ? 'openRingModal ringModal' : 'ringModal'}>
            {open ? (
                <MagicCutBox>
                    <MagicInput>
                        <MagicCutLabel>반지 : </MagicCutLabel>
                        <MagicCutValue type = 'number' onChange = {onHandlerRing} value = {ring}/>
                        <SettingMagicButton className = 'settingRing' onClick = {() => {onSubmitRing(); close();}}>닫기</SettingMagicButton>
                    </MagicInput>
                </MagicCutBox>
            ): null}
        </div>
    )
}

export default RingModal