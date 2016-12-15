import ReactTestUtils from 'react-addons-test-utils';
import MyComponent from '../MyComponent';
import Subcomponent from '../Subcomponent';
import React from 'react';

test('shallow rendering', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<MyComponent />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual([
        <span className="heading">Title</span>,
        <Subcomponent foo="bar" />
    ]);
});

test('simulate event of button click', () => {

    class Button extends React.Component {
        render() {
            return <button ref="button" onClick={this.onclick.bind(this)}>Click</button>
        }
        onclick(e) {
            console.log("clicked");
        }
        componentDidMount() {
            const node = this.refs.button;
            ReactTestUtils.Simulate.click(node);
        }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Button />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('button');
});

test('simulate event of input change', () => {

    class Input extends React.Component {
        render() {
            return (
                <form>
                    <input ref="input" onChange={this.onChange.bind(this)} />
                </form>
            );
        }

        onChange(e) {
            console.log("clicked");
        }
        componentDidMount() {
            const node = this.refs.input;
            node.value = 'giraffe';
            ReactTestUtils.Simulate.change(node);
            ReactTestUtils.Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});
        }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Input />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('form');
});

test('renderIntoDocument test', () => {
    class Button extends React.Component {
        render() {
            return <div>HelloWorld</div>
        }
    }
    ReactTestUtils.renderIntoDocument(<Button />);
    ReactTestUtils.isElement(<Button />);
    ReactTestUtils.isElementOfType(<Button />, Button);
    
});
