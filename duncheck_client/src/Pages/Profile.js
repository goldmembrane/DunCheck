import React from "react"
import { Text } from "../Components/Text"
import { Button } from "../Components/Button"
import './css/Profile.css'

const Profile = () => {
    return (
        <>
            <div className="character-image-box">
                이미지
            </div>

            <div className="character-adventure-box">
                    <Text content = "허우룩" style = "adventure-name"/>
                    <Text content = "카시야스 - 허우룩한누리" style = "nick-name"/>
            </div>

            <Button content = "장비 커스텀" style = "equipment-custom-button"/>
            <div className="equipment-box">
                <div className="equipment-parts-box">
                    <Text content = "+10" />
                    <Text content = "끝을 바라보는 시선" />
                    <Text content = "52/68/63/58(241)" />
                </div>
                <div className="equipment-parts-box">
                    <Text content = "+10" />
                    <Text content = "리버시블 레더 상의" />
                    <Text content = "58/68/63/58(249)" />
                </div>
                <div className="equipment-parts-box">
                    <Text content = "+10" />
                    <Text content = "옥화의 망령 대퇴갑" />
                    <Text content = "57/68/61/58(244)" />
                </div>
                <div className="equipment-parts-box">
                    <Text content = "+10" />
                    <Text content = "천재 기술자의 멀티툴 벨트" />
                    <Text content = "52/62/63/62(239)" />
                </div>
                <div className="equipment-parts-box">
                    <Text content = "+10" />
                    <Text content = "천재 기술자의 두터운 보호부츠" />
                    <Text content = "59/63/60/63(250)" />
                </div>
            </div>
        </>
    )
}

export default Profile