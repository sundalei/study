import React from 'react';
import Input from './Input';

const inputElement = <Input type="text"/>;
const clonedElement = React.cloneElement(inputElement, {type: 'password'}, null);

class Form extends React.Component {
    render() {
        const isValid = React.isValidElement(inputElement);
        console.log('isValid: ' + isValid);
        return (
            <form>
                {inputElement}
                {clonedElement}
            </form>
        );
    }
}

export default Form;