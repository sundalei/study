import React from 'react';

/*
class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

Greeting.defaultProps = {
    name: 'Stranger'
};

Greeting.propTypes = {
    name: React.PropTypes.string
}
*/

var Greeting = React.createClass({
    propTypes: {
        name: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            name : 'Mary'
        }
    },

    render: function() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
});

export default Greeting;