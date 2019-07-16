import React, { Component } from 'react';

class subtoptic extends Component {
  render() {
    console.log(this.props.match)
    return (
      <div>
        {this.props.match.params.topicId} 
      </div>
    );
  }
}

export default subtoptic;