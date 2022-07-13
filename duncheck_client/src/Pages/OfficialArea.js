import React from "react"
import { Text } from "../Components/Text"
import './css/OfficialArea.css'

const OfficialArea = () => {
    return (
        <>
            {/*오늘의 등급을 표시하는 상자*/}
            <div className="today-grade-box">
                <Text content = "최상급" style = "grade"/>
                <Text content = "89%" style = "grade-percent"/>
            </div>

            {/*공식 홈페이지 공지사항을 표시하는 상자*/}
            <div className="official-box">
                <div className="official-content-box">
                    <div className="official-item-box">
                        <Text content = "7/11(월) 클라이언트 패치 안내" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfficialArea