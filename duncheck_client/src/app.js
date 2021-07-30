import React from 'react'

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
            <div className = 'menu-bar-container'>
                <ul className = 'menu-bar'>
                    <li className = 'menu'>장비 마부</li>
                    <li className = 'menu'>아바타</li>
                    <li className = 'menu'>딜 컷</li>
                </ul>
            </div>
            <div className = 'search-bar-container'>
                <div className = 'search-bar-box'>
                    <input type = 'text' className = 'search-bar' />
                    <button className = 'search-button'>검색</button>
                </div>
            </div>
        </>
    )
}

export default App