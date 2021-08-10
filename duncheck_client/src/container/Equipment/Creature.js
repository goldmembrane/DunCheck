import React from 'react'

const Creature = () => {
    return (
        <>
            <div className = 'creature-cut-box'>
                <div className = 'creature-title'>크리쳐 컷 설정</div>
                <span>크리쳐 : </span>
                <div className = 'creature-dropdown'>크리쳐 드롭다운</div>
                <button className = 'creature-cut-setting'>설정</button>
            </div>
        </>
    )
}

export default Creature