import React, { Component } from 'react';
// import { Button } from 'react-bootstrap/lib/InputGroup';
import Buttons from './Buttons';

export default class QuestionCards extends Component {
    
    pointCounter = (e) => {
        (e.target.name === this.props.question.answer.toString()) ?
            this.props.changeScore()  : 
            console.log('fail') 
        }


    render() { 


        return ( 

            <div style={{backgroundColor: 'lightgray'}}>
                <h3>{this.props.question.text}</h3>
                <Buttons pointCounter={this.pointCounter}/>
            </div>
         );
    }
}
