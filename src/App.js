import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddToColumn from "./components/AddToColumn"

class App extends React.Component {
  constructor(){
    super()
    this.state={
      left:"Im Here",
      right:"",
    }
  }
  changeColumn=()=>{
    this.setState({
      left:[this.state.right],
      right:[this.state.left],
    })
  }
  render(){

  return (
    <div className="App">
      <div className="columns">
        <div className="left">
        <AddToColumn position={this.state.left} change={this.changeColumn}/>
        </div>
        <div className="right">
        <AddToColumn position={this.state.right} change={this.changeColumn}/>
        </div>
      </div>
      
    </div>

  );
}
}

export default App;
