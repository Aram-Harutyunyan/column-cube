import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddToColumn from "./components/AddToColumn"

class App extends React.Component {
  constructor(){
    super()
    this.state={
      up:{
        left:"Im first",
        right:"Im second",
      },
      down:{
        left:"Im third",
        right:"",
      },
      
    }
  }

  changeUp=()=>{
    this.setState({
      up:{
        left:this.state.up.right,
        right:this.state.up.left,
      }  
    })
  }
  changeDown=()=>{
    this.setState({
      down:{
        left:this.state.down.right,
        right:this.state.down.left,
      }
    })
  }
  render(){

  return (
    <div className="App">
      <div className="columns">
        <div className="left">
        <AddToColumn position={this.state.up.left} change={this.changeUp}/>
        <AddToColumn position={this.state.down.left} change={this.changeDown}/>
        </div>
        
        <div className="right">
        <AddToColumn position={this.state.up.right} change={this.changeUp}/>
        <AddToColumn position={this.state.down.right} change={this.changeDown}/>
        </div>
      </div>
      
    </div>

  );
}
}

export default App;
