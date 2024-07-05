import React from 'react'
import useAuth from './frontAuth/useAuth'

const LogButton = ({ text, action }) => {

    return (
        <React.Fragment>
            <div id='loginButton' onClick={action}>
                {text}
            </div>
        </React.Fragment>
    )
}

export default LogButton