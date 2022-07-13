import React from 'react'

const Button = (props) => {
    return (
        <>
            <button className={props.style}>
                {props.content}
            </button>
        </>
    )
}

export default Button