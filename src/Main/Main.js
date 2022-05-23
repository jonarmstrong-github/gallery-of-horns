import React from 'react';

import './Main.css';

//DON'T FORGET TO IMPORTED INTO PARENT

//CHILD 
import HornedBeast from '../Beasts/HornedBeast.js';
import SelectedBeast from '../SelectedBeast/SelectedBeast';


class Main extends React.Component {
  constructor(props) {  //creates new property on HornedBeast component
    super(props);
    this.state = {  //initiates re-rendering when changed
      isModalDisplaying: false,  //boolean
      selected: {},  //why an object?  was that necessary?
    }
  }

  //FUNCTIONS OF THE CONSTRUCTOR CLASS
  openModalHandler = () => {
    this.setState({
      isModalDisplaying: true,
    });
  };

  //HAS TO BE AN ARROW FUNCTION...  WHY?
  closeModalHandler = () => {
    this.setState({
      isModalDisplaying: false
    });
  };

  addSelected = (beastData) => {
    console.log(`Add selected before setState: ${beastData}.`);
    //returns "[object Object]"
    this.setState({
      selected: beastData
    });
    console.log(beastData);
    //returns Horned Beast Object for clicked image.
    this.openModalHandler()  //opens modal after setting state.
  };

  // RENDER FUNCTION ON THE CONSTRUCTOR CLASS
  render() {
    let beasts = this.props.data.map((beast) => {
      // console.log(beast);
      return (
        // JSX
        <HornedBeast
          key={beast._id}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          addSelected={this.addSelected}
          beast={beast}
        />)
      // console.log(beasts);
    })

    //MODAL
    return (
      <main>
        {beasts}
        <SelectedBeast
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

//TOLD TO USE MAP INSTEAD PER LAB 03 INSTRUCTIONS
// let beasts = beast.map(beast => {
//         <HornedBeast
//           key={beast._id}
//           title={beast.title}
//           imageUrl={beast.image_url}
//           description={beast.description}
//           addSelected={this.addSelected}
//           beast={beast}
//         />)

// RENDER FUNCTION ON THE CONSTRUCTOR CLASS

// import data from '../data.json';

// render() {
//   let beasts = [];
//   data.forEach((BEAST, INDEX) => {
//BEAST IS THE VALUE OF THE CURRENT ARRAY/OBJECT
//INDEX WOULD NORMALLY BE CALLED TO GIVE A UNIQUE KEY TO EACH
//         // console.log(beast);
//   beasts.push(
//     // JSX
//     <HornedBeast
//       key={beast._id}
//       title={beast.title}
//       imageUrl={beast.image_url}
//       description={beast.description}
//       addSelected={this.addSelected}
//       beast={beast}
//     />)
//     // console.log(beasts);
// })

//KEY/TITLE/ETC ARE PROPS OF HORNEDBEASTS
//{DYNAMIC THINGS LIKE VARIABLES/ARRAYS/OBJECTS}