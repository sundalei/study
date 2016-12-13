import React from 'react';

class Select extends React.Component {
    render() {
        console.log(React.Children.toArray(this.props.children));
        return (
            <select>
              {
                  
                  React.Children.map(this.props.children, function(child) {
                      const content = child.props.children;
                      
                      return <option value={content}>{content}</option>
                  })
              }
            </select>
        );
    }
}

export default Select;