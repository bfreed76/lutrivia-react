import React, { Component } from 'react';
import { data } from './data';
import Gameboard from './Gameboard'

// console.log(data.questions);

export default class App extends Component {

  state = { 
    questions: data.questions
   }
  
  render() { 

    return ( 
      <div>
        <Gameboard questions={this.state.questions} />
      </div>
     );
  }
}
 
