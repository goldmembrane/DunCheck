import React from "react"
import { Text } from '../Components/Text'
import { Button } from "../Components/Button"
import OfficialArea from "./OfficialArea"

const Main = () => {
    return (
        <>
            <div>
                <h1>DunCheck</h1>
            </div>

            <div className="search-bar-box">

                <div className="dropdown-box">
                    <Text content = "Dropdown!" />
                </div>

                <div className="search-bar">
                    <Text content = "Search Area!" />
                </div>

                <Button content = "검색" />
            </div>

            <div className="body">
                <OfficialArea />
            </div>
        </>
    )
}

export default Main