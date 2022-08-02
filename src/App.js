import React, {Component} from 'react';
import Layout from './containers/Layout/index'
// import Layout from './containers/Layout/index'
//import MyConditionalComponent from './components/MyConditionalComponent/index';
// import FunctionalHooks from './components/FunctionalHooks/index'
// import MyfunctionTodos from './components/FunctionalHooks/indexUseEffect';

import MyFirstClassComponent from './components/MyFirstClassComponent/';
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {color: "red", isHere: false};
    }
    render() {
      return (
          <div>
     
{/*      
             <MyFirstClassComponent /> */}
             <Layout/>
             {/* <MyConditionalComponent isVerified={this.state.isHere}/> */}
         
             {/* <FunctionalHooks/> */}
             {/* <MyfunctionTodos/> */}
          </div>
      
      )
    }
  }
  
  export default App;




// import logo from './logo.svg';
// import './App.css';
// import MyFirstClassComponent from './components/MyFirstClassComponent/index';
// import Layout from './containers/Layout/index'
// // import ParentComponent from './containers/Layout';
// {/* <ParentComponent /> */}
// // Componet
// function App() {
//  const msg = "TRUE"
//   return (
//     <div className="App">
   
//       <MyFirstClassComponent />
//       <Layout />


//       {/* <MyFirstComponent wasClicked={msg}></MyFirstComponent> */}
//     </div>
//   );
// }

// export default App;
