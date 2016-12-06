import React from 'react';

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    focus() {
        this.textInput.focus();
    }

    render() {
        console.log('render');
        return (
            <div>
              <input
             type="text"
             ref={(input) => {this.textInput = input}}
             />
            <input
              type="button"
              value="Focus the text input"
              onClick={this.focus}
             />
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
}

class AutoFocusTextInput extends React.Component {
    componentDidMount() {
        console.log(this.textInput);
        this.textInput.focus();
    }

    render() {
        return (
            <CustomTextInput
              ref={(input) => {this.textInput = input}}
            />
        );
    }
}

export default AutoFocusTextInput;