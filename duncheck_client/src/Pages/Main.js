import React from "react"
import { Text } from '../Components/Text'
import { Button } from "../Components/Button"
import OfficialArea from "./OfficialArea"
import ItemRatesArea from "./ItemRatesArea"
import EpicDropArea from "./EpicDropArea"
import BugReportArea from "./BugReportArea"
import CharacterList from "./CharacterList"
import './css/Main.css'

const Main = () => {
    return (
        <>
            {/*Logo 표시하는 박스*/}
            <div className="logo-box">
                <h1>DunCheck</h1>
            </div>

            {/*검색바를 표시하는 박스*/}
            <div className="search-bar-box">

                <div className="dropdown-box">
                    <Text content = "Dropdown!" />
                </div>

                <div className="search-bar">
                    <Text content = "Search Area!" />
                </div>

                <Button content = "검색" style = "search-button"/>
            </div>


            {/*본문 영역을 표시하는 박스*/}
            <div className="body">
                {/* <OfficialArea /> */}
                {/* <ItemRatesArea /> */}
                {/* <EpicDropArea /> */}
                {/* <BugReportArea /> */}
                <CharacterList />
            </div>
        </>
    )
}

export default Main