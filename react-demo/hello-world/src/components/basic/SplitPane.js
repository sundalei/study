import React from 'react';

function Contact(props) {
  return <h1>Contact</h1>;
}

function Chat(props) {
  return <h1>Chat</h1>
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
     left={
       <Contact />
     }
     right={
       <Chat />
     } />
  );
}

export default App;
