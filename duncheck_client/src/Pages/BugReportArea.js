import React from "react"
import { Text } from "../Components/Text"

const BugReportArea = () => {
    return (
        <>

        {/* 버그 제보 및 의견 제시 게시판 박스 */}
        <div className="bug-report-and-getting-opinion-box">
            <Text content = "버그 제보 게시판" />

            <div className="bug-report-item-box">
                <Text content = "This is Bug!" />
            </div>
        </div>
        </>
    )
}

export default BugReportArea