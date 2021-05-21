import React, { Component } from 'react';
import Buttons from './Buttons';

export default class QuestionCards extends Component {
    
    pointCounter = (e) => {
        // debugger
        (e.target.name === this.props.question.answer.toString()) ?
            this.props.changeScore()  : //send the number up to the counter
            console.log('fail') //do nothing
        }
        // (e.target.textContent === this.props.question.answer) ? 
        // (this.playerScore = this.playerScore++) : null
        // this.playerScore = playerScore++

    render() { 


        return ( 

            <div>
                <h3>{this.props.question.text}</h3>
                <Buttons pointCounter={this.pointCounter}/>
            </div>
         );
    }
}
