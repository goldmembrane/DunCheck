import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import Equipment from './setting/Equipment'
import Damage from './setting/Damage'
import BuffScore from './setting/BuffScore'

let SettingCut = styled.div`
                height: 100px;
                background-color: #fff1eb;
                display: flex;
                align-items: center;`

let SettingNavigation = styled.ul`
                display: flex;
                width: 800px;
                margin: 0 auto;
                background-color: #72afd3;`

let SettingMenu = styled.li`
                width: 250px;
                margin-right: 20px;
                background-color: #2575fc;
                text-align: center;
                list-style: none;`
                
let FinishContainer = styled.div`
                height: 200px;`
                
let FinishButtonBox = styled.div`
                width: 200px;
                margin: 0 auto;`

let FinishSettingButton = styled.button`
                width: 100%;
                height: 40px;
                margin: 0 auto;
                margin-top: 30px;
                font-size: 22px;
                font-weight: bold
                text-align: center;
                line-height: 40px;
                border: 2px solid #0000ff;
                border-radius: 3px;
                background-color: #fff;
                color: #0000ff;
                cursor: pointer;
                font-weight: bold;`

const Setting = (props) => {
    return( 
        <>
            <Router>
                <SettingCut>
                    <SettingNavigation>
                        <Link to = '/setting/equipment' style = {{ textDecoration : 'none' }}><SettingMenu>장비</SettingMenu></Link>
                        <Link to = '/setting/damage' style = {{ textDecoration : 'none'}}><SettingMenu>딜표</SettingMenu></Link>
                        <Link to = '/setting/buffscore' style = {{ textDecoration : 'none'}}><SettingMenu>버프력</SettingMenu></Link>
                    </SettingNavigation>
                </SettingCut>
                <Switch>
                    <Route path = '/setting/equipment' component = {Equipment}/>
                    <Route path = '/setting/damage' component = {Damage} />
                    <Route path = '/setting/buffscore' component = {BuffScore} />
                </Switch>
                <FinishContainer>
                    <FinishButtonBox>
                        <FinishSettingButton onClick = {() => props.history.push('/')}>완료</FinishSettingButton>
                    </FinishButtonBox>
                </FinishContainer>
            </Router>
        </>
    )
}

export default Setting