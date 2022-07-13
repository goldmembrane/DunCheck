import React from "react"

const Text = (props) => {
    return (
        <>
            <p className={props.style}>{props.content}</p>
        </>
    )
}

export default Text