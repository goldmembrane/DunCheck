import React from "react"
import { Text } from "../Components/Text"
import { Button } from "../Components/Button"
import './css/EpicDropArea.css'

const EpicDropArea = () => {
    return (
        <>
            {/* 에픽 드랍 테이블 타이틀 박스*/}
            <div className="epic-drop-table-title-box">
                <Text content = "에픽 장비 드랍 테이블" style = "epic-drop-table-title"/>
            </div>

            {/* 110LV 에픽 장비 드랍 테이블 맵 표시 박스*/}
            <div className="epic-drop-table-map-box">
                <div className="epic-drop-level-range-box">
                    <Text content = "나오는 에픽 레벨 범위" style = "epic-drop-level-range-label"/>
                    <Text content = "28 ~ 68" style = "epic-drop-level-range"/>
                </div>

                <div className="epic-drop-table-box">
                    <div className="epic-drop-dungeon-box">
                        <div className="epic-drop-dungeon-title-box">
                            <Text content = "던전 선택 버튼 모음" />
                        </div>

                        <div className="epic-drop-dungeon-item">
                            <Button style="epic-drop-dungeon-button" content = "빼앗긴 땅, 이스핀즈" />
                            <Button style="epic-drop-dungeon-button" content = "마이스터의 실험실" />
                        </div>

                        <div className="epic-drop-dungeon-item">
                            <Button style="epic-drop-dungeon-button" content = "파괴된 죽은 자의 성" />
                            <Button style="epic-drop-dungeon-button" content = "노블레스 코드" />
                        </div>

                        <div className="epic-drop-dungeon-item">
                            <Button style="epic-drop-dungeon-button" content = "이터널 플레임 연구소" />
                            <Button style="epic-drop-dungeon-button" content = "나사우 삼림" />
                        </div>

                        <div className="epic-drop-dungeon-item">
                            <Button style="epic-drop-dungeon-button" content = "헤블론의 예언소" />
                            <Button style="epic-drop-dungeon-button" content = "왕의 요람" />
                        </div>

                        <div className="epic-drop-dungeon-item">
                            <Button style="epic-drop-dungeon-button" content = "퀸 팔트" />
                            <Button style="epic-drop-dungeon-button" content = "캐니언 힐" />
                        </div>

                        <div className="epic-drop-dungeon-item">
                            <Button style="epic-drop-dungeon-button" content = "베리콜리스" />
                            <Button style="epic-drop-dungeon-button" content = "백색의 땅" />
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
            </div>
        </>
    )
}

export default EpicDropArea