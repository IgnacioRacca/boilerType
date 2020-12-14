import React, { Component } from 'react';

import BoilerType from './components/BoilerType'


import './App.css';

class App extends Component {
  state = {
    boilerType: []
  }



  render() {
    return (
      <div className="App">
        <div className="container">
          <BoilerType boilerType={this.state.boilerType} />
        </div>
      </div>
    );
  }
}

export default App;
