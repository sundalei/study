import React from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor is invoked');
        this.state = {
            fruits: ['Apple']
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        e.preventDefault();

        this.setState(prevState => {
            const prevFruits = prevState.fruits;
            return {fruits: [...prevFruits, this.input.value]}

        });
    }

    componentWillMount() {
        console.log('componentWillMount is invoked');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps is invoked');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate is invoked');
        return this.state !== nextState;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate is invoked');
    }

    render() {
        console.log('render is invoked.');
        const fruitsList = this.state.fruits.map(fruit => <li key={fruit}>{fruit}</li>);
        return (
            <div>
              <form>
                <input type="text" placeholder="input name of fruit" ref={input => this.input = input} />
                <button onClick={this.handleOnClick}>Add</button>
              </form>

              <p>I like these fruits:</p>
              <ol>
                {fruitsList}
              </ol>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount is invoked');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate is invoked');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount is invoked');
    }
}

export default LifeCycle;