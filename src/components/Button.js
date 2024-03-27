import React from 'react'
import Example from './Example'

function Button(props) {

    return (
        <div>
            <button>{props.textButton}</button> {props.test}
            <Example />
        </div>
    )
}

export default Button