import React, { Component } from "react";
import PropTypes from "prop-types";

class AddBoilerType extends Component {
    state = {
      id: "",
      skillsId: "",
      type: "",
      stock: "",
      description: "",
    };
  
    onSubmit = (e) => {
      e.preventDefault();
      this.props.addBoilerType(
        this.state.id,
        this.state.skillsId,
        this.state.type,
        this.state.stock,
        this.state.description
      );
      this.setState({
        id: "",
        skillsId: "",
        type: "",
        stock: "",
        description:"",
      });
    };
  
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
    render() {
      return (
        <div>
          <h3>Add new boiler Type</h3>
          <form onSubmit={this.onSubmit}>
            <input
              itemType="text"
              name="skillsId"
              style={inputStyle}
              placeholder="Add Skills Id"
              value={this.state.skillsId}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="type"
              style={inputStyle}
              placeholder="Add Type"
              value={this.state.type}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="stock"
              style={inputStyle}
              placeholder="Add Stock"
              value={this.state.stock}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="description"
              style={inputStyle}
              placeholder="Add Description"
              value={this.state.description}
              onChange={this.onChange}
            />
  
            <input
              type="submit"
              value="Submit"
              className="btn"
              style={inputStyle}
            />
          </form>
        </div>
      );
    }
  }
  
  // PropTypes
  AddBoilerType.propTypes = {
    addBoilerType: PropTypes.func.isRequired,
  };
  
  const inputStyle = {
    padding: "10px",
    width: "50%",
    margin: "5px",
    borderRadius: "5px",
  };
  
  export default AddBoilerType;