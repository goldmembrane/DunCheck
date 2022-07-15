import React from "react"
import { Text } from "../Components/Text"
import './css/CharacterList.css'

const CharacterList = () => {
    return (
        <>
            <div className="search-character-title-box">
                <Text content = "카시야스 허우룩한누리 검색결과 입니다." style = "search-character-title"/>
            </div>

            <div className="character-list-box">
                <div className="character-box">1</div>
                <div className="character-box">2</div>
                <div className="character-box">3</div>
                <div className="character-box">4</div>
                <div className="character-box">5</div>
                <div className="character-box">6</div>
                <div className="character-box">7</div>
                <div className="character-box">8</div>
                <div className="character-box">9</div>
                <div className="character-box">10</div>
            </div>
        </>
    )
}

export default CharacterList