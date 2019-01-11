import React, { Component } from 'react';

class Components extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.main}</h1>
                <button> {this.props.clicker}</button>
            </div>
        );
    }
}

export default Components;