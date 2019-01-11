import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';

class AddingState extends Component {
    constructor() {
        super();
        this.state = {
            header: "Hello",
            content: 5
        }
        this.updateHeader = () => this.setState({
            header: "React is cooooOOl"
        });
        this.updateContent = () => this.setState({
            content: this.state.content + 1
        });

    }
    render() {
        return (
            <div>
                <Header header={this.state.header} />
                <button onClick={this.updateHeader}>Reality</button>
                <Content contentProp={this.state.content} />
                <button onClick={this.updateContent}>Update Coolness</button>
            </div>
        )


    }

}
export default AddingState;

