import React from "react"
import { Text } from "../Components/Text"
import { Button } from "../Components/Button"

const EpicDropArea = () => {
    return (
        <>
            {/* 에픽 드랍 테이블 타이틀 박스*/}
            <div className="epic-drop-table-title-box">
                <Text content = "에픽 장비 드랍 테이블" />
            </div>

            {/* 110LV 에픽 장비 드랍 테이블 맵 표시 박스*/}
            <div className="epic-drop-table-map-box">
                <div className="epic-drop-level-range-box">
                    <Text content = "나오는 에픽 레벨 범위" />
                    <Text content = "28 ~ 68" />
                </div>

                <div className="epic-drop-dungeon-box">
                    <div className="epic-drop-dungeon-title-box">
                        <Text content = "던전 선택 버튼 모음" />
                    </div>
                    <div className="epic-drop-dungeon-item">
                        <Button content="빼앗긴 땅, 이스핀즈" />
                    </div>
                    <div className="epic-drop-dungeon-item">
                        <Button content="마이스터의 실험실" />
                    </div>
                    <div className="epic-drop-dungeon-item">
                        <Button content="파괴된 죽은 자의 성" />
                    </div>
                    <div className="epic-drop-dungeon-item">
                        <Button content="노블레스 코드" />
                    </div>
                </div>

                <div className="epic-drop-list-box">
                    <div className="epic-drop-list-title-box">
                        <Text content = "나오는 에픽 표시" />
                    </div>

                    <div className="epic-drop-list-box">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default EpicDropArea