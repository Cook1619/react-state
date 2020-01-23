import React, { Component } from 'react'

export class Button extends Component {
    
    render() {
        return (
            <button onClick={function(){alert('CLICKED')}}>Click me</button>
        )
    }
}

export default Button
