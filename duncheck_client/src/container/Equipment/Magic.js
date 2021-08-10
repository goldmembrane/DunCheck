import React from 'react'

const Magic = () => {
    return (
        <>
            <div className = 'magic-cut-box'>
                <div className = 'magic-cut-title'>장비 마부 컷 설정</div>
                <div className = 'magic-cut-container'>
                    <div className = 'weapon-magic'>
                        <span>무기 : </span>
                        <input type = 'number' className = 'weapon-magic-cut' />
                    </div>
                    <div className = 'shirt-magic'>
                        <span>상의 : </span>
                        <input type = 'number' className = 'shirt-magic-cut' />
                    </div>
                    <div className = 'pants-magic'>
                        <span>하의 : </span>
                        <input type = 'number' className = 'pants-magic-cut' />
                    </div>
                    <div className = 'shoulder-magic'>
                        <span>어깨 : </span>
                        <input type = 'number' className = 'shoulder-magic-cut' />
                    </div>
                    <div className = 'shoes-magic'>
                        <span>신발 : </span>
                        <input type = 'number' className = 'shoes-magic-cut' />
                    </div>
                    <div className = 'armlet-magic'>
                        <span>팔찌 : </span>
                        <input type = 'number' className = 'armlet-magic-cut' />
                    </div>
                    <div className = 'necklace-magic'>
                        <span>목걸이 : </span>
                        <input type = 'number' className = 'necklace-magic-cut' />
                    </div>
                    <div className = 'ring-magic'>
                        <span>반지 : </span>
                        <input type = 'number' className = 'ring-magic-cut' />
                    </div>
                    <div className = 'auxiliary-magic'>
                        <span>보조장비 : </span>
                        <input type = 'number' className = 'auxiliary-magic-cut' />
                    </div>
                    <div className = 'magicstone-magic'>
                        <span>마법석 : </span>
                        <input type = 'number' className = 'magicstone-magic-cut' />
                    </div>
                    <div className = 'earling-magic'>
                        <span>귀걸이 : </span>
                        <input type = 'number' className = 'earling-magic-cut' />
                    </div>
                    <div className = 'full-critical-check-box'>
                        <span>만크 여부 : </span>
                        <input type = 'checkbox' className = 'full-critical-check' />
                    </div>
                </div>
                <button className = 'magic-cut-setting'>설정</button>
            </div>
        </>
    )
}

export default Magic