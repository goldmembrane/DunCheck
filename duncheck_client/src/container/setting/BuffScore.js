import React from 'react'

const BuffScore = () => {
    return(
        <>
            <div className = 'buff-cut-title-box'>
                <div className = 'buff-cut-title'>버프력 컷 설정</div>
                <div className = 'buff-cut-container'>
                    <span>버프력 : </span>
                    <input type = 'number' className = 'buff-cut' />
                    <button className = 'buff-cut-setting'>설정</button>
                </div>
            </div>
        </>
    )
}

export default BuffScore