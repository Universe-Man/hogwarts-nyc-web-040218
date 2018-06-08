import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Pigs from './Pigs'

class App extends Component {
  state = {
    pigPic: ''
  }

  getPic = (imgSrc) => {
    console.log(typeof imgSrc);
    this.setState({
      pigPic: imgSrc
    })

  }

  render() {
    return (
      <div className="App">
        < Nav pic={this.state.pigPic} />
        < Pigs hogs={hogs} getPic={this.getPic} />
      </div>
    )
  }
}

export default App;
