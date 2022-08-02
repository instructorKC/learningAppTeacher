import React, {Component} from 'react';
// // import MyFirstComponent from '../MyFirstComponent';

class MyFirstClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textOK: '',
      todos: [],
      isClicked: false
    };    
  }
    onChangeHandler = (e) => {
        console.log(e);
      this.setState({
        textOK: e.target.value
      })
    }



    render() {
      return (
        <div>
          <h1>Input Text Below</h1>
          <input value={this.state.textOK} onChange={this.onChangeHandler}/>
          <h2>{this.state.textOK}</h2>
          {/* <MyFirstComponent wasClicked={this.state.isClicked} /> */}
        </div>
      );
    }
  }

  

export default MyFirstClassComponent;