import React, { Component } from 'react';
import FormText from './FormText.js'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            inputText: "Type in the text you want to display",
            displayText: ""
        }
        this.updateText = (event) => {
            this.setState({
                inputText: event.target.value
            });
        }

        this.setText = () => {
            this.setState({
                displayText: this.state.inputText
            });
        }
    }

    render() {
        return (
            <div>
                <form>
                    <FormText text={this.state.displayText} />
                    Enter Name:<input type="text" id="name" name="name" onChange={this.updateText} />
                    <button type="button" onClick={this.setText}>UpdateText</button>
                </form>
            </div>
        )
    }
}
export default Form;