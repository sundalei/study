import React from 'react';

const Input = React.createClass({
    render: function() {
        return (
            <div>
                <input type={this.props.type} ref={input => this.input = input} />
            </div>
        );
    }
})

export default Input;