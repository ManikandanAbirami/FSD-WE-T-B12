import React, { Component } from 'react'

export class Home extends Component {

    componentDidMount() {
        console.log("The componentDidMount is called");
    }

    componentDidUpdate() {
        console.log("The componentDidUpdate is called");
    }

    componentWillUnmount() {
        console.log("The componentWillUnmount is called");
    }
    render() {
        return (
            <div>Home</div>
        )
    }
}

export default Home