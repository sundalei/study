import React from 'react';

class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `hello ${this.props.toWhat}`);
    }
}

export default Hello;