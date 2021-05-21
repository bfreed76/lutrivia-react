import React, { Component } from 'react';


const Buttons = props => {
    
    return(
        <div>
            <button name="true" onClick={props.pointCounter}>TRUE</button>
            <button name="false" onClick={props.pointCounter}>FALSE</button>
            {/* <button onClick={props.changeScore}>testmeout</button> */}
        </div>
    )
}

export default Buttons;