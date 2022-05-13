//MINIMUM REQUIRED FRAMEWORK 1 OF 3
import React from 'react';

//EXTRA COMPONENTS
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

//CSS IMPORTS TOO
import './app.css';


//REQUIRED FRAMEWORK 2 OF 3
class App extends React.Component {  //grabbing the initial class and adding to is

//AND THEN
  // render() {
  //   return <h1>BEASTS with HORNS</h1>  //return only likes one line. otherwise wrap in ();
  // }

//JSX NOTES FROM CLASS - WRITING CODE THAT LOOKS LIKE HTML IN JS.
//react can only return html syntax if it is wrapped in a single parent item

//DON'T DO THIS
//  render() {
//         <header>
//           <h1>Beasts with Horns</h1>
//         </header>
//         <main>
//         </main>
//         <footer>
//         </footer>
// }

//WRAP EVERYTHING IN A PARENT ELEMENT
//   render() {
//         <div>
//         <header>
//           <h1>Beasts with Horns</h1>
//         </header>
//         <main>
//         </main>
//         <footer>
//           <p>&copy; Jon Armstrong</p>
//         </footer>
//         </div>
// }

//OR..... USE A FRAG/FRAGMENT
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}


//ONE LINER
//render() {
//  return <h1>Beasts with Horns</h1>  //return only likes one line. otherwise wrap in ();
//}

//MULTI-LINE
//  render() {
//    return (
//      <div>  or Frag <>
//        <header>
//          <h1>Beasts with Horns</h1>
//        </header>
//         <main></main>
//        <footer></footer>
//        </div>   or Frag </>
//    );
//  }

//REQUIRED FRAMEWORK 3 OF 3
export default App;
