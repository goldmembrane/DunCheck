import React from 'react'
import styled from 'styled-components'

let MainHeader = styled.div`
                height: 100px;
                background-color: #fbc2eb;
                display: flex;
                align-items: center;`

let LogoBox = styled.div`
                width: 40px;
                margin-left: 20px;
                line-height: 40px;
                text-align: center;`

let TitleBox = styled.div`
                width: 80px;
                margin: 0 auto;
                font-size: 28px;
                font-weight: bold;
                `

let MenuNavigation = styled.div`
                height: 50px;
                background-color: #8fd3f4;
                display: flex;
                align-items: center;
                position: relative;`

let Login = styled.div`
                width: 60px;
                position: absolute;
                right: 0;`

let SettingButton = styled.button`
                width: 700px;
                margin: 0 auto;
                font-size: 22px;
                font-weight: bold;
                background-color: #fff;
                border: none;
                cursor: pointer;`

let SearchBarContainer = styled.div`
                height: 500px;
                background-color: #330867;`

let SearchBarBox = styled.div`
                width: 500px;
                margin: 0 auto;
                background-color: #c3cfe2;`

let SearchBar = styled.input`
                width: 400px;
                height: 40px;
                font-size: 28px;`

let SearchButton = styled.button`
                width: 92px;
                height: 48px;
                font-size: 28px;
                font-weight: bold;
                background-color: #89f7fe;
                border: none;
                cursor: pointer;`

let FooterBox = styled.div`
                height: 400px;
                background-color: #96fbc4;`

let Api = styled.div`
                height: 100px;
                background-color: #fa71cd;
                line-height: 100px;
                padding-left: 20px;`

let NoticeBoard = styled.div`
                height: 300px;
                background-color: #48c6ef;
                text-align: center;`


const Main = (props) => {
    return (
        <>
            <MainHeader>
                <LogoBox>
                    <h2>logo</h2>
                </LogoBox>
                <TitleBox>
                    DunCheck
                </TitleBox>
            </MainHeader>
            <MenuNavigation>
                <SettingButton onClick = {() => {props.history.push('/setting')}}>설정</SettingButton>
                <Login>
                    로그인
                </Login>
            </MenuNavigation>
            <SearchBarContainer>
                <SearchBarBox>
                    <SearchBar type = 'text' className = 'search-bar' />
                        <SearchButton>검색</SearchButton>
                </SearchBarBox>
            </SearchBarContainer>
            <FooterBox>
                <Api>
                    copyright by Neople
                </Api>
                <NoticeBoard>
                    notice board
                </NoticeBoard>
            </FooterBox>
        </>
    )
}

export default Main