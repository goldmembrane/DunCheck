import React from 'react'

const Talisman = () => {
    return (
        <>
            <div className = 'talisman-cut-box'>
                <div className = 'talisman-cut-title'>탈리스만 컷 설정</div>
                <span>올 카펠라 체크 여부 : </span>
                <input type = 'checkbox' className = 'talisman-cut-check' />
                <button className = 'talisman-cut-setting'>설정</button>
            </div>
        </>
    )
}

export default Talisman