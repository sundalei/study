import React from 'react';

class Button extends React.Component {
  constructor(props, context) {
      super(props);
      console.log('constructor context: ');
      console.log(context);
  }

  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

Button.contextTypes = {
    color: React.PropTypes.string
};

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  getChildContext() {
      return {color: 'purple'};
  }

  render() {
    const children = this.props.messages.map((message) =>
      <Message text={message} key={message} />
    );
    return <div>{children}</div>;
  }
}

MessageList.childContextTypes = {
    color: React.PropTypes.string
};

export default MessageList;