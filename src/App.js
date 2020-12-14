import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BoilerType from './components/BoilerType';
import AddBoilerType from './components/AddBoilerType';
import Header from './components/layout/Header'
import { v4 as uuidv4 } from 'uuid';


import './App.css';

class App extends Component {
  state = {
    boilerType: []
  }

  componentDidMount() {
    const data = require('./data/boilerType.json');
    this.setState({ boilerType: data });
  }

    // Add boilerType
    addBoilerType = (id, skillsId, type, stock, description) => {
      const newBoilerType = {
        id: uuidv4(),
        skillsId,
        type,
        stock,
        description
      };

      this.setState({ boilerType: [...this.state.boilerType, newBoilerType] });
    };


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddBoilerType addBoilerType={this.addBoilerType} />
                  <BoilerType 
                    boilerType={this.state.boilerType} 
                  />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
