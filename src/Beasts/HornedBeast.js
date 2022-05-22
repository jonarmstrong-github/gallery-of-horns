import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import './HornedBeast.css';

//THIS NEEDS TO BE IMPORTED INTO PARENT

class HornedBeast extends React.Component {
  constructor(props) {  //creates new property on HornedBeast component
    super(props);
    // STATE IS AN OBJECT
    this.state = {
      favorite: 0,
    }
  }
  
//HAS TO BE AN ARROW FUNCTION...  WHY?
  addVote = () => {
    this.setState({
      favorite: this.state.favorite + 1,
      });
      console.log(`One vote added to ${this.props.title}.`)
  };

  render() {
    return (
      <Card style={{width: '480px'}}>
        <Card.Body>
          <Card.Header>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Subtitle>❤️{this.state.favorite}</Card.Subtitle>
          </Card.Header>
          <Card.Text><br></br>
            <Card.Img
              onClick={() => this.props.addSelected(this.props.beast)}
              className="beasts"
              src={this.props.imageUrl}
              alt={this.props.description}
              title={this.props.title}
              />
            {this.props.description}
          </Card.Text>
          <Card.Footer>
            <Button onClick={this.addVote}>VOTE</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;


// return (
//   <article>
//     <h2>{this.props.title}</h2><div id='hearts'>❤️{this.state.favorite}</div>
//     <img
//       className="beasts"  //how is this getting width from index.css?
//       src={this.props.imageUrl}
//       alt={this.props.description}
//       title={this.props.title}
//     />
//     <p>{this.props.description}.</p>
//     <Button onClick={this.addVote}>VOTE</Button>
//     {/* <p>Voted for {this.state.favorite} times.</p> */}
//   </article>
// );