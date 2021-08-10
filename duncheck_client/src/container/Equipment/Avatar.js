import React from 'react'

const Avatar = () => {
    return (
        <>
            <div className = 'avatar-cut-box'>
                <div className = 'avatar-cut-title'>아바타 컷 설정</div>
                <span>딜 플티 체크 여부 : </span>
                <input type = 'checkbox'className = 'avatar-check' />
                <button className = 'avatar-cut-setting'>설정</button>
            </div>
        </>
    )
}

export default Avatar