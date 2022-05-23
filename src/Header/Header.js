import React from 'react';
import './Header.css';

import Dropdown from 'react-bootstrap/Dropdown'
//THIS NEEDS TO BE IMPORTED INTO PARENT

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state ={
  //     horn: '',
  //     selected: ''
  //   }
  // }
  //
  // handleSubmit = () => {
    // this.setState({
    // horn = event.target.horn.value;
    // selected = event.target.selected.value;
    // })
  // }

  render() {
    return (
      <header>
        <h1>BEASTS with HORNS</h1>
        <div id="form">
        <h2>Number of Horns</h2>
        {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          <form onSubmit={this.handleSubmit}>
            <input
            text="text"
            name="name"
            size="40"
            />
              <legend>Select number of Horns</legend>
              <selected name="dropdown">
                <option value="1" selected>One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>                
              </selected>
            <button>Submit</button>
          </form> */}
          </div>
      </header>
    );
  }
}

export default Header;