import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BoilerType from './components/BoilerType';
import AddBoilerType from './components/AddBoilerType';
import Header from './components/layout/Header'
import { v4 as uuidv4 } from 'uuid';


import './App.css';

class App extends Component {
  state = {
    boilerType: [],
    boilerTypeEdit: null,
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

  deleteBoilerType = (id) => {
    this.setState({ boilerType: [...this.state.boilerType.filter(boilerType => boilerType.id!==id)]})
  };

  //edit boiler type
  editBoilerType = (bt) => {
    this.setState({
      boilerTypeEdit: bt,
    });
    window.scrollTo(0, 0);
  };

  //update boiler type
  updateBoilerType = (id, skillsId, type, stock, description) => {
    this.setState({
      boilerType: this.state.boilerType.map((boilerType) => {
        if (boilerType.id === id) {
          boilerType.skillsId = skillsId;
          boilerType.type = type;
          boilerType.stock = stock;
          boilerType.description = description;
        }
        return boilerType;
      }),
    });
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
                  <AddBoilerType 
                    addBoilerType={this.addBoilerType}
                    updateBoilerType={this.updateBoilerType}
                    boilerTypeEdit={this.state.boilerTypeEdit}
                  />
                  <BoilerType 
                    boilerType={this.state.boilerType} 
                    deleteBoilerType={this.deleteBoilerType}
                    editBoilerType={this.editBoilerType}
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
