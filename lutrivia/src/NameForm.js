import React, { PureComponent } from 'react';

export default class NameForm extends PureComponent {


    render() {
        return (
            <div>
                <form onSubmit={e => this.props.saveScore(e)}>
                    <input type="text" placeholder="Name" onChange={e => this.props.handleChange(e)} 
                    value={this.props.value}></input>
                    <button>Submit Score</button>
                </form>
            </div>
        )
    }
}
