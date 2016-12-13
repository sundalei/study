import React from 'react';

class ListOfWords extends React.PureComponent {
    render() {
        return (
            <div>{this.props.words.join(',')}</div>
        );
    }
}

class WordAdder extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           words: ['marklar']
       };
       this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        /*
        const words = this.state.words;
        words.push('marklar');
        this.setState({
            words
        });
        */
        /*
        this.setState(prevState => ({words: prevState.words.concat(['marklar'])}));
        */
        this.setState(
            prevState => (
                {
                    words: [...prevState.words, 'marklar']
                }
            )
        );
    }

    render() {
        return (
            <div>
              <button onClick={this.handleClick}>Marklar</button>
              <ListOfWords words={this.state.words} />
            </div>
        );
    }
}

export default WordAdder;