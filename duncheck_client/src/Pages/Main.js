import React from "react"
import { Text } from '../Components/Text'
import { Button } from "../Components/Button"
import OfficialArea from "./OfficialArea"
import ItemRatesArea from "./ItemRatesArea"
import EpicDropArea from "./EpicDropArea"
import BugReportArea from "./BugReportArea"

const Main = () => {
    return (
        <>
            {/*Logo 표시하는 박스*/}
            <div>
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

                <Button content = "검색" />
            </div>


            {/*본문 영역을 표시하는 박스*/}
            <div className="body">
                {/* <OfficialArea /> */}
                {/* <ItemRatesArea /> */}
                {/* <EpicDropArea /> */}
                <BugReportArea />
            </div>
        </>
    )
}

export default Main