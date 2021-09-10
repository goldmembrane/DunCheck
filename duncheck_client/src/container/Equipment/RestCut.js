import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import RestCutModal from '../../modal/RestCutModal'

let SettingRestContainer = styled.div`
                            height: 600px;
                            background-color: #b224ef;`

let SettingRestCutBox = styled.div`
                            width: 700px;
                            height: 60px;
                            background-color: #A8BFFF;
                            margin: 0 auto;
                            padding-top: 20px;`

let SettingRestCutButton = styled.button`
                            width: 100%;
                            height: 100%;
                            border: none;
                            background-color: #fff;
                            cursor: pointer;
                            font-size: 30px;
                            font-weight: bold;
                            color: #00f;`
                        
let ShowRestCutContainer = styled.div`
                            width: 600px;
                            height: 500px;
                            margin: 10px auto;
                            background-color: #B7F8DB;`

let ShowCutBox = styled.div`
                            width: 500px;
                            height: 130px;
                            margin: 0 auto;
                            background-color: #884D80;
                            padding-top: 10px;
                            margin-bottom: 20px;
                            display: flex;
                            align-items: center;`

let CutTitle = styled.div`
                            width: 100px;
                            height: 30px;
                            font-size: 20px;
                            margin: 0 auto;
                            text-align: center;`

let CutLabel = styled.div`  
                            font-size: 17px;
                            font-weight: bold;
                            width: 200px;
                            margin: 0 auto;`

let CutValue = styled.div`
                            width: 30px;
                            font-size: 17px;
                            font-weight: bold;`

const RestCut = () => {

    const [openRest, setOpenRest] = useState(false)

    const creature = useSelector(state => state.CreatureReducer.creature)

    const openRestModal = () => {
        setOpenRest(true)
    }

    const closeRestModal = () => {
        setOpenRest(false)
    }


    return (
        <SettingRestContainer>
            <SettingRestCutBox>
                <SettingRestCutButton onClick = {openRestModal}>나머지 컷 설정</SettingRestCutButton>
                <RestCutModal open = {openRest} close = {closeRestModal} />
            </SettingRestCutBox>
            <ShowRestCutContainer>
                <ShowCutBox>
                    <CutTitle>아바타 컷</CutTitle>
                    <CutLabel>딜 플티 체크 여부 : </CutLabel>
                    <CutValue>{localStorage.getItem('avatar') === 'true' ? `O` : `X`}</CutValue>
                </ShowCutBox>
                <ShowCutBox>
                    <CutTitle>크리쳐 컷</CutTitle>
                    <CutLabel>선택된 크리쳐 수치 : </CutLabel>
                    <CutValue>{creature}%</CutValue>
                </ShowCutBox>
                <ShowCutBox>
                    <CutTitle>탈리스만 컷</CutTitle>
                    <CutLabel>올 카펠라 체크 여부 : </CutLabel>
                    <CutValue>{localStorage.getItem('talisman') === 'true' ? `O` : `X`}</CutValue>
                </ShowCutBox>
            </ShowRestCutContainer>
        </SettingRestContainer>
    )
}

export default RestCut