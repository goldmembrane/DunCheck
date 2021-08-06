import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Setting from './container/Setting'

const App = () => {
    return (
        <>
            <div className = 'main-header-container'>
                <div className = 'logo-box'>
                    <h2>logo</h2>
                </div>
                <div className = 'title-box'>
                    DunCheck
                </div>
            </div>
            <div className = 'login-bar-container'>
                <div className = 'login-box'>
                    로그인
                </div>
                <div className = 'additional-function'>
                    그림(드랍다운 메뉴)
                </div>
            </div>
            <Setting />
            <div className = 'search-bar-container'>
                <div className = 'search-bar-box'>
                    <input type = 'text' className = 'search-bar' />
                    <button className = 'search-button'>검색</button>
                </div>
            </div>
            <div className = 'main-footer-container'>
                <div className = 'show-api-box'>
                    copyright by Neople
                </div>
                <div className = 'notice-board-box'>
                    notice board
                </div>
            </div>
            <Router>
                <Switch>
                    <Route exact path = '/' />
                </Switch>
            </Router>
        </>
    )
}

export default App