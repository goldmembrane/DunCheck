import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { settingEarlingCut } from '../../action/MagicAction'
import styled from 'styled-components'

import '../../css/MagicModal/EarlingModal.css'

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

const EarlingModal = (props) => {

    const dispatch = useDispatch()

    const { open, close } = props

    const [earling, setEarling] = useState(0)

    const onHandlerEarling = (e) => {
        setEarling(e.target.value)
    }

    const onSubmitEarling = () => {
        let earlingCut = {
            earling: earling
        }

        dispatch(settingEarlingCut(earlingCut))
    }



    return (
        <div className = {open ? 'openEarlingModal earlingModal' : 'earlingModal'}>
            {open ? (
                <MagicCutBox>
                    <MagicInput>
                        <MagicCutLabel>귀걸이 : </MagicCutLabel>
                        <MagicCutValue type = 'number' onChange = {onHandlerEarling} value = {earling}/>
                        <SettingMagicButton className = 'settingEarling' onClick = {() => {onSubmitEarling(); close();}}>닫기</SettingMagicButton>
                    </MagicInput>
                </MagicCutBox>
            ): null}
        </div>
    )
}

export default EarlingModal