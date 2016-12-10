import React from 'react';

class Form extends React.Component {
    handleSubmitClick = () => {
        const name = this._name.value;
        console.log(name);
    }

    render() {
        return (
            <div>
              <input type="text" ref={input => this._name = input} />
              <button onClick={this.handleSubmitClick}>Sign up</button>
            </div>
        );
    }
}

export default Form;