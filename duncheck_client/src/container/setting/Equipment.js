import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import styled from 'styled-components'
import RestCut from '../Equipment/RestCut'
import Magic from '../Equipment/Magic'

let EquipmentBox = styled.div`
                    height: 60px;
                    background-color: #6e45e2;
                    display: flex;
                    align-items: center;`

let EquipmentNavigation = styled.ul`
                    display: flex;
                    width: 1000px;
                    margin: 0 auto;
                    background-color: #e4efe9;`

let EquipmentMenu = styled.li`
                    width: 200px;
                    margin-right: 50px;
                    background-color: #434343;
                    color: #ffffff;
                    text-align: center;
                    list-style: none;`

const Equipment = () => {
    return( 
        <>
            <Router>
                <EquipmentBox>
                    <EquipmentNavigation>
                        <Link to = '/setting/equipment/magic' style = {{ textDecoration : 'none' }}><EquipmentMenu>장비마부</EquipmentMenu></Link>
                        <Link to = '/setting/equipment/avatar' style = {{ textDecoration : 'none' }}><EquipmentMenu>나머지 설정</EquipmentMenu></Link>
                    </EquipmentNavigation>
                </EquipmentBox>
                <Switch>
                    <Route exact path = '/setting/equipment/magic' component = {Magic} />
                    <Route path = '/setting/equipment/avatar' component = {RestCut} />
                </Switch>
            </Router>
        </>
    )
}

export default Equipment