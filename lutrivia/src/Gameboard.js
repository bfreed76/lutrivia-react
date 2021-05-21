import React, { Component } from 'react'
import QuestionCards from './QuestionCards'
import NameForm from './NameForm'

export default class Gameboard extends Component {

    state = {
        currentScore: 0,
        userName: "",
    }

    changeScore = () => {
        console.log("changeScore triggered")
        this.setState({
            currentScore: this.state.currentScore + 1
        })
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    submitScore = (e) => {
        console.log('saved!')
        alert('Name and Score Saved!')
    }

    render() {
        return (
            <div>
                <h1>Lutrivia</h1>       
                <h2>Score: {this.state.currentScore}</h2>
                {this.props.questions.map(question => <QuestionCards question={question} 
                changeScore={this.changeScore} />)}
                <br></br>
                <NameForm saveScore={this.submitScore} handleChange={this.handleChange} />
            </div>
        )
    }
}
