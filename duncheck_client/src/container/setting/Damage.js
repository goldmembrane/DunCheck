import React from 'react'

const Damage = () => {
    return(
        <>
            <div className = 'deal-cut-title-box'>
                <div className = 'deal-cut-title'>딜러 컷 설정</div>
                <div className = 'deal-cut-container'>
                    <div className = 'pure-dealer-cut-content'>
                        <span>퓨딜 딜 컷 : </span>
                        <input type = 'number' className = 'pure-dealer-cut' />
                    </div>
                    <div className = 'synergy-dealer-cut-content'>
                        <span>시너지 딜 컷 : </span>
                        <input type = 'number' className = 'synergy-dealer-cut' />
                    </div>
                </div>
                <button className = 'dealer-cut-setting'>설정</button>
            </div>
        </>
    )
}

export default Damage