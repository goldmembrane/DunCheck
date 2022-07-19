import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Text } from '../Components/Text'
import { Button } from "../Components/Button"
import OfficialArea from "./OfficialArea"
import ItemRatesArea from "./ItemRatesArea"
import EpicDropArea from "./EpicDropArea"
import BugReportArea from "./BugReportArea"
import './css/Main.css'


const Main = () => {
    return (
        <Router>
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

            <div className="body">
                <Switch>
                    <Route exact path="/" component={OfficialArea} />
                    <Route path = "/auction" component={ItemRatesArea}/>
                    <Route path = "/epic" component={EpicDropArea} />
                    <Route path = "/bug" component={BugReportArea} />
                    <Route path = "/search" />
                </Switch>
            </div>
        </Router>
    )
}

export default Main