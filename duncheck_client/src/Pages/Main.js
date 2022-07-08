import React from "react"
import { Text } from '../Components/Text'
import { Button } from "../Components/Button"

const Main = () => {
    return (
        <>
            <div>
                <h1>DunCheck</h1>
            </div>

            <div className="body">
                <div className="official article">
                    <Text content = "official article" />
                </div>

                <div className="today grade">
                    <Text content = "today's grade" />
                </div>

                <Button content = "compile" />
            </div>
        </>
    )
}

export default Main