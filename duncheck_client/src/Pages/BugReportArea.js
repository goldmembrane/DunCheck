import React from "react"
import { Text } from "../Components/Text"
import './css/BugReportArea.css'

const BugReportArea = () => {
    return (
        <>

        {/* 버그 제보 및 의견 제시 게시판 박스 */}
        <div className="bug-report-and-getting-opinion-box">

            <div className="bug-report-and-getting-opinion-title-box">
                <Text content = "버그 제보 게시판" style = "bug-report-and-getting-opinion-title"/>
            </div>
            

            <div className="bug-report-item-box">
                <Text content = "This is Bug!" />
            </div>
        </div>
        </>
    )
}

export default BugReportArea