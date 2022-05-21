import React from 'react';
import data from '../data.json';
import './Main.css';
import BeastModal from '../Beasts/BeastModal';

//DON'T FORGET TO IMPORTED INTO PARENT

import HornedBeast from '../Beasts/HornedBeast.js';

class Main extends React.Component {
  constructor(props) {  //creates new property on HornedBeast component
    super(props);
    this.state = {
      selected: {},
      isModalDisplaying: false,
    }
  }

  openModalHandler = () => {
    this.setState({
      isModalDisplaying: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isModalDisplaying: false
    });
  };

  addSelected = (beastData) => {
    this.setState({
      selected: beastData
    });
    this.openModalHandler()
  };

  render() {
    let beasts = [];
    data.forEach(beast => {
      beasts.push(
        <HornedBeast
          key={beast._id}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          addSelected={this.addSelected}
          beast={beast}
        />)
    })
console.log(this.state.selected);
    return (
      <main>
        {beasts}
        <BeastModal 
          closeModalHandler={this.closeModalHandler}
          isModalDisplaying={this.state.isModalDisplaying}
          selected={this.state.selected}
          />
      </main>
    )
  }
}

export default Main;

// return (
//   <main>
//     <h2>Horned Beasts</h2>
//     <HornedBeast
//       title='UniWhal'
//       imageUrl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'}
//       description='A unicorn and a narwhal nuzzling their horns' />
//     <HornedBeast
//       title='Rhino Family'
//       imageUrl={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'}
//       description='Parent rhino with two babies' />
//   </main>
// );