import React from 'react';

//THIS NEEDS TO BE IMPORTED INTO PARENT

class HornedBeast extends React.Component {
  render () {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img
          className="beasts"
          src={this.props.imageURL}
          alt={this.props.description}
          title={this.props.title}
          />
      </article>
    );
  }
}

export default HornedBeast;