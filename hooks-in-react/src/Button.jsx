import React from 'react'

function Button(props) {
    console.log("Rendering button");
    return (
        <button {...props} style={{ backgroundColor: 'blue', color: 'white', margin: '10px' }}></button>
    )
}

export default Button