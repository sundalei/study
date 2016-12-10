import React from 'react';

const TODOS = ["Get coffee", "Eat cookies"];

class TodoList extends React.PureComponent {
    render() {
        return (
            <ul>
              {this.props.todos.map(todo => 
                  <li key={todo}><ThemedText>{todo}</ThemedText></li>)}
            </ul>
        );
    }
}

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {color: "blue"};
    }

    render() {
        return (
            <ThemeProvider color={this.state.color}>
              <button onClick={this.changeColor.bind(this)}>
                <ThemedText>Red Please!</ThemedText>
              </button>
              <TodoList todos={TODOS} />
            </ThemeProvider>
        );
    }

    changeColor() {
        this.setState(prevState => prevState.color === 'red' ? ({color: 'blue'}) : ({color: 'red'}));
    }
}

class Theme {
    constructor(color) {
        this.color = color;
        this.subscriptions = [];
    }

    setColor(color) {
        this.color = color;
        this.subscriptions.forEach(f => f());
    }

    subscribe(f) {
        this.subscriptions.push(f);
    }
}

class ThemeProvider extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.theme = new Theme(this.props.color);
    }

    componentWillReceiveProps(next) {
        this.theme.setColor(next.color);
    }

    getChildContext() {
        return {theme: this.theme};
    }

    render() {
        return <div>{this.props.children}</div>
    }
}

ThemeProvider.childContextTypes = {
    theme: React.PropTypes.object
};

class ThemedText extends React.Component {
    componentDidMount() {
        this.context.theme.subscribe(() => this.forceUpdate());
    }

    render() {
        return (
            <div style={{color: this.context.theme.color}}>
              {this.props.children}
            </div>
        );
    }
}

ThemedText.contextTypes = {
    theme: React.PropTypes.object
};

export default App;